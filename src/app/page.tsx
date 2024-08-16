"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Fragment,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  PlusIcon,
  CheckIcon,
  TrashIcon,
  ResetIcon,
  ExternalLinkIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import rates from "@/constants/rates";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { H1, H2, H3, InlineCode, List, P, Quote } from "shadcn-typography";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MouseEventHandler } from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
require("dayjs/locale/fr");

type Entry = {
  index: number;
  designation: string;
  price: number;
  priceFormatted: string;
  taxRate: string;
  tax: number;
  taxFormatted: string;
};
export default function Home() {
  const [maxRatesToDisplay, setMaxRatesToDisplay] = useState(5);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [open, setOpen] = useState(false);
  const [maxIndex, setMaxIndex] = useState(1);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState<WithExceptions<Rate> | null>(null);
  const [subcategory, setSubcategory] = useState<Rate | null>(null);
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [priceInput, setPriceInput] = useState<string>("");

  const { rate, regionalRate, globalRate } = useMemo(() => {
    if (subcategory) {
      return {
        rate: subcategory.rate,
        regionalRate: subcategory.regionalRate,
        globalRate: subcategory.rate + subcategory.regionalRate,
      };
    }

    return {
      rate: category?.rate || 0,
      regionalRate: category?.regionalRate || 0,
      globalRate: (category?.rate || 0) + (category?.regionalRate || 0),
    };
  }, [subcategory, category]);

  const isCardWithRateVisible = useMemo(() => {
    if (!category) return false;
    if (category?.exceptions?.length && !subcategory) return false;
    return true;
  }, [category, subcategory]);

  const isPriceInputVisible = useMemo(() => {
    if (!category) return false;
    if (category?.exceptions?.length && !subcategory) return false;
    return true;
  }, [category, subcategory]);

  const priceFormatted = useMemo(() => {
    return formatCurrency(price);
  }, [price]);

  const updateEntry = (entryToUpdate: Entry) => {
    setEntries(
      entries.map((entry) =>
        entry.index === entryToUpdate.index ? { ...entryToUpdate } : entry,
      ),
    );
  };

  const addEntry = (entry: Entry) => {
    setEntries([...entries, { ...entry }]);
    localStorage.setItem(
      "octroi-mer-reunion",
      JSON.stringify([...entries, { ...entry }]),
    );
    setMaxIndex(Math.max(maxIndex, entry.index + 1));
  };

  const deleteEntry = (index: number) => {
    setEntries(entries.filter((entry) => entry.index !== index));
    localStorage.setItem("octroi-mer-reunion", JSON.stringify(entries));
  };

  const deleteAllEntries = () => {
    setEntries([]);
    setMaxIndex(1);
    localStorage.setItem("octroi-mer-reunion", "[]");
  };

  useEffect(() => {
    const savedEntries: Entry[] = JSON.parse(
      localStorage.getItem("octroi-mer-reunion") || "[]",
    );

    setEntries(savedEntries);

    if (savedEntries.length) {
      setMaxIndex(Math.max(...savedEntries.map((entry) => entry.index)) + 1);
    }
  }, []);

  return (
    <main className="container flex flex-col py-20 [&_a:hover]:underline [&_blockquote]:text-lg [&_h2]:mt-12 [&_li]:text-lg [&_p]:text-justify [&_p]:text-lg [&_p]:first-letter:pl-12 [&_p]:first-letter:font-bold">
      <H1 className={"px-6 text-center"}>
        Octroi de Mer à la Réunion : un outil pour la calculer facilement
      </H1>
      <H2>L'octroi de mer : un vieil héritage</H2>
      <P>
        L'octroi de mer est un des plus vieux outils fiscaux en France. Elle
        trouve ses origines au XVIIe siècle, à l'époque où les îles des Caraïbes
        et d'autres territoires d'outre-mer étaient des colonies françaises. À
        l'origine, cette taxe était perçue par les municipalités locales pour
        financer les infrastructures publiques comme les routes, les ports, et
        les marchés.
      </P>
      <P>Depuis, cette taxe a bien évolué et sert plusieurs objectifs:</P>
      <List>
        <li>
          Fiscalité locale: il permet aux collectivités d'outre-mer de financer
          leur budget en collectant des recettes fiscales sur les produits
          importés.
        </li>

        <li>
          Protection de la production locale : en taxant les biens importés,
          cette mesure aide à protéger les industries locales contre la
          concurrence extérieure, en rendant les produits importés plus chers.
        </li>
      </List>
      <Quote>
        💡 L'octroi de mer a pour effet de limiter les importations ce qui va à
        l'encontre du principe de libre échange prôné par l'Union Européenne.
        Cette dernière a accordé plusieurs dérogations et a rajouté un octroi de
        mer interne
      </Quote>
      <P>
        Les dérogations de l'UE feront l'objet de nouvelles discussions à partir
        de 2027.
      </P>
      <H2>Octroi de mer "interne" et "externe" : quelles différences ?</H2>
      <P>
        D'après la définition des{" "}
        <Link
          className={"relative"}
          target={"_blank"}
          href={
            "https://www.douane.gouv.fr/fiche/fiscalite-douaniere-dans-les-departements-doutre-mer"
          }
        >
          douanes française
          <ExternalLinkIcon className="absolute -right-2 -top-2 h-4 w-4" />
        </Link>
        , l'OM <strong>externe</strong> s'applique "aux importations de biens,
        quelle que soit leur provenance" alors que l'OM <strong>interne</strong>{" "}
        s'applique "aux livraisons de biens faites à titre onéreux par des
        personnes qui exercent des activités de production".
      </P>
      <P>
        En résumé, un particulier ou un professionnel importe un bien à la
        Réunion : <strong>on applique l'OM externe</strong>. Un professionnel me
        livre un bien produit à la Réunion à titre onéreux :
        <strong>on applique l'OM interne.</strong>
      </P>
      <P>
        L'ajout de l'octroi de mer interne dans les territoires ultramarins
        français a pour but de se conformer au principe de libre circulation des
        marchandises au sein de l'Union européenne, en assurant une égalité de
        traitement entre les produits locaux et ceux importés de l'UE.
      </P>
      <H2>Un outil fiscal à la main des collectivités et des régions</H2>
      <figure className={"relative my-12 h-[500px] w-full"}>
        <Image
          src={"/images/gouvernance.png"}
          alt={"La gouvernance de l'octroi de mer"}
          fill
          className={"object-contain"}
        />
        <figcaption
          className={
            "absolute -bottom-6 right-1/2 translate-x-1/2 whitespace-nowrap text-left italic"
          }
        >
          Source: Rapport de la Cour des Comptes - Mars 2024
        </figcaption>
      </figure>
      <P>
        L'octroi de mer est un exemple concret d'un outil fiscal à la
        disposition des collectivités et des régions. Cet instrument fiscal
        permet aux collectivités locales de générer des revenus pour financer
        leurs budgets.
      </P>
      <P>
        L'octroi de mer (OM) est redistribué aux communes alors que l'octroi de
        mer régional (OMR) est redistribué aux régions. Ce sont les conseils
        régionaux qui fixent les taux d'octroi de mer ainsi que les produits qui
        font l'objet d'exonérations.
      </P>
      <H2 id={"taux-reunion"}>
        Taux d'octroi de mer applicable à la Réunion en{" "}
        {dayjs().locale("fr").format("MMMM YYYY")}
      </H2>
      <Table>
        <TableCaption>
          Tarifs d'octroi de mer externe - version du 8 juillet 2022
          <br />
          <Link
            href={
              "https://www.douane.gouv.fr/sites/default/files/uploads/files/tarif-OME-deliberation-24-juin-2022.pdf"
            }
            className={"italic hover:underline"}
            target={"_blank"}
          >
            Source: Site de la Douane (www.douane.gouv.fr)
            <ExternalLinkIcon className={"ml-2 h-4 w-4"} />
          </Link>
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Désignation</TableHead>
            <TableHead>Octroi de Mer (OM)</TableHead>
            <TableHead>Octroi de Mer Régional (OMR)</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className={"relative"} colSpan={3}>
              <MagnifyingGlassIcon
                className={"absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"}
              />
              <Input
                type="text"
                placeholder={"Filtrer les produits"}
                className={"pl-8"}
                value={filter}
                onChange={({ target: { value } }) => setFilter(value)}
              />
            </TableCell>
          </TableRow>
          {rates
            .filter(
              ({ label, exceptions }) =>
                label.toLowerCase().includes(filter.toLowerCase()) ||
                exceptions?.some(({ label }) =>
                  label.toLowerCase().includes(filter.toLowerCase()),
                ),
            )
            .slice(0, maxRatesToDisplay)
            .map(({ label, rate, regionalRate, exceptions }, i) => (
              <Fragment key={i + " " + label}>
                <TableRow className={"bg-gray-200 font-semibold"}>
                  <TableCell>{label}</TableCell>
                  <TableCell>{formatPercentage(rate)}</TableCell>
                  <TableCell>{formatPercentage(regionalRate)}</TableCell>
                </TableRow>
                {exceptions?.map(({ label, rate, regionalRate }, i) => (
                  <TableRow key={i + " " + label} className={"italic"}>
                    <TableCell className={"pl-12"}>↪ SAUF {label}</TableCell>
                    <TableCell>{formatPercentage(rate)}</TableCell>
                    <TableCell>{formatPercentage(regionalRate)}</TableCell>
                  </TableRow>
                ))}
              </Fragment>
            ))}
          <TableRow>
            <TableCell colSpan={3}>
              <Button
                className={"w-full"}
                variant={"ghost"}
                onClick={() => setMaxRatesToDisplay(rates.length)}
              >
                Tout afficher
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/*<P>Aussi certains biens sont exonérés d'octroi de mer à l'import</P>*/}
      {/*<P>Cas du déménagement ? Voiture électrique ?</P>*/}
      {/*<H2>Quelques exemples de calcul de l'octroi de mer</H2>*/}
      {/*<H3>Colis la Poste</H3>*/}
      {/*<H3>Livre</H3>*/}
      {/*<H3>Ordinateur portable</H3>*/}
      {/*<H3>Véhicule</H3>*/}
      {/*<H3>Pièces détachés automobile</H3>*/}
      <H2 id={"calculateur"}>Calculateur octroi de mer</H2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className={"text-center"}>Index</TableHead>
            <TableHead className={"text-center"}>Désignation</TableHead>
            <TableHead className={"text-center"}>Prix HT</TableHead>
            <TableHead colSpan={2} className={"text-center"}>
              Taxes (OM + OMR)
            </TableHead>
            <TableHead>
              <DeleteDialog onClick={() => deleteAllEntries()}>
                <Button
                  variant={entries.length ? "default" : "ghost"}
                  disabled={!entries.length}
                >
                  <ResetIcon className={"h-4 w-4"}></ResetIcon>
                </Button>
              </DeleteDialog>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {entries.map((entry) => {
            return (
              <TableRow key={entry.index}>
                <TableCell className={"text-center"}>{entry.index}</TableCell>
                <TableCell className={"line-clamp-3 max-w-prose text-center"}>
                  {entry.designation}
                </TableCell>
                <TableCell className={"text-center"}>
                  {entry.priceFormatted}
                </TableCell>
                <TableCell className={"text-center"}>{entry.taxRate}</TableCell>
                <TableCell className={"text-center font-semibold italic"}>
                  {entry.taxFormatted}
                </TableCell>
                <TableCell>
                  <DeleteDialog onClick={() => deleteEntry(entry.index)}>
                    <Button variant={"destructive"}>
                      <TrashIcon className={"h-4 w-4"}></TrashIcon>
                    </Button>
                  </DeleteDialog>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell />
            <TableCell className={"text-right"}>Sous-total</TableCell>
            <TableCell className={"text-center"}>
              {formatCurrency(
                entries.reduce((acc, curr) => acc + curr.price, 0),
              )}
            </TableCell>
            <TableCell />
            <TableCell className={"text-center"}>
              {formatCurrency(entries.reduce((acc, curr) => acc + curr.tax, 0))}
            </TableCell>
            <TableCell />
          </TableRow>
        </TableFooter>
      </Table>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className={"mt-12 border border-dashed"}>
            <PlusIcon className={"mr-2 h-4 w-4"} />
            Ajouter un article
          </Button>
        </DialogTrigger>

        <DialogContent
          className={
            "flex h-screen w-screen flex-col overflow-y-scroll lg:h-auto lg:w-auto"
          }
        >
          <DialogHeader>
            <DialogTitle>Ajout d'article</DialogTitle>
            <DialogDescription>
              Choisissez une catégorie pour définir les taux d'octroi de mer
            </DialogDescription>
          </DialogHeader>

          <Select
            defaultValue={category?.label}
            onValueChange={(v) => {
              setCategory(rates.find((rate) => rate.label === v) || null);
              setSubcategory(null);
            }}
          >
            <Label>Catégorie</Label>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent className={"w-[90vw] lg:w-auto"}>
              <SelectGroup>
                {rates.map((rate) =>
                  rate.label ? (
                    <SelectItem key={rate.index} value={rate.label}>
                      {rate.label}
                    </SelectItem>
                  ) : null,
                )}
              </SelectGroup>
            </SelectContent>
          </Select>

          {category?.exceptions?.length ? (
            <Select
              defaultValue={subcategory?.label}
              onValueChange={(v) =>
                setSubcategory(
                  category?.exceptions?.find((rate) => rate.label === v) || {
                    label: "Autre",
                    rate: category?.rate || 0,
                    regionalRate: category?.regionalRate || 0,
                  },
                )
              }
            >
              <Label>Sous-catégorie</Label>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent className={"w-[90vw] lg:w-auto"}>
                <SelectGroup>
                  {category.exceptions.map((rate) =>
                    rate.label ? (
                      <SelectItem key={rate.index} value={rate.label}>
                        {rate.label}
                      </SelectItem>
                    ) : null,
                  )}
                  <SelectItem key={0} value={"other"}>
                    Autre
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : null}

          {isPriceInputVisible ? (
            <Label>
              Prix HT
              <Input
                type={"text"}
                onBlur={() => (price ? setPriceInput(priceFormatted) : void 0)}
                onFocus={() => {
                  price ? setPriceInput(price.toString()) : null;
                }}
                className={"mt-4"}
                value={priceInput}
                onChange={(e) => {
                  e.preventDefault();
                  const { value } = e.target;
                  setPrice(+value);
                  setPriceInput(value);
                }}
              />
            </Label>
          ) : null}

          {isCardWithRateVisible ? (
            <Card>
              <CardHeader>
                <CardTitle>Taux d'octroi de mer en vigueur</CardTitle>
                <CardDescription>
                  D'après la catégorie sélectionnée, les taux d'octroi de mer
                  seront calculés automatiquement.
                </CardDescription>
              </CardHeader>

              <CardContent className={"flex flex-col gap-y-4"}>
                <Label>Octroi de mer (OM) :</Label>
                <InlineCode>
                  {(rate / 100)?.toLocaleString("fr", {
                    style: "percent",
                    minimumFractionDigits: 2,
                  })}
                </InlineCode>

                <Label>Octroi de mer régional (OMR) : </Label>
                <InlineCode>
                  {(regionalRate / 100)?.toLocaleString("fr", {
                    style: "percent",
                    minimumFractionDigits: 2,
                  })}
                </InlineCode>

                <Label>Global</Label>
                <InlineCode>
                  {(globalRate / 100)?.toLocaleString("fr", {
                    style: "percent",
                    minimumFractionDigits: 2,
                  })}
                </InlineCode>

                <Separator className={"my-3 h-2"} />

                <Label className={"font-bold uppercase"}>Taxes</Label>
                <InlineCode className={"border border-primary text-center"}>
                  {formatCurrency((globalRate / 100) * (price || 0))}
                </InlineCode>
              </CardContent>
            </Card>
          ) : null}

          <DialogFooter>
            <Button
              type="submit"
              disabled={!price || !category}
              onClick={() => {
                addEntry({
                  index: maxIndex,
                  designation: (() => {
                    if (subcategory?.label !== "Autre")
                      return subcategory?.label || category?.label || "";

                    return category?.label || "";
                  })(),
                  price: price || 0,
                  priceFormatted: formatCurrency(price),
                  taxRate: (globalRate / 100).toLocaleString("fr", {
                    style: "percent",
                    minimumFractionDigits: 2,
                  }),
                  tax: (price || 0) * (globalRate / 100),
                  taxFormatted: formatCurrency(
                    (price || 0) * (globalRate / 100),
                  ),
                });

                setOpen(false);
              }}
            >
              <CheckIcon className={"mr-2 h-4 w-4"} />
              Valider
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}

const DeleteDialog = (
  props: PropsWithChildren<{
    onClick: MouseEventHandler<HTMLButtonElement>;
  }>,
) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{props.children}</AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmation de suppression</AlertDialogTitle>
          <AlertDialogDescription>
            Cette action ne peut être annulée. Vous confirmez la demande de
            suppression ?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={props.onClick}>
            Confirmer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

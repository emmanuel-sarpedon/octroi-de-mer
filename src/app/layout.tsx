import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { P } from "shadcn-typography";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Octroi de mer à la Réunion",
  description: "Calculer vos taxes d'octroi de mer externe à la Réunion",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⛴️</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={jost.className}>
        <header
          className={
            "container sticky top-0 z-10 flex justify-end bg-white py-4 lg:py-10"
          }
        >
          <NavigationMenu className={"hidden lg:block"}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/#taux-reunion" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link2Icon className={"mr-2 h-4 w-4"} />
                    Taux OM {new Date().getFullYear()}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#calculateur" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link2Icon className={"mr-2 h-4 w-4"} />
                    Calculatrice Octroi de mer la Réunion
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Sheet>
            <SheetTrigger asChild className={"lg:hidden"}>
              <Button variant="ghost">
                <HamburgerMenuIcon className={"h-4 w-4"} />
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetClose asChild>
                <Button asChild variant={"ghost"}>
                  <Link href="/#taux-reunion">
                    <Link2Icon className={"mr-2 h-4 w-4"} />
                    Taux OM {new Date().getFullYear()}
                  </Link>
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Button asChild variant={"ghost"}>
                  <Link href="/#calculateur">
                    <Link2Icon className={"mr-2 h-4 w-4"} />
                    Calculatrice Octroi de mer
                  </Link>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </header>
        {children}
        <footer className={"container py-12 text-center"}>
          <P className={"font-semibold"}>
            {new Date().getFullYear()} - Octroi de mer à la Réunion
          </P>
        </footer>
      </body>
    </html>
  );
}

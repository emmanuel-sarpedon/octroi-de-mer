const rates: WithExceptions<Rate>[] = [
  {
    index: 1,
    label: "Animaux vivants",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "Chevaux vivants reproducteurs de race pure",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Animaux vivants de l’espèce bovine, porcine, ovine et caprine",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Coqs, poules, canards, oies, dindons, dindes et pintades, vivants, des espèces domestiques",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Cervidés vivants",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Autruches vivantes",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 2,
    label: "Viandes et abats comestibles",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label:
          "Viandes et abats comestibles des espèces bovine, porcine, ovine, caprine et chevaline",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Jambon, épaules et morceaux, crus, salés ou en saumure, séchés ou fumés de la viande porcine Viandes salées ou en saumure, séchées ou fumées (à l'excl. des espèces porcine, bovine, ovine et caprine, de rennes, de primates, de baleines, de dauphins et marsouins [mammifères de l’ordre des cétacés], de lamantins et dugongs [mammifères de l’ordre des siréniens]",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 3,
    label: "Poissons et crustacés, mollusques et autres invertébrés aquatiques",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label:
          "Produits de la pêche capturés et débarqués par des navires exerçant pour le compte des armements de pêche locaux (Z820)",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Morues séchées, salées ou en saumure, même cuites avant ou pendant le fumage",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Crustacés, même décortiqués…; farine poudres… propres à l’alimentation humaine",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label: "Mollusques, même séparés de leur coquille…",
        rate: 15.5,
        regionalRate: 2.5,
      },
    ],
  },
  {
    index: 4,
    label:
      "Les produits laitiers ; œufs d’oiseaux ; miel naturel ; produits comestibles d’origine animale, non dénommés ni compris ailleurs",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label:
          "Lait et crème de lait, frais (non concentrés, ni sucrés). Conserves (concentrées ou sucrées)",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Lactosérum,… ; Produits consistant en composants naturels de lait,…, non dénommés ni compris ailleurs",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Miel naturel",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 5,
    label:
      "Autres produits d’origine animale, non dénommés ni compris ailleurs",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "Semences d’insémination artificielle (ZJ20)",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 6,
    label: "Plantes vivantes et produits de la floriculture",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "Plantes à racines nues ou en motte destinées à la culture",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Fleurs, feuillages, tous produits de ces positions",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label: "Autres feuillages frais",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 7,
    label: "Légumes, plantes, racines et tubercules alimentaires",
    rate: 0,
    regionalRate: 0,
    exceptions: [
      {
        label: "Oignons et aulx à l’état frais ou réfrigéré",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label:
          "Légumes, plantes, racines et tubercules alimentaires de semences ou destinés à l’ensemencement",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Piments du genre « capsicum » ou « pimenta », à l’état frais ou réfrigéré",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label:
          "Légumes non cuits ou cuits à l’eau ou à la vapeur ou congelés ; légumes conservés provisoirement mais impropres à l’alimentation en l’état",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label: "Légumes secs",
        rate: 4,
        regionalRate: 2.5,
      },
    ],
  },
  {
    index: 8,
    label: "Fruits comestibles ; Écorces d’agrumes ou de melons",
    rate: 4,
    regionalRate: 2.5,
  },
  {
    index: 9,
    label: "Café, thé, maté et épices",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "Café non torréfié",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Café torréfié même décaféiné",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label: "Coques et pellicule de café ; succédanés de café",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label: "Vanille non broyée ni pulvérisée",
        rate: 25.5,
        regionalRate: 2.5,
      },
      {
        label: "Vanille broyée ou pulvérisée",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Gingembre",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label: "Safran",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label: "Curcuma",
        rate: 15.5,
        regionalRate: 2.5,
      },
    ],
  },
  {
    index: 10,
    label: "Céréales",
    rate: 0,
    regionalRate: 0,
  },
  {
    index: 11,
    label:
      "Produits de la minoterie : malt ; amidon et fécules ; inuline ; gluten de froment",
    rate: 0,
    regionalRate: 0,
    exceptions: [
      {
        label: "Farine de froment (blé) tendre et d’épeautre",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label:
          "Farines, semoules, poudres, flocons, granulés, pellets de pomme de terre",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label: "Farines, semoules, poudres de légumes à cosses secs…",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label: "Amidons et fécules, inulines",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label: "Gluten de froment (blé)",
        rate: 4,
        regionalRate: 2.5,
      },
    ],
  },
  {
    index: 12,
    label:
      "Graines et fruits oléagineux ; graines semences et fruits divers ; plantes industrielles ou médicinales ; paille et fourrage",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label:
          "Arachides, en coques, décortiquées et même concassées (à l’excl. des arachides destinées à l’ensemencement, grillées ou autrement cuites)",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Graines, fruits et spores à ensemencer",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Cônes de houblon frais ou secs, même broyés sous forme de pellets, lupuline",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Plantes, parties de plantes, graines et fruits des espèces utilisées principalement en parfumerie, en médecine ou à usages insecticides, parasiticides ou simil., frais ou secs, mêmes coupés, concassés ou pulvérisés",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Cannes à sucre, fraîches, réfrigérées, congelées ou séchées, même pulvérisées",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Rutabagas, betteraves fourragères, racines fourragères, foin, luzerne, trèfle, sainfoin, choux fourragers, lupin, vesces, et produits fourragers similaires, même agglomérés sous forme de pellets",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 13,
    label: "Gommes, résines et autres sucs et extraits végétaux",
    rate: 4,
    regionalRate: 2.5,
  },
  {
    index: 14,
    label:
      "Matières à tresser et autres produits d’origine végétale non dénommés ni compris ailleurs",
    rate: 0,
    regionalRate: 0,
    exceptions: [
      {
        label: "Produits végétaux non dénommés ni compris ailleurs",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label: "Supports de culture en fibres de cocos",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 15,
    label:
      "Graisses et huiles animales ou végétales, produits de leur dissociation ; graisses alimentaires élaborées ; cires d’origine animale ou végétale",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "Graisses de porc (y compris saindoux) et graisses de volailles",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Huiles végétales, raffinées pour l’alimentation humaine sauf huile de tournesol",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label: "Huiles brutes et autres huiles",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Huile de tournesol",
        rate: 25.5,
        regionalRate: 2.5,
      },
      {
        label: "Margarines et autres produits",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 16,
    label:
      "Préparations de viande, de poissons ou de crustacés, de mollusques ou d’autres invertébrés aquatiques",
    rate: 10.5,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "Saucisses et saucissons, secs ou à tartiner, non cuits",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Préparations et conserves de foie d’oie ou de canard",
        rate: 25.5,
        regionalRate: 2.5,
      },
      {
        label:
          "Préparations crues de jambon ou de leurs morceaux, d’épaule ou de leurs morceaux (Z821)",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Préparations autres que crues et conserves de jambons ou de leurs morceaux, d’épaules ou de leurs morceaux (Z821)",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label:
          "Extraits et jus de viande, de poissons ou de crustacés, de mollusques ou d’autres invertébrés aquatiques",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label: "Préparations et conserves de poissons",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label:
          "Préparations et conserves de sardines, de thons et de maquereaux",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Nutriments énergétiques pour supplémentation calorique, repris à la liste des Produits et Prestations ancien TI.PS sous le code 103N01 (Z822)",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Caviar",
        rate: 25.5,
        regionalRate: 2.5,
      },
      {
        label: "Succédanés du caviar",
        rate: 25.5,
        regionalRate: 25.5,
      },
      {
        label:
          "Crustacés autres que les crevettes, mollusques et autres invertébrés aquatiques, préparés ou conservés",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label:
          "Crevettes préparées et conservées, non présentées dans un contenant hermétique",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label: "Autres crevettes préparées et conservées",
        rate: 4,
        regionalRate: 2.5,
      },
    ],
  },
  {
    index: 17,
    label: "Sucres et sucreries",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "Sucres de canne ou de betterave et saccharose, à l’état solide",
        rate: 7.5,
        regionalRate: 2.5,
      },
      {
        label:
          "Nutriments énergétiques pour supplémentation calorique, repris à la liste des Produits et Prestations (ancien TIPS n° 103N01). (Z822)",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Mélasses",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Sucreries sans cacao (y compris le chocolat blanc)",
        rate: 15.5,
        regionalRate: 2.5,
      },
    ],
  },
  {
    index: 18,
    label: "Cacao et ses préparations",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "Cacao en fèves et brisures de fèves, bruts ou torréfiés",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Chocolat et autres préparations alimentaires contenant du cacao",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label: "Couvertures de chocolat (Z824)",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 19,
    label:
      "Préparations à base de céréales, de farines, d’amidons, de fécules ou de lait ; pâtisseries",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label:
          "Extraits de malt ; préparations alimentaires de farine, semoules, amidons, fécules ou extraits de malt ne contenant pas de cacao ou moins de 40 % en poids de cacao",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label:
          "Préparations pour l’alimentation des enfants, conditionnées pour la vente au détail",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Nutriments pour la supplémentation calorique repris au titre I-1-5-1-2 et au titre I-1-5-2-2 de la Liste des Produits et Prestations (LPP) (Z822)",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Pâtes alimentaires farcies",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label: "Autres pâtes alimentaires",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label: "Couscous",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label:
          "Produits de la boulangerie, de la pâtisserie ou de la biscuiterie",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label:
          "Pains frais congelés ou surgelés, y compris ceux dont la composition a été enrichie en sucre, en matières grasses ou en autres matières (Z827)",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 20,
    label: "Préparations de légumes, de fruits ou d’autres parties de plantes",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label:
          "Haricots « VIGNA SPP, PHASEOLUS SPP » en grains, préparés ou conservés autrement qu’au vinaigre ou à l’acide acétique, non congelés",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label: "Fruits et parties comestibles de plantes préparés ou conservés",
        rate: 10.5,
        regionalRate: 2.5,
      },
      {
        label: "Jus de fruits",
        rate: 25.5,
        regionalRate: 2.5,
      },
      {
        label: "Jus de fruits concentrés destinés à la transformation",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Jus de fruits pour enfants répondant aux caractéristiques de l’arrêté du 1er juillet 1976 relatifs aux aliments diététiques et de régime de l’enfance publié au JORF du 14/09/76 sous réserve de la production d’une attestation de conformité par l’importateur",
        rate: 4,
        regionalRate: 2.5,
      },
    ],
  },
  {
    index: 21,
    label: "Préparations alimentaires diverses",
    rate: 15.5,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "Levures, poudre à lever préparées",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Préparations alimentaires pour sauces",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label: "Préparations alimentaires pour soupes ou potages",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label:
          "Nutriments énergétiques pour supplémentation calorique, repris au titre I-1-5-1-2 et au tire I-1-52-2 de la liste des produits et prestations (LPP) (Z822)",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Nutriments énergétiques pour supplémentation calorique, repris au titre I-1-5-1-2 et au tire I-1-52-2 de la liste des produits et prestations (LPP) (Z822)",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 22,
    label: "Boissons, liquides alcooliques et vinaigres",
    rate: 25.5,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "Eaux",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label:
          "Jus de fruits pour enfants répondant aux caractéristiques de l’arrêté du 1er juillet 1976 relatifs aux aliments diététiques et de régime de l’enfance publié au JO du 14/09/76 sous réserve de la production d’une attestation de conformité par l’importateur (Z829)",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label:
          "Laits diététiques répondant aux caractéristiques de l’arrêté du 1er juillet 1976 relatifs aux aliments diététiques et de régime de l’enfance publié au JO du 14/09/1976 sous réserve de la production d’une attestation de conformité par l’importateur ( Z831)",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Nutriments énergétiques pour supplémentation calorique, repris au titre I-1-5-1-2 et au titre I-1-52-2 de la liste des produits et prestations (LPP) (Z822)",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Complément nutritionnel “RENUTRYL 500” (Z830)",
        rate: 3,
        regionalRate: 2.5,
      },
      {
        label: "Bières",
        rate: 34,
        regionalRate: 2.5,
      },
      {
        label: "Vins mousseux",
        rate: 48.5,
        regionalRate: 2.5,
      },
      {
        label:
          "Vins présentés en récipients d’une capacité supérieure à 200L (Z832)",
        rate: 10.5,
        regionalRate: 2.5,
      },
      {
        label:
          "Vermouths et autres vins de raisins frais préparés à l’aide de plantes ou de matières aromatiques",
        rate: 48.5,
        regionalRate: 2.5,
      },
      {
        label: "Autres boissons fermentées… tous produits de la position",
        rate: 34,
        regionalRate: 2.5,
      },
      {
        label:
          "Alcool éthylique non dénaturé d’un titre alcoométrique volumique de 80 % vol ou plus; alcool éthylique et eaux-de-vie dénaturés de tous titres",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label:
          "Alcools éthyliques non dénaturés d’un titre alcoométrique vol. de moins de 80 % ; eaux-de-vie, liqueurs et autres boissons spiritueuses",
        rate: 61.5,
        regionalRate: 2.5,
      },
      {
        label: "Rhum et autres alcools forts à base de rhums du ex 2208 (Z834)",
        rate: 30.5,
        regionalRate: 2.5,
      },
      {
        label: "Liqueurs à base de rhum (Z834)",
        rate: 34,
        regionalRate: 2.5,
      },
      {
        label: "Autres boissons spiritueuses à base de rhum (Z834)",
        rate: 34,
        regionalRate: 2.5,
      },
      {
        label: "Vinaigres",
        rate: 4,
        regionalRate: 2.5,
      },
    ],
  },
  {
    index: 23,
    label:
      "Résidus et déchets des industries alimentaires ; aliments préparés pour animaux",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label:
          "Résidus d’amidonnerie et résidus similaires, pulpes de betterave, bagasse de canne à sucre et autres déchets de sucrerie",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label:
          "Bagasses de cannes à sucre et autres déchets de sucrerie (à l'excl. des pulpes de betteraves)",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Lies de vin ; tartre brut",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label:
          "Préparations des types utilisés pour l’alimentation des animaux",
        rate: 4,
        regionalRate: 2.5,
      },
      {
        label:
          "Aliments secs pour chiens de type « croquettes » à l’exception des produits couverts par la directive modifiée 2008/38/CE DE LA COMMISSION du 5 mars 2008 établissant une liste des destinations des aliments pour animaux visant des objectifs nutritionnels particuliers (Z780)",
        rate: 15.5,
        regionalRate: 2.5,
      },
      {
        label: "Poudre de lait pour l’allaitement des animaux (ZJ10)",
        rate: 0,
        regionalRate: 0,
      },
      {
        label:
          "Aliments biologiques destinés aux poules pondeuses et aux poulets de chair",
        rate: 0,
        regionalRate: 0,
      },
      {
        label: "Produits du 2309 90 91 au 2309 90 96",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },

  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
  {
    index: 0,
    label: "",
    rate: 4,
    regionalRate: 2.5,
    exceptions: [
      {
        label: "",
        rate: 0,
        regionalRate: 0,
      },
    ],
  },
];

export default rates;

export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Nous avons déjà un CRM.",
    answer:
      "RadarCRM n'est pas un CRM — c'est ce qui alimente le haut de votre pipeline. Il prend les nouvelles immatriculations REQ de la semaine, trouve les numéros de téléphone, priorise selon l'historique de conversion de votre équipe, et livre une queue d'appels le lundi matin. Votre CRM actuel ne fait pas ça. Pour les équipes qui ont les deux : RadarCRM alimente HubSpot ou Pipedrive — il ne les remplace pas.",
  },
  {
    question: "Est-ce légal d'utiliser les données du REQ et de la RBQ?",
    answer:
      "Oui. Le Registre des entreprises du Québec et la Régie du bâtiment sont des données gouvernementales ouvertes, publiées par Données Québec sous licence ouverte (RLRQ). Vous avez la responsabilité de respecter la LNRC et la liste nationale de numéros exclus (DNCL) dans vos pratiques d'appels sortants — comme avec n'importe quelle prospection téléphonique.",
  },
  {
    question: "Ça coûte combien?",
    answer:
      "La tarification est établie lors de la démo — elle dépend du nombre de producteurs et du mode de déploiement. Pour référence : HubSpot Starter pour 5 utilisateurs coûte environ 230 $/mois. Sans leads. Sans numéros de téléphone. Sans scripts sectoriels. RadarCRM inclut l'ensemble.",
  },
  {
    question: "On a besoin d'un développeur pour configurer ça?",
    answer:
      "Non. La configuration complète se fait lors d'un appel de 60 minutes avec notre équipe. Vous fournissez votre clé Google Places API. Nous gérons le reste. Quand Données Québec met à jour ses formats, nous maintenons les connecteurs.",
  },
  {
    question: "Google Places n'est pas fiable pour les petites entreprises.",
    answer:
      "Le seuil de similarité 0,75 est précisément là pour ça. Les correspondances douteuses sont rejetées automatiquement. Dans les conditions typiques, 70–85 % des nouvelles fiches REQ trouvent un numéro vérifié. Les fiches sans correspondance fiable n'entrent pas dans la queue.",
  },
  {
    question: "L'interface est en français seulement?",
    answer:
      "Oui — par conception. Les données du REQ sont en français. Les playbooks sectoriels sont en français. Vos prospects parlent français. Ce n'est pas une limitation. C'est une fondation.",
  },
  {
    question: "Nous ne sommes que 2 conseillers.",
    answer:
      "RadarCRM est conçu pour des équipes de 3 à 15 producteurs. En dessous de 3 sièges, le tableau de bord sectoriel perd de sa pertinence. Revenez-nous quand vous recrutez votre prochain membre. Si vous êtes dans un réseau MGA, parlez-en à votre principal.",
  },
];

/*
  Pour ajouter un nouvel article:
  1. Copiez un objet existant dans le tableau ARTICLES
  2. Changez l'id (incrémentez de 1)
  3. Modifiez title, excerpt, category, date, imageUrl
  4. Editez le tableau content[] :
     - { type: 'paragraph', text: 'Votre texte ici...' }
     - { type: 'subtitle', text: 'Titre de section' }
     - { type: 'quote', text: 'Citation importante' }
     - { type: 'image', src: '/images/votre-photo.jpg', caption: 'Légende' }
  5. Mettez vos images dans le dossier /public/images/
*/

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'subtitle'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'image'; src: string; caption?: string }

export interface Article {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  imageUrl: string
  content: ArticleBlock[]
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Investir dans nos écoles, investir dans demain',
    excerpt:
      "Pourquoi l'éducation doit rester la priorité absolue de notre circonscription.",
    category: 'Opinion',
    date: '12 Mars 2025',
    imageUrl: '/article-1.png',
    content: [
      {
        type: 'paragraph',
        text: "L'éducation est le socle de toute société qui aspire à un avenir meilleur. Dans notre circonscription, des milliers d'enfants méritent des salles de classe dignes, des enseignants soutenus et des outils modernes pour apprendre. Trop longtemps, nos écoles ont été reléguées au second plan des priorités budgétaires.",
      },
      {
        type: 'paragraph',
        text: "Nous proposons un plan ambitieux : réhabiliter les bâtiments scolaires vétustes, fournir du matériel pédagogique à chaque élève et garantir une cantine saine pour que la faim ne soit plus un obstacle à l'apprentissage. Chaque gourde investie dans nos écoles est une gourde investie dans la stabilité de demain.",
      },
      {
        type: 'subtitle',
        text: 'Un engagement concret et mesurable',
      },
      {
        type: 'paragraph',
        text: "Notre vision ne se limite pas aux promesses. Nous fixerons des objectifs clairs : la rénovation de vingt établissements la première année, la formation continue de cent enseignants et la création de bibliothèques de quartier accessibles à tous les jeunes.",
      },
      {
        type: 'image',
        src: '/article-6.png',
        caption: "Des jeunes engagés dans leur réussite scolaire et leur communauté.",
      },
      {
        type: 'quote',
        text: "Un enfant qui apprend aujourd'hui est un citoyen qui construit demain. Nous ne pouvons pas nous permettre d'attendre.",
      },
      {
        type: 'paragraph',
        text: "Ensemble, faisons de l'éducation le grand chantier de notre génération. C'est en croyant en nos enfants que nous bâtirons une circonscription forte, juste et prospère.",
      },
    ],
  },
  {
    id: 2,
    title: 'Un plan économique pour créer 5000 emplois',
    excerpt:
      "Découvrez notre stratégie pour relancer l'économie locale et soutenir les entrepreneurs.",
    category: 'Programme',
    date: '28 Février 2025',
    imageUrl: '/article-2.png',
    content: [
      {
        type: 'paragraph',
        text: "Le chômage frappe durement nos familles, en particulier les jeunes diplômés qui ne trouvent pas de débouchés. Notre plan économique vise à créer 5000 emplois durables en cinq ans, en misant sur les secteurs porteurs de notre région.",
      },
      {
        type: 'paragraph',
        text: "Nous soutiendrons les petites entreprises par des microcrédits accessibles, un accompagnement administratif simplifié et des incitations fiscales pour ceux qui embauchent localement. L'entrepreneuriat est le moteur de notre relance.",
      },
      {
        type: 'subtitle',
        text: 'Trois piliers pour la relance',
      },
      {
        type: 'paragraph',
        text: "Notre stratégie repose sur l'agriculture moderne, l'artisanat valorisé et le commerce de proximité. En reliant producteurs et marchés, nous garantissons des revenus stables et une croissance partagée par tous.",
      },
      {
        type: 'image',
        src: '/article-2.png',
        caption: "Les commerçants et artisans au cœur de notre économie locale.",
      },
      {
        type: 'quote',
        text: "Donner du travail, c'est rendre la dignité. Chaque emploi créé est une famille qui retrouve l'espoir.",
      },
      {
        type: 'paragraph',
        text: "Avec une gouvernance transparente et un suivi rigoureux des investissements, nous transformerons le potentiel de notre circonscription en prospérité réelle et durable.",
      },
    ],
  },
  {
    id: 3,
    title: 'La santé pour tous : notre engagement',
    excerpt:
      'Comment nous comptons rendre les soins accessibles à chaque famille haïtienne.',
    category: 'Programme',
    date: '15 Février 2025',
    imageUrl: '/article-3.png',
    content: [
      {
        type: 'paragraph',
        text: "L'accès aux soins ne doit pas être un privilège. Trop de familles renoncent à se soigner faute de moyens ou de structures à proximité. Notre engagement est clair : une santé de qualité, accessible à tous, partout dans la circonscription.",
      },
      {
        type: 'paragraph',
        text: "Nous renforcerons les centres de santé communautaires, recruterons du personnel médical qualifié et mettrons en place des unités mobiles pour atteindre les zones les plus reculées.",
      },
      {
        type: 'subtitle',
        text: 'La prévention avant tout',
      },
      {
        type: 'paragraph',
        text: "Une politique de santé efficace commence par la prévention. Campagnes de vaccination, sensibilisation à la nutrition et suivi des femmes enceintes feront partie de nos priorités absolues.",
      },
      {
        type: 'image',
        src: '/article-3.png',
        caption: "Des soins de proximité pour chaque famille de la circonscription.",
      },
      {
        type: 'quote',
        text: "La santé d'un peuple est sa première richesse. Aucune famille ne devrait choisir entre se soigner et se nourrir.",
      },
      {
        type: 'paragraph',
        text: "En investissant dans la santé, nous investissons dans la force vive de notre nation. C'est un devoir moral autant qu'une nécessité économique.",
      },
    ],
  },
  {
    id: 4,
    title: 'Rencontre citoyenne dans la communauté',
    excerpt:
      'Retour sur une assemblée riche en échanges et en propositions concrètes.',
    category: 'Actualité',
    date: '2 Février 2025',
    imageUrl: '/article-4.png',
    content: [
      {
        type: 'paragraph',
        text: "Ce week-end, nous avons rencontré des centaines de citoyens venus partager leurs préoccupations et leurs espoirs. Ces moments d'échange sont au cœur de notre démarche : écouter avant d'agir.",
      },
      {
        type: 'paragraph',
        text: "Les habitants ont exprimé des attentes fortes sur l'emploi, l'éducation et la sécurité. Chaque témoignage nourrit notre programme et renforce notre détermination.",
      },
      {
        type: 'subtitle',
        text: 'Une démocratie de proximité',
      },
      {
        type: 'paragraph',
        text: "Nous croyons en une politique qui se construit avec les gens, pas pour eux. Ces assemblées régulières deviendront un rendez-vous permanent entre les élus et la population.",
      },
      {
        type: 'image',
        src: '/article-4.png',
        caption: "Une assemblée citoyenne riche en échanges et en idées.",
      },
      {
        type: 'quote',
        text: "Le pouvoir appartient au peuple. Notre rôle est de l'écouter et de traduire ses aspirations en actions concrètes.",
      },
      {
        type: 'paragraph',
        text: "Merci à toutes celles et ceux qui ont participé. C'est ensemble, dans le dialogue, que nous bâtirons l'avenir de notre circonscription.",
      },
    ],
  },
  {
    id: 5,
    title: 'Des routes pour désenclaver nos régions',
    excerpt:
      "L'infrastructure au service du développement et du commerce local.",
    category: 'Actualité',
    date: '20 Janvier 2025',
    imageUrl: '/article-5.png',
    content: [
      {
        type: 'paragraph',
        text: "Des routes praticables sont la condition du développement. Sans elles, les agriculteurs ne peuvent vendre, les malades ne peuvent atteindre les hôpitaux et les enfants peinent à rejoindre l'école.",
      },
      {
        type: 'paragraph',
        text: "Nous lancerons un programme de réhabilitation des axes prioritaires, en associant entreprises locales et main-d'œuvre de la région pour maximiser les retombées économiques.",
      },
      {
        type: 'subtitle',
        text: 'Relier pour développer',
      },
      {
        type: 'paragraph',
        text: "Chaque route construite ouvre un marché, crée des emplois et rapproche les communautés. L'infrastructure est le système nerveux de notre économie.",
      },
      {
        type: 'image',
        src: '/article-5.png',
        caption: "Des infrastructures modernes au service du développement local.",
      },
      {
        type: 'quote',
        text: "Désenclaver nos régions, c'est ouvrir la porte à la prospérité pour des milliers de familles.",
      },
      {
        type: 'paragraph',
        text: "Avec une planification rigoureuse et transparente, nous ferons de nos infrastructures un levier durable de croissance et de cohésion.",
      },
    ],
  },
  {
    id: 6,
    title: 'La jeunesse, moteur du changement',
    excerpt:
      'Donner aux jeunes les moyens de leurs ambitions et de bâtir leur avenir.',
    category: 'Opinion',
    date: '8 Janvier 2025',
    imageUrl: '/article-6.png',
    content: [
      {
        type: 'paragraph',
        text: "Notre jeunesse déborde de talent et d'énergie. Pourtant, trop de jeunes se sentent oubliés, sans perspectives. Il est temps de leur donner les moyens de leurs ambitions.",
      },
      {
        type: 'paragraph',
        text: "Nous créerons des centres de formation professionnelle, des programmes de mentorat et des fonds de soutien aux initiatives portées par les jeunes entrepreneurs.",
      },
      {
        type: 'subtitle',
        text: 'Croire en la nouvelle génération',
      },
      {
        type: 'paragraph',
        text: "La jeunesse n'est pas seulement l'avenir : elle est le présent. En l'impliquant dans les décisions, nous bâtissons une circonscription dynamique et innovante.",
      },
      {
        type: 'image',
        src: '/article-6.png',
        caption: "Une jeunesse engagée, prête à transformer sa communauté.",
      },
      {
        type: 'quote',
        text: "Investir dans la jeunesse, c'est semer aujourd'hui ce que nous récolterons pendant des générations.",
      },
      {
        type: 'paragraph',
        text: "Faisons confiance à nos jeunes. Donnons-leur les clés et accompagnons-les : ils transformeront notre circonscription et notre pays.",
      },
    ],
  },
]

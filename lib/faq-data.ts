export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  emoji: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'legalite',
    title: 'Légalité & Sécurité',
    emoji: '🛡️',
    items: [
      {
        question: 'Le service est-il légal en France ?',
        answer:
          'Oui. Notre service est une solution de TV en streaming légale. Nous respectons les droits de diffusion applicables et ne proposons pas de contenus piratés. L\'accès est fourni dans le cadre strict des droits de retransmission. Pour en savoir plus, consultez nos <a href="/mentions-legales">mentions légales</a>.',
      },
      {
        question: 'Mes données personnelles sont-elles protégées ?',
        answer:
          'Oui. Nous collectons uniquement les données nécessaires au fonctionnement du service (formulaire de contact). Aucune donnée bancaire n\'est stockée sur ce site. Tous nos traitements respectent le RGPD. Consultez notre <a href="/confidentialite">politique de confidentialité</a> pour le détail complet.',
      },
      {
        question: 'Le paiement est-il sécurisé ?',
        answer:
          'Le paiement est finalisé sur une page externe sécurisée (protocole HTTPS, certificat SSL) gérée par un prestataire certifié PCI-DSS. Nous ne collectons ni ne stockons jamais vos coordonnées bancaires sur ce site.',
      },
      {
        question: 'Puis-je faire confiance à ce service ?',
        answer:
          'Oui. Notre service est exploité par IPPremium LLC, société enregistrée aux États-Unis. Nous affichons des <a href="/mentions-legales">mentions légales</a> complètes, une <a href="/confidentialite">politique RGPD</a> et des <a href="/conditions-generales">conditions générales</a> transparentes. Notre support répond sous 24 à 48 h.',
      },
    ],
  },
  {
    id: 'connexion',
    title: 'Connexion & Qualité vidéo',
    emoji: '📶',
    items: [
      {
        question: 'Quelle vitesse internet est nécessaire ?',
        answer:
          'Pour regarder confortablement : <br/>• <strong>HD (720p)</strong> : 5 Mbps minimum<br/>• <strong>Full HD (1080p)</strong> : 10–15 Mbps recommandés<br/>• <strong>4K UHD</strong> : 25 Mbps ou plus<br/>Une connexion filaire (Ethernet) est toujours préférable au Wi-Fi pour la stabilité.',
      },
      {
        question: 'La qualité vidéo s\'adapte-t-elle à ma connexion ?',
        answer:
          'Oui. Le débit s\'ajuste automatiquement en fonction de votre bande passante disponible pour éviter les coupures, tout en maintenant la meilleure résolution possible. En cas de connexion instable, la qualité descend temporairement plutôt que de couper le flux.',
      },
      {
        question: 'Que faire si l\'image buffe ou coupe ?',
        answer:
          'Quelques vérifications rapides :<br/>1. Testez votre débit sur <strong>fast.com</strong> ou <strong>speedtest.net</strong>.<br/>2. Préférez une connexion filaire (câble Ethernet) au Wi-Fi.<br/>3. Redémarrez votre box internet et votre appareil.<br/>4. Fermez les autres applications gourmandes en bande passante.<br/>Si le problème persiste, contactez notre <a href="/contact">support</a>.',
      },
      {
        question: 'Wi-Fi ou câble Ethernet, quelle différence ?',
        answer:
          'Le câble Ethernet est toujours plus stable et rapide que le Wi-Fi. Pour la 4K ou le sport en direct, nous recommandons une connexion filaire. Si vous utilisez le Wi-Fi, positionnez votre appareil au plus près de la box ou utilisez un répéteur/CPL.',
      },
      {
        question: 'Le service fonctionne-t-il avec une connexion 4G/5G ?',
        answer:
          'Oui, à condition d\'avoir un débit suffisant (≥ 10 Mbps pour la HD). La 5G est tout à fait adaptée au streaming HD. Attention toutefois à votre consommation de données mobiles : comptez environ 2 Go/h en HD et jusqu\'à 7 Go/h en 4K.',
      },
    ],
  },
  {
    id: 'appareils',
    title: 'Appareils compatibles',
    emoji: '📺',
    items: [
      {
        question: 'Quels appareils sont compatibles ?',
        answer:
          'Le service est compatible avec la grande majorité des appareils modernes :<br/>• <strong>Smart TV</strong> : Samsung (Tizen), LG (webOS), Android TV / Google TV<br/>• <strong>Boîtiers</strong> : Amazon Fire TV Stick, Apple TV, Chromecast, Nvidia Shield<br/>• <strong>Smartphones & tablettes</strong> : Android 7+ et iOS 13+<br/>• <strong>Ordinateurs</strong> : navigateur web (Chrome, Firefox, Edge, Safari)<br/>• <strong>Consoles</strong> : selon la disponibilité de l\'application',
      },
      {
        question: 'Combien d\'appareils puis-je utiliser simultanément ?',
        answer:
          'Le nombre d\'appareils simultanés dépend de votre offre :<br/>• <strong>Essentiel</strong> : 1 connexion simultanée<br/>• <strong>Confort</strong> : 2 connexions simultanées<br/>• <strong>Premium</strong> : jusqu\'à 3 connexions simultanées<br/>Consultez la page <a href="/offre">Offres</a> pour comparer les formules.',
      },
      {
        question: 'Comment installer le service sur une Smart TV ?',
        answer:
          'Après souscription, vous recevez un email avec vos identifiants et un lien vers notre <a href="/installation">guide d\'installation</a> dédié à votre appareil. L\'installation prend généralement moins de 5 minutes. Des tutoriels pas à pas sont disponibles pour Samsung, LG, Android TV et Fire TV Stick.',
      },
      {
        question: 'Puis-je regarder sur mon téléviseur sans Smart TV ?',
        answer:
          'Oui. Vous pouvez brancher un boîtier Amazon Fire TV Stick ou un Chromecast sur n\'importe quel téléviseur équipé d\'un port HDMI. Ces accessoires sont disponibles à moins de 40 € et permettent de transformer un téléviseur classique en Smart TV.',
      },
    ],
  },
  {
    id: 'abonnement',
    title: 'Abonnement & Paiement',
    emoji: '💳',
    items: [
      {
        question: 'Comment souscrire à un abonnement ?',
        answer:
          'C\'est simple : rendez-vous sur notre page <a href="/offre">Offres</a>, choisissez la formule qui vous convient, cliquez sur « S\'abonner » et finalisez votre paiement sur la page sécurisée. Vos identifiants vous sont envoyés par email dans les minutes suivant le paiement.',
      },
      {
        question: 'Quels modes de paiement sont acceptés ?',
        answer:
          'Les paiements sont traités par notre prestataire externe. Les modes acceptés incluent généralement : carte bancaire (Visa, Mastercard), PayPal et autres solutions selon disponibilité. La liste complète est indiquée sur la page de paiement au moment de la souscription.',
      },
      {
        question: 'Y a-t-il un engagement ou une durée minimale ?',
        answer:
          'Non. Nos offres sont <strong>sans engagement</strong>. Vous pouvez résilier à tout moment, sans pénalité, depuis votre espace client ou en nous contactant via le <a href="/contact">formulaire de contact</a>.',
      },
      {
        question: 'Comment annuler mon abonnement ?',
        answer:
          'Vous pouvez annuler à tout moment :<br/>1. Depuis votre espace client sur la page de paiement externe.<br/>2. En nous contactant via le <a href="/contact">formulaire de contact</a>.<br/>L\'accès reste actif jusqu\'à la fin de la période payée en cours.',
      },
      {
        question: 'Proposez-vous un essai gratuit ou une offre de lancement ?',
        answer:
          'Les offres promotionnelles varient. Consultez la page <a href="/offre">Offres</a> pour les conditions en vigueur au moment de votre souscription. Certaines formules peuvent inclure une période d\'essai ou un tarif réduit.',
      },
      {
        question: 'Le renouvellement est-il automatique ?',
        answer:
          'Cela dépend de la formule souscrite. Les conditions de renouvellement sont clairement indiquées sur la page de paiement avant toute confirmation. Vous recevrez une notification avant chaque renouvellement.',
      },
    ],
  },
  {
    id: 'contenu',
    title: 'Contenu & Chaînes',
    emoji: '🎬',
    items: [
      {
        question: 'Quelles chaînes sont disponibles ?',
        answer:
          'Notre catalogue inclut les principales chaînes françaises en clair (TF1, France 2, M6, Canal+...) ainsi que des chaînes thématiques : sport, cinéma, séries, jeunesse, actualités. La liste complète est disponible sur notre page <a href="/chaines">Chaînes</a>.',
      },
      {
        question: 'Un guide des programmes (EPG) est-il inclus ?',
        answer:
          'Oui. Un guide des programmes électronique (EPG) est intégré à l\'application. Il vous permet de consulter les programmes en cours et à venir sur 7 jours et de planifier votre visionnage. La disponibilité peut varier selon les chaînes.',
      },
      {
        question: 'Puis-je regarder des programmes en replay ?',
        answer:
          'La disponibilité du replay (catch-up TV) dépend de votre formule et des droits de diffusion accordés par les chaînes. Consultez la page <a href="/offre">Offres</a> pour savoir quelle formule inclut le replay.',
      },
      {
        question: 'Puis-je regarder le service depuis l\'étranger ?',
        answer:
          'L\'accès depuis l\'étranger peut être limité selon les droits de diffusion géographique de certaines chaînes. Consultez nos articles sur le <a href="/blog">blog</a> pour les options légales de TV française à l\'étranger.',
      },
    ],
  },
  {
    id: 'support',
    title: 'Support & Assistance',
    emoji: '🎧',
    items: [
      {
        question: 'Comment contacter le support client ?',
        answer:
          'Rendez-vous sur notre page <a href="/contact">Contact</a> pour nous envoyer un message via le formulaire en ligne. Vous pouvez aussi nous écrire directement à <a href="mailto:contact@iptv-xtream.com">contact@iptv-xtream.com</a>.',
      },
      {
        question: 'Quel est le délai de réponse du support ?',
        answer:
          'Nous répondons généralement <strong>sous 24 à 48 heures ouvrées</strong>. Pour une réponse plus rapide, précisez clairement votre problème et l\'appareil utilisé dans votre message.',
      },
      {
        question: 'Je n\'ai pas reçu mes identifiants après le paiement, que faire ?',
        answer:
          'Vérifiez d\'abord votre dossier de courriers indésirables (spam). Si l\'email ne s\'y trouve pas, contactez-nous via le <a href="/contact">formulaire de contact</a> en indiquant l\'adresse email utilisée lors du paiement. Nous vous renverrons vos accès sous 24 h.',
      },
      {
        question: 'L\'application ne se lance pas, que faire ?',
        answer:
          'Essayez dans cet ordre :<br/>1. Vérifiez votre connexion internet.<br/>2. Redémarrez votre appareil.<br/>3. Désinstallez et réinstallez l\'application.<br/>4. Assurez-vous que votre appareil est compatible (voir <a href="/installation">guide d\'installation</a>).<br/>5. Si le problème persiste, contactez le <a href="/contact">support</a> en précisant le modèle de votre appareil.',
      },
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Le service est-il légal en France ?',
    answer:
      'Oui. Notre service est présenté comme une solution de TV en streaming légale. Nous respectons les droits de diffusion et n\'encourageons pas l\'accès à des contenus piratés. Pour en savoir plus, consultez nos <a href="/mentions-legales">mentions légales</a>.',
  },
  {
    question: 'Quelle vitesse internet est nécessaire pour la TV en streaming ?',
    answer:
      'Pour le HD, nous recommandons au minimum 10 Mbps. Pour le Full HD, comptez 15 Mbps. Pour le 4K, une connexion d\'au moins 25 Mbps est idéale. Une connexion filaire (Ethernet) améliore la stabilité.',
  },
  {
    question: 'Quels appareils sont compatibles ?',
    answer:
      'Smart TV (Samsung, LG, Android TV), box (Fire TV, Apple TV), smartphones et tablettes Android/iOS, ainsi que les navigateurs web récents. Consultez la page <a href="/appareils">Appareils</a> pour le détail.',
  },
  {
    question: 'Comment regarder la TV sans box traditionnelle ?',
    answer:
      'Il suffit de choisir une offre sur notre page <a href="/offre">Offres</a>, de finaliser l\'abonnement et d\'installer l\'application sur votre appareil. Aucune box opérateur n\'est requise.',
  },
  {
    question: 'Comment annuler mon abonnement ?',
    answer:
      'Nos offres sont sans engagement. Vous pouvez résilier depuis votre espace client sur la page de paiement externe ou en nous contactant via le <a href="/contact">formulaire de contact</a>.',
  },
  {
    question: 'Puis-je regarder la TV en voyage ou à l\'étranger ?',
    answer:
      'L\'accès depuis l\'étranger peut être limité selon les droits de diffusion. Consultez nos articles sur le <a href="/blog">blog</a> pour les options légales de TV française à l\'étranger.',
  },
  {
    question: 'Quelle est la différence avec une box TV classique ?',
    answer:
      'Une box opérateur est liée à un abonnement câble ou fibre. Notre service fonctionne via internet sur vos propres appareils, sans installation de box dédiée. Voir <a href="/comment-ca-marche">Comment ça marche</a>.',
  },
  {
    question: 'Un guide des programmes (EPG) est-il disponible ?',
    answer:
      'Oui, un guide des programmes est disponible dans l\'application pour planifier vos visionnages. La disponibilité peut varier selon les chaînes.',
  },
  {
    question: 'Combien d\'appareils puis-je utiliser en simultané ?',
    answer:
      'Cela dépend de votre offre : 1 appareil pour Essentiel, 2 pour Confort, 3 pour Premium. Consultez la page <a href="/offre">Offres</a> pour comparer.',
  },
  {
    question: 'Comment contacter le support ?',
    answer:
      'Rendez-vous sur notre page <a href="/contact">Contact</a>. Nous répondons généralement sous 24 à 48 heures ouvrées.',
  },
  {
    question: 'La qualité vidéo s\'adapte-t-elle à ma connexion ?',
    answer:
      'Oui, le débit vidéo s\'adapte automatiquement à votre bande passante pour limiter les coupures, tout en privilégiant la meilleure qualité possible.',
  },
  {
    question: 'Proposez-vous un essai gratuit ?',
    answer:
      'Les offres promotionnelles varient. Consultez la page <a href="/offre">Offres</a> pour les conditions en vigueur au moment de votre souscription.',
  },
];

export const SETUP_FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Combien de temps prend l\'installation ?',
    answer: 'En général moins de 10 minutes après réception de vos identifiants par email.',
  },
  {
    question: 'Où télécharger l\'application ?',
    answer:
      'Les liens de téléchargement vous sont envoyés par email après souscription. Ils varient selon votre appareil (Android, iOS, Smart TV).',
  },
  {
    question: 'Que faire si l\'application ne se lance pas ?',
    answer:
      'Vérifiez votre connexion internet, redémarrez l\'appareil et assurez-vous d\'utiliser la dernière version de l\'application. Contactez le <a href="/contact">support</a> si le problème persiste.',
  },
];

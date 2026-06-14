'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, CheckCircle2, AlertTriangle, Wifi, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

interface Step {
  title: string;
  steps: string[];
  note?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface DeviceGuide {
  id: string;
  emoji: string;
  label: string;
  subtitle: string;
  time: string;
  player: string;
  difficulty: string;
  parts: Step[];
  faqs: FaqItem[];
}

/* ------------------------------------------------------------------ */
/*  Content data (scraped & adapted from iptvv.ca/tutorial)            */
/* ------------------------------------------------------------------ */

const DEVICES: DeviceGuide[] = [
  {
    id: 'firestick',
    emoji: '🔥',
    label: 'Fire TV / Firestick',
    subtitle: 'Firestick, Fire Cube',
    time: '5–10 min',
    player: 'V12Mate (gratuit)',
    difficulty: 'Débutant',
    parts: [
      {
        title: 'Étape 1 — Installer l\'application Downloader',
        steps: [
          'Sur l\'écran d\'accueil Fire TV, ouvrez <strong>Mes applis</strong>.',
          'Sélectionnez <strong>Obtenir plus d\'applis</strong>.',
          'Choisissez <strong>Rechercher</strong>, appuyez sur Bas puis OK, et tapez <strong>Downloader</strong>.',
          'Dans les résultats, sélectionnez <strong>Downloader</strong> puis appuyez sur OK.',
          'Choisissez <strong>Downloader → Télécharger</strong> et attendez la fin de l\'installation.',
          'N\'ouvrez pas encore l\'application — appuyez sur <strong>Retour</strong> pour revenir à l\'accueil.',
        ],
      },
      {
        title: 'Étape 2 — Activer les options développeur et sources inconnues',
        steps: [
          'Allez dans <strong>Paramètres → Ma Fire TV</strong>.',
          'Ouvrez <strong>À propos</strong> et cliquez <strong>7 fois</strong> sur Fire TV Stick pour activer les Options développeur.',
          'Appuyez sur Retour → <strong>Options développeur</strong> → activez le <strong>Débogage ADB</strong>.',
          'Confirmez que le débogage ADB est bien <strong>Activé</strong>.',
          'Sélectionnez <strong>Installer des applis inconnues</strong> → accordez la permission à <strong>Downloader</strong> (OK).',
          'Appuyez sur le bouton <strong>Accueil</strong> pour revenir à l\'écran principal.',
        ],
        note: 'Conseil : si les Options développeur sont masquées, allez dans À propos et cliquez 7 fois sur Fire TV Stick pour les activer.',
      },
      {
        title: 'Étape 3 — Installer le lecteur via Downloader',
        steps: [
          'Ouvrez <strong>Downloader</strong>.',
          'Appuyez sur <strong>Autoriser</strong> pour accorder l\'accès aux fichiers.',
          'Ignorez le message de bienvenue (OK).',
          'Entrez le code Downloader de votre lecteur IPTV : <strong>2494311</strong> → appuyez sur <strong>GO</strong>.',
          'Acceptez la Politique de confidentialité → <strong>Installer</strong> → confirmez à nouveau si demandé.',
          'Attendez la fin de l\'installation puis appuyez sur <strong>OUVRIR</strong>.',
          'Appuyez sur <strong>Ajouter une playlist</strong> puis sélectionnez votre mode de connexion.',
          'Entrez vos <strong>identifiants</strong> (nom d\'utilisateur et mot de passe reçus par e-mail).',
          'Appuyez sur <strong>Suivant</strong> — gardez VOD et Chaînes TV sélectionnés.',
          'Attendez le chargement (~1 minute) puis appuyez sur <strong>Terminé</strong>. Vous êtes prêt !',
        ],
        note: 'Important : si vous avez déjà TiviMate installé, désinstallez-le d\'abord — sinon l\'installation peut échouer.',
      },
    ],
    faqs: [
      {
        question: 'Aucune chaîne ne s\'affiche après la connexion — que faire ?',
        answer: 'Vos identifiants sont probablement incorrects. Allez dans Paramètres → Playlists et vérifiez votre nom d\'utilisateur et mot de passe en faisant attention aux majuscules.',
      },
      {
        question: 'Le lecteur est-il compatible avec tous les modèles Firestick ?',
        answer: 'Oui, il fonctionne avec la plupart des modèles Fire TV Stick. Assurez-vous d\'avoir suffisamment d\'espace de stockage et une connexion Wi-Fi stable.',
      },
      {
        question: 'Comment ajouter mon service IPTV ?',
        answer: 'Dans la section Playlists de l\'application, entrez l\'URL M3U ou vos identifiants Xtream Codes (serveur, nom d\'utilisateur, mot de passe) fournis par votre fournisseur.',
      },
      {
        question: 'Que faire si l\'application est lente ou plante ?',
        answer: 'Réactivez les sources inconnues/ADB si nécessaire, videz le cache si l\'appli est lente, réinstallez en cas de gros problème, ou utilisez un VPN si votre FAI bloque le streaming.',
      },
    ],
  },
  {
    id: 'android-tv',
    emoji: '👽',
    label: 'Android TV / Box',
    subtitle: 'Chromecast, TCL, Sony, Nvidia Shield...',
    time: '3–5 min',
    player: 'V12Mate ou TiviMate',
    difficulty: 'Facile',
    parts: [
      {
        title: 'Méthode 1 — Via l\'application Downloader (recommandé)',
        steps: [
          'Recherchez <strong>Downloader</strong> dans le Play Store et appuyez sur <strong>Installer</strong>.',
          'Appuyez sur <strong>Autoriser</strong> quand demandé, puis sur OK.',
          'Dans Downloader, entrez le code : <strong>2494311</strong> → GO.',
          'Acceptez la Politique de confidentialité → <strong>Installer</strong> → confirmez.',
          'Appuyez sur <strong>OUVRIR</strong> une fois l\'installation terminée.',
          'Appuyez sur <strong>Ajouter une playlist</strong>, entrez vos identifiants.',
          'Appuyez sur <strong>Suivant</strong>, gardez VOD et Chaînes sélectionnés.',
          'Attendez ~1 minute puis appuyez sur <strong>Terminé</strong>. Profitez du streaming !',
        ],
        note: 'Si votre TV Android vous le demande : allez dans Paramètres → Sécurité & Restrictions et activez Autoriser les applis inconnues pour Downloader.',
      },
      {
        title: 'Méthode 2 — Via Google Play Store (TiviMate)',
        steps: [
          'Ouvrez le <strong>Google Play Store</strong> sur votre Android TV.',
          'Recherchez <strong>TiviMate IPTV Player</strong> et appuyez sur Installer.',
          'Ouvrez TiviMate, sélectionnez <strong>Ajouter une playlist</strong>, choisissez <strong>Xtream Codes</strong>.',
          'Entrez vos identifiants IPTV (URL serveur, nom d\'utilisateur, mot de passe).',
        ],
        note: 'Note : la VOD avec TiviMate nécessite leur abonnement Premium. Vérifiez auprès de votre fournisseur ce qui est inclus dans votre abonnement.',
      },
    ],
    faqs: [
      {
        question: 'Mon appareil Android TV est-il compatible ?',
        answer: 'Compatible avec la plupart des appareils Android TV fonctionnant sous Android 5.0 ou supérieur. Vérifiez votre version dans Paramètres → À propos.',
      },
      {
        question: 'Quelle est la différence entre V12Mate et TiviMate ?',
        answer: 'V12Mate est le lecteur propriétaire de certains fournisseurs IPTV, fourni gratuitement. TiviMate est un lecteur tiers avec version gratuite et Premium (fonctionnalités avancées moyennant licence).',
      },
      {
        question: 'TiviMate Premium est-il nécessaire ?',
        answer: 'La version gratuite convient pour une utilisation basique avec une seule playlist. Le Premium débloque plusieurs playlists, l\'EPG avancé et des options de personnalisation.',
      },
    ],
  },
  {
    id: 'iphone',
    emoji: '🍎',
    label: 'iPhone / iPad / Apple TV',
    subtitle: 'iOS & iPadOS',
    time: '3 min',
    player: 'iMPlayer ou Smarters',
    difficulty: 'Aucune manipulation avancée',
    parts: [
      {
        title: 'Méthode 1 — iMPlayer (recommandé)',
        steps: [
          'Téléchargez <strong>iMPlayer - IPTV Player</strong> sur l\'App Store.',
          'Ouvrez l\'appli et appuyez sur <strong>"Ajouter une playlist"</strong>.',
          'Sélectionnez le type <strong>"XC API"</strong>.',
          'Renseignez vos informations :<br/>• <strong>Nom de la playlist :</strong> le nom que vous voulez<br/>• <strong>URL du portail :</strong> l\'URL serveur reçue par e-mail<br/>• <strong>Nom d\'utilisateur & Mot de passe :</strong> vos identifiants',
          'Appuyez sur <strong>"Ajouter la playlist"</strong> et attendez le chargement du contenu. Bonne lecture !',
        ],
      },
      {
        title: 'Méthode 2 — Smarters Player Lite',
        steps: [
          'Téléchargez <strong>Smarters Player Lite</strong> sur l\'App Store.',
          'Ouvrez l\'appli et appuyez sur <strong>Ajouter un utilisateur</strong>, puis choisissez <strong>Connexion avec l\'API Xtream Codes</strong>.',
          'Entrez vos identifiants (URL, nom d\'utilisateur, mot de passe) puis appuyez sur <strong>AJOUTER</strong>.',
          'Patientez quelques secondes le temps du chargement.',
          'Appuyez sur l\'icône <strong>TV en direct</strong> pour commencer à regarder.',
          'Sélectionnez la catégorie de chaînes souhaitée puis tapez sur un nom de chaîne pour la lancer.',
        ],
        note: 'Pour de meilleures performances sur iOS, connectez-vous en Wi-Fi stable. La 4G/5G peut provoquer des ralentissements.',
      },
    ],
    faqs: [
      {
        question: 'Faut-il jailbreaker son iPhone ou son Apple TV ?',
        answer: 'Non, toutes les applis recommandées sont disponibles directement sur l\'App Store. Aucun jailbreak requis.',
      },
      {
        question: 'Ces applis fonctionnent-elles sur Apple TV ?',
        answer: 'Oui ! iMPlayer et d\'autres applis IPTV supportent Apple TV. Vous pouvez aussi utiliser AirPlay pour diffuser depuis votre iPhone/iPad vers l\'Apple TV.',
      },
      {
        question: 'Pourquoi l\'EPG (guide des programmes) ne se charge pas ?',
        answer: 'Vérifiez que "Mise à jour automatique de l\'EPG" est activé dans les paramètres de l\'appli. Certains fournisseurs peuvent mettre quelques minutes pour charger le guide complet.',
      },
    ],
  },
  {
    id: 'windows-mac',
    emoji: '💻',
    label: 'Windows / Mac',
    subtitle: 'PC & ordinateurs Mac',
    time: '5 min',
    player: 'IPTV Smarters Pro',
    difficulty: 'Support Full HD',
    parts: [
      {
        title: 'Méthode 1 — IPTV Smarters Pro',
        steps: [
          'Ouvrez votre navigateur et recherchez <strong>IPTV Smarters Pro</strong>.',
          'Accédez au site officiel : <strong>https://www.iptvsmarters.com</strong>.',
          'Cliquez sur la section <strong>"Téléchargements"</strong> du menu.',
          'Téléchargez la version Windows ou Mac selon votre système.',
          'Une fois téléchargé, ouvrez le fichier d\'installation.',
          'Si Windows demande une autorisation, cliquez sur <strong>Oui</strong>.',
          'L\'installation prend moins de 2 minutes.',
          'Lancez IPTV Smarters, cliquez sur <strong>Ajouter un utilisateur</strong>, puis choisissez <strong>"Connexion avec l\'API Xtream Codes"</strong>.',
          'Entrez vos identifiants IPTV : nom d\'utilisateur, mot de passe et URL du portail.',
          'C\'est tout ! Vous êtes prêt à regarder.',
        ],
        note: 'Pour de meilleures performances sur PC/Mac, utilisez une connexion Ethernet filaire si possible. Le Wi-Fi peut provoquer des micro-coupures en flux HD/4K.',
      },
      {
        title: 'Méthode 2 — MyIPTV Player (Windows 10/11)',
        steps: [
          'Téléchargez <strong>MyIPTV Player</strong> depuis le Microsoft Store.',
          'Allez dans l\'onglet <strong>Paramètres</strong> puis cliquez sur <strong>"Ajouter une nouvelle playlist et source EPG"</strong>.',
          'Ajoutez votre playlist M3U :<br/>• <strong>Nom :</strong> choisissez un nom (ex. "Mon IPTV")<br/>• <strong>URL :</strong> collez le lien M3U reçu de votre fournisseur<br/>• Cliquez sur <strong>Ajouter la liste distante</strong>',
          'Retournez dans Paramètres et sélectionnez votre playlist dans le menu <strong>Sélectionner la playlist de chaînes</strong>.',
          'C\'est fait ! Allez dans l\'onglet <strong>Chaînes</strong>, choisissez votre pays et commencez à regarder.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Quelle appli fonctionne le mieux sur Windows/Mac ?',
        answer: 'IPTV Smarters Pro offre le plus de fonctionnalités et fonctionne sur Windows et Mac. MyIPTV Player est idéal pour les utilisateurs Windows 10/11 qui préfèrent le Microsoft Store.',
      },
      {
        question: 'Puis-je utiliser VLC pour lire ma playlist IPTV ?',
        answer: 'Oui, VLC peut lire des playlists M3U. Allez dans Média → Ouvrir un flux réseau et collez votre URL M3U. Cependant, les applis IPTV dédiées offrent de meilleures fonctionnalités (EPG, favoris, etc.).',
      },
      {
        question: 'Quelle configuration minimale est requise ?',
        answer: 'Windows 7 ou supérieur, Mac OS X 10.10 ou supérieur. Minimum 4 Go de RAM et une connexion internet stable (25+ Mbps recommandés pour la HD).',
      },
      {
        question: 'Peut-on enregistrer des émissions sur PC/Mac ?',
        answer: 'Certaines applis comme IPTV Smarters Pro supportent l\'enregistrement. Vérifiez les conditions générales de votre fournisseur concernant l\'enregistrement de contenu.',
      },
    ],
  },
  {
    id: 'android-phone',
    emoji: '📱',
    label: 'Téléphone Android',
    subtitle: 'Samsung, Pixel, Xiaomi, Oppo...',
    time: '3 min',
    player: 'iMPlayer ou TiviMate',
    difficulty: 'Optimisé mobile',
    parts: [
      {
        title: 'Méthode 1 — iMPlayer (recommandé)',
        steps: [
          'Téléchargez <strong>iMPlayer - IPTV Player</strong> sur le Google Play Store.',
          'Ouvrez l\'appli et appuyez sur <strong>"Ajouter une playlist"</strong>.',
          'Sélectionnez le type <strong>"XC API"</strong>.',
          'Renseignez vos informations :<br/>• <strong>Nom :</strong> au choix<br/>• <strong>URL du portail :</strong> l\'URL serveur reçue par e-mail<br/>• <strong>Nom d\'utilisateur & Mot de passe :</strong> vos identifiants',
          'Appuyez sur <strong>"Ajouter la playlist"</strong> et profitez du streaming !',
        ],
      },
      {
        title: 'Méthode 2 — TiviMate (Google Play)',
        steps: [
          'Ouvrez le <strong>Google Play Store</strong> et recherchez <strong>TiviMate IPTV Player</strong>.',
          'Appuyez sur <strong>Installer</strong> et attendez la fin.',
          'Ouvrez TiviMate, appuyez sur <strong>Ajouter une playlist</strong>.',
          'Sélectionnez <strong>Xtream Codes</strong> ou <strong>Playlist M3U</strong> selon ce que votre fournisseur vous a fourni.',
          'Entrez vos identifiants :<br/>• <strong>Serveur :</strong> URL serveur<br/>• <strong>Nom d\'utilisateur</strong><br/>• <strong>Mot de passe</strong><br/>Puis appuyez sur Suivant.',
          'Attendez le chargement des chaînes et commencez à regarder !',
        ],
      },
      {
        title: 'Méthode 3 — Installation APK (si TiviMate absent du Play Store)',
        steps: [
          'Rendez-vous sur le site officiel <strong>tivimate.com</strong> et téléchargez l\'APK.',
          'Si demandé, autorisez les installations depuis <strong>sources inconnues</strong> (Paramètres → Sécurité).',
          'Ouvrez le fichier pour installer TiviMate, puis lancez l\'appli.',
          'Suivez les mêmes étapes que ci-dessus pour ajouter votre playlist.',
        ],
        note: 'Astuce données : utilisez le Wi-Fi autant que possible. Le streaming consomme environ 1 Go/heure en qualité standard, 3 Go/heure en HD.',
      },
    ],
    faqs: [
      {
        question: 'TiviMate inclut-il des chaînes ?',
        answer: 'Non, TiviMate est uniquement un lecteur. Vous avez besoin d\'un abonnement IPTV actif et des détails de playlist fournis par votre prestataire.',
      },
      {
        question: 'Pourquoi vois-je "invalide" en me connectant ?',
        answer: 'Vérifiez l\'hôte, le nom d\'utilisateur et le mot de passe. Les fautes de frappe sont fréquentes. Assurez-vous qu\'il n\'y a pas d\'espace en trop et que l\'URL commence par http:// ou https://',
      },
      {
        question: 'Comment réduire les ralentissements sur mobile ?',
        answer: 'Utilisez le Wi-Fi 5 GHz, fermez les applis en arrière-plan, réduisez la qualité du flux si nécessaire, ou essayez un VPN si votre FAI limite le streaming.',
      },
      {
        question: 'Puis-je caster sur ma TV depuis mon téléphone ?',
        answer: 'Oui, la plupart des applis IPTV supportent Chromecast. Cherchez l\'icône de diffusion dans le lecteur. Vous pouvez aussi utiliser la réplication d\'écran sur les TV compatibles.',
      },
      {
        question: 'Quelle vitesse internet est recommandée ?',
        answer: 'Pour un streaming fluide : 10 Mbps pour la SD, 25 Mbps pour la HD, 50+ Mbps pour la 4K.',
      },
    ],
  },
  {
    id: 'roku',
    emoji: '🟣',
    label: 'Roku',
    subtitle: 'Roku TV, Streaming Stick, Ultra',
    time: '5–7 min',
    player: 'Hot Player',
    difficulty: 'Channel Store',
    parts: [
      {
        title: 'Étape 1 — Installer Hot Player',
        steps: [
          'Sur votre Roku, ouvrez le <strong>Roku Channel Store</strong>.',
          'Dans la barre de recherche, tapez <strong>"Hot IPTV"</strong> ou <strong>"Hot Player"</strong>.',
          'Sélectionnez <strong>Hot Player</strong> dans les résultats.',
          'Cliquez sur <strong>"Ajouter la chaîne"</strong> pour installer l\'appli.',
        ],
      },
      {
        title: 'Étape 2 — Récupérer votre adresse MAC',
        steps: [
          'Ouvrez l\'appli <strong>Hot Player</strong> sur votre Roku.',
          'Notez ou photographiez l\'<strong>adresse MAC</strong> affichée à l\'écran — vous en aurez besoin à l\'étape suivante.',
        ],
      },
      {
        title: 'Étape 3 — Configurer votre playlist en ligne',
        steps: [
          'Sur votre téléphone ou ordinateur, rendez-vous sur <strong>https://hotplayer.app</strong>.',
          'Cliquez sur <strong>"Charger la liste"</strong> dans le menu.',
          'Entrez l\'<strong>adresse MAC</strong> de votre Roku puis cliquez sur <strong>Suivant</strong>.',
          'Changez la source en <strong>"Xtream Code"</strong>.',
          'Renseignez vos informations :<br/>• <strong>Nom de la playlist :</strong> au choix (ex. "Mon IPTV")<br/>• <strong>Hôte :</strong> votre URL serveur<br/>• <strong>Nom d\'utilisateur</strong> et <strong>Mot de passe</strong><br/>Cliquez sur <strong>Enregistrer</strong>.',
          'Retournez sur votre Roku et actualisez Hot Player — vos chaînes IPTV devraient apparaître !',
        ],
        note: 'Pour la meilleure qualité sur Roku : au moins 25 Mbps pour la HD et 50+ Mbps pour la 4K.',
      },
    ],
    faqs: [
      {
        question: 'Où trouver l\'adresse MAC sur mon Roku ?',
        answer: 'L\'adresse MAC s\'affiche dans l\'appli Hot Player dans la section "Compte". Elle est générée automatiquement à la première ouverture de l\'appli.',
      },
      {
        question: 'Combien coûte Hot Player ?',
        answer: 'Hot Player coûte environ 9 CAD pour 1 an ou 21 CAD à vie. L\'appli elle-même n\'inclut pas de chaînes — vous devez utiliser votre propre abonnement IPTV.',
      },
      {
        question: 'Hot Player n\'est pas disponible dans ma région — que faire ?',
        answer: 'La disponibilité varie selon la région et le modèle Roku. Essayez de changer la région de votre compte Roku, ou utilisez des alternatives comme IBO Player Pro ou GSE Smart IPTV.',
      },
    ],
  },
  {
    id: 'smart-tv',
    emoji: '📺',
    label: 'Smart TV',
    subtitle: 'Samsung, LG, Vizio, Hisense...',
    time: '5–7 min',
    player: 'Hot Player',
    difficulty: 'App Store TV',
    parts: [
      {
        title: 'Étape 1 — Installer Hot Player',
        steps: [
          'Sur votre Smart TV, ouvrez l\'<strong>App Store</strong> (LG Content Store, Samsung Apps, etc.).',
          'Dans la barre de recherche, tapez <strong>"Hot IPTV"</strong> ou <strong>"Hot Player"</strong>.',
          'Sélectionnez <strong>Hot Player</strong> dans les résultats.',
          'Cliquez sur <strong>Installer</strong> ou <strong>Télécharger</strong>.',
        ],
        note: 'Important : si votre Smart TV possède le Google Play Store, suivez plutôt le guide Android TV.',
      },
      {
        title: 'Étape 2 — Récupérer votre adresse MAC',
        steps: [
          'Ouvrez l\'appli <strong>Hot Player</strong> sur votre Smart TV.',
          'Notez ou photographiez l\'<strong>adresse MAC</strong> affichée — vous en aurez besoin pour l\'étape suivante.',
        ],
      },
      {
        title: 'Étape 3 — Configurer votre playlist en ligne',
        steps: [
          'Sur votre téléphone ou ordinateur, allez sur <strong>https://hotplayer.app</strong>.',
          'Cliquez sur <strong>"Charger la liste"</strong>.',
          'Entrez l\'<strong>adresse MAC</strong> de votre Smart TV puis cliquez sur <strong>Suivant</strong>.',
          'Changez la source en <strong>"Xtream Code"</strong>.',
          'Renseignez vos informations :<br/>• <strong>Nom :</strong> au choix<br/>• <strong>Hôte :</strong> URL serveur<br/>• <strong>Nom d\'utilisateur</strong> et <strong>Mot de passe</strong><br/>Cliquez sur <strong>Enregistrer</strong>.',
          'Revenez sur votre Smart TV et actualisez Hot Player. Vos chaînes s\'affichent !',
        ],
      },
    ],
    faqs: [
      {
        question: 'Quelles marques de Smart TV sont compatibles ?',
        answer: 'Hot Player est disponible sur la plupart des grandes plateformes : LG WebOS, Samsung Tizen, Android TV (Sony, TCL, Hisense). La disponibilité peut varier selon la région.',
      },
      {
        question: 'Où trouver l\'adresse MAC sur ma Smart TV ?',
        answer: 'L\'adresse MAC s\'affiche dans l\'appli Hot Player sous la section "Compte". Elle est générée automatiquement à la première ouverture.',
      },
      {
        question: 'Combien coûte Hot Player ?',
        answer: 'Environ 9 CAD pour 1 an ou 21 CAD à vie. L\'appli ne contient pas de chaînes — vous utilisez votre propre abonnement IPTV.',
      },
    ],
  },
  {
    id: 'buzztv',
    emoji: '📡',
    label: 'BuzzTV Box',
    subtitle: 'Tous modèles BuzzTV',
    time: '5–8 min',
    player: 'XC API (intégré)',
    difficulty: 'Xtream Codes',
    parts: [
      {
        title: 'Méthode recommandée — Connexion XC API',
        steps: [
          'Depuis l\'écran d\'accueil BuzzTV, naviguez vers <strong>Paramètres du serveur</strong>.',
          'Sélectionnez <strong>Connexion XC API</strong> → <strong>Ajouter une connexion XC API</strong>.',
          'Configurez votre connexion Xtream Codes :<br/>• <strong>Nom du portail :</strong> au choix (ex. "Mon IPTV")<br/>• <strong>URL du portail :</strong> votre URL serveur<br/>• <strong>Nom d\'utilisateur</strong> et <strong>Mot de passe</strong>',
          'Appuyez sur <strong>Connecter</strong> ou <strong>Enregistrer</strong>.',
          'Retournez à l\'accueil et sélectionnez <strong>TV en direct</strong> pour commencer.',
        ],
        note: 'Modèles compatibles : BuzzTV XPL 3000, XRS 4000, XRS 4500, E2000 et toutes les BuzzTV Android.',
      },
    ],
    faqs: [
      {
        question: 'Quelle différence entre XC API Login et MAC Server ?',
        answer: 'XC API Login utilise un nom d\'utilisateur/mot de passe (Xtream Codes), tandis que MAC Server utilise l\'adresse MAC de l\'appareil. XC API est plus flexible et recommandé pour la plupart des utilisateurs.',
      },
      {
        question: 'Puis-je utiliser plusieurs services IPTV sur BuzzTV ?',
        answer: 'Oui, vous pouvez configurer plusieurs connexions dans les Paramètres du serveur et basculer facilement entre différents fournisseurs depuis l\'écran d\'accueil.',
      },
      {
        question: 'Mes chaînes ne se chargent pas — que faire ?',
        answer: 'Vérifiez vos identifiants, assurez-vous d\'être bien connecté à Internet, vérifiez que vous utilisez la bonne méthode de connexion (XC API) et essayez de redémarrer l\'appli BuzzTV.',
      },
    ],
  },
  {
    id: 'formuler',
    emoji: '📟',
    label: 'Formuler / Dreamlink',
    subtitle: 'Boîtiers Formuler Z & Dreamlink',
    time: '5–8 min',
    player: 'MyTVOnline 2 & 3 / DOL2',
    difficulty: 'Xtream Codes',
    parts: [
      {
        title: 'Formuler Z — MyTVOnline 2 & 3',
        steps: [
          'Ouvrez <strong>MyTVOnline 2 ou 3</strong> depuis l\'accueil Formuler.',
          'Naviguez vers <strong>Menu → Connexions → Ajouter un portail</strong>.',
          'Configurez votre connexion Xtream Codes :<br/>• <strong>Nom du portail :</strong> au choix<br/>• <strong>URL du portail :</strong> votre URL serveur<br/>• <strong>Connexion requise :</strong> activez cette option<br/>• <strong>Nom d\'utilisateur</strong> et <strong>Mot de passe</strong>',
          'Appuyez sur <strong>Connecter</strong>.',
          'Vos chaînes se chargent — vous êtes prêt !',
        ],
      },
      {
        title: 'Dreamlink — Application DOL2',
        steps: [
          'Ouvrez l\'appli <strong>DOL2</strong> depuis l\'accueil Dreamlink.',
          'Allez dans <strong>Menu → Portails → Modifier le portail</strong>.',
          'Entrez vos informations :<br/>• <strong>Titre du portail :</strong> au choix<br/>• <strong>URL du portail :</strong> votre URL serveur<br/>• <strong>Connexion requise :</strong> Oui<br/>• <strong>Nom d\'utilisateur</strong> et <strong>Mot de passe</strong>',
          'Enregistrez la configuration et redémarrez l\'appli pour vous connecter.',
        ],
        note: 'Contrairement aux boîtiers MAG, les Formuler et Dreamlink n\'ont pas besoin d\'enregistrement MAC. Seuls votre nom d\'utilisateur et mot de passe suffisent.',
      },
    ],
    faqs: [
      {
        question: 'Faut-il enregistrer l\'adresse MAC d\'un boîtier Formuler ?',
        answer: 'Non, les boîtiers Formuler utilisent la méthode Xtream Codes. Seuls le nom d\'utilisateur et le mot de passe fournis par votre prestataire IPTV sont nécessaires.',
      },
      {
        question: 'Puis-je utiliser plusieurs services IPTV sur Formuler ?',
        answer: 'Oui, vous pouvez configurer plusieurs portails dans MyTVOnline et basculer facilement entre différents fournisseurs IPTV.',
      },
      {
        question: 'Mes chaînes ne se chargent pas — que faire ?',
        answer: 'Vérifiez que "Connexion requise" est activé, confirmez que vos identifiants sont corrects, assurez-vous d\'être connecté à Internet et redémarrez l\'appli MyTVOnline.',
      },
    ],
  },
];

const TROUBLESHOOTING = [
  'Vérifiez votre connexion internet. Une connexion stable d\'au moins <strong>15–20 Mbps</strong> est recommandée pour un streaming HD fluide.',
  'Assurez-vous que vos <strong>identifiants Xtream Codes</strong> sont saisis correctement — ils sont sensibles à la casse.',
  'Mettez à jour votre lecteur IPTV vers la <strong>dernière version</strong> pour éviter les problèmes de lecture.',
  'Redémarrez votre appareil et votre <strong>routeur/modem</strong>.',
  'Si vous utilisez un <strong>VPN</strong>, essayez de changer de serveur ou désactivez-le temporairement pour tester.',
  'Videz le <strong>cache</strong> de votre appli IPTV, puis relancez-la.',
  'Certains FAI peuvent bloquer le trafic IPTV. Si vous le suspectez, l\'utilisation d\'un <strong>VPN</strong> peut souvent améliorer l\'accès.',
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                      */
/* ------------------------------------------------------------------ */

function StepList({ part }: { part: Step }) {
  return (
    <div className="mb-6 last:mb-0">
      <h4 className="mb-3 text-base font-semibold text-ink">{part.title}</h4>
      <ol className="space-y-3">
        {part.steps.map((step, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
              {i + 1}
            </span>
            <span
              className="text-sm leading-relaxed text-muted [&_strong]:font-semibold [&_strong]:text-ink"
              dangerouslySetInnerHTML={{ __html: step }}
            />
          </li>
        ))}
      </ol>
      {part.note && (
        <div className="mt-4 flex gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span dangerouslySetInnerHTML={{ __html: part.note }} />
        </div>
      )}
    </div>
  );
}

function DeviceFaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-gray-200 bg-surface shadow-card">
          <button
            type="button"
            className="flex w-full items-center justify-between px-5 py-3.5 text-left text-sm font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.question}</span>
            <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} aria-hidden />
          </button>
          {open === i && (
            <div className="border-t border-gray-200 px-5 py-3.5 text-sm text-muted">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                         */
/* ------------------------------------------------------------------ */

export function InstallationGuide() {
  const [activeDevice, setActiveDevice] = useState(DEVICES[0].id);
  const guide = DEVICES.find((d) => d.id === activeDevice)!;

  return (
    <>
      {/* Notice bar */}
      <div className="border-b border-amber-200 bg-amber-50 py-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 text-sm text-amber-800">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden />
            <p>
              <strong>Important :</strong> nous vendons uniquement l&apos;abonnement IPTV. Les lecteurs tiers
              (Hot Player, iMPlayer, TiviMate…) sont des applications indépendantes — certaines peuvent
              nécessiter leur propre licence payante après la période d&apos;essai.
            </p>
          </div>
        </div>
      </div>

      {/* Device selector */}
      <section className="bg-surface-muted py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <Badge variant="light" className="mb-3">Appareils compatibles</Badge>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              👇 Choisissez votre appareil
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
            {DEVICES.map((device) => (
              <button
                key={device.id}
                type="button"
                onClick={() => setActiveDevice(device.id)}
                className={[
                  'flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow',
                  activeDevice === device.id
                    ? 'border-brand-blue bg-brand-blue/10 shadow-md'
                    : 'border-gray-200 bg-surface hover:border-brand-blue/40 hover:bg-brand-blue/5',
                ].join(' ')}
                aria-pressed={activeDevice === device.id}
              >
                <span className="text-2xl" role="img" aria-hidden>{device.emoji}</span>
                <span className={`text-xs font-medium leading-tight ${activeDevice === device.id ? 'text-brand-blue' : 'text-ink-muted'}`}>
                  {device.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Device guide */}
      <section className="bg-surface py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Guide header */}
          <div className="mb-8 flex flex-wrap items-start gap-4 rounded-2xl border border-gray-200 bg-surface-muted p-6 shadow-card">
            <span className="text-4xl" role="img" aria-label={guide.label}>{guide.emoji}</span>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-ink">{guide.label}</h2>
              <p className="mt-1 text-sm text-muted">{guide.subtitle}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue">
                  ⏱ {guide.time}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                  ✅ {guide.difficulty}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-ink-muted">
                  📱 {guide.player}
                </span>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="mb-10 rounded-2xl border border-gray-200 bg-surface p-6 shadow-card sm:p-8">
            <h3 className="mb-6 text-lg font-semibold text-ink">Instructions d&apos;installation</h3>
            {guide.parts.map((part, i) => (
              <StepList key={i} part={part} />
            ))}
          </div>

          {/* Device-specific FAQ */}
          {guide.faqs.length > 0 && (
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-semibold text-ink">
                Questions fréquentes — {guide.label}
              </h3>
              <DeviceFaqAccordion items={guide.faqs} />
            </div>
          )}
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="bg-surface-muted py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <Badge variant="light" className="mb-3">Dépannage</Badge>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Problèmes fréquents</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
              Quelques vérifications rapides avant de contacter le support.
            </p>
          </div>

          <ul className="space-y-3">
            {TROUBLESHOOTING.map((tip, i) => (
              <li key={i} className="flex gap-3 rounded-xl border border-gray-200 bg-surface px-5 py-4 shadow-card">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" aria-hidden />
                <span
                  className="text-sm leading-relaxed text-muted [&_strong]:font-semibold [&_strong]:text-ink"
                  dangerouslySetInnerHTML={{ __html: tip }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Speed requirements */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <Badge variant="light" className="mb-3">Connexion</Badge>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Débits recommandés</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { quality: 'Définition standard (SD)', speed: '10 Mbps', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
              { quality: 'Haute définition (HD)', speed: '25 Mbps', color: 'text-brand-blue', bg: 'bg-brand-blue/5 border-brand-blue/20' },
              { quality: 'Ultra HD / 4K', speed: '50+ Mbps', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200' },
            ].map((row) => (
              <div key={row.quality} className={`flex flex-col items-center gap-2 rounded-2xl border p-6 text-center ${row.bg}`}>
                <Wifi className={`h-7 w-7 ${row.color}`} aria-hidden />
                <p className="text-sm font-medium text-ink">{row.quality}</p>
                <p className={`text-2xl font-extrabold ${row.color}`}>{row.speed}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#4524DB] px-8 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -right-4 top-12 h-44 w-44 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10" aria-hidden />

            <div className="relative max-w-lg">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Prêt à démarrer ?</h2>
              <p className="mt-4 text-lg text-white/80">
                Commencez avec notre essai gratuit 24 h — sans carte bancaire, sans engagement.
              </p>
            </div>

            <div className="relative mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
              <Link
                href="/trial"
                className="flex min-w-[200px] items-center justify-between rounded-2xl bg-white px-6 py-4 font-semibold text-[#4524DB] transition-colors hover:bg-white/90"
              >
                <span>Essai gratuit 24 h</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>
              <Link
                href="/contact"
                className="flex min-w-[200px] items-center justify-between rounded-2xl border border-white/40 bg-white/10 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/20"
              >
                <span>Contacter le support</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

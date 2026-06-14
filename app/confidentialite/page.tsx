import type { Metadata } from 'next';
import { LegalContent } from '@/components/legal/LegalContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité et protection des données personnelles (RGPD) du site OffreIPTV.',
  path: '/confidentialite',
});

export default function ConfidentialitePage() {
  return (
    <LegalContent title="Politique de confidentialité">
      <p>
        La protection de vos données personnelles est une priorité pour <strong>OffreIPTV</strong>.
        Cette politique de confidentialité vous informe de la manière dont nous collectons, utilisons
        et protégeons vos données personnelles, conformément au Règlement Général sur la Protection
        des Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier
        1978 modifiée.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données collectées sur le site <strong>offreiptv.com</strong>{' '}
        est :
      </p>
      <ul>
        <li>
          <strong>Société :</strong> IPPremium LLC
        </li>
        <li>
          <strong>Siège social :</strong> 3820 Wilshire Boulevard, Suite 410, Los Angeles, CA 90010,
          États-Unis
        </li>
        <li>
          <strong>Email :</strong>{' '}
          <a href="mailto:contact@iptv-xtream.com">contact@iptv-xtream.com</a>
        </li>
      </ul>

      <h2>2. Données collectées</h2>
      <p>Nous collectons uniquement les données strictement nécessaires au fonctionnement du site :</p>
      <ul>
        <li>
          <strong>Formulaire de contact :</strong> nom, adresse e-mail, et message que vous nous
          transmettez volontairement.
        </li>
        <li>
          <strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées,
          durée de la visite (via des outils d&apos;analyse d&apos;audience, avec votre consentement).
        </li>
        <li>
          <strong>Cookies :</strong> voir la section dédiée ci-dessous.
        </li>
      </ul>
      <p>
        Nous ne collectons <strong>aucune donnée bancaire</strong>. Les abonnements sont finalisés sur
        des pages de paiement sécurisées gérées par des prestataires tiers.
      </p>

      <h2>3. Finalités du traitement</h2>
      <p>Vos données sont utilisées pour les finalités suivantes :</p>
      <ul>
        <li>Répondre à vos demandes de contact et de support.</li>
        <li>Améliorer les performances et le contenu du site (mesure d&apos;audience).</li>
        <li>Détecter et prévenir les fraudes et abus.</li>
        <li>Respecter nos obligations légales et réglementaires.</li>
      </ul>

      <h2>4. Base légale du traitement</h2>
      <p>
        Les traitements de données reposent sur les bases légales suivantes, selon le cas :
      </p>
      <ul>
        <li>
          <strong>Votre consentement</strong> : pour les cookies d&apos;analyse et de mesure
          d&apos;audience (article 6.1.a du RGPD).
        </li>
        <li>
          <strong>L&apos;intérêt légitime</strong> : pour la sécurité du site et la prévention des
          fraudes (article 6.1.f du RGPD).
        </li>
        <li>
          <strong>L&apos;exécution d&apos;une mesure précontractuelle</strong> : pour le traitement de
          vos demandes de contact (article 6.1.b du RGPD).
        </li>
      </ul>

      <h2>5. Durée de conservation</h2>
      <ul>
        <li>
          <strong>Données de contact :</strong> conservées 3 ans à compter du dernier contact, puis
          supprimées ou archivées.
        </li>
        <li>
          <strong>Données de navigation et logs :</strong> conservées 13 mois maximum.
        </li>
        <li>
          <strong>Cookies de mesure d&apos;audience :</strong> durée de vie maximale de 13 mois
          conformément aux recommandations de la CNIL.
        </li>
      </ul>

      <h2>6. Partage des données</h2>
      <p>
        Nous ne vendons, ne louons et ne partageons pas vos données personnelles à des tiers à des
        fins commerciales. Vos données peuvent être transmises à :
      </p>
      <ul>
        <li>
          <strong>Notre hébergeur</strong> (Vercel Inc.) dans le cadre de l&apos;exploitation technique
          du site.
        </li>
        <li>
          <strong>Des prestataires d&apos;outils d&apos;analyse</strong> (ex. Google Analytics) avec
          votre consentement préalable.
        </li>
        <li>
          <strong>Les autorités compétentes</strong>, lorsque la loi l&apos;exige ou en cas de
          réquisition judiciaire.
        </li>
      </ul>
      <p>
        En cas de transfert hors de l&apos;Union Européenne (notamment vers les États-Unis), nous
        veillons à ce que des garanties appropriées soient mises en place (clauses contractuelles types
        de la Commission Européenne).
      </p>

      <h2>7. Cookies</h2>
      <p>
        Un cookie est un petit fichier texte déposé sur votre navigateur lors de votre visite. Nous
        utilisons les types de cookies suivants :
      </p>
      <ul>
        <li>
          <strong>Cookies techniques (nécessaires) :</strong> indispensables au fonctionnement du
          site. Ils ne nécessitent pas votre consentement.
        </li>
        <li>
          <strong>Cookies d&apos;analyse :</strong> permettent de mesurer l&apos;audience du site et
          d&apos;améliorer son contenu. Ils ne sont déposés qu&apos;avec votre consentement.
        </li>
      </ul>
      <p>
        Vous pouvez à tout moment modifier vos préférences en matière de cookies via le bandeau de
        consentement du site ou les paramètres de votre navigateur.
      </p>

      <h2>8. Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
      </p>
      <ul>
        <li>
          <strong>Droit d&apos;accès</strong> : obtenir une copie des données vous concernant.
        </li>
        <li>
          <strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes.
        </li>
        <li>
          <strong>Droit à l&apos;effacement</strong> (« droit à l&apos;oubli ») : demander la
          suppression de vos données.
        </li>
        <li>
          <strong>Droit à la limitation du traitement</strong> : geler l&apos;utilisation de vos
          données.
        </li>
        <li>
          <strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré et
          lisible.
        </li>
        <li>
          <strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données pour
          des raisons tenant à votre situation particulière.
        </li>
        <li>
          <strong>Droit de retirer votre consentement</strong> à tout moment, sans que cela ne remette
          en cause la licéité des traitements effectués avant ce retrait.
        </li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous à :{' '}
        <a href="mailto:contact@iptv-xtream.com">contact@iptv-xtream.com</a>. Nous nous engageons à vous
        répondre dans un délai d&apos;un mois. Si vous estimez que vos droits ne sont pas respectés,
        vous disposez du droit de saisir la{' '}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          CNIL
        </a>{' '}
        (Commission Nationale de l&apos;Informatique et des Libertés).
      </p>

      <h2>9. Sécurité des données</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
        vos données personnelles contre toute perte, accès non autorisé, divulgation, altération ou
        destruction. Le site est servi en HTTPS et les accès aux données sont strictement contrôlés.
      </p>

      <h2>10. Modifications de la politique</h2>
      <p>
        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
        Les modifications prendront effet dès leur publication sur cette page. Nous vous encourageons
        à consulter régulièrement cette page.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour toute question relative à cette politique ou à vos données personnelles :{' '}
        <a href="mailto:contact@iptv-xtream.com">contact@iptv-xtream.com</a>
      </p>

      <p>
        <em>Dernière mise à jour : juin 2026</em>
      </p>
    </LegalContent>
  );
}

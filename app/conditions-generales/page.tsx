import type { Metadata } from 'next';
import { LegalContent } from '@/components/legal/LegalContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation du site OffreIPTV et conditions relatives au paiement externe.",
  path: '/conditions-generales',
});

export default function ConditionsGeneralesPage() {
  return (
    <LegalContent title="Conditions générales d'utilisation">
      <p>
        Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et
        l&apos;utilisation du site internet <strong>offreiptv.com</strong> (ci-après « le Site »),
        exploité par IPPremium LLC (ci-après « l&apos;Éditeur »). En naviguant sur ce Site,
        vous acceptez sans réserve les présentes CGU. Si vous n&apos;acceptez pas ces conditions,
        veuillez ne pas utiliser ce Site.
      </p>

      <h2>1. Objet</h2>
      <p>
        Le Site est un site vitrine présentant une offre de télévision en direct par internet (TV en
        streaming), légale et accessible aux résidents de France. Son objectif est d&apos;informer les
        visiteurs sur les offres disponibles et de les orienter vers des pages de souscription
        sécurisées gérées par des prestataires tiers. Aucun paiement n&apos;est traité directement sur
        ce Site.
      </p>

      <h2>2. Acceptation des CGU</h2>
      <p>
        L&apos;accès et l&apos;utilisation du Site impliquent l&apos;acceptation pleine et entière des
        présentes CGU. L&apos;Éditeur se réserve le droit de modifier les CGU à tout moment. Les
        modifications prennent effet dès leur publication en ligne. Il appartient à l&apos;utilisateur
        de consulter régulièrement cette page.
      </p>

      <h2>3. Accès au Site</h2>
      <p>
        L&apos;accès au Site est gratuit et ne nécessite pas de création de compte. L&apos;Éditeur
        s&apos;efforce de maintenir le Site accessible 24h/24 et 7j/7, mais ne peut garantir une
        disponibilité continue. Des interruptions pourront intervenir pour des raisons de maintenance,
        de mise à jour, ou en cas de force majeure.
      </p>
      <p>
        L&apos;Éditeur se réserve le droit de suspendre, limiter ou fermer l&apos;accès au Site à
        tout moment, sans préavis.
      </p>

      <h2>4. Services proposés</h2>
      <p>Le Site permet aux visiteurs de :</p>
      <ul>
        <li>S&apos;informer sur les offres de TV en direct disponibles.</li>
        <li>Consulter les chaînes incluses, les tarifs et les modalités des abonnements.</li>
        <li>Accéder aux guides d&apos;installation et d&apos;utilisation.</li>
        <li>Être redirigés vers des pages de souscription externes et sécurisées.</li>
        <li>Contacter le support via le formulaire de contact.</li>
      </ul>
      <p>
        Le Site n&apos;héberge aucun flux vidéo, aucun lecteur de streaming et n&apos;assure aucune
        fonctionnalité d&apos;accès aux chaînes directement depuis ses pages.
      </p>

      <h2>5. Abonnement et paiement</h2>
      <p>
        La souscription à un abonnement s&apos;effectue exclusivement via des pages de paiement
        sécurisées gérées par des prestataires tiers. L&apos;Éditeur n&apos;intervient pas dans le
        processus de paiement et ne collecte ni ne stocke aucune donnée bancaire.
      </p>
      <p>
        Les tarifs des offres sont indiqués à titre informatif sur le Site et peuvent être modifiés
        sans préavis. Le prix applicable est celui affiché sur la page de paiement externe au moment
        de la souscription.
      </p>
      <p>
        Les conditions de remboursement, de résiliation et de renouvellement sont définies par le
        prestataire de paiement tiers. L&apos;utilisateur est invité à les consulter attentivement
        avant toute souscription.
      </p>

      <h2>6. Obligations de l&apos;utilisateur</h2>
      <p>En utilisant ce Site, vous vous engagez à :</p>
      <ul>
        <li>Utiliser le Site conformément aux lois et réglementations en vigueur.</li>
        <li>Ne pas porter atteinte aux droits de tiers, notamment aux droits de propriété intellectuelle.</li>
        <li>
          Ne pas utiliser le Site à des fins illicites, frauduleuses ou contraires à l&apos;ordre
          public et aux bonnes mœurs.
        </li>
        <li>
          Ne pas tenter de perturber, d&apos;endommager ou d&apos;accéder de façon non autorisée aux
          systèmes informatiques liés au Site.
        </li>
        <li>
          Fournir des informations exactes lors de toute prise de contact avec l&apos;Éditeur.
        </li>
      </ul>

      <h2>7. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus du Site (textes, images, logos, structure, design) sont la
        propriété exclusive de l&apos;Éditeur ou de ses partenaires, et sont protégés par le droit
        de la propriété intellectuelle. Toute reproduction, représentation ou diffusion, partielle ou
        totale, est strictement interdite sans l&apos;autorisation préalable écrite de l&apos;Éditeur.
      </p>

      <h2>8. Exclusion de garanties et limitation de responsabilité</h2>
      <p>
        Le Site est fourni « en l&apos;état », sans garantie d&apos;aucune sorte. L&apos;Éditeur ne
        garantit pas que le Site sera exempt d&apos;erreurs, de virus ou d&apos;autres éléments
        nuisibles. L&apos;utilisation du Site se fait sous la seule responsabilité de
        l&apos;utilisateur.
      </p>
      <p>
        L&apos;Éditeur ne saurait être tenu responsable de tout dommage direct ou indirect résultant
        de l&apos;utilisation du Site, de l&apos;impossibilité d&apos;y accéder, ou de la confiance
        accordée aux informations qui y figurent.
      </p>
      <p>
        L&apos;Éditeur n&apos;est pas responsable des offres, des conditions et du service fourni par
        les prestataires tiers vers lesquels le Site renvoie. Tout litige relatif à un abonnement
        souscrit devra être adressé directement au prestataire concerné.
      </p>

      <h2>9. Liens hypertextes</h2>
      <p>
        Le Site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre
        informatif uniquement. L&apos;Éditeur n&apos;exerce aucun contrôle sur le contenu de ces
        sites et ne peut être tenu responsable de leur contenu ou de leurs pratiques.
      </p>

      <h2>10. Protection des données personnelles</h2>
      <p>
        L&apos;utilisation du Site peut impliquer la collecte de certaines données personnelles.
        Ces traitements sont effectués dans le respect du RGPD et de la loi Informatique et Libertés.
        Pour plus d&apos;informations, consultez notre{' '}
        <a href="/confidentialite">Politique de confidentialité</a>.
      </p>

      <h2>11. Résiliation</h2>
      <p>
        L&apos;Éditeur se réserve le droit de restreindre l&apos;accès au Site à tout utilisateur
        qui ne respecterait pas les présentes CGU, et ce sans préavis ni indemnité.
      </p>

      <h2>12. Droit applicable et juridiction</h2>
      <p>
        Les présentes CGU sont régies par le droit français. En cas de litige relatif à leur
        interprétation ou à leur exécution, et à défaut de résolution amiable, les tribunaux
        compétents de Los Angeles (Californie, États-Unis) seront seuls compétents.
      </p>

      <h2>13. Contact</h2>
      <p>
        Pour toute question relative aux présentes CGU, vous pouvez nous contacter à :{' '}
        <a href="mailto:contact@iptv-xtream.com">contact@iptv-xtream.com</a>
      </p>

      <p>
        <em>Dernière mise à jour : juin 2026</em>
      </p>
    </LegalContent>
  );
}

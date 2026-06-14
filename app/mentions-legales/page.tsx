import type { Metadata } from 'next';
import { LegalContent } from '@/components/legal/LegalContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Mentions légales',
  description: 'Mentions légales du site OffreIPTV : éditeur, hébergeur et directeur de publication.',
  path: '/mentions-legales',
});

export default function MentionsLegalesPage() {
  return (
    <LegalContent title="Mentions légales">
      <p>
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en
        l&apos;économie numérique (LCEN), les présentes mentions légales précisent l&apos;identité
        des différents intervenants dans le cadre de la réalisation et du suivi du site{' '}
        <strong>offreiptv.com</strong>.
      </p>

      <h2>1. Éditeur du site</h2>
      <p>
        Le site <strong>offreiptv.com</strong> est édité par :
      </p>
      <ul>
        <li>
          <strong>Raison sociale :</strong> IPPremium LLC
        </li>
        <li>
          <strong>Forme juridique :</strong> Limited Liability Company (LLC)
        </li>
        <li>
          <strong>Siège social :</strong> 3820 Wilshire Boulevard, Suite 410, Los Angeles, CA 90010,
          États-Unis
        </li>
        <li>
          <strong>EIN (Employer Identification Number) :</strong> 47-3829164
        </li>
        <li>
          <strong>État d&apos;immatriculation :</strong> California, États-Unis
        </li>
        <li>
          <strong>Directeur de la publication :</strong> IPPremium LLC
        </li>
        <li>
          <strong>Email :</strong>{' '}
          <a href="mailto:contact@iptv-xtream.com">contact@iptv-xtream.com</a>
        </li>
      </ul>

      <h2>2. Hébergement</h2>
      <p>Le site est hébergé par :</p>
      <ul>
        <li>
          <strong>Société :</strong> Vercel Inc.
        </li>
        <li>
          <strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis
        </li>
        <li>
          <strong>Site web :</strong>{' '}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            vercel.com
          </a>
        </li>
      </ul>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble de ce site, y compris sa structure, son design graphique, ses textes, ses
        images, ses vidéos, ses logos et icônes, constitue une œuvre protégée par les lois françaises
        et internationales relatives à la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication, adaptation ou exploitation de
        tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
        interdite sans l&apos;autorisation écrite préalable de l&apos;éditeur, sous peine de
        poursuites judiciaires.
      </p>
      <p>
        Les marques, logos et signes distinctifs présents sur le site sont la propriété exclusive de
        leurs détenteurs respectifs. Toute utilisation sans autorisation est constitutive de
        contrefaçon.
      </p>

      <h2>4. Limitation de responsabilité</h2>
      <p>
        L&apos;éditeur s&apos;efforce de fournir sur ce site des informations aussi précises que
        possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et
        des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers
        partenaires qui lui fournissent ces informations.
      </p>
      <p>
        Toutes les informations disponibles sur ce site sont données à titre indicatif, non
        exhaustives, et sont susceptibles d&apos;évoluer. Elles sont données sous réserve de
        modifications ayant pu être apportées depuis leur mise en ligne.
      </p>
      <p>
        L&apos;éditeur ne saurait être tenu responsable des dommages directs ou indirects causés au
        matériel de l&apos;utilisateur lors de l&apos;accès au site, résultant de l&apos;utilisation
        d&apos;un matériel non conforme aux spécifications techniques indiquées.
      </p>

      <h2>5. Liens hypertextes</h2>
      <p>
        Le site <strong>offreiptv.com</strong> peut contenir des liens vers d&apos;autres sites
        internet. Ces liens sont proposés pour votre commodité et à des fins d&apos;information
        uniquement. L&apos;éditeur n&apos;exerce aucun contrôle sur ces sites et décline toute
        responsabilité quant à leur contenu, leurs pratiques en matière de confidentialité ou leur
        fiabilité.
      </p>
      <p>
        La création de liens hypertextes vers ce site est soumise à l&apos;accord préalable écrit de
        l&apos;éditeur.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Le site est susceptible d&apos;utiliser des cookies à des fins de mesure d&apos;audience et
        d&apos;amélioration de l&apos;expérience utilisateur. Vous pouvez paramétrer votre navigateur
        pour refuser les cookies ou être informé de leur dépôt. Pour plus d&apos;informations,
        consultez notre{' '}
        <a href="/confidentialite">Politique de confidentialité</a>.
      </p>

      <h2>7. Droit applicable et juridiction compétente</h2>
      <p>
        Les présentes mentions légales sont soumises au droit français. En cas de litige relatif à
        l&apos;interprétation ou à l&apos;exécution de celles-ci, les tribunaux français seront seuls
        compétents.
      </p>

      <h2>8. Contact</h2>
      <p>
        Pour toute question relative au site ou à son fonctionnement, vous pouvez nous contacter à
        l&apos;adresse suivante :{' '}
        <a href="mailto:contact@iptv-xtream.com">contact@iptv-xtream.com</a>
      </p>

      <p>
        <em>Dernière mise à jour : juin 2026</em>
      </p>
    </LegalContent>
  );
}

import { useLanguage } from '../context/LanguageContext';

export function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Mentions Légales & Politique de Confidentialité",
      company_label: "Éditeur du site",
      company_name: "SaaS Security (Business Unit : Fali-ITSourcing)",
      address_label: "Siège social",
      address_value: "261, bd Abdelmoumen, 20100 Casablanca, Maroc",
      host_label: "Hébergement",
      host_info: "Ce site est hébergé par OVH SAS (2 rue Kellermann - 59100 Roubaix - France).",
      privacy_title: "Protection des Données (RGPD & Loi 09-08)",
      privacy_text: "Les données collectées via notre formulaire de contact (nom, e-mail, entreprise, téléphone) sont traitées par SaaS Security pour le compte de sa BU Fali-ITSourcing. Conformément à la loi marocaine 09-08 et au RGPD européen, ces informations sont utilisées exclusivement pour répondre à vos demandes d'approvisionnement, de négoce IT et pour la gestion de la relation commerciale.",
      data_rights: "Vous disposez d'un droit d'accès, de rectification et d'opposition au traitement de vos données personnelles, conformément à la loi 09-08, en nous contactant directement via WhatsApp ou par e-mail.",
      retention: "Durée de conservation : Les données sont conservées pendant la durée nécessaire au traitement de votre demande de sourcing et au suivi de la relation d'affaires."
    },
    en: {
      title: "Legal Notice & Privacy Policy",
      company_label: "Site Publisher",
      company_name: "SaaS Security (Business Unit: Fali-ITSourcing)",
      address_label: "Headquarters",
      address_value: "261, bd Abdelmoumen, 20100 Casablanca, Morocco",
      host_label: "Hosting",
      host_info: "This site is hosted by OVH SAS (2 rue Kellermann - 59100 Roubaix - France).",
      privacy_title: "Data Protection (GDPR & Moroccan Law 09-08)",
      privacy_text: "Data collected through our contact form (name, email, company, phone) is processed by SaaS Security on behalf of its Fali-ITSourcing BU. In compliance with Moroccan Law 09-08 and GDPR, this information is used exclusively to respond to your procurement and IT trading requests and for business relationship management.",
      data_rights: "You have the right to access, rectify, and oppose the processing of your personal data, in accordance with Law 09-08, by contacting us via WhatsApp or email.",
      retention: "Retention period: Data is kept for the time necessary to process your sourcing request and business follow-up."
    }
  };

  const t = content[language as 'fr' | 'en'] || content.fr;

  return (
    <div className="bg-[#2a2a2a] text-gray-300 p-8 rounded-lg border border-[#00d4ff]/20 max-w-4xl mx-auto my-10 shadow-2xl">
      {/* En-tête de la section */}
      <h2 className="text-[#00d4ff] text-2xl font-bold mb-8 border-b border-[#00d4ff]/10 pb-4">
        {t.title}
      </h2>
      
      {/* Informations Légales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <section>
          <h3 className="text-white font-semibold mb-3 uppercase text-xs tracking-widest">
            {t.company_label}
          </h3>
          <p className="text-gray-400">
            <span className="text-white font-medium">{t.company_name}</span><br />
            {t.address_label}: {t.address_value}
          </p>
        </section>

        <section>
          <h3 className="text-white font-semibold mb-3 uppercase text-xs tracking-widest">
            {t.host_label}
          </h3>
          <p className="text-gray-400">
            {t.host_info}
          </p>
        </section>
      </div>

      {/* Section Conformité Loi 09-08 / RGPD */}
      <section className="bg-[#1a1a1a] p-6 rounded-md border-l-4 border-[#00d4ff]">
        <h3 className="text-[#00d4ff] font-bold text-lg mb-4">
          {t.privacy_title}
        </h3>
        <p className="mb-4 leading-relaxed text-sm md:text-base">
          {t.privacy_text}
        </p>
        <div className="space-y-3 pt-4 border-t border-white/5">
          <p className="text-sm italic text-gray-400">
            {t.data_rights}
          </p>
          <div className="inline-block bg-[#00d4ff]/10 px-3 py-1 rounded text-[10px] font-bold text-[#00d4ff] uppercase tracking-wider">
            {t.retention}
          </div>
        </div>
      </section>
    </div>
  );
}
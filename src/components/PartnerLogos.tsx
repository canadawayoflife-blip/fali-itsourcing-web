import { useLanguage } from '../context/LanguageContext';

export function PartnerLogos() {
  const { language, t } = useLanguage();

  // Définition des partenaires avec leurs noms
  const partners = [
    { name: 'Cisco', logo: 'https://cdn.brandfetch.io/ida_xaMYlM/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1742365554659' },
    { name: 'Fortinet', logo: 'https://cdn.brandfetch.io/idhf2Q-9um/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1677484254618' },
    { name: 'Paloalto', logo: 'https://cdn.brandfetch.io/idfPYio-v-/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1761200786691' },
    { name: 'HPE', logo: 'https://cdn.brandfetch.io/id6dDR71C_/w/2100/h/600/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1753651904537' },
    { name: 'Dell', logo: 'https://cdn.brandfetch.io/idc1hWCJYN/theme/dark/id-KJ2INDA.svg?c=1bxid64Mup7aczewSAYMX&t=1721282599050' },
  ];

  // Fonction pour générer un alt-text SEO pertinent selon la langue
  const getAltText = (name: string) => {
    if (language === 'fr') {
      return `Logo ${name} - Partenaire sourcing et équipement IT Fali-ITSourcing`;
    }
    return `${name} logo - IT sourcing and equipment partner Fali-ITSourcing`;
  };

  return (
    <section className="py-12 bg-[#1a1a1a]/50 border-y border-[#00d4ff]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-500 text-xs font-semibold uppercase tracking-[0.2em] mb-10">
          {t('partner_tagline')}
        </p>
        
        {/* Modif : flex-wrap au lieu de flex-nowrap pour permettre le retour à la ligne sur mobile */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-16 pb-4">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="flex-shrink-0 group basis-[40%] md:basis-auto flex justify-center"
            >
              <img
                src={partner.logo}
                /* Utilisation du alt-text optimisé */
                alt={getAltText(partner.name)}
                className="h-7 md:h-9 w-auto opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
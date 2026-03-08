import { useLanguage } from '../context/LanguageContext';

export function PartnerLogos() {
  const { t } = useLanguage();
  const partners = [
    { name: 'Cisco', logo: 'https://cdn.brandfetch.io/ida_xaMYlM/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1742365554659' },
    { name: 'Fortinet', logo: 'https://cdn.brandfetch.io/idhf2Q-9um/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1677484254618' },
    { name: 'Paloalto', logo: 'https://cdn.brandfetch.io/idfPYio-v-/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1761200786691' },
    { name: 'HPE', logo: 'https://cdn.brandfetch.io/id6dDR71C_/w/2100/h/600/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1753651904537' },
    { name: 'Dell', logo: 'https://cdn.brandfetch.io/idc1hWCJYN/theme/dark/id-KJ2INDA.svg?c=1bxid64Mup7aczewSAYMX&t=1721282599050' },
  ];

  return (
    <section className="py-12 bg-[#1a1a1a]/50 border-y border-[#00d4ff]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-500 text-xs font-semibold uppercase tracking-[0.2em] mb-10">
          {t('partner_tagline')}
        </p>
        
        {/* On utilise flex-nowrap et overflow-x-auto pour forcer la ligne unique */}
        <div className="flex flex-nowrap justify-between items-center gap-8 md:gap-16 overflow-x-auto pb-4 scrollbar-hide">
          {partners.map((partner) => (
            <div key={partner.name} className="flex-shrink-0 group">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-7 md:h-9 w-auto opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
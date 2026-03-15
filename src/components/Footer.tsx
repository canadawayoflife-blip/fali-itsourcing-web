import { useLanguage } from '../context/LanguageContext';

// 1. On ajoute l'interface pour accepter la fonction onPrivacyClick
interface FooterProps {
  onPrivacyClick: () => void;
}

export function Footer({ onPrivacyClick }: FooterProps) {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] border-t border-[#00d4ff]/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-[#00d4ff] font-semibold mb-4">Fali-ITSourcing</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{t('footer_tagline')}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-[#00d4ff] transition-colors">{t('nav_home')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#00d4ff] transition-colors">{t('nav_services')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#00d4ff] transition-colors">{t('nav_about')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#00d4ff] transition-colors">{t('nav_contact')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">{t('service1_title')}</span></li>
              <li><span className="text-gray-400">{t('service2_title')}</span></li>
              <li><span className="text-gray-400">{t('service3_title')}</span></li>
            </ul>
          </div>
        </div>

        {/* 2. Partie basse avec le lien vers la Politique de Confidentialité */}
        <div className="border-t border-[#00d4ff]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Fali-ITSourcing (SaaS Security). All rights reserved.
          </p>
          
          <button 
            onClick={onPrivacyClick}
            className="text-gray-500 hover:text-[#00d4ff] text-xs transition-colors underline underline-offset-4 decoration-[#00d4ff]/20"
          >
            {language === 'fr' 
              ? "Mentions Légales & Confidentialité (Loi 09-08)" 
              : "Legal Notice & Privacy Policy (Law 09-08)"}
          </button>
        </div>
      </div>
    </footer>
  );
}
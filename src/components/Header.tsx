import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2a2a2a]/95 backdrop-blur-sm border-b border-[#00d4ff]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-12 h-12 bg-gradient-to-br from-[#00d4ff] to-[#0088cc] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <div>
              <div className="text-white font-bold text-xl tracking-tight">Fali-ITSourcing</div>
              <div className="text-[#00d4ff] text-[10px] uppercase tracking-wider font-medium text-shadow-sm">{t('header_slogan')}</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-[#00d4ff] transition-colors font-medium"
            >
              {t('nav_home')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-[#00d4ff] transition-colors font-medium"
            >
              {t('nav_services')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-[#00d4ff] transition-colors font-medium"
            >
              {t('nav_about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-[#00d4ff] transition-colors font-medium"
            >
              {t('nav_contact')}
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-[#00d4ff]" />
            <div className="flex bg-[#1a1a1a] rounded-md p-1 border border-white/5">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                  language === 'en'
                    ? 'bg-[#00d4ff] text-[#1a1a1a] shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                  language === 'fr'
                    ? 'bg-[#00d4ff] text-[#1a1a1a] shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d4ff] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0088cc] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero_title')}
          </h1>
          <p className="text-xl md:text-2xl text-[#00d4ff] mb-6 font-light">
            {t('hero_subtitle')}
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero_description')}
          </p>
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-[#00d4ff] to-[#0088cc] text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all transform hover:scale-105"
          >
            <span>{t('hero_cta')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#2a2a2a]/50 backdrop-blur-sm border border-[#00d4ff]/20 rounded-lg p-6 hover:border-[#00d4ff]/50 transition-colors">
            <div className="text-4xl font-bold text-[#00d4ff] mb-2">⚡</div>
            <div className="text-white font-semibold mb-1">{t('hero_card1_title')}</div>
            <div className="text-gray-400 text-sm">{t('hero_card1_desc')}</div>
          </div>
          <div className="bg-[#2a2a2a]/50 backdrop-blur-sm border border-[#00d4ff]/20 rounded-lg p-6 hover:border-[#00d4ff]/50 transition-colors">
            <div className="text-4xl font-bold text-[#00d4ff] mb-2">✓</div>
            <div className="text-white font-semibold mb-1">{t('hero_card2_title')}</div>
            <div className="text-gray-400 text-sm">{t('hero_card2_desc')}</div>
          </div>
          <div className="bg-[#2a2a2a]/50 backdrop-blur-sm border border-[#00d4ff]/20 rounded-lg p-6 hover:border-[#00d4ff]/50 transition-colors">
            <div className="text-4xl font-bold text-[#00d4ff] mb-2">📋</div>
            <div className="text-white font-semibold mb-1">{t('hero_card3_title')}</div>
            <div className="text-gray-400 text-sm">{t('hero_card3_desc')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Zap, Lock, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('about_title')}
          </h2>
          <p className="text-xl text-[#00d4ff]">{t('about_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about_p1')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about_p2')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about_p3')}
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#2a2a2a] border border-[#00d4ff]/20 rounded-lg p-6 hover:border-[#00d4ff]/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#0088cc]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{t('about_card1_title')}</h3>
                  <p className="text-gray-400">{t('about_card1_desc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#2a2a2a] border border-[#00d4ff]/20 rounded-lg p-6 hover:border-[#00d4ff]/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#0088cc]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{t('about_card2_title')}</h3>
                  <p className="text-gray-400">{t('about_card2_desc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#2a2a2a] border border-[#00d4ff]/20 rounded-lg p-6 hover:border-[#00d4ff]/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#0088cc]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{t('about_card3_title')}</h3>
                  <p className="text-gray-400">{t('about_card3_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

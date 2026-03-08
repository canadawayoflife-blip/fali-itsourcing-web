import { Zap, Shield, Scale, Database, FileCheck, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Zap, title: 'service1_title', desc: 'service1_desc' },
    { icon: Shield, title: 'service2_title', desc: 'service2_desc' },
    { icon: Scale, title: 'service3_title', desc: 'service3_desc' },
    { icon: Database, title: 'service4_title', desc: 'service4_desc' },
    { icon: FileCheck, title: 'service5_title', desc: 'service5_desc' },
    { icon: Truck, title: 'service6_title', desc: 'service6_desc' },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('services_title')}
          </h2>
          <p className="text-xl text-[#00d4ff]">{t('services_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-[#2a2a2a] border border-[#00d4ff]/20 rounded-lg p-8 hover:border-[#00d4ff] hover:shadow-lg hover:shadow-[#00d4ff]/20 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#00d4ff]/20 to-[#0088cc]/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t(service.title)}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t(service.desc)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

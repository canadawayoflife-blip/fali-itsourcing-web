import { useEffect, useState } from 'react';
import { useLanguage } from './context/LanguageContext'; 
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PartnerLogos } from './components/PartnerLogos';
import { Services } from './components/Services';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Footer } from './components/Footer';

function App() {
  // 1. Initialisation des hooks (Langue et état de la Modale Privacy)
  const { language } = useLanguage(); 
  const [showPrivacy, setShowPrivacy] = useState(false);

  // 2. --- BLOC SEO : GESTION DYNAMIQUE DES MÉTAS ---
  // Met à jour les balises du navigateur pour le référencement (Zones d'Accélération Industrielle)
  useEffect(() => {
    const metaData = {
      fr: {
        title: "Fali-ITSourcing | Sourcing, Négoce & Logistique IT pour les Zones d'Accélération Industrielle au Maroc",
        description: "Spécialiste de l'approvisionnement en équipements IT (Cisco, Fortinet, Palo Alto, HPE, Dell). Expertise en négoce international, gestion douanière et logistique pour les Zones d'Accélération Industrielle au Maroc.",
      },
      en: {
        title: "Fali-ITSourcing | IT Sourcing, Trading & Logistics for Industrial Acceleration Zones in Morocco",
        description: "Specialist in IT equipment procurement (Cisco, Fortinet, Palo Alto, HPE). Expertise in international trading, customs management, and logistics for Industrial Acceleration Zones in Morocco.",
      }
    };

    const current = metaData[language as 'fr' | 'en'] || metaData.fr;
    document.title = current.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', current.description);
    }
  }, [language]);

  // 3. --- BLOC WHATSAPP : PRÉPARATION DU MESSAGE ---
  const whatsappMessage = language === 'fr' 
    ? "Bonjour\n\nJ'aimerai avoir des informations complémentaires sur les services de sourcing de Fali-ITsourcing.\n\nMerci de me contacter."
    : "Hello\n\nI would like to have more information about Fali-ITsourcing's sourcing services.\n\nPlease contact me.";

  return (
    <div className="min-h-screen bg-[#1a1a1a] relative">
      {/* 4. Navigation fixe en haut */}
      <Header />
      
      {/* 5. Sections principales du site */}
      <main>
        <Hero />
        <PartnerLogos />
        <Services />
        <About />
        <ContactForm />
      </main>
      
      {/* 6. Pied de page avec déclencheur pour la politique de confidentialité */}
      <Footer onPrivacyClick={() => setShowPrivacy(true)} />

      {/* 7. BOUTON WHATSAPP FLOTTANT */}
      <a 
        href={`https://wa.me/212661847999?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 w-[60px] h-[60px] bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-[9999]"
        title={language === 'fr' ? "Contactez-nous" : "Contact us"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

      {/* 8. OVERLAY DE LA POLITIQUE DE CONFIDENTIALITÉ (Modale) */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <button 
              onClick={() => setShowPrivacy(false)}
              className="absolute top-6 right-6 text-white hover:text-[#00d4ff] text-2xl z-10 p-2"
              title="Fermer"
            >
              ✕
            </button>
            <PrivacyPolicy />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
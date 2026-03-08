import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    nav_home: 'Home',
    nav_services: 'Services',
    nav_about: 'About',
    nav_contact: 'Contact',
    header_slogan: 'IT Critical Sourcing',
    hero_title: "Reliable IT Sourcing for Morocco's Industrial Acceleration Zones",
    hero_subtitle: 'High-performance hardware, guaranteed authenticity, and seamless customs clearance for critical industrial infrastructure.',
    hero_description: 'Fast-track supply chain solutions with 100% genuine equipment and full compliance with Free Zone regulations.',
    hero_cta: 'Request Quote',
    hero_card1_title: 'Fast-Track Supply',
    hero_card1_desc: 'Minimal lead times, maximum efficiency',
    hero_card2_title: '100% Authentic',
    hero_card2_desc: 'Genuine hardware with full certification',
    hero_card3_title: 'Full Compliance',
    hero_card3_desc: 'Seamless customs & ZAI regulations',
    partner_tagline: 'Authentic Equipment & Certified Manufacturers',
    services_title: 'Our Core Capabilities',
    services_subtitle: 'Industrial-Grade IT Solutions for ZAI',
    service1_title: 'Speed of Delivery',
    service1_desc: 'Fast-track supply chain optimized for Industrial Free Zone requirements. Minimal lead times, maximum efficiency.',
    service2_title: 'Equipment Authenticity',
    service2_desc: '100% genuine industrial IT hardware with full documentation and certification. Zero counterfeits, guaranteed.',
    service3_title: 'Legal & Customs Mastery',
    service3_desc: 'Expert navigation of Free Zone regulations. Complete compliance documentation and seamless customs clearance.',
    service4_title: 'Hardware Procurement',
    service4_desc: 'Sourcing of servers, networking equipment, and industrial-grade IT infrastructure from certified vendors.',
    service5_title: 'Regulatory Consulting',
    service5_desc: 'In-depth expertise in ZAI regulations, tariff optimization, and legal compliance frameworks.',
    service6_title: 'Supply Chain Management',
    service6_desc: 'End-to-end logistics coordination ensuring on-time delivery and zero delays for critical operations.',
    about_title: 'About Fali-ITSourcing',
    about_subtitle: 'Your Trusted Partner for Industrial Zone Procurement',
    about_p1: "Fali-ITSourcing specializes in high-stakes IT procurement for Morocco's Industrial Acceleration Zones (ZAI). We understand the unique regulatory environment, customs complexities, and critical timelines that demand Tier-1 partnerships.",
    about_p2: 'Our expertise spans authentic hardware sourcing, regulatory compliance, and expedited logistics. We eliminate procurement delays that compromise industrial operations while maintaining 100% legal and customs compliance.',
    about_p3: 'With Fali-ITSourcing, you gain a partner that combines operational excellence with deep knowledge of Free Zone regulations—ensuring zero delays and maximum reliability for your critical infrastructure projects.',
    about_card1_title: 'Zero-Delay Procurement',
    about_card1_desc: 'Expertise in navigating legal complexity to ensure on-time delivery for critical infrastructure',
    about_card2_title: 'Regulatory Mastery',
    about_card2_desc: 'Deep knowledge of ZAI regulations, customs protocols, and legal compliance frameworks',
    about_card3_title: 'Tier-1 Partnership',
    about_card3_desc: 'Operational excellence combined with proven reliability for mission-critical projects',
    contact_title: 'Request a Quote',
    contact_subtitle: "Let's discuss your Industrial Acceleration Zone IT requirements",
    form_name: 'Full Name',
    form_email: 'Email Address',
    form_company: 'Company / Organization',
    form_phone: 'Phone',
    form_message: 'Project Details & Requirements',
    form_submit: 'Send Inquiry',
    form_submitting: 'Sending...',
    form_success: 'Thank you! We will contact you within 24 hours.',
    form_error: 'An error occurred. Please try again.',
    footer_rights: 'All rights reserved.',
    footer_tagline: 'Industrial IT Sourcing for Morocco',
  },
  fr: {
    nav_home: 'Accueil',
    nav_services: 'Services',
    nav_about: 'À Propos',
    nav_contact: 'Contact',
    header_slogan: 'Approvisionnement IT Critique',
    hero_title: 'Sourcing IT Fiable pour les Zones d\'Accélération Industrielle au Maroc',
    hero_subtitle: 'Équipements haute performance, authenticité garantie et dédouanement sans friction pour les infrastructures industrielles critiques.',
    hero_description: 'Solutions de chaîne d\'approvisionnement accélérées avec équipements 100% authentiques et conformité totale aux réglementations des zones franches.',
    hero_cta: 'Demander un Devis',
    hero_card1_title: 'Approvisionnement Accéléré',
    hero_card1_desc: 'Délais minimaux, efficacité maximale',
    hero_card2_title: '100% Authentique',
    hero_card2_desc: 'Matériel véritable avec certification complète',
    hero_card3_title: 'Conformité Complète',
    hero_card3_desc: 'Dédouanement transparent et réglementations ZAI',
    partner_tagline: 'Équipements Authentiques & Fabricants Certifiés',
    services_title: 'Nos Capacités Principales',
    services_subtitle: 'Solutions IT de Classe Industrielle pour ZAI',
    service1_title: 'Rapidité de Livraison',
    service1_desc: 'Chaîne d\'approvisionnement accélérée optimisée pour les zones franches industrielles. Délais minimaux, efficacité maximale.',
    service2_title: 'Authenticité de l\'Équipement',
    service2_desc: 'Matériel informatique industriel 100% authentique avec documentation et certification complètes. Zéro contrefaçon, garanti.',
    service3_title: 'Maîtrise Légale & Douanière',
    service3_desc: 'Navigation experte des réglementations des zones franches. Documentation de conformité complète et dédouanement transparent.',
    service4_title: 'Approvisionnement Matériel',
    service4_desc: 'Sourcing de serveurs, équipements réseau et infrastructures IT de classe industrielle auprès de fournisseurs certifiés.',
    service5_title: 'Conseil Réglementaire',
    service5_desc: 'Expertise approfondie des réglementations des zones franches, optimisation tarifaire et cadres de conformité légale.',
    service6_title: 'Gestion de la Chaîne d\'Approvisionnement',
    service6_desc: 'Coordination logistique de bout en bout garantissant la livraison à temps et zéro retard pour les opérations critiques.',
    about_title: 'À Propos de Fali-ITSourcing',
    about_subtitle: 'Votre Partenaire de Confiance pour l\'Approvisionnement des Zones Industrielles',
    about_p1: "Fali-ITSourcing se spécialise dans l'approvisionnement IT haute performance pour les Zones d'Accélération Industrielle (ZAI) au Maroc. Nous comprenons l'environnement réglementaire unique, les complexités douanières et les délais critiques qui exigent des partenariats de classe mondiale.",
    about_p2: 'Notre expertise couvre le sourcing d\'équipements authentiques, la conformité réglementaire et la logistique accélérée. Nous éliminons les retards d\'approvisionnement qui compromettent les opérations industrielles tout en maintenant une conformité légale et douanière 100%.',
    about_p3: 'Avec Fali-ITSourcing, vous gagnez un partenaire qui combine l\'excellence opérationnelle avec une connaissance approfondie des réglementations des zones franches—assurant zéro retard et fiabilité maximale pour vos projets d\'infrastructure critiques.',
    about_card1_title: 'Approvisionnement Sans Délai',
    about_card1_desc: 'Expertise dans la navigation des complexités légales pour assurer la livraison à temps des infrastructures critiques',
    about_card2_title: 'Maîtrise Réglementaire',
    about_card2_desc: 'Connaissance approfondie des réglementations des zones franches, des protocoles douaniers et des cadres de conformité légale',
    about_card3_title: 'Partenariat de Classe Mondiale',
    about_card3_desc: 'Excellence opérationnelle combinée à une fiabilité éprouvée pour les projets critiques',
    contact_title: 'Demander un Devis',
    contact_subtitle: 'Discutons de vos besoins en sourcing IT pour la Zone d\'Accélération Industrielle',
    form_name: 'Nom Complet',
    form_email: 'Adresse Email',
    form_company: 'Entreprise / Organisation',
    form_phone: 'Téléphone',
    form_message: 'Détails du Projet et Exigences',
    form_submit: 'Envoyer la Demande',
    form_submitting: 'Envoi en cours...',
    form_success: 'Merci ! Nous vous contacterons dans les 24 heures.',
    form_error: 'Une erreur est survenue. Veuillez réessayer.',
    footer_rights: 'Tous droits réservés.',
    footer_tagline: 'Sourcing IT Industriel pour le Maroc',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

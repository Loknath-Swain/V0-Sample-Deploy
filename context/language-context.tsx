"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "english" | "hindi"

type Translations = {
  [key: string]: {
    english: string
    hindi: string
  }
}

// Define all translations here
const translations: Translations = {
  // Header
  "nav.services": {
    english: "Services",
    hindi: "सेवाएं",
  },
  "nav.subsidies": {
    english: "Subsidies",
    hindi: "सब्सिडी",
  },
  "nav.testimonials": {
    english: "Testimonials",
    hindi: "प्रशंसापत्र",
  },
  "nav.contact": {
    english: "Contact",
    hindi: "संपर्क",
  },
  "nav.getQuote": {
    english: "Get a Quote",
    hindi: "मूल्य पाएं",
  },
  "nav.gallery": {
    english: "Gallery",
    hindi: "गैलरी",
  },

  // Hero Section
  "hero.title": {
    english: "Harness the Power of the Sun",
    hindi: "सूरज की शक्ति का उपयोग करें",
  },
  "hero.subtitle": {
    english:
      "India's leading solar panel installation and distribution company. Clean energy solutions for a brighter future.",
    hindi: "भारत की अग्रणी सोलर पैनल इंस्टॉलेशन और वितरण कंपनी। उज्जवल भविष्य के लिए स्वच्छ ऊर्जा समाधान।",
  },
  "hero.getStarted": {
    english: "Get Started",
    hindi: "शुरू करें",
  },
  "hero.learnMore": {
    english: "Learn More",
    hindi: "और जानें",
  },

  // Services Section
  "services.title": {
    english: "Our Solar Solutions",
    hindi: "हमारे सौर समाधान",
  },
  "services.subtitle": {
    english: "Customized solar energy solutions for every need",
    hindi: "हर जरूरत के लिए अनुकूलित सौर ऊर्जा समाधान",
  },
  "services.residential.title": {
    english: "Residential Solutions",
    hindi: "आवासीय समाधान",
  },
  "services.residential.description": {
    english:
      "Reduce your electricity bills with our residential solar panel installations. Perfect for homes of all sizes.",
    hindi: "हमारे आवासीय सोलर पैनल इंस्टॉलेशन के साथ अपने बिजली बिल कम करें। सभी आकारों के घरों के लिए उपयुक्त।",
  },
  "services.commercial.title": {
    english: "Commercial Solutions",
    hindi: "वाणिज्यिक समाधान",
  },
  "services.commercial.description": {
    english: "Sustainable energy solutions for businesses, offices, and commercial buildings with excellent ROI.",
    hindi: "व्यवसायों, कार्यालयों और वाणिज्यिक भवनों के लिए उत्कृष्ट आरओआई के साथ टिकाऊ ऊर्जा समाधान।",
  },
  "services.industrial.title": {
    english: "Industrial Solutions",
    hindi: "औद्योगिक समाधान",
  },
  "services.industrial.description": {
    english:
      "Large-scale solar installations for factories and industrial complexes to significantly reduce operational costs.",
    hindi: "परिचालन लागत को काफी कम करने के लिए कारखानों और औद्योगिक परिसरों के लिए बड़े पैमाने पर सौर स्थापना।",
  },

  // Subsidies Section
  "subsidies.title": {
    english: "Government Subsidies and Incentives",
    hindi: "सरकारी सब्सिडी और प्रोत्साहन",
  },
  "subsidies.description": {
    english:
      "Take advantage of India's generous solar subsidies and tax benefits to make your switch to solar even more affordable.",
    hindi: "अपने सौर ऊर्जा को और भी किफायती बनाने के लिए भारत की उदार सौर सब्सिडी और कर लाभों का लाभ उठाएं।",
  },
  "subsidies.residential.title": {
    english: "Residential Subsidy",
    hindi: "आवासीय सब्सिडी",
  },
  "subsidies.residential.description": {
    english: "Up to 40% subsidy on solar rooftop installations for residential customers.",
    hindi: "आवासीय ग्राहकों के लिए सोलर रूफटॉप इंस्टॉलेशन पर 40% तक की सब्सिडी।",
  },
  "subsidies.netMetering.title": {
    english: "Net Metering Benefits",
    hindi: "नेट मीटरिंग लाभ",
  },
  "subsidies.netMetering.description": {
    english: "Sell excess electricity back to the grid and reduce your electricity bills further.",
    hindi: "अतिरिक्त बिजली को ग्रिड को वापस बेचें और अपने बिजली बिल को और कम करें।",
  },
  "subsidies.taxBenefits.title": {
    english: "Tax Benefits",
    hindi: "कर लाभ",
  },
  "subsidies.taxBenefits.description": {
    english: "Accelerated depreciation benefits for commercial and industrial installations.",
    hindi: "वाणिज्यिक और औद्योगिक प्रतिष्ठानों के लिए त्वरित मूल्यह्रास लाभ।",
  },
  "subsidies.checkEligibility": {
    english: "Check Eligibility",
    hindi: "पात्रता जांचें",
  },

  // Testimonials Section
  "testimonials.title": {
    english: "What Our Customers Say",
    hindi: "हमारे ग्राहक क्या कहते हैं",
  },
  "testimonials.subtitle": {
    english: "Hear from our satisfied customers across India",
    hindi: "पूरे भारत में हमारे संतुष्ट ग्राहकों से सुनें",
  },

  // Contact Section
  "contact.title": {
    english: "Get in Touch",
    hindi: "संपर्क करें",
  },
  "contact.description": {
    english: "Ready to start your solar journey? Contact us for a free consultation and quote.",
    hindi: "अपनी सौर यात्रा शुरू करने के लिए तैयार हैं? निःशुल्क परामर्श और उद्धरण के लिए हमसे संपर्क करें।",
  },
  "contact.callUs": {
    english: "Call Us",
    hindi: "हमें कॉल करें",
  },
  "contact.email": {
    english: "Email",
    hindi: "ईमेल",
  },
  "contact.visitUs": {
    english: "Visit Us",
    hindi: "हमसे मिलें",
  },

  // Form
  "form.name": {
    english: "Name",
    hindi: "नाम",
  },
  "form.email": {
    english: "Email",
    hindi: "ईमेल",
  },
  "form.phone": {
    english: "Phone",
    hindi: "फोन",
  },
  "form.serviceType": {
    english: "Service Type",
    hindi: "सेवा प्रकार",
  },
  "form.message": {
    english: "Message",
    hindi: "संदेश",
  },
  "form.submit": {
    english: "Send Inquiry",
    hindi: "पूछताछ भेजें",
  },
  "form.placeholder.name": {
    english: "Your name",
    hindi: "आपका नाम",
  },
  "form.placeholder.email": {
    english: "Your email",
    hindi: "आपका ईमेल",
  },
  "form.placeholder.phone": {
    english: "Your phone number",
    hindi: "आपका फोन नंबर",
  },
  "form.placeholder.message": {
    english: "Tell us about your requirements",
    hindi: "हमें अपनी आवश्यकताओं के बारे में बताएं",
  },
  "form.select.placeholder": {
    english: "Select service type",
    hindi: "सेवा प्रकार चुनें",
  },
  "form.select.residential": {
    english: "Residential Solar",
    hindi: "आवासीय सौर",
  },
  "form.select.commercial": {
    english: "Commercial Solar",
    hindi: "वाणिज्यिक सौर",
  },
  "form.select.industrial": {
    english: "Industrial Solar",
    hindi: "औद्योगिक सौर",
  },
  "form.select.maintenance": {
    english: "Maintenance",
    hindi: "रखरखाव",
  },

  // Footer
  "footer.description": {
    english: "Bringing clean, renewable energy to homes and businesses across India.",
    hindi: "पूरे भारत में घरों और व्यवसायों के लिए स्वच्छ, नवीकरणीय ऊर्जा लाना।",
  },
  "footer.quickLinks": {
    english: "Quick Links",
    hindi: "त्वरित लिंक",
  },
  "footer.home": {
    english: "Home",
    hindi: "होम",
  },
  "footer.services": {
    english: "Services",
    hindi: "सेवाएं",
  },
  "footer.connect": {
    english: "Connect With Us",
    hindi: "हमसे जुड़ें",
  },
  "footer.copyright": {
    english: "All rights reserved.",
    hindi: "सर्वाधिकार सुरक्षित।",
  },

  // Gallery Section
  "gallery.title": {
    english: "Our Completed Installations",
    hindi: "हमारे पूर्ण किए गए इंस्टॉलेशन",
  },
  "gallery.subtitle": {
    english: "Browse through our portfolio of successful solar projects across India",
    hindi: "पूरे भारत में हमारे सफल सौर परियोजनाओं के पोर्टफोलियो को देखें",
  },
  "gallery.viewAll": {
    english: "View All Projects",
    hindi: "सभी परियोजनाएं देखें",
  },
  "gallery.residential": {
    english: "Residential",
    hindi: "आवासीय",
  },
  "gallery.commercial": {
    english: "Commercial",
    hindi: "वाणिज्यिक",
  },
  "gallery.industrial": {
    english: "औद्योगिक",
    hindi: "औद्योगिक",
  },
  "gallery.viewLarger": {
    english: "View Larger",
    hindi: "बड़ा देखें",
  },
  "gallery.close": {
    english: "Close",
    hindi: "बंद करें",
  },
  "gallery.previous": {
    english: "Previous",
    hindi: "पिछला",
  },
  "gallery.next": {
    english: "Next",
    hindi: "अगला",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("english")

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

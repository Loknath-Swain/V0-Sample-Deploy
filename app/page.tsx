"use client"

import { SunIcon, HomeIcon, BuildingIcon, Factory, PhoneCall, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import LanguageToggle from "@/components/language-toggle"
import ContactForm from "@/components/contact-form"
import TestimonialCarousel from "@/components/testimonial-carousel"
import { useLanguage } from "@/context/language-context"
// Add the import for the Gallery component at the top of the file
import Gallery from "@/components/gallery"

function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="SuryaShakti Logo" width={40} height={40} />
            <span className="text-xl font-bold text-green-700">SuryaShakti Solar</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-green-700 transition-colors">
              {t("nav.services")}
            </a>
            <a href="#subsidies" className="text-sm font-medium hover:text-green-700 transition-colors">
              {t("nav.subsidies")}
            </a>
            <a href="#gallery" className="text-sm font-medium hover:text-green-700 transition-colors">
              {t("nav.gallery")}
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-green-700 transition-colors">
              {t("nav.testimonials")}
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-green-700 transition-colors">
              {t("nav.contact")}
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Button className="hidden md:flex bg-green-700 hover:bg-green-800">{t("nav.getQuote")}</Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with updated gradient colors */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700/70 via-orange-500/70 to-pink-600/70 z-10" />
          <Image
            src="/images/solar-hero.jpg"
            alt="Solar panels on an Indian rooftop"
            width={1600}
            height={800}
            className="w-full h-[500px] object-cover"
          />
          <div className="container relative z-20 flex flex-col items-center justify-center text-center h-[500px] text-white">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{t("hero.title")}</h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl">{t("hero.subtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  {t("hero.getStarted")}
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  {t("hero.learnMore")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-green-700">{t("services.title")}</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t("services.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-amber-100 hover:border-amber-300 transition-colors">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="bg-amber-100 p-3 rounded-full mb-4">
                    <HomeIcon className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("services.residential.title")}</h3>
                  <p className="text-gray-600">{t("services.residential.description")}</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="bg-green-100 p-3 rounded-full mb-4">
                    <BuildingIcon className="h-8 w-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("services.commercial.title")}</h3>
                  <p className="text-gray-600">{t("services.commercial.description")}</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-100 hover:border-amber-300 transition-colors">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="bg-amber-100 p-3 rounded-full mb-4">
                    <Factory className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("services.industrial.title")}</h3>
                  <p className="text-gray-600">{t("services.industrial.description")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Subsidies Section */}
        <section id="subsidies" className="py-16 bg-amber-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/subsidies.jpg"
                  alt="Government solar subsidy"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-green-700">{t("subsidies.title")}</h2>
                <p className="text-lg text-gray-600">{t("subsidies.description")}</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <SunIcon className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{t("subsidies.residential.title")}</h3>
                      <p className="text-gray-600">{t("subsidies.residential.description")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full mt-1">
                      <SunIcon className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{t("subsidies.netMetering.title")}</h3>
                      <p className="text-gray-600">{t("subsidies.netMetering.description")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <SunIcon className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{t("subsidies.taxBenefits.title")}</h3>
                      <p className="text-gray-600">{t("subsidies.taxBenefits.description")}</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-green-700 hover:bg-green-800">{t("subsidies.checkEligibility")}</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-green-700">{t("testimonials.title")}</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-amber-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-green-700">{t("gallery.title")}</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t("gallery.subtitle")}</p>
            </div>

            <Gallery />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-green-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-green-700">{t("contact.title")}</h2>
                <p className="text-lg text-gray-600">{t("contact.description")}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <PhoneCall className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{t("contact.callUs")}</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <SunIcon className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{t("contact.email")}</h3>
                      <p className="text-gray-600">info@suryashakti.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <HomeIcon className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{t("contact.visitUs")}</h3>
                      <p className="text-gray-600">123 Solar Street, New Delhi, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="SuryaShakti Logo" width={40} height={40} />
                <span className="text-xl font-bold">SuryaShakti Solar</span>
              </div>
              <p className="text-green-100">{t("footer.description")}</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">{t("footer.quickLinks")}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-green-100 hover:text-amber-300 transition-colors">
                    {t("footer.home")}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-green-100 hover:text-amber-300 transition-colors">
                    {t("nav.services")}
                  </a>
                </li>
                <li>
                  <a href="#subsidies" className="text-green-100 hover:text-amber-300 transition-colors">
                    {t("nav.subsidies")}
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-green-100 hover:text-amber-300 transition-colors">
                    {t("nav.testimonials")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">{t("nav.services")}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-green-100 hover:text-amber-300 transition-colors">
                    {t("form.select.residential")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:text-amber-300 transition-colors">
                    {t("form.select.commercial")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:text-amber-300 transition-colors">
                    {t("form.select.industrial")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:text-amber-300 transition-colors">
                    {t("form.select.maintenance")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">{t("footer.connect")}</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-green-800 hover:bg-green-700 p-2 rounded-full transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="bg-green-800 hover:bg-green-700 p-2 rounded-full transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="bg-green-800 hover:bg-green-700 p-2 rounded-full transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-100">
            <p>
              &copy; {new Date().getFullYear()} SuryaShakti Solar. {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Home() {
  return <HomePage />
}

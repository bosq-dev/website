import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { useI18n } from '@/i18n/i18n';
import ProductCard from './components/ProductCard';
import {
  Database,
  Bot,
  Workflow,
  ArrowRight,
  CheckCircle,
  Mail,
  // Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X
} from 'lucide-react';

function App() {
  const { toast } = useToast();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  const handleContactClick = () => {
    toast({
      title: t('toast.contactTitle'),
      description: t('toast.contactDesc')
    });
  };

  const handleGetStartedClick = () => {
    toast({
      title: t('toast.getStartedTitle'),
      description: t('toast.getStartedDesc')
    });
  };

  const handleScrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const nav = document.querySelector('nav[aria-label="Primary navigation"]');
      const navHeight = nav ? nav.getBoundingClientRect().height : 0;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      // Offset by nav height (plus a tiny gap for visual comfort)
      window.scrollTo({
        top: Math.max(0, elementTop - navHeight - 8),
        behavior: 'smooth'
      });
    }
  };

  const products = [
    {
      icon: Database,
      iconColor: "text-blue-400",
      backgroundGradient: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
      title: t('products.market.title'),
      description: t('products.market.description'),
      features: [
        t('products.market.features.f1'),
        t('products.market.features.f2'),
        t('products.market.features.f3')
      ],
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      delay: 0.1
    },
    {
      icon: Bot,
      iconColor: "text-purple-400",
      backgroundGradient: "bg-gradient-to-br from-purple-500/20 to-purple-600/20",
      title: t('products.agents.title'),
      description: t('products.agents.description'),
      features: [
        t('products.agents.features.f1'),
        t('products.agents.features.f2'),
        t('products.agents.features.f3')
      ],
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      delay: 0.2
    },
    {
      icon: Workflow,
      iconColor: "text-green-400",
      backgroundGradient: "bg-gradient-to-br from-green-500/20 to-green-600/20",
      title: t('products.etl.title'),
      description: t('products.etl.description'),
      features: [
        t('products.etl.features.f1'),
        t('products.etl.features.f2'),
        t('products.etl.features.f3')
      ],
      buttonColor: "bg-green-600 hover:bg-green-700",
      delay: 0.3
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={t('meta.ogTitle')} />
        <meta property="og:description" content={t('meta.ogDescription')} />
      </Helmet>

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Skip link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
        >
          {t('common.skipToContent')}
        </a>
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 w-full z-50 glass-effect"
          aria-label={t('aria.primaryNav')}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                className="text-2xl md:text-3xl font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                bosq.dev
              </motion.div>
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => handleScrollToSection('products')} className="text-lg md:text-xl text-gray-300 hover:text-white transition-colors">{t('nav.products')}</button>
                <button onClick={() => handleScrollToSection('about')} className="text-lg md:text-xl text-gray-300 hover:text-white transition-colors">{t('nav.about')}</button>
                <button onClick={() => handleScrollToSection('contact')} className="text-lg md:text-xl text-gray-300 hover:text-white transition-colors">{t('nav.contact')}</button>
                <Button
                  onClick={handleGetStartedClick}
                  className="bg-white text-black hover:bg-gray-200 transition-all duration-300 text-lg md:text-xl p-2"
                  aria-label={t('aria.getStarted')}
                >
                  {t('cta.getStarted')}
                </Button>
              </div>
              <button
                aria-label={t('aria.toggleMenu')}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-black/70 backdrop-blur border-t border-white/10"
              id="mobile-menu"
              role="dialog"
              aria-label={t('aria.mobileNavMenu')}
            >
              <div className="px-6 py-4 space-y-4">
                <button onClick={() => handleScrollToSection('products')} className="block w-full text-left text-base md:text-lg text-gray-200 hover:text-white">{t('nav.products')}</button>
                <button onClick={() => handleScrollToSection('about')} className="block w-full text-left text-base md:text-lg text-gray-200 hover:text-white">{t('nav.about')}</button>
                <button onClick={() => handleScrollToSection('contact')} className="block w-full text-left text-base md:text-lg text-gray-200 hover:text-white">{t('nav.contact')}</button>
                <Button onClick={() => { setIsMobileMenuOpen(false); handleGetStartedClick(); }} className="w-full bg-white text-black hover:bg-gray-200 text-base md:text-lg py-2" aria-label={t('aria.getStarted')}>
                  {t('cta.getStarted')}
                </Button>
              </div>
            </motion.div>
          )}
        </motion.nav>

        {/* Hero Section */}
        <main id="main-content" role="main">
        <section className="relative min-h-screen flex items-center justify-center px-6" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl floating-animation"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center max-w-5xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-8xl font-bold mb-6 gradient-text leading-tight"
              id="hero-heading"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={handleGetStartedClick}
                size="lg"
                className="bg-white text-black hover:bg-gray-200 transition-all duration-300 text-lg md:text-xl px-8 py-4"
              >
                {t('hero.exploreProducts')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handleContactClick}
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 transition-all duration-300 text-lg md:text-xl px-8 py-4 p-4"
              >
                {t('hero.scheduleConsultation')}
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 px-6 relative" aria-labelledby="products-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text" id="products-heading">{t('products.title')}</h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                {t('products.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  icon={product.icon}
                  iconColor={product.iconColor}
                  backgroundGradient={product.backgroundGradient}
                  title={product.title}
                  description={product.description}
                  features={product.features}
                  buttonColor={product.buttonColor}
                  delay={product.delay}
                  onLearnMore={handleGetStartedClick}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 relative" aria-labelledby="about-heading">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text" id="about-heading">{t('about.title')}</h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                  {t('about.description1')}
                </p>
                <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                  {t('about.description2')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-4" />
                    <span className="text-base md:text-lg text-gray-300">{t('about.bullet1')}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-4" />
                    <span className="text-base md:text-lg text-gray-300">{t('about.bullet2')}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-4" />
                    <span className="text-base md:text-lg text-gray-300">{t('about.bullet3')}</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="gradient-border rounded-2xl p-8 glass-effect">
                  <img
                    className="w-full h-64 object-cover rounded-xl mb-6"
                    alt={t('about.imageAlt')}
                   src="https://images.unsplash.com/photo-1620036078006-8b51f28bb7c9" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('about.cardTitle')}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {t('about.cardDesc')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 relative" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text" id="contact-heading">{t('contact.title')}</h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="gradient-border rounded-2xl p-8 glass-effect">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white m-4">{t('contact.info')}</h3>
                  <div className="space-y-6 m-4">
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-blue-400 mr-4" />
                      <div>
                        <p className="text-base md:text-lg text-white font-medium">{t('contact.email')}</p>
                        <p className="text-sm md:text-base text-gray-300">contact@bosq.dev</p>
                      </div>
                    </div>
                    {/* <div className="flex items-center">
                      <Phone className="h-6 w-6 text-green-400 mr-4" />
                      <div>
                        <p className="text-lg text-white font-medium">{t('contact.phone')}</p>
                        <p className="text-base text-gray-300">+55 (51) 9 9999-9999</p>
                      </div>
                    </div> */}
                    <div className="flex items-center">
                      <MapPin className="h-6 w-6 text-purple-400 mr-4" />
                      <div>
                        <p className="text-base md:text-lg text-white font-medium">{t('contact.location')}</p>
                        <p className="text-sm md:text-base text-gray-300">{t('contact.locationValue')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gradient-border rounded-2xl p-8 glass-effect">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white m-4">{t('contact.follow')}</h3>
                  <div className="flex space-x-4 m-4">
                    <Button
                      onClick={() => {
                        window.open('https://github.com/bosq-dev', '_blank');
                      }}
                      variant="outline"
                      size="icon"
                      className="border-gray-600 hover:bg-gray-800 cursor-pointer relative z-10 p-2"
                      aria-label={t('aria.visitGithub')}
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button
                      onClick={() => {
                        window.open('https://www.linkedin.com/company/bosq-dev', '_blank');
                      }}
                      variant="outline"
                      size="icon"
                      className="border-gray-600 hover:bg-gray-800 cursor-pointer relative z-10 p-2"
                      aria-label={t('aria.visitLinkedin')}
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button
                      onClick={() => {
                        window.open('https://x.com/bosq_dev', '_blank');
                      }}
                      variant="outline"
                      size="icon"
                      className="border-gray-600 hover:bg-gray-800 cursor-pointer relative z-10 p-2"
                      aria-label={t('aria.visitX')}
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="gradient-border rounded-2xl p-8 glass-effect">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white m-4">{t('contact.formTitle')}</h3>
                  <form className="space-y-6 m-4" aria-labelledby="contact-heading">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm md:text-base font-medium text-gray-300 mb-2">{t('contact.name')}</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder={t('contact.namePlaceholder')}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm md:text-base font-medium text-gray-300 mb-2">{t('contact.email')}</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder={t('contact.emailPlaceholder')}
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm md:text-base font-medium text-gray-300 mb-2">{t('contact.message')}</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder={t('contact.messagePlaceholder')}
                      ></textarea>
                    </div>
                    <Button
                      onClick={handleContactClick}
                      type="button"
                      className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-lg md:text-xl py-3"
                      aria-label={t('aria.sendMessage')}
                    >
                      {t('common.sendMessage')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        </main>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-800 pt-16" aria-label="Footer">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-4 md:mb-0">
                bosq.dev
              </div>
              <div className="text-gray-400 text-center md:text-right">
                <p className="text-sm md:text-base">&copy; {currentYear} bosq.dev. {t('footer.rights')}</p>
                <p className="text-sm md:text-base mt-1">{t('footer.tagline', 'Transforming businesses through data and AI')}</p>
              </div>
            </div>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;

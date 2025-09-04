import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
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

  const handleContactClick = () => {
    toast({
      title: "🚧 Contact feature coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleGetStartedClick = () => {
    toast({
      title: "🚧 Get Started feature coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleScrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const products = [
    {
      icon: Database,
      iconColor: "text-blue-400",
      backgroundGradient: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
      title: "Data Market",
      description: "A comprehensive marketplace where organizations can securely buy and sell high-quality datasets. Connect data providers with data consumers in a trusted environment.",
      features: [
        "Secure data transactions",
        "Quality verification",
        "Licensing management"
      ],
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      delay: 0.1
    },
    {
      icon: Bot,
      iconColor: "text-purple-400",
      backgroundGradient: "bg-gradient-to-br from-purple-500/20 to-purple-600/20",
      title: "Multi-Agent System",
      description: "Build and deploy sophisticated multi-agent AI systems with our intuitive configuration platform. Connect, orchestrate, and scale intelligent agents effortlessly.",
      features: [
        "Visual agent builder",
        "Real-time orchestration",
        "Scalable deployment"
      ],
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      delay: 0.2
    },
    {
      icon: Workflow,
      iconColor: "text-green-400",
      backgroundGradient: "bg-gradient-to-br from-green-500/20 to-green-600/20",
      title: "ETL Platform",
      description: "Seamlessly extract, transform, and load data from multiple sources including SQL databases, web scraping, SharePoint, and NoSQL systems with no-code transformations.",
      features: [
        "Multi-source integration",
        "No-code transformations",
        "Real-time processing"
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

  return (
    <>
      <Helmet>
        <title>Bosq - Advanced Data & AI Solutions</title>
        <meta name="description" content="Bosq provides cutting-edge data and AI products including data marketplace, multi-agent systems, and ETL platforms. Custom consultancy and on-demand solutions for enterprises." />
        <meta property="og:title" content="Bosq - Advanced Data & AI Solutions" />
        <meta property="og:description" content="Bosq provides cutting-edge data and AI products including data marketplace, multi-agent systems, and ETL platforms. Custom consultancy and on-demand solutions for enterprises." />
      </Helmet>

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Skip link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 w-full z-50 glass-effect"
          aria-label="Primary navigation"
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                className="text-2xl md:text-3xl font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Bosq
              </motion.div>
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => handleScrollToSection('products')} className="text-lg md:text-xl text-gray-300 hover:text-white transition-colors">Products</button>
                <button onClick={() => handleScrollToSection('about')} className="text-lg md:text-xl text-gray-300 hover:text-white transition-colors">About</button>
                <button onClick={() => handleScrollToSection('contact')} className="text-lg md:text-xl text-gray-300 hover:text-white transition-colors">Contact</button>
                <Button
                  onClick={handleGetStartedClick}
                  className="bg-white text-black hover:bg-gray-200 transition-all duration-300 text-lg md:text-xl p-2"
                  aria-label="Get started with Bosq"
                >
                  Get Started
                </Button>
              </div>
              <button
                aria-label="Toggle menu"
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
              aria-label="Mobile navigation menu"
            >
              <div className="px-6 py-4 space-y-4">
                <button onClick={() => handleScrollToSection('products')} className="block w-full text-left text-base md:text-lg text-gray-200 hover:text-white">Products</button>
                <button onClick={() => handleScrollToSection('about')} className="block w-full text-left text-base md:text-lg text-gray-200 hover:text-white">About</button>
                <button onClick={() => handleScrollToSection('contact')} className="block w-full text-left text-base md:text-lg text-gray-200 hover:text-white">Contact</button>
                <Button onClick={() => { setIsMobileMenuOpen(false); handleGetStartedClick(); }} className="w-full bg-white text-black hover:bg-gray-200 text-base md:text-lg py-2" aria-label="Get started">
                  Get Started
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
              Advanced Data & AI Solutions
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering businesses with cutting-edge data platforms, intelligent agent systems, and seamless ETL solutions. Transform your data into actionable insights.
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
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handleContactClick}
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 transition-all duration-300 text-lg md:text-xl px-8 py-4 p-4"
              >
                Schedule Consultation
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
              <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text" id="products-heading">Our Products</h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Three powerful platforms designed to revolutionize how you work with data and AI
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
                <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text" id="about-heading">About Bosq</h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                  We are a forward-thinking technology company specializing in data and AI solutions. Our mission is to democratize access to advanced data technologies and make AI accessible to businesses of all sizes.
                </p>
                <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                  With our suite of products and custom consultancy services, we help organizations unlock the full potential of their data, streamline operations, and drive innovation through intelligent automation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-4" />
                    <span className="text-base md:text-lg text-gray-300">Expert consultancy and custom solutions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-4" />
                    <span className="text-base md:text-lg text-gray-300">On-demand product development</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-4" />
                    <span className="text-base md:text-lg text-gray-300">Enterprise-grade security and scalability</span>
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
                    alt="Modern data center with AI visualization"
                   src="https://images.unsplash.com/photo-1620036078006-8b51f28bb7c9" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Innovation at Scale</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Our cutting-edge infrastructure and AI-driven solutions power the next generation of data-centric applications.
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
              <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text" id="contact-heading">Get in Touch</h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business with our data and AI solutions? Let's discuss your custom requirements.
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
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white m-4">Contact Information</h3>
                  <div className="space-y-6 m-4">
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-blue-400 mr-4" />
                      <div>
                        <p className="text-base md:text-lg text-white font-medium">Email</p>
                        <p className="text-sm md:text-base text-gray-300">contact@bosq.dev</p>
                      </div>
                    </div>
                    {/* <div className="flex items-center">
                      <Phone className="h-6 w-6 text-green-400 mr-4" />
                      <div>
                        <p className="text-lg text-white font-medium">Phone</p>
                        <p className="text-base text-gray-300">+55 (51) 9 9999-9999</p>
                      </div>
                    </div> */}
                    <div className="flex items-center">
                      <MapPin className="h-6 w-6 text-purple-400 mr-4" />
                      <div>
                        <p className="text-base md:text-lg text-white font-medium">Location</p>
                        <p className="text-sm md:text-base text-gray-300">Porto Alegre, RS - Brazil</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gradient-border rounded-2xl p-8 glass-effect">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white m-4">Follow Us</h3>
                  <div className="flex space-x-4 m-4">
                    <Button
                      onClick={() => {
                        window.open('https://github.com/bosq-dev', '_blank');
                      }}
                      variant="outline"
                      size="icon"
                      className="border-gray-600 hover:bg-gray-800 cursor-pointer relative z-10 p-2"
                      aria-label="Visit our GitHub"
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
                      aria-label="Visit our LinkedIn"
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
                      aria-label="Visit our X profile"
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
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white m-4">Send us a Message</h3>
                  <form className="space-y-6 m-4" aria-labelledby="contact-heading">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm md:text-base font-medium text-gray-300 mb-2">Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Your name"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm md:text-base font-medium text-gray-300 mb-2">Email</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="your@email.com"
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm md:text-base font-medium text-gray-300 mb-2">Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <Button
                      onClick={handleContactClick}
                      type="button"
                      className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-lg md:text-xl py-3"
                      aria-label="Send message"
                    >
                      Send Message
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
                Bosq
              </div>
              <div className="text-gray-400 text-center md:text-right">
                <p className="text-sm md:text-base">&copy; 2024 Bosq. All rights reserved.</p>
                <p className="text-sm md:text-base mt-1">Transforming businesses through data and AI</p>
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

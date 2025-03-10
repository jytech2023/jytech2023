import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/useLanguage';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="https://ai-marketing.jytech.us"
                className="btn-primary text-lg px-8 py-3"
              >
                {t('hero.button.marketing')}
              </a>
              <a
                href="https://ai-gov.jytech.us"
                className="btn-outline text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary"
              >
                {t('hero.button.government')}
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/ai-illustration.svg"
              alt={t('hero.image.alt')}
              className="w-full max-w-[500px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

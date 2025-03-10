import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/useLanguage';

const services = [
  {
    titleKey: 'services.marketing.title',
    descriptionKey: 'services.marketing.description',
    image: '/marketing-ai.svg',
    url: 'https://ai-marketing.jytech.us'
  },
  {
    titleKey: 'services.government.title',
    descriptionKey: 'services.government.description',
    image: '/gov-ai.svg',
    url: 'https://ai-gov.jytech.us'
  },
  {
    titleKey: 'services.ecommerce.title',
    descriptionKey: 'services.ecommerce.description',
    image: '/ecommerce.svg',
    url: '#ecommerce'
  },
  {
    titleKey: 'services.consulting.title',
    descriptionKey: 'services.consulting.description',
    image: '/consulting.svg',
    url: 'https://www.linkedin.com/in/weijingjaylin/'
  }
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            {t('services.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href={service.url}
                className="block h-full bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 rounded-t-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600">
                    {t(service.descriptionKey)}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export type Language = 'zh' | 'en';

export const translations = {
  zh: {
    // Navigation
    'nav.menu': '菜单',
    'nav.marketing': 'AI营销',
    'nav.government': 'AI政务',
    'nav.technologies': '技术服务',
    'nav.contact': '联系我们',
    
    // Hero Section
    'hero.title': '用AI提升您的业务',
    'hero.subtitle': '通过营销和治理领域的尖端AI解决方案，实现业务转型。',
    'hero.button.marketing': 'AI营销',
    'hero.button.government': 'AI政务',
    'hero.image.alt': 'AI技术插图',
    
    // Services Section
    'services.title': '我们的服务',
    'services.marketing.title': 'AI营销',
    'services.marketing.description': '先进的AI驱动营销自动化和分析，优化营销活动并提高投资回报率。',
    'services.government.title': 'AI政务',
    'services.government.description': '通过Sienovo平台提供智能治理和公共部门自动化解决方案。',
    'services.ecommerce.title': '电子商务解决方案',
    'services.ecommerce.description': 'AI增强型电子商务平台，实现无缝在线业务运营。',
    'services.consulting.title': '商业咨询服务',
    'services.consulting.description': '由Jay Lin提供专业的AI战略咨询，助您实现数字化转型和业务增长。点击了解更多。',
    
    // Footer
    'footer.about': '关于JY Tech',
    'footer.about.description': '通过AI驱动的营销和治理解决方案，革新企业运营。',
    'footer.contact': '联系方式',
    'footer.contact.form': '联系表单',
    'footer.follow': '关注我们',
    'footer.rights': '版权所有',
  },
  en: {
    // Navigation
    'nav.menu': 'Menu',
    'nav.marketing': 'AI Marketing',
    'nav.government': 'AI Government',
    'nav.technologies': 'Technologies',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Elevate Your Business with AI',
    'hero.subtitle': 'Transform your operations with cutting-edge AI solutions in marketing and governance.',
    'hero.button.marketing': 'AI Marketing',
    'hero.button.government': 'AI Government',
    'hero.image.alt': 'AI Technology Illustration',
    
    // Services Section
    'services.title': 'Our Services',
    'services.marketing.title': 'AI Marketing',
    'services.marketing.description': 'Advanced AI-driven marketing automation and analytics for optimized campaigns and better ROI.',
    'services.government.title': 'AI Government',
    'services.government.description': 'Smart governance and public sector automation solutions through Sienovo platform.',
    'services.ecommerce.title': 'E-commerce Solutions',
    'services.ecommerce.description': 'AI-enhanced e-commerce platforms for seamless online business operations.',
    'services.consulting.title': 'Business Consulting',
    'services.consulting.description': 'Expert AI strategy consulting by Jay Lin to drive your digital transformation and business growth. Click to connect.',
    
    // Footer
    'footer.about': 'About JY Tech',
    'footer.about.description': 'Revolutionizing business through AI-powered solutions in marketing and governance.',
    'footer.contact': 'Contact',
    'footer.contact.form': 'Contact Form',
    'footer.follow': 'Follow Us',
    'footer.rights': 'All rights reserved',
  },
} as const;

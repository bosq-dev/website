import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/i18n/i18n';

const ProductCard = ({
  icon: Icon,
  iconColor,
  backgroundGradient,
  title,
  description,
  features,
  buttonColor,
  delay = 0,
  onLearnMore
}) => {
  const { t } = useI18n();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="gradient-border rounded-2xl p-8 glass-effect pulse-glow flex flex-col h-full"
    >
      <div className="flex-grow m-4">
        <div className={`${backgroundGradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
        <h3 className="text-3xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-xl text-gray-300">
              <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Button
        onClick={onLearnMore}
        className={`${buttonColor} transition-all duration-300 p-4 m-2`}
      >
        {t('common.learnMore')}
      </Button>
    </motion.div>
  );
};

export default ProductCard;

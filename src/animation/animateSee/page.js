// src/components/AnimatedSection.js

import { motion } from 'framer-motion';

const AnimateSee= ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Mulai dari opacity 0 dan skala 0.5
      whileInView={{ opacity: 1, scale: 1 }} // Saat berada di view, set opacity 1 dan skala 1
      transition={{ duration: 1.5 }} // Durasi animasi
      viewport={{ once: false }} // Animasi akan diputar ulang saat scroll kembali
    >
      {children}
    </motion.div>
  );
};

export default AnimateSee

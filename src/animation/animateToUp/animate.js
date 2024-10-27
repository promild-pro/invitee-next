// src/components/AnimatedSection.js

import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }} // Mulai dari opacity 0 dan sedikit di bawah
      whileInView={{ opacity: 1, y: 0 }} // Saat berada di view, set opacity 1 dan ke posisi asli
      transition={{ duration: 1 }} // Durasi animasi
      viewport={{ once: true }} // Animasi akan diputar ulang saat scroll kembali
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

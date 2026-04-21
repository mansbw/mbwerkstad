import { motion } from "motion/react";
import { SLIDESHOW_IMAGES } from "../constants";

export default function Projects() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-sans text-5xl md:text-6xl font-bold tracking-tight uppercase mb-6"
        >
          Projekt
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {SLIDESHOW_IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="aspect-square bg-foreground/5 border border-foreground/10 overflow-hidden rounded-3xl group relative"
          >
            <img 
              src={img} 
              alt={`Projekt ${i + 1}`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

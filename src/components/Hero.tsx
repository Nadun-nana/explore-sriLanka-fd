import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function Hero({
  title = "Explore Sri Lanka",
  subtitle = "Discover the beauty of the pearl of the Indian Ocean",
  backgroundImage = "https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?q=80&w=1470&auto=format&fit=crop",
  buttonText = "Share Your Experience",
  buttonLink = "/create"
}: HeroProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate parallax effect
  const yPos = -(scrollPosition * 0.3);
  const scale = 1 + (scrollPosition * 0.0005);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${yPos}px) scale(${scale})`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-center"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl max-w-2xl text-center mb-8"
          style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to={buttonLink}>
            <Button
              variant="default"
              size="xl"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:shadow-lg transform hover:scale-105 transition-all"
              style={{ boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)' }}
            >
              {buttonText}
            </Button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow"
        >
          <ChevronDown className="w-10 h-10 text-white/80" />
        </motion.div>
      </div>
    </div>
  );
}

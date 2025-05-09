import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero({ 
  title = "Explore Sri Lanka", 
  subtitle = "Discover the beauty of the pearl of the Indian Ocean",
  backgroundImage = "https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?q=80&w=1470&auto=format&fit=crop",
  buttonText = "Share Your Experience",
  buttonLink = "/create"
}) {
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
        <h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-center animate-fade-in"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          {title}
        </h1>
        
        <p 
          className="text-xl md:text-2xl max-w-2xl text-center mb-8 animate-slide-up"
          style={{ 
            textShadow: '0 1px 3px rgba(0,0,0,0.3)',
            animationDelay: '0.2s' 
          }}
        >
          {subtitle}
        </p>
        
        <Link 
          to={buttonLink} 
          className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all animate-slide-up"
          style={{ 
            animationDelay: '0.4s',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)' 
          }}
        >
          {buttonText}
        </Link>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow"
          style={{ animationDelay: '1s' }}
        >
          <svg 
            className="w-10 h-10 text-white/80" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

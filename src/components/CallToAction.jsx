import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1470093851219-69951fcbb533')",
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Content */}
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Explore the Beauty of Sri Lanka?
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Share your travel experiences, discover hidden gems, and connect with fellow travelers. 
          Start your journey today!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/create" 
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Share Your Experience
          </Link>
          
          <Link 
            to="/destinations" 
            className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            Explore Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}

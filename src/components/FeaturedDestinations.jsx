import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    title: "Sigiriya Rock Fortress",
    description: "Explore the ancient rock fortress with stunning panoramic views of the surrounding landscape.",
    image: "https://images.unsplash.com/photo-1586211082529-c2a98d21a718",
    link: "/destinations/sigiriya"
  },
  {
    id: 2,
    title: "Kandy Sacred City",
    description: "Visit the cultural capital of Sri Lanka and home to the Temple of the Sacred Tooth Relic.",
    image: "https://images.unsplash.com/photo-1590123715937-e3a7fb4d6aeb",
    link: "/destinations/kandy"
  },
  {
    id: 3,
    title: "Galle Dutch Fort",
    description: "Wander through the historic streets of this UNESCO World Heritage site with colonial architecture.",
    image: "https://images.unsplash.com/photo-1578922746465-3a80a228f223",
    link: "/destinations/galle"
  },
  {
    id: 4,
    title: "Ella Nine Arch Bridge",
    description: "Experience the breathtaking railway bridge surrounded by lush tea plantations and mountains.",
    image: "https://images.unsplash.com/photo-1586266798625-c4e5d8d3f249",
    link: "/destinations/ella"
  },
  {
    id: 5,
    title: "Mirissa Beach",
    description: "Relax on the golden sands and enjoy the perfect sunset at this popular beach destination.",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162",
    link: "/destinations/mirissa"
  },
  {
    id: 6,
    title: "Yala National Park",
    description: "Embark on a safari adventure to spot leopards, elephants, and other wildlife in their natural habitat.",
    image: "https://images.unsplash.com/photo-1581335438722-9aa7f6ae3d5d",
    link: "/destinations/yala"
  }
];

export default function FeaturedDestinations() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most breathtaking places in Sri Lanka, from ancient ruins to pristine beaches and lush mountains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Link 
              key={destination.id} 
              to={destination.link} 
              className="group block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 h-full flex flex-col transform hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={destination.image} 
                    alt={destination.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {destination.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-grow">
                    {destination.description}
                  </p>
                  
                  <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors flex items-center">
                    Learn more
                    <svg 
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/destinations" 
            className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            View All Destinations
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

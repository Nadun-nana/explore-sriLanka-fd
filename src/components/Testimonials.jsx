import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    content: "Sri Lanka is a paradise on Earth! The beaches in Mirissa were pristine and the wildlife safari in Yala National Park was an unforgettable experience. This website helped me plan the perfect itinerary.",
    author: "Sarah Johnson",
    location: "United Kingdom",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    content: "The cultural triangle of Sri Lanka is amazing. Sigiriya Rock Fortress and the ancient city of Polonnaruwa were highlights of my trip. I'm grateful for all the tips I found on this platform!",
    author: "Michael Chen",
    location: "Canada",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    id: 3,
    content: "The train journey from Kandy to Ella is truly one of the most scenic routes in the world. The tea plantations, waterfalls, and mountain views were breathtaking. Highly recommend!",
    author: "Emma Rodriguez",
    location: "Australia",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: 4,
    content: "I spent two weeks exploring Sri Lanka and it wasn't enough! The food, the people, the landscapes - everything was incredible. This website was my go-to resource for planning my adventure.",
    author: "David Müller",
    location: "Germany",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 5,
    content: "The hospitality of Sri Lankan people is unmatched. From Colombo to Galle, every place I visited had its unique charm. Thanks to this platform for connecting me with local experiences!",
    author: "Priya Sharma",
    location: "India",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Travelers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from travelers who have experienced the beauty and wonder of Sri Lanka through our platform.
          </p>
        </div>
        
        <div className="relative">
          {/* Testimonial cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary-200"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">{testimonial.author}</h4>
                        <p className="text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <svg 
                        className="absolute -top-4 -left-4 w-10 h-10 text-primary-200 opacity-50" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-700 text-lg leading-relaxed">{testimonial.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={() => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md text-gray-800 hover:text-primary-600 focus:outline-none z-10 hidden md:block"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => setActiveIndex((current) => (current + 1) % testimonials.length)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-md text-gray-800 hover:text-primary-600 focus:outline-none z-10 hidden md:block"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-primary-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

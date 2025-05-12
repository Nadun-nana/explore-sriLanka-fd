import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star } from 'lucide-react';

// Sample destination data
const destinations = [
  {
    id: 'sigiriya',
    name: 'Sigiriya Rock Fortress',
    image: 'https://images.unsplash.com/photo-1580803834205-0e64baf9d13d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: 'Central Province',
    duration: '1 Day',
    description: 'Explore the ancient rock fortress with stunning panoramic views of the surrounding landscape.',
    rating: 4.8,
    reviews: 120
  },
  {
    id: 'kandy',
    name: 'Kandy & Temple of the Tooth',
    image: 'https://images.unsplash.com/photo-1626091022888-485eb96c494a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: 'Central Province',
    duration: '1-2 Days',
    description: 'Visit the sacred Temple of the Tooth Relic and explore the cultural capital of Sri Lanka.',
    rating: 4.7,
    reviews: 95
  },
{
    id: 'galle',
    name: 'Galle Fort',
    image: 'https://media.istockphoto.com/id/2133225433/photo/clock-tower-of-dutch-fort-galle-sri-lanka.jpg?s=1024x1024&w=is&k=20&c=CpzvNUdCdEvN-8uiG8nDQ74G0zmpTjrS1T9NjVEfglI=',
    location: 'Southern Province',
    duration: '1 Day',
    description: 'Wander through the historic Galle Fort, a UNESCO World Heritage site with colonial architecture.',
    rating: 4.9,
    reviews: 150
  },
  {
    id: 'ella',
    name: 'Ella & Nine Arch Bridge',
    image: 'https://media.istockphoto.com/id/1420759998/photo/nine-arches-bridge.jpg?s=1024x1024&w=is&k=20&c=v9Q4dqW7EjwcwOEZGybaCrwFNwq2w2kWufY0hy7ODEI=',
    location: 'Uva Province',
    duration: '2 Days',
    description: 'Experience the scenic beauty of Ella, with its lush tea plantations and the iconic Nine Arch Bridge.',
    rating: 4.6,
    reviews: 85
  },
  {
    id: 'mirissa',
    name: 'Mirissa Beach',
    image: 'https://media.istockphoto.com/id/1838183180/photo/mirissa-beach-sri-lanka.jpg?s=1024x1024&w=is&k=20&c=vecXV47Reb-nXsDFdYRd1bciEIW9i3i6j1dY-ijDVO0=',
    location: 'Southern Province',
    duration: '2-3 Days',
    description: 'Relax on the beautiful beaches of Mirissa and enjoy whale watching during the season.',
    rating: 4.5,
    reviews: 110
  },
  {
    id: 'anuradhapura',
    name: 'Anuradhapura Ancient City',
    image: 'https://media.istockphoto.com/id/824016044/photo/vintage-colour-effect-of-polonnaruwa-ancient-vatadage.jpg?s=1024x1024&w=is&k=20&c=HTLYcsajInb7AgKAswkapS8veLa7iUsxDuCv5vEsOvY=',
    location: 'North Central Province',
    duration: '1-2 Days',
    description: 'Discover the ancient ruins of Sri Lanka\'s first capital, a UNESCO World Heritage site.',
    rating: 4.7,
    reviews: 75
  }
];

export default function Destinations() {
  return (
    <Layout
      title="Destinations - Explore Sri Lanka"
      description="Discover the most beautiful destinations in Sri Lanka, from ancient ruins to pristine beaches."
    >
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Destinations in Sri Lanka</h1>
          <p className="text-xl max-w-2xl opacity-90">Discover the most beautiful and fascinating places in Sri Lanka, from ancient ruins to pristine beaches.</p>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{destination.location}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{destination.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-1" />
                      <span className="font-medium">{destination.rating}</span>
                      <span className="text-gray-500 ml-1">({destination.reviews} reviews)</span>
                    </div>
                    <Link to={`/destinations/${destination.id}`}>
                      <Button variant="link" className="text-primary-500 hover:text-primary-600">
                        Learn more
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Share Your Sri Lankan Adventure
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Have you visited a beautiful place in Sri Lanka? Share your experience and help other travelers discover hidden gems.
          </p>

          <Link to="/create">
            <Button
              variant="default"
              size="lg"
              className="bg-primary-500 hover:bg-primary-600"
            >
              Share Your Experience
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

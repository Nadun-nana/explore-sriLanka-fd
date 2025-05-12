import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Calendar, Users, Compass, Camera, Heart, Share2, ArrowLeft } from 'lucide-react';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import { fetchPostById } from '../../services/mockPostsService';

// Sample destination data - in a real app, this would come from an API or database
const destinationsData = [
  {
    id: 'sigiriya',
    name: 'Sigiriya Rock Fortress',
    tagline: 'The Eighth Wonder of the World',
    location: 'Central Province',
    duration: '1 Day',
    bestTime: 'January to March',
    description: 'Sigiriya, also known as the Lion Rock, is an ancient rock fortress and palace ruin situated in the central Matale District of Sri Lanka. It is surrounded by the remains of an extensive network of gardens, reservoirs, and other structures. A popular tourist destination, Sigiriya is also renowned for its ancient paintings (frescoes), which are reminiscent of the Ajanta Caves of India.',
    longDescription: `
      <p>Rising dramatically from the central plains, the enigmatic rocky outcrop of Sigiriya is perhaps Sri Lanka's single most dramatic sight. Near-vertical walls soar to a flat-topped summit that contains the ruins of an ancient civilization, thought to be once the epicenter of the short-lived kingdom of Kassapa, and there are spellbinding vistas across mist-wrapped forests in the early morning.</p>

      <p>Sigiriya refuses to reveal its secrets easily, and you'll have to climb a series of vertiginous staircases attached to sheer walls to reach the top. On the way you'll pass a series of quite remarkable frescoes and a pair of colossal lion's paws carved into the bedrock. The surrounding landscape – lily-pad-covered moats, water gardens and cave shrines – only add to Sigiriya's rock-star appeal.</p>

      <p>The ruins on the summit are the remains of King Kasyapa's palace complex, and the site was later used as a Buddhist monastery until the 14th century. The rock itself rises a sheer 200 meters above the forested plains and is visible for miles in all directions.</p>
    `,
    history: `
      <p>According to the ancient Sri Lankan chronicle the Culavamsa, this site was selected by King Kasyapa (477–495 CE) for his new capital. He built his palace on the top of this rock and decorated its sides with colorful frescoes. On a small plateau about halfway up the side of this rock, he built a gateway in the form of an enormous lion.</p>

      <p>The name of this place is derived from this structure — Sīnhāgiri, the Lion Rock. The capital and the royal palace were abandoned after the king's death. It was used as a Buddhist monastery until the 14th century.</p>

      <p>Sigiriya today is a UNESCO listed World Heritage Site. It is one of the best preserved examples of ancient urban planning.</p>
    `,
    highlights: [
      'Climb to the summit for panoramic views',
      'Marvel at the ancient frescoes',
      'Explore the water gardens and boulder gardens',
      'See the massive lion\'s paw entrance',
      'Visit the Sigiriya Museum'
    ],
    tips: [
      'Visit early morning to avoid crowds and heat',
      'Wear comfortable shoes for climbing',
      'Bring plenty of water',
      'Allow at least 3-4 hours for the full experience',
      'Protect yourself from sun with hat and sunscreen'
    ],
    images: [
      'https://images.unsplash.com/photo-1586211082529-c2a98d21a718',
      'https://images.unsplash.com/photo-1580803834205-0e64baf9d13d',
      'https://images.unsplash.com/photo-1590123715937-e3a7fb4d6aeb',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
      'https://images.unsplash.com/photo-1630332458162-e9e5bddf0c88'
    ],
    rating: 4.8,
    reviews: 120,
    nearbyAttractions: [
      { name: 'Dambulla Cave Temple', distance: '25 km' },
      { name: 'Minneriya National Park', distance: '30 km' },
      { name: 'Polonnaruwa Ancient City', distance: '55 km' }
    ]
  },
  {
    id: 'kandy',
    name: 'Kandy Sacred City',
    tagline: 'The Cultural Capital of Sri Lanka',
    location: 'Central Province',
    duration: '2 Days',
    bestTime: 'December to April',
    description: 'Visit the cultural capital of Sri Lanka and home to the Temple of the Sacred Tooth Relic.',
    longDescription: `
      <p>Kandy is a major city in Sri Lanka located in the Central Province. It was the last capital of the ancient kings\' era of Sri Lanka. The city lies in the midst of hills in the Kandy plateau, which crosses an area of tropical plantations, mainly tea.</p>

      <p>Kandy is both an administrative and religious city and is also the capital of the Central Province. Kandy is the home of the Temple of the Tooth Relic (Sri Dalada Maligawa), one of the most sacred places of worship in the Buddhist world.</p>

      <p>The city and the region has a rich Buddhist heritage, and the Temple of the Sacred Tooth Relic is one of the most famous Buddhist temples in the world. Kandy was declared a world heritage site by UNESCO in 1988.</p>
    `,
    history: `
      <p>Historical records suggest that Kandy was first established by the Vikramabahu III (1357–1374 CE), who was the monarch of the Kingdom of Gampola, north of the present city.</p>

      <p>The last king of Kandy, Sri Vikrama Rajasinha, faced a British invasion in early 19th century and was defeated. The British deposed him in 1815 and took over his kingdom, marking the end of Sri Lanka\'s independence.</p>
    `,
    highlights: [
      'Temple of the Sacred Tooth Relic',
      'Kandy Lake',
      'Royal Botanical Gardens at Peradeniya',
      'Kandy Cultural Show',
      'Udawattakele Forest Reserve'
    ],
    tips: [
      'Dress modestly when visiting temples',
      'The best time to visit the Tooth Relic Temple is during the morning puja',
      'Try the local Kandyan sweets',
      'Visit during the Esala Perahera festival (July/August) if possible',
      'Take a train journey from Kandy for spectacular views'
    ],
    images: [
      'https://images.unsplash.com/photo-1590123715937-e3a7fb4d6aeb',
      'https://images.unsplash.com/photo-1586211082529-c2a98d21a718',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
      'https://images.unsplash.com/photo-1630332458162-e9e5bddf0c88',
      'https://images.unsplash.com/photo-1580803834205-0e64baf9d13d'
    ],
    rating: 4.7,
    reviews: 150,
    nearbyAttractions: [
      { name: 'Pinnawala Elephant Orphanage', distance: '40 km' },
      { name: 'Nuwara Eliya', distance: '80 km' },
      { name: 'Knuckles Mountain Range', distance: '35 km' }
    ]
  },
  // Add more destinations as needed
];

export default function DestinationDetails() {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // In a real app, this would be an API call
    setLoading(true);

    // First check if it's a predefined destination
    const foundDestination = destinationsData.find(d => d.id === id);

    if (foundDestination) {
      setDestination(foundDestination);
      setLoading(false);
    } else {
      // If not found in predefined destinations, check if it's a user post
      fetchPostById(id as string)
        .then(post => {
          // Convert post to destination format
          const postAsDestination = {
            id: post._id,
            name: post.title,
            tagline: post.location || 'Sri Lanka',
            location: post.location || 'Sri Lanka',
            duration: '1 Day',
            bestTime: 'Year-round',
            description: post.body,
            longDescription: `<p>${post.body}</p>`,
            history: `<p>User shared experience about ${post.title}</p>`,
            highlights: ['User shared experience'],
            tips: ['Explore this destination'],
            images: post.images || [],
            rating: 4.5,
            reviews: 1,
            nearbyAttractions: []
          };

          setDestination(postAsDestination);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching post:', error);
          setDestination(null);
          setLoading(false);
        });
    }
  }, [id]);

  const nextImage = () => {
    if (destination?.images?.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % destination.images.length);
    }
  };

  const prevImage = () => {
    if (destination?.images?.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + destination.images.length) % destination.images.length);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
        </div>
      </Layout>
    );
  }

  if (!destination) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <div className="text-center bg-white p-8 rounded-2xl shadow-card max-w-md">
            <Compass className="w-20 h-20 text-gray-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Destination not found</h2>
            <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist or has been removed.</p>
            <Link to="/destinations">
              <Button variant="default" className="bg-primary-500 hover:bg-primary-600">
                <ArrowLeft className="w-5 h-5 mr-2" />
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${destination.name} - Explore Sri Lanka`}
      description={destination.description}
    >
      {/* Hero Section with Image Slider */}
      <div className="relative h-[70vh] bg-black">
        {/* Image Slider */}
        <div className="absolute inset-0 w-full h-full">
          {destination.images && destination.images.length > 0 && (
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={destination.images[currentImageIndex]}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full text-white z-10"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full text-white z-10"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-md">
              {destination.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 drop-shadow-md">
              {destination.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-1" />
                <span>{destination.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-1" />
                <span>{destination.duration}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-1" />
                <span>Best time: {destination.bestTime}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-1 text-yellow-400" />
                <span>{destination.rating} ({destination.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content column */}
            <div className="lg:w-2/3">
              {/* Breadcrumbs */}
              <div className="mb-8 flex items-center text-sm text-gray-600">
                <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
                <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/destinations" className="hover:text-primary-600 transition-colors">Destinations</Link>
                <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-800 font-medium">{destination.name}</span>
              </div>

              {/* Description */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: destination.longDescription }} />
                </div>
              </section>

              {/* History */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">History</h2>
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: destination.history }} />
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Highlights</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary-100 p-2 rounded-full mr-3 mt-1">
                        <Star className="w-5 h-5 text-primary-600" />
                      </div>
                      <span className="text-lg">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Travel Tips */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Travel Tips</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-yellow-100 p-2 rounded-full mr-3 mt-1">
                        <Compass className="w-5 h-5 text-yellow-600" />
                      </div>
                      <span className="text-lg">{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Photo Gallery */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {destination.images.map((image, index) => (
                    <div key={index} className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
                      <img
                        src={image}
                        alt={`${destination.name} - Photo ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Camera className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Action buttons */}
              <div className="bg-white rounded-xl shadow-card p-6 mb-8">
                <div className="flex gap-4 mb-6">
                  <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Save
                  </Button>
                  <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </Button>
                </div>
                <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-6 text-lg">
                  Plan Your Visit
                </Button>
              </div>

              {/* Nearby Attractions */}
              <div className="bg-white rounded-xl shadow-card p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Nearby Attractions</h3>
                <ul className="space-y-4">
                  {destination.nearbyAttractions.map((attraction, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span className="font-medium">{attraction.name}</span>
                      <span className="text-gray-500">{attraction.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weather */}
              <div className="bg-white rounded-xl shadow-card p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Weather</h3>
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-800 mb-2">28°C</div>
                  <p className="text-gray-600">Partly Cloudy</p>
                  <div className="flex justify-between mt-4 text-sm">
                    <div>
                      <div className="font-medium">Min</div>
                      <div>24°C</div>
                    </div>
                    <div>
                      <div className="font-medium">Max</div>
                      <div>32°C</div>
                    </div>
                    <div>
                      <div className="font-medium">Humidity</div>
                      <div>75%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Destinations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Explore More Destinations</h2>
          <FeaturedDestinations />
        </div>
      </section>
    </Layout>
  );
}

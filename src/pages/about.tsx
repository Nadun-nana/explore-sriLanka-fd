import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Layout
      title="About Sri Lanka - Explore Sri Lanka"
      description="Learn about Sri Lanka, its culture, history, and what makes it a perfect travel destination."
    >
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sri Lanka</h1>
          <p className="text-xl max-w-2xl opacity-90">Discover the pearl of the Indian Ocean, a tropical paradise with a rich cultural heritage.</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">A Tropical Paradise</h2>
              <p className="text-gray-600 mb-4">
                Sri Lanka, formerly known as Ceylon, is an island nation in South Asia, located in the Indian Ocean. Despite its relatively small size, Sri Lanka offers an incredible diversity of experiences, from ancient ruins and sacred temples to pristine beaches and lush tea plantations.
              </p>
              <p className="text-gray-600 mb-4">
                With a history spanning over 3,000 years, Sri Lanka has been shaped by various cultural influences, resulting in a rich tapestry of traditions, cuisines, and architectural styles. The island is home to eight UNESCO World Heritage Sites, showcasing its historical and natural significance.
              </p>
              <p className="text-gray-600">
                Sri Lanka's warm climate, stunning landscapes, and friendly locals make it an ideal destination for travelers seeking authentic experiences and natural beauty.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2"
                alt="Sri Lanka Landscape"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1590123715937-e3a7fb4d6aeb"
                alt="Sri Lanka Culture"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold mb-6">Rich Cultural Heritage</h2>
              <p className="text-gray-600 mb-4">
                Sri Lanka's cultural landscape is as diverse as its natural one. The island has been influenced by various civilizations, including Indian, Arab, Portuguese, Dutch, and British, each leaving their mark on the country's traditions, cuisine, and architecture.
              </p>
              <p className="text-gray-600 mb-4">
                Buddhism plays a central role in Sri Lankan culture, with numerous ancient temples and sacred sites scattered across the island. The Temple of the Sacred Tooth Relic in Kandy, which houses a tooth of the Buddha, is one of the most revered Buddhist sites in the world.
              </p>
              <p className="text-gray-600">
                Traditional arts and crafts, such as mask making, batik, and wood carving, continue to thrive in Sri Lanka, offering visitors a glimpse into the country's artistic heritage.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Natural Wonders</h2>
              <p className="text-gray-600 mb-4">
                Sri Lanka's diverse landscapes range from misty mountains and lush rainforests to golden beaches and arid plains. The central highlands, with their tea plantations and cool climate, offer a stark contrast to the tropical coastline.
              </p>
              <p className="text-gray-600 mb-4">
                The island is a biodiversity hotspot, home to a remarkable variety of flora and fauna, including elephants, leopards, sloth bears, and over 400 bird species. National parks like Yala, Udawalawe, and Wilpattu provide opportunities for wildlife enthusiasts to observe these creatures in their natural habitat.
              </p>
              <p className="text-gray-600">
                From whale watching in Mirissa to hiking in the Knuckles Mountain Range, Sri Lanka offers countless opportunities for nature lovers and adventure seekers to explore its natural wonders.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1470093851219-69951fcbb533"
                alt="Sri Lanka Nature"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Sri Lanka?
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Discover the beauty and wonders of this tropical paradise. Browse our destinations and start planning your Sri Lankan adventure today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/destinations">
              <Button
                variant="default"
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 w-full sm:w-auto"
              >
                Explore Destinations
              </Button>
            </Link>
            <Link to="/create">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-500 text-primary-500 hover:bg-primary-50 w-full sm:w-auto"
              >
                Share Your Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

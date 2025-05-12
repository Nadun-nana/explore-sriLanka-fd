import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/Hero';
import AllDestinationPosts from '../components/AllDestinationPosts';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Compass, Camera, ChevronRight, Heart, Palmtree, Umbrella, Mountain, Coffee, MapPin, Star } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background video or image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?q=80&w=1470&auto=format&fit=crop"
            alt="Sri Lanka Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center justify-start px-4 md:px-16">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Explore <span className="text-primary-400">Sri Lanka</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-8"
            >
              Discover the beauty of the pearl of the Indian Ocean - from ancient ruins to pristine beaches, lush mountains to vibrant culture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/destinations">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <Compass className="w-5 h-5 mr-2" />
                  Explore Destinations
                </Button>
              </Link>

              <Link to="/create">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Share Your Experience
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-1"
          >
            <motion.div
              animate={{ height: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 bg-white/80 rounded-full"
            />
          </motion.div>
        </div>
      </div>



      {/* All Destination Posts */}
      <AllDestinationPosts />

      {/* Experiences Categories */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Unforgettable Experiences</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover the diverse experiences that Sri Lanka has to offer, from pristine beaches to ancient temples, wildlife safaris to tea plantations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Experience 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palmtree className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Beach Getaways</h3>
              <p className="text-gray-600 mb-6">Relax on pristine beaches with crystal-clear waters and golden sands. Perfect for surfing, snorkeling, or simply unwinding.</p>
              <Link to="/destinations" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Explore beaches <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Experience 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cultural Heritage</h3>
              <p className="text-gray-600 mb-6">Explore ancient temples, historic fortresses, and UNESCO World Heritage sites that showcase Sri Lanka's rich history.</p>
              <Link to="/destinations" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Discover culture <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Experience 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Tea Plantations</h3>
              <p className="text-gray-600 mb-6">Visit lush tea estates in the central highlands, learn about tea production, and sample some of the world's finest teas.</p>
              <Link to="/destinations" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Visit tea country <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Experience 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Umbrella className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Wildlife Safaris</h3>
              <p className="text-gray-600 mb-6">Encounter elephants, leopards, and exotic birds in their natural habitats at Sri Lanka's stunning national parks.</p>
              <Link to="/destinations" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Discover wildlife <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Sri Lanka Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">About Sri Lanka</h2>
              <div className="w-20 h-1 bg-primary-500 mb-8"></div>
              <p className="text-gray-600 mb-6 text-lg">Sri Lanka, the pearl of the Indian Ocean, is a tropical paradise with a rich cultural heritage, stunning landscapes, and warm hospitality. From ancient ruins to pristine beaches, this island nation offers diverse experiences for every traveler.</p>
              <p className="text-gray-600 mb-8 text-lg">With eight UNESCO World Heritage Sites, lush tea plantations, wildlife sanctuaries, and beautiful coastlines, Sri Lanka packs an incredible variety of experiences into a compact island.</p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/about">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-primary-500 hover:bg-primary-600 text-white px-8"
                  >
                    Learn More About Sri Lanka
                  </Button>
                </Link>

                <div className="flex items-center">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <img src="https://randomuser.me/api/portraits/women/56.jpg" alt="User" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <span className="ml-4 text-gray-600">Join 10,000+ travelers</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-12 grid-rows-6 gap-4 h-[500px]"
            >
              <div className="col-span-7 row-span-3 rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1546708973-b339540b5162" alt="Sri Lanka Beach" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-5 row-span-4 rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1590123715937-e3a7fb4d6aeb" alt="Sri Lanka Temple" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-8 row-span-3 rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1470093851219-69951fcbb533" alt="Sri Lanka Tea Plantation" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-4 row-span-2 rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1586211082529-c2a98d21a718" alt="Sri Lanka Wildlife" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470093851219-69951fcbb533')",
            filter: "brightness(0.3)"
          }}
        />

        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-black/30 backdrop-blur-sm p-12 md:p-16 rounded-3xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-bold text-white mb-6"
                >
                  Ready to Explore the Beauty of Sri Lanka?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg text-white/90 mb-8"
                >
                  Share your travel experiences, discover hidden gems, and connect with fellow travelers.
                  Start your journey today!
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/destinations">
                    <Button
                      variant="default"
                      size="lg"
                      className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      <Compass className="w-5 h-5 mr-2" />
                      Explore Destinations
                    </Button>
                  </Link>

                  <Link to="/create">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      <Camera className="w-5 h-5 mr-2" />
                      Share Your Experience
                    </Button>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative hidden md:block"
              >
                <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary-500/20 backdrop-blur-md rounded-full"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary-500/20 backdrop-blur-md rounded-full"></div>

                <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl transform rotate-3">
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1586211082529-c2a98d21a718"
                      alt="Sigiriya Rock"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">Sigiriya Rock Fortress</h3>
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Central Province</span>
                    <span className="mx-2">•</span>
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    <span>4.8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90 text-sm">Visited by 1,200+ travelers</span>
                    <Heart className="w-5 h-5 text-red-400" />
                  </div>
                </div>

                <div className="absolute top-20 -right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl transform -rotate-6 w-64">
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1590123715937-e3a7fb4d6aeb"
                      alt="Kandy Temple"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <h3 className="text-white text-lg font-bold mb-1">Temple of the Tooth</h3>
                  <div className="flex items-center text-white/80 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Kandy</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

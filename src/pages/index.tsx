import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/Hero';
import AllDestinationPosts from '../components/AllDestinationPosts';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Camera, Compass, Heart, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Explore Sri Lanka"
        subtitle="Discover the beauty of the pearl of the Indian Ocean"
        backgroundImage="https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        buttonText="Discover Destinations"
        buttonLink="/destinations"
      />

      {/* All Destination Posts */}
      <AllDestinationPosts />


      {/* About Sri Lanka Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Paradise Island
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                About Sri Lanka
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Sri Lanka, the pearl of the Indian Ocean, is a tropical paradise with a rich cultural heritage, stunning landscapes, and warm hospitality. From ancient ruins to pristine beaches, this island nation offers diverse experiences for every traveler.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                With eight UNESCO World Heritage Sites, lush tea plantations, wildlife sanctuaries, and beautiful coastlines, Sri Lanka packs an incredible variety of experiences into a compact island.
              </p>
              <Link to="/about">
                <Button variant="default" size="lg" className="px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all">
                  <Heart className="w-5 h-5 mr-2" />
                  Learn More About Sri Lanka
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 relative">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sri Lanka Beach"
                className="rounded-xl h-48 w-full object-cover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              />
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1590123715937-e3a7fb4d6aeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sri Lanka Temple"
                className="rounded-xl h-48 w-full object-cover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              />
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1470093851219-69951fcbb533?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sri Lanka Tea Plantation"
                className="rounded-xl h-48 w-full object-cover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              />
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1586211082529-c2a98d21a718?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sri Lanka Wildlife"
                className="rounded-xl h-48 w-full object-cover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-100 rounded-full z-[-1]"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-100 rounded-full z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Travel Guide
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-secondary-800">
              Essential Travel Tips
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Everything you need to know to plan your perfect Sri Lankan adventure and make the most of your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">Best Time to Visit</h3>
              <p className="text-gray-600 leading-relaxed">
                December to March is ideal for the west and south coasts, while May to September is best for the east coast. The central highlands are pleasant year-round with cooler temperatures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary-200 transition-colors">
                <Users className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary-600 transition-colors">Local Customs</h3>
              <p className="text-gray-600 leading-relaxed">
                Remove shoes and cover shoulders when visiting temples. Use your right hand for giving and receiving. Respect religious sites and dress modestly in public places.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-200 transition-colors">
                <MapPin className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-600 transition-colors">Getting Around</h3>
              <p className="text-gray-600 leading-relaxed">
                Tuk-tuks are convenient for short distances. Trains offer scenic routes through the highlands. Private drivers are affordable for longer journeys and multi-day trips.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <Link to="/travel-tips">
              <Button variant="outline" size="lg" className="border-secondary-500 text-secondary-500 hover:bg-secondary-50 px-8 py-6 text-lg rounded-full shadow-sm hover:shadow-md transition-all">
                <Camera className="w-5 h-5 mr-2" />
                More Travel Tips
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470093851219-69951fcbb533?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            filter: "brightness(0.3)"
          }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-800/50 mix-blend-multiply"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 blur-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
              Ready to Explore the Beauty of Sri Lanka?
            </h2>

            <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Share your travel experiences, discover hidden gems, and connect with fellow travelers.
              Start your journey today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Share Your Experience
                </Button>
              </Link>
              <Link to="/destinations">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <Compass className="w-5 h-5 mr-2" />
                  Explore Destinations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Custom shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.73,118.92,150.62,111.31,213.34,92.83Z" className="fill-white"></path>
          </svg>
        </div>
      </section>
    </Layout>
  );
}

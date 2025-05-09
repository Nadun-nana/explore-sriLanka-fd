import { useEffect, useState } from 'react';
import axios from 'axios';

// Import custom components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import FeaturedDestinations from '../components/FeaturedDestinations';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/posts')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Explore Sri Lanka"
        subtitle="Discover the beauty of the pearl of the Indian Ocean"
        backgroundImage="https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?q=80&w=1470&auto=format&fit=crop"
        buttonText="Share Your Experience"
        buttonLink="/create"
      />

      {/* Featured Destinations Section */}
      <FeaturedDestinations />

      {/* User Posts Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Traveler Experiences</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Authentic stories and photos shared by travelers who have explored the wonders of Sri Lanka.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <DestinationCard key={post._id} post={post} className="animate-fade-in" />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-2xl">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No posts yet</h3>
              <p className="text-gray-500 mb-6">Be the first to share your travel experience!</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Import custom components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AllDestinationPosts from '../components/AllDestinationPosts';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Explore Sri Lanka"
        subtitle="Discover the beauty of the pearl of the Indian Ocean"
        backgroundImage="https://media.istockphoto.com/id/1288609237/photo/spectacular-view-of-the-lion-rock-surrounded-by-green-rich-vegetation-picture-taken-from.jpg?s=612x612&w=0&k=20&c=Rkmk3T6SxqzMPyIOcSkeTLrMlb6aHo3gaQpqCrxBeZM="
        buttonText="Explore Destinations"
        buttonLink="/destinations"
      />

      {/* All Destination Posts Section */}
      <AllDestinationPosts />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
}

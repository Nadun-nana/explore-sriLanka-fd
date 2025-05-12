import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Explore Sri Lanka</h3>
            <p className="text-gray-300">Your ultimate guide to discovering the beauty and wonders of Sri Lanka.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Destinations</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/destinations/sigiriya" className="hover:text-white">Sigiriya</Link></li>
              <li><Link to="/destinations/kandy" className="hover:text-white">Kandy</Link></li>
              <li><Link to="/destinations/galle" className="hover:text-white">Galle</Link></li>
              <li><Link to="/destinations/ella" className="hover:text-white">Ella</Link></li>
              <li><Link to="/destinations/mirissa" className="hover:text-white">Mirissa</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white">Travel Blog</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Photo Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">Email: info@exploresrilanka.com</p>
            <p className="text-gray-300">Phone: +94 11 234 5678</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Explore Sri Lanka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

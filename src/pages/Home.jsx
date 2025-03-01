import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://3.99.214.31:5000/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">🌍 Travel Destinations</h1>
            <div className="flex justify-end mb-6">
                <Link to="/create" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">➕ Create Post</Link>
            </div>
            <ul className="space-y-6">
                {posts.map((post) => (
                    <li key={post._id} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900">{post.title}</h2>
                        <p className="text-gray-700 mt-2">{post.body.substring(0, 150)}...</p>
                        <div className="mt-4 flex justify-between items-center">
                            <Link to={`/post/${post._id}`} className="text-indigo-600 font-medium hover:underline">🔍 View More</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

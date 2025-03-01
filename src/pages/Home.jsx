import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Travel Destinations</h1>
      <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded">Create Post</Link>
      <ul className="mt-4">
        {posts.map((post) => (
          <li key={post._id} className="border p-4 mb-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
            <Link to={`/post/${post._id}`} className="text-blue-500">View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
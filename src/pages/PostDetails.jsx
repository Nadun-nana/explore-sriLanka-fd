import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
      {post.images && post.images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {post.images.map((img, index) => (
            <img key={index} src={img} alt={`Post Image ${index}`} className="w-full h-auto rounded-lg" />
          ))}
        </div>
      )}
    </div>
  );
}

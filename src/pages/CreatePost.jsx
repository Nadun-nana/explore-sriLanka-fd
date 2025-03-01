import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    await axios.post('http://3.99.214.31:5000/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2" />
        <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} className="border p-2" />
        <input type="file" multiple onChange={handleImageChange} className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
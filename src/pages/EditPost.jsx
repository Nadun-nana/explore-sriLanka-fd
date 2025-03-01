import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://3.99.214.31:5000/posts/${id}`).then((response) => {
      setTitle(response.data.title);
      setBody(response.data.body);
    });
  }, [id]);

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

    await axios.put(`http://3.99.214.31:5000/posts/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2" />
        <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} className="border p-2" />
        <input type="file" multiple onChange={handleImageChange} className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}
;
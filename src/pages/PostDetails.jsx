import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

export default function PostDetails() {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://3.99.214.31:5000/posts/${id}`).then((response) => {
            setPost(response.data);
        });
    }, [id]);
    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;

        try {
            await axios.delete(`http://3.99.214.31:5000/posts/${id}`);
            alert("Post deleted successfully!");
            window.location.href = "/"; // Redirect to home after deletion
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Failed to delete the post.");
        }
    };

    if (!post) return <p className="text-center text-lg font-semibold">Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">{post.title}</h1>
            <div className="grid grid-cols-2 gap-6 items-center h-96">
                <div className="overflow-y-auto p-4 bg-gray-50 rounded-lg shadow-md">
                    <p className="text-lg text-gray-700">{post.body}</p>
                </div>
                <div className="flex items-center justify-center bg-gray-100 rounded-lg shadow-md h-full">
                    {post.images && post.images.length > 0 ? (
                        <img src={post.images[0]} alt="Post Image" className="w-full h-full object-cover rounded-lg"/>
                    ) : (
                        <p className="text-gray-500">No image available</p>
                    )}
                </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
                <Link to={`/edit/${id}`}
                      className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">✏️
                    Edit</Link>
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all"
                >
                    🗑️ Delete
                </button>

            </div>
        </div>
    );
}
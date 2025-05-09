import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Import custom components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedDestinations from '../components/FeaturedDestinations';

export default function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/posts/${id}`)
            .then((response) => {
                setPost(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching post:", error);
                setLoading(false);
            });
    }, [id]);

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;

        try {
            await axios.delete(`http://localhost:5000/posts/${id}`);
            navigate('/');
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Failed to delete the post.");
        }
    };

    const nextImage = () => {
        if (post?.images?.length > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
        }
    };

    const prevImage = () => {
        if (post?.images?.length > 0) {
            setCurrentImageIndex((prev) => (prev - 1 + post.images.length) % post.images.length);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-green-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-green-50">
                <div className="text-center bg-white p-8 rounded-2xl shadow-card max-w-md">
                    <svg
                        className="w-20 h-20 text-gray-400 mx-auto mb-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h2>
                    <p className="text-gray-600 mb-6">The post you're looking for doesn't exist or has been removed.</p>
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
            {/* Navbar */}
            <Navbar />

            {/* Post Content */}
            <div className="pt-32 pb-20 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumbs */}
                    <div className="mb-8 flex items-center text-sm text-gray-600">
                        <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-800 font-medium">Post Details</span>
                    </div>

                    {/* Post Card */}
                    <div className="bg-white rounded-2xl shadow-card overflow-hidden animate-fade-in">
                        {/* Image Gallery */}
                        {post.images && post.images.length > 0 ? (
                            <div className="relative h-[60vh] overflow-hidden">
                                <img
                                    src={post.images[currentImageIndex]}
                                    alt={`Image ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                {/* Post title overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
                                        {post.title}
                                    </h1>

                                    <div className="flex items-center text-white/90">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>
                                            {new Date(post.createdAt).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>

                                {/* Navigation arrows */}
                                {post.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
                                            aria-label="Previous image"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
                                            aria-label="Next image"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>

                                        {/* Image indicators */}
                                        <div className="absolute bottom-24 left-0 right-0 flex justify-center space-x-2">
                                            {post.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`w-3 h-3 rounded-full transition-colors ${
                                                        index === currentImageIndex
                                                            ? 'bg-white'
                                                            : 'bg-white/50 hover:bg-white/80'
                                                    }`}
                                                    aria-label={`Go to image ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="bg-gray-100 h-64 flex items-center justify-center">
                                <div className="text-center">
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
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <p className="text-gray-500">No images available</p>
                                </div>
                            </div>
                        )}

                        {/* Post content */}
                        <div className="p-8 md:p-12">
                            {!post.images || post.images.length === 0 && (
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
                            )}

                            <div className="prose max-w-none lg:prose-lg">
                                <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                                    {post.body}
                                </p>
                            </div>

                            {/* Action buttons */}
                            <div className="mt-12 flex flex-wrap gap-4">
                                <Link
                                    to="/"
                                    className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Back to Home
                                </Link>
                                <Link
                                    to={`/edit/${post._id}`}
                                    className="inline-flex items-center px-6 py-3 bg-secondary-500 text-white rounded-full hover:bg-secondary-600 transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit Post
                                </Link>
                                <button
                                    onClick={handleDelete}
                                    className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Delete Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* More Destinations Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Explore More Destinations</h2>
                    <FeaturedDestinations />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

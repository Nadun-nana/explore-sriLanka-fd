import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

// Import custom components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import S3 service
import { uploadFilesToS3 } from '../services/s3Service';

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/posts/${id}`)
      .then((response) => {
        const post = response.data;
        setTitle(post.title);
        setBody(post.body);
        setLocation(post.location || '');
        if (post.images && post.images.length > 0) {
          setExistingImages(post.images);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching post:", error);
        setError("Failed to load post data. Please try again.");
        setLoading(false);
      });
  }, [id]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    // Create preview URLs
    const newPreviewUrls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(newPreviewUrls);
  };

  const removePreview = (index) => {
    const newPreviewUrls = [...previewUrls];
    newPreviewUrls.splice(index, 1);
    setPreviewUrls(newPreviewUrls);

    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const removeExistingImage = (index) => {
    const newExistingImages = [...existingImages];
    newExistingImages.splice(index, 1);
    setExistingImages(newExistingImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Please enter a title');
      return;
    }

    if (!body.trim()) {
      setError('Please enter a description');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      // Upload new images to S3 first
      let newImageUrls = [];
      if (images.length > 0) {
        try {
          newImageUrls = await uploadFilesToS3(images);
        } catch (uploadError) {
          console.error('Error uploading images to S3:', uploadError);
          setError('Failed to upload images. Please try again.');
          setSubmitting(false);
          return;
        }
      }

      // Combine existing images with new S3 image URLs
      const allImages = [...existingImages, ...newImageUrls];

      // Create post data with all image URLs
      const postData = {
        title,
        body,
        location: location || undefined,
        images: allImages
      };

      // Send post data to API
      await axios.put(`http://localhost:5000/posts/${id}`, postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      navigate(`/post/${id}`);
    } catch (err) {
      console.error('Error updating post:', err);
      setError('Failed to update post. Please try again.');
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586266798625-c4e5d8d3f249?q=80&w=1470&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Edit Your Travel Post</h1>
          <p className="text-lg md:text-xl max-w-2xl text-center">
            Update your experience and help others discover Sri Lanka
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-10 animate-fade-in">
          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <Link to={`/post/${id}`} className="hover:text-primary-600 transition-colors">Post Details</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-800 font-medium">Edit Post</span>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-8 flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                  Destination Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="e.g., Beautiful Beaches of Mirissa"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="e.g., Mirissa, Southern Province"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="images" className="block text-gray-700 font-medium mb-2">
                  Upload New Images
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="images"
                    multiple
                    onChange={handleImageChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="body" className="block text-gray-700 font-medium mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="body"
                  placeholder="Share your experience, tips, and recommendations..."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows="8"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Existing Images */}
            {existingImages.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700">Current Images</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {existingImages.map((url, index) => (
                    <div key={`existing-${index}`} className="relative group">
                      <img
                        src={url}
                        alt={`Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => removeExistingImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Remove image"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* New Image Previews */}
            {previewUrls.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700">New Images</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {previewUrls.map((url, index) => (
                    <div key={`new-${index}`} className="relative group">
                      <img
                        src={url}
                        alt={`New Preview ${index + 1}`}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => removePreview(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Remove image"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
              <Link
                to={`/post/${id}`}
                className="w-full sm:w-auto order-2 sm:order-1 text-center px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className={`w-full sm:w-auto order-1 sm:order-2 bg-secondary-600 text-white px-8 py-3 rounded-full hover:bg-secondary-700 transition-colors flex items-center justify-center ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Updating...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Update Post
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
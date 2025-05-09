import { Link } from 'react-router-dom';

export default function DestinationCard({ post, className = '' }) {
  return (
    <Link to={`/post/${post._id}`} className={`group block ${className}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 h-full flex flex-col transform hover:-translate-y-2">
        <div className="h-64 overflow-hidden relative">
          {post.images && post.images.length > 0 ? (
            <img 
              src={post.images[0]} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <svg 
                className="w-16 h-16 text-gray-400" 
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
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Location tag */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
            {post.location || 'Sri Lanka'}
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
            {post.body}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors flex items-center">
              Explore
              <svg 
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            
            {post.createdAt && (
              <span className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

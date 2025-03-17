import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Go to Homepage
          </Link>
          <Link to="/contact" className="bg-white text-primary border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
} 
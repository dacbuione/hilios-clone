export default function Features() {
  return (
    <div className="container-custom py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Features</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the powerful features that make Hilios Clone stand out
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-primary text-4xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Responsive Design</h2>
          <p className="text-gray-600 mb-4">
            Our application is designed to work flawlessly on all devices, from mobile phones to desktop computers.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Mobile-first approach
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Adaptive layouts
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Touch-friendly interfaces
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-secondary text-4xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Performance Optimized</h2>
          <p className="text-gray-600 mb-4">
            We've built our application with performance in mind, ensuring fast load times and smooth interactions.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Code splitting
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Lazy loading
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Optimized assets
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center">
        <button className="btn-primary">Get Started Now</button>
      </div>
    </div>
  )
} 
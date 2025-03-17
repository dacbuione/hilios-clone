export default function Home() {
  return (
    <div className="container-custom py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome to Hilios Clone</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A modern implementation with enhanced features and improved UI/UX
        </p>
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Responsive Design</h2>
          <p className="text-gray-600">
            Fully responsive layout that works perfectly on all devices, from mobile phones to desktop computers.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Modern UI</h2>
          <p className="text-gray-600">
            Clean and modern user interface with attention to detail and aesthetics.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-accent">Performance</h2>
          <p className="text-gray-600">
            Optimized for speed and efficiency, providing a smooth user experience.
          </p>
        </div>
      </section>
      
      <div className="text-center">
        <button className="btn-primary mr-4">Get Started</button>
        <button className="btn-secondary">Learn More</button>
      </div>
    </div>
  )
} 
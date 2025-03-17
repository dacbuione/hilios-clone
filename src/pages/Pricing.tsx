export default function Pricing() {
  return (
    <div className="container-custom py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Pricing Plans</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your needs
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Basic</h2>
            <p className="text-gray-600 mb-4">For individuals getting started</p>
            <div className="text-4xl font-bold text-primary">$9<span className="text-lg text-gray-600">/month</span></div>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">1 User</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">5 Projects</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Basic Support</span>
            </li>
          </ul>
          
          <button className="w-full btn-primary">Get Started</button>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md border-2 border-primary hover:shadow-lg transition-shadow transform scale-105">
          <div className="absolute -top-4 left-0 right-0 text-center">
            <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">Popular</span>
          </div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Pro</h2>
            <p className="text-gray-600 mb-4">For small teams</p>
            <div className="text-4xl font-bold text-primary">$29<span className="text-lg text-gray-600">/month</span></div>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">5 Users</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">20 Projects</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Priority Support</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Advanced Features</span>
            </li>
          </ul>
          
          <button className="w-full btn-primary">Get Started</button>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
            <p className="text-gray-600 mb-4">For large organizations</p>
            <div className="text-4xl font-bold text-primary">$99<span className="text-lg text-gray-600">/month</span></div>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Unlimited Users</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Unlimited Projects</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">24/7 Dedicated Support</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Custom Integrations</span>
            </li>
          </ul>
          
          <button className="w-full btn-primary">Contact Sales</button>
        </div>
      </div>
      
      <div className="text-center text-gray-600">
        <p>All plans include a 14-day free trial. No credit card required.</p>
      </div>
    </div>
  )
} 
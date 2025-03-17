import React from 'react'
import { Link } from 'react-router-dom'

export default function Features() {
  return (
    <div className="min-h-[70vh] py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Integration with <span className="text-primary">HiliosAI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Connect HiliosAI with your favorite tools and platforms to streamline your workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Integration 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Chat Platforms</h3>
            <p className="text-gray-600">
              Integrate with popular chat platforms like Slack, Microsoft Teams, and WhatsApp to provide seamless customer support.
            </p>
          </div>
          
          {/* Integration 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-secondary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Email Services</h3>
            <p className="text-gray-600">
              Connect with Gmail, Outlook, and other email providers to manage all your customer communications in one place.
            </p>
          </div>
          
          {/* Integration 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-accent text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Analytics Tools</h3>
            <p className="text-gray-600">
              Integrate with Google Analytics, Mixpanel, and other analytics tools to track customer behavior and optimize your service.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/contact" className="btn-primary px-8 py-3 text-lg">
            Contact Sales for Custom Integration
          </Link>
        </div>
      </div>
    </div>
  )
} 
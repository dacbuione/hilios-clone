import React from 'react'
import Container from '../components/Container'
import Section from '../components/Section'

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3B82F6" d="M42.8,-65.2C54.9,-56.3,63.7,-42.8,69.2,-28.1C74.8,-13.4,77.2,2.5,73.2,16.8C69.3,31.1,59,43.9,46.4,53.5C33.8,63.1,18.9,69.5,2.4,67.8C-14.1,66.1,-28.2,56.3,-40.6,45.3C-53,34.3,-63.7,22.1,-68.3,7.2C-72.9,-7.7,-71.3,-25.3,-62.3,-37.6C-53.3,-49.9,-36.9,-56.9,-22.1,-64.5C-7.3,-72.1,5.9,-80.3,19.8,-78.8C33.7,-77.3,48.3,-66.1,42.8,-65.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#10B981" d="M47.7,-73.2C59.5,-65.3,65.9,-47.9,71.5,-31.1C77.1,-14.3,82,-1.1,79.8,11.1C77.7,23.3,68.5,34.5,58.1,43.9C47.7,53.3,36.1,60.9,22.8,65.9C9.5,70.9,-5.5,73.3,-19.2,69.9C-32.9,66.5,-45.3,57.3,-55.2,45.6C-65.1,33.9,-72.5,19.7,-74.1,4.7C-75.7,-10.3,-71.5,-26.1,-62.6,-37.8C-53.7,-49.5,-40.1,-57.1,-26.9,-64.2C-13.7,-71.3,-0.9,-77.9,12.9,-77.8C26.7,-77.7,35.9,-81.1,47.7,-73.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <Container size="xl" className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-blue-100 text-primary font-medium px-4 py-2 rounded-full mb-6">
              AI-FIRST CUSTOMER SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              The Best AI Agents by <span className="text-primary">HiliosAI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Our AI-Agent quickly automate workflows, offers real-time customer service, tailored playbooks for agent coaching, and business insight.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-primary px-8 py-3 text-lg">Schedule A Demo</button>
              <button className="bg-white text-primary border border-gray-300 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors text-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Promo Video
              </button>
            </div>
          </div>
          <div className="mt-16 max-w-5xl mx-auto">
            <img 
              src="/images/hilios/hero-image.svg" 
              alt="Hilios AI Dashboard" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools to transform your customer service experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 h-16 flex items-center justify-center">
              <img src="/images/hilios/features/unified-inbox.png" alt="Unified Inbox" className="h-16 w-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Unified Inbox</h3>
            <p className="text-gray-600">
              Manage all customer messages in one AI-powered inbox for streamlined communication.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 h-16 flex items-center justify-center">
              <img src="/images/hilios/features/knowledge-base.png" alt="Knowledge Base" className="h-16 w-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Knowledge Base</h3>
            <p className="text-gray-600">
              AI-powered knowledge base that learns from your content to provide accurate answers and identify gaps.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 h-16 flex items-center justify-center">
              <img src="/images/hilios/features/plugins.png" alt="Integrate Plugins" className="h-16 w-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Integrate Plugins</h3>
            <p className="text-gray-600">
              Powerful apps and integrations to acquire, engage and retain more customers.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 h-16 flex items-center justify-center">
              <img src="/images/hilios/features/business-insight.png" alt="Business Insight" className="h-16 w-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Business Insight</h3>
            <p className="text-gray-600">
              Get real-time analytics and AI insights to track customer satisfaction and agent performance.
            </p>
          </div>
        </div>
      </Section>

      {/* Enterprise AI Section */}
      <Section background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Enterprise AI Agent for Modern Digital Change</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver next-generation AI solutions that create impactful digital experiences and transform customer service operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Omni-channel</h3>
            <p className="text-gray-600">
              First-rate customer experience & loyalty through consistent responses, simplifying search and access.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-secondary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Reduced Costs</h3>
            <p className="text-gray-600">
              Reduce operational costs and uncover new opportunities through intelligent process optimization and automation.
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-accent text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Automation</h3>
            <p className="text-gray-600">
              Customizable intelligent automation and task prioritization, allowing your team to focus on more strategic initiatives.
            </p>
          </div>
          
          {/* Benefit 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Actionable Insights</h3>
            <p className="text-gray-600">
              Easily interpret aggregated data to make quick data-driven decisions, optimize vendors relationships & terms.
            </p>
          </div>
          
          {/* Benefit 5 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-secondary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Pro-active Learning</h3>
            <p className="text-gray-600">
              Self-learning AI that adapts to your business tone, improves responses, and handles complex conversations.
            </p>
          </div>
          
          {/* Benefit 6 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-accent text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Operation</h3>
            <p className="text-gray-600">
              Streamline your operations processes, ensuring these agents adapt to changing business needs and deliver continuous value.
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Clients Say about Hilios</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="text-primary mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <p className="text-gray-600 italic">
                "HiliosAI-Agents have helped us significantly optimize our customer support process. Response time has been shortened by 70%, and the conversion rate has also grown impressively."
              </p>
            </div>
            <div className="flex items-center">
              <img src="/images/hilios/testimonials/person1.png" alt="Minh Quang" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold">Minh Quang</h4>
                <p className="text-gray-600 text-sm">Technical Support at NHK</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="text-primary mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <p className="text-gray-600 italic">
                "HiliosAI-Agents is a comprehensive solution for SOM - AIT's admissions process. We are particularly impressed with its multi-channel integration capabilities, multilingual support, and process automation. Thanks to Hilios, we have increased our conversion rate by 25%."
              </p>
            </div>
            <div className="flex items-center">
              <img src="/images/hilios/testimonials/person2.png" alt="Dao Thanh Yen" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold">Dao Thanh Yen</h4>
                <p className="text-gray-600 text-sm">Coordinator at SOM - AIT</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Hilios and how it can transform your customer service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* FAQ Item 1 */}
          <div className="mb-6">
            <button className="flex justify-between items-center w-full text-left font-bold text-lg p-4 bg-white rounded-lg shadow-md">
              <span>What is Hilios?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* FAQ Item 2 */}
          <div className="mb-6">
            <button className="flex justify-between items-center w-full text-left font-bold text-lg p-4 bg-white rounded-lg shadow-md">
              <span>How does Hilios improve customer service?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* FAQ Item 3 */}
          <div className="mb-6">
            <button className="flex justify-between items-center w-full text-left font-bold text-lg p-4 bg-white rounded-lg shadow-md">
              <span>Can Hilios handle complex customer inquiries?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* FAQ Item 4 */}
          <div className="mb-6">
            <button className="flex justify-between items-center w-full text-left font-bold text-lg p-4 bg-white rounded-lg shadow-md">
              <span>How secure is Hilios?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* FAQ Item 5 */}
          <div className="mb-6">
            <button className="flex justify-between items-center w-full text-left font-bold text-lg p-4 bg-white rounded-lg shadow-md">
              <span>What kind of support do you provide?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* FAQ Item 6 */}
          <div className="mb-6">
            <button className="flex justify-between items-center w-full text-left font-bold text-lg p-4 bg-white rounded-lg shadow-md">
              <span>How does pricing work?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Customer Service?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join forward-thinking companies achieving remarkable results with our AI solutions
          </p>
          <button className="bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-lg">
            Schedule a Demo
          </button>
        </div>
      </Section>
    </div>
  )
} 
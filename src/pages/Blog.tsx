import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai-trends', name: 'AI Trends' },
    { id: 'case-studies', name: 'Case Studies' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'company-news', name: 'Company News' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'How AI Agents Are Transforming Customer Service',
      excerpt: 'Discover how AI-powered agents are revolutionizing customer service by providing 24/7 support, reducing response times, and delivering personalized experiences.',
      category: 'ai-trends',
      author: 'Nguyen Van A',
      date: 'June 15, 2023',
      image: 'https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fdetails%2Fai-agents-future-of-autonomous-systems.png&w=1200&q=75',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Case Study: How Company X Increased Conversion Rates by 35% with HiliosAI',
      excerpt: 'Learn how Company X implemented HiliosAI agents to streamline their sales process and achieved a 35% increase in conversion rates within three months.',
      category: 'case-studies',
      author: 'Tran Thi B',
      date: 'May 28, 2023',
      image: 'https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Frobots-task.png&w=1200&q=75',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Getting Started with HiliosAI: A Beginner\'s Guide',
      excerpt: 'This step-by-step tutorial will guide you through setting up your first AI agent with HiliosAI, from initial configuration to deployment.',
      category: 'tutorials',
      author: 'Le Van C',
      date: 'May 10, 2023',
      image: 'https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Frobots-task.png&w=1200&q=75',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'HiliosAI Raises $20M in Series A Funding',
      excerpt: 'We\'re excited to announce that HiliosAI has secured $20 million in Series A funding to accelerate our mission of bringing human-quality AI agents to businesses worldwide.',
      category: 'company-news',
      author: 'Pham Van D',
      date: 'April 22, 2023',
      image: 'https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Frobots-task.png&w=1200&q=75',
      readTime: '3 min read'
    },
    {
      id: 5,
      title: 'The Future of Enterprise AI: Trends to Watch in 2023',
      excerpt: 'Explore the emerging trends in enterprise AI that are set to shape the business landscape in 2023 and beyond, from multimodal AI to autonomous decision-making.',
      category: 'ai-trends',
      author: 'Hoang Thi E',
      date: 'April 5, 2023',
      image: 'https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Frobots-task.png&w=1200&q=75',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Advanced Integration Techniques for HiliosAI Agents',
      excerpt: 'This technical tutorial covers advanced integration techniques for connecting HiliosAI agents with your existing systems, including custom workflows and API usage.',
      category: 'tutorials',
      author: 'Vo Van F',
      date: 'March 18, 2023',
      image: 'https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Frobots-task.png&w=1200&q=75',
      readTime: '12 min read'
    }
  ]

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="container-custom mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            HiliosAI Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Insights, tutorials, and news about AI agents and how they're transforming businesses
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container-custom mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-lg transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <div className="container-custom mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto">
                <img 
                  src={filteredPosts[0].image} 
                  alt={filteredPosts[0].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === filteredPosts[0].category)?.name}
                  </span>
                  <span className="ml-4 text-gray-500 text-sm">{filteredPosts[0].date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{filteredPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{filteredPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{filteredPosts[0].author}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{filteredPosts[0].readTime}</span>
                </div>
                <Link to={`/blog/${filteredPosts[0].id}`} className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="container-custom mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                  <span className="ml-3 text-gray-500 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">{post.author}</span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="mt-4 inline-block text-primary hover:text-primary-dark font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay up-to-date with the latest insights, tutorials, and news about AI and HiliosAI
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
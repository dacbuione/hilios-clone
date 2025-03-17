import React from 'react'

export default function Team() {
  const executives = [
    {
      name: 'Nguyen Van A',
      role: 'Chief Executive Officer',
      bio: 'With over 15 years of experience in AI and enterprise software, Nguyen Van A has led multiple successful startups before founding HiliosAI.',
      image: 'https://i.pinimg.com/originals/8f/33/30/8f3330d6163782b88b506d396f5d156f.jpg'},
    {
      name: 'Tran Thi B',
      role: 'Chief Technology Officer',
      bio: 'Tran Thi B brings 12+ years of experience in machine learning and natural language processing, previously leading AI research at Google and Meta.',
      image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/hinh-anh-avatar-ca-tinh-nu-2.jpg'
    },
    {
      name: 'Le Van C',
      role: 'Chief Operating Officer',
      bio: 'Le Van C has extensive experience scaling operations for tech companies across Southeast Asia, with a focus on customer success and growth.',
      image: 'https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg'
    }
  ]

  const teamMembers = [
    {
      name: 'Pham Van D',
      role: 'Head of AI Research',
      image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-dep-cho-nam-2.jpg'
    },
    {
      name: 'Hoang Thi E',
      role: 'Head of Product',
      image: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-doi-lot-soi.jpg?1704788224743'
    },
    {
      name: 'Vo Van F',
      role: 'Head of Engineering',
      image: 'https://cdn-media.sforum.vn/storage/app/media/THANHAN/2/2a/avatar-dep-84.jpg'
    },
    {
      name: 'Nguyen Thi G',
      role: 'Head of Customer Success',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YPPdCq2QwlE-jgdJPYaW6Osp0p_1ybM5QA&s'
    },
    {
      name: 'Tran Van H',
      role: 'Head of Sales',
      image: 'https://saigonbanme.vn/wp-content/uploads/2024/12/bo-99-anh-avatar-dep-cho-con-gai-ngau-chat-nhat-viet-nam-5.png'
    },
    {
      name: 'Le Thi I',
      role: 'Head of Marketing',
      image: 'https://anhdephd.vn/wp-content/uploads/2022/02/tai-anh-avatar-dep-hinh-dai-dien-facebook.jpg'
    }
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of AI technology to create solutions that transform businesses.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Customer Success',
      description: 'We measure our success by the success of our customers and their ability to achieve their goals with our technology.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      title: 'Integrity',
      description: 'We believe in transparency, honesty, and ethical AI development that respects privacy and promotes fairness.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our customers and partners to create solutions that address real-world challenges.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="container-custom mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the Team Behind HiliosAI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're a team of AI experts, engineers, and business leaders passionate about transforming how businesses operate with artificial intelligence.
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="container-custom mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {executives.map((executive, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={executive.image} 
                alt={executive.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">{executive.name}</h3>
                <p className="text-primary font-medium mb-4">{executive.role}</p>
                <p className="text-gray-600">{executive.bio}</p>
                <div className="mt-6 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="container-custom mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide our work and shape our culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Team Section */}
      <div className="container-custom py-20">
        <div className="bg-primary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about AI and want to make a difference.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  )
} 
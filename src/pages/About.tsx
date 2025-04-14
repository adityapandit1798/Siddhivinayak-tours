import React from 'react';
import { MapPin, Heart, Users, Target } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Rajesh Sharma",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Priya Patel",
      position: "Tour Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Amit Kumar",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Siddhivinayak Tours</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Creating unforgettable travel experiences since 2010
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="bg-orange-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To create extraordinary travel experiences that inspire, educate, and connect people across cultures while maintaining the highest standards of service and responsibility.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="bg-orange-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the most trusted name in travel, known for our commitment to excellence, innovation, and sustainable tourism practices across India and beyond.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="bg-orange-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Customer-First Approach</li>
              <li>• Integrity & Transparency</li>
              <li>• Cultural Respect</li>
              <li>• Sustainable Tourism</li>
            </ul>
          </div>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2010, Siddhivinayak Tours began with a simple vision: to share the incredible diversity and beauty of India with the world. What started as a small family-operated business has grown into one of the region's most respected travel companies.
          </p>
          <p className="text-gray-600">
            Today, we serve thousands of travelers annually, offering both domestic and international tours. Our success is built on our deep local knowledge, personalized service, and commitment to creating authentic, meaningful travel experiences.
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
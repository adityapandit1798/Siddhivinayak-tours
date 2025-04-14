import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Shield, Award, Star, ArrowRight, Globe2, Mountain } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Next Adventure with Siddhivinayak Tours
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the world's most breathtaking destinations with our expertly curated tours and personalized travel experiences.
          </p>
          <Link
            to="/tours/national"
            className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Explore Tours <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* About Us Snippet */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            For over a decade, Siddhivinayak Tours has been crafting unforgettable journeys across India and beyond. 
            We combine local expertise with world-class service to create travel experiences that stay with you forever.
          </p>
        </div>
      </div>

      {/* Featured Tours Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* National Tour Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Taj Mahal"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Mountain className="h-5 w-5 text-orange-600 mr-2" />
                  <span className="text-sm text-orange-600 font-semibold">National Tour</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Golden Triangle Tour</h3>
                <p className="text-gray-600 mb-4">Explore the magnificent heritage of Delhi, Agra, and Jaipur.</p>
                <Link to="/tours/national" className="text-orange-600 font-semibold hover:text-orange-700">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* International Tour Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Dubai"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Globe2 className="h-5 w-5 text-orange-600 mr-2" />
                  <span className="text-sm text-orange-600 font-semibold">International Tour</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Dubai Delights</h3>
                <p className="text-gray-600 mb-4">Experience the luxury and wonders of modern Dubai.</p>
                <Link to="/tours/international" className="text-orange-600 font-semibold hover:text-orange-700">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Another International Tour Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Singapore"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Globe2 className="h-5 w-5 text-orange-600 mr-2" />
                  <span className="text-sm text-orange-600 font-semibold">International Tour</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Singapore Explorer</h3>
                <p className="text-gray-600 mb-4">Discover the perfect blend of culture and modernity.</p>
                <Link to="/tours/international" className="text-orange-600 font-semibold hover:text-orange-700">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Professional and knowledgeable local guides</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Travel</h3>
              <p className="text-gray-600">Your safety is our top priority</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for our travelers</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Locations</h3>
              <p className="text-gray-600">Carefully selected destinations and accommodations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "An incredible experience with Siddhivinayak Tours. The attention to detail and professional service made our trip unforgettable."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">Happy Traveler {index}</p>
                  <p className="text-sm text-gray-500">Golden Triangle Tour</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-orange-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let us help you plan your perfect trip. Contact us today for personalized tour packages.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
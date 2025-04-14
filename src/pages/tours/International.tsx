import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users } from 'lucide-react';

const International = () => {
  const tours = [
    {
      id: 'dubai-wonders',
      name: 'Dubai Wonders',
      image: 'https://images.unsplash.com/photo-15124539798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '5 Days',
      destinations: 'Dubai - Abu Dhabi',
      groupSize: '10-15 people'
    },
    {
      id: 'thailand-explorer',
      name: 'Thailand Explorer',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '7 Days',
      destinations: 'Bangkok - Phuket - Krabi',
      groupSize: '10-15 people'
    },
    {
      id: 'singapore-delights',
      name: 'Singapore Delights',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '4 Days',
      destinations: 'Singapore City',
      groupSize: '8-12 people'
    },
    {
      id: 'bali-paradise',
      name: 'Bali Paradise',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '6 Days',
      destinations: 'Ubud - Seminyak - Nusa Dua',
      groupSize: '8-12 people'
    },
    {
      id: 'europe-classics',
      name: 'Europe Classics',
      image: 'https://images.unsplash.com/photo-1516155510355-7bb6ca06f4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '10 Days',
      destinations: 'Paris - Rome - Barcelona',
      groupSize: '12-18 people'
    },
    {
      id: 'maldives-romance',
      name: 'Maldives Romance',
      image: 'https://images.unsplash.com/photo-1562577309-497a62e3e22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '5 Days',
      destinations: 'Male - Ari Atoll',
      groupSize: '6-10 people'
    },
    {
      id: 'japan-culture',
      name: 'Japan Culture',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '8 Days',
      destinations: 'Tokyo - Kyoto - Osaka',
      groupSize: '10-15 people'
    },
    {
      id: 'new-zealand-adventure',
      name: 'New Zealand Adventure',
      image: 'https://images.unsplash.com/photo-1537151608828-ea3838c12eaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '9 Days',
      destinations: 'Auckland - Queenstown - Rotorua',
      groupSize: '8-12 people'
    },
    {
      id: 'egypt-heritage',
      name: 'Egypt Heritage',
      image: 'https://images.unsplash.com/photo-1518760698656-fd12d690faea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '7 Days',
      destinations: 'Cairo - Luxor - Aswan',
      groupSize: '10-15 people'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover the World</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Experience the most beautiful destinations across the globe with our curated international tours
          </p>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Link 
              key={tour.id}
              to={`/tours/international/${tour.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">{tour.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{tour.destinations}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default International;
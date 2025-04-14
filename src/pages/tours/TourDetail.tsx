import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Users, IndianRupee, Check, X, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tour, tours } from '../../data/tours';

const TourDetail = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const [tour, setTour] = useState<Tour | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const foundTour = tours.find(t => t.id === tourId);
    if (foundTour) {
      setTour(foundTour);
      setActiveImage(foundTour.bannerImage);
    }
  }, [tourId]);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Tour not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Image */}
      <div className="relative h-[500px]">
        <img
          src={activeImage}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
              {tour.name}
            </h1>
            <div className="flex items-center text-white space-x-6" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center">
                <IndianRupee className="h-5 w-5 mr-2" />
                <span>{tour.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Thumbnails */}
      <div className="container mx-auto px-4 -mt-16 relative z-10 mb-12">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          <button
            onClick={() => setActiveImage(tour.bannerImage)}
            className="flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={tour.bannerImage}
              alt="Main"
              className="w-full h-full object-cover"
            />
          </button>
          {tour.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(image)}
              className="flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="bg-white rounded-lg shadow-lg p-8 mb-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600">{tour.overview}</p>
            </section>

            {/* Itinerary */}
            <section className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day, index) => (
                  <div
                    key={day.day}
                    className="relative pl-8 pb-6 border-l-2 border-orange-200 last:border-0"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-orange-500 rounded-full" />
                    <h3 className="text-xl font-semibold mb-2">
                      Day {day.day}: {day.title}
                    </h3>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Booking Card */}
            <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-left">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 mb-2">Price per person</p>
                <p className="text-3xl font-bold text-orange-600">{tour.price}</p>
              </div>
              <Link
                to="/contact"
                className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Book Now
              </Link>
            </div>

            {/* Inclusions */}
            <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-left" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-4">Inclusions</h3>
              <ul className="space-y-3">
                {tour.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-4">Exclusions</h3>
              <ul className="space-y-3">
                {tour.exclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
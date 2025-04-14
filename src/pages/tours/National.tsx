import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users } from 'lucide-react';

const National = () => {
  const tours = [
    {
      "id": "golden-triangle",
      "type": "national",
      "name": "Golden Triangle Explorer",
      "cardImage": "https://images.unsplash.com/photo-1534879206547-2a6a5b6c1f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "bannerImage": "https://images.unsplash.com/photo-150152330119275-0aa32b3a9368?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      "duration": "6 Days / 5 Nights",
      "overview": "Explore India's iconic Golden Triangle, covering Delhi, Agra, and Jaipur. Discover the rich history, majestic forts, and architectural wonders of these vibrant cities.",
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Delhi",
          "description": "Arrive at Indira Gandhi International Airport. Transfer to your hotel. Evening visit to India Gate and Connaught Place. Overnight in Delhi."
        },
        {
          "day": 2,
          "title": "Delhi Sightseeing",
          "description": "Visit Red Fort, Jama Masjid, and Qutub Minar. Afternoon drive past Rashtrapati Bhavan and Humayun's Tomb. Overnight in Delhi."
        },
        {
          "day": 3,
          "title": "Agra Exploration",
          "description": "Drive to Agra. Visit the Taj Mahal and Agra Fort. Evening at leisure. Overnight in Agra."
        },
        {
          "day": 4,
          "title": "Jaipur Adventure",
          "description": "Drive to Jaipur. Visit Amber Fort and City Palace. Evening stroll through Hawa Mahal. Overnight in Jaipur."
        },
        {
          "day": 5,
          "title": "Jaipur Cultural Day",
          "description": "Visit Jantar Mantar and Jal Mahal. Afternoon shopping at local markets. Overnight in Jaipur."
        },
        {
          "day": 6,
          "title": "Departure",
          "description": "Transfer to Jaipur Airport for departure."
        }
      ],
      "inclusions": [
        "Accommodation in 4-star hotels",
        "Daily breakfast and dinner",
        "Private air-conditioned vehicle",
        "English-speaking guide",
        "All sightseeing and entrance fees",
        "Airport transfers",
        "All applicable taxes"
      ],
      "exclusions": [
        "Airfare",
        "Lunch",
        "Personal expenses",
        "Camera fees",
        "Tips and gratuities",
        "Travel insurance",
        "Any item not mentioned in inclusions"
      ],
      "price": "Starting from ₹35,000 per person"
    },
    {
      "id": "kerala-backwaters",
      "type": "national",
      "name": "Enchanting Kerala",
      "cardImage": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "bannerImage": "https://images.unsplash.com/photo-1602301716438-0f6488e4a4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1580289543171-0d4dd35c73e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      "duration": "7 Days / 6 Nights",
      "overview": "Experience the serene backwaters, lush landscapes, and rich culture of God's Own Country. This carefully curated tour takes you through the most beautiful destinations in Kerala, from the historic streets of Fort Kochi to the tranquil backwaters of Alleppey.",
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cochin",
          "description": "Arrive at Cochin International Airport. Transfer to your hotel. Evening cultural performance of Kathakali. Overnight in Cochin."
        },
        {
          "day": 2,
          "title": "Fort Kochi Exploration",
          "description": "Visit historic sites including Chinese Fishing Nets, Jewish Synagogue, and Dutch Palace. Evening harbor cruise. Overnight in Cochin."
        },
        {
          "day": 3,
          "title": "Munnar Hill Station",
          "description": "Drive to Munnar. Visit tea plantations and Eravikulam National Park. Evening at leisure. Overnight in Munnar."
        },
        {
          "day": 4,
          "title": "Thekkady Wildlife",
          "description": "Transfer to Thekkady. Afternoon boat ride in Periyar Lake. Evening spice plantation tour. Overnight in Thekkady."
        },
        {
          "day": 5,
          "title": "Alleppey Backwaters",
          "description": "Drive to Alleppey. Board your private houseboat. Cruise through the backwaters. Overnight on houseboat."
        },
        {
          "day": 6,
          "title": "Kovalam Beach",
          "description": "Drive to Kovalam. Day at leisure on the beach. Optional Ayurvedic spa treatment. Overnight in Kovalam."
        },
        {
          "day": 7,
          "title": "Departure",
          "description": "Transfer to Trivandrum International Airport for departure."
        }
      ],
      "inclusions": [
        "Accommodation in 4-star hotels",
        "Daily breakfast and dinner",
        "Private air-conditioned vehicle",
        "English-speaking guide",
        "All sightseeing and entrance fees",
        "Houseboat cruise with meals",
        "Airport transfers",
        "All applicable taxes"
      ],
      "exclusions": [
        "Airfare",
        "Lunch",
        "Personal expenses",
        "Camera fees",
        "Tips and gratuities",
        "Travel insurance",
        "Any item not mentioned in inclusions"
      ],
      "price": "Starting from ₹45,000 per person"
    },
    {
      "id": "himalayan-adventure",
      "type": "national",
      "name": "Himalayan Trekker's Paradise",
      "cardImage": "https://images.unsplash.com/photo-1537996194471-e657df2c6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "bannerImage": "https://images.unsplash.com/photo-1506880018603-83d5b891d781?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506880018603-83d5b891d781?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1510125594113-143db2476e56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      "duration": "8 Days / 7 Nights",
      "overview": "Embark on an exhilarating adventure through the majestic Himalayas. Trek through lush forests, serene valleys, and snow-capped peaks.",
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Manali",
          "description": "Arrive at Bhuntar Airport. Transfer to Manali. Evening acclimatization walk. Overnight in Manali."
        },
        {
          "day": 2,
          "title": "Manali Exploration",
          "description": "Visit Hadimba Temple, Vashisht Hot Springs, and Solang Valley. Overnight in Manali."
        },
        {
          "day": 3,
          "title": "Trek to Rohtang Pass",
          "description": "Full-day excursion to Rohtang Pass. Enjoy panoramic views. Overnight in Manali."
        },
        {
          "day": 4,
          "title": "Drive to Leh",
          "description": "Scenic drive to Leh via Keylong. Overnight in tents."
        },
        {
          "day": 5,
          "title": "Leh Sightseeing",
          "description": "Visit Shanti Stupa, Leh Palace, and Magnetic Hill. Overnight in Leh."
        },
        {
          "day": 6,
          "title": "Pangong Lake Excursion",
          "description": "Day trip to Pangong Lake. Overnight in Leh."
        },
        {
          "day": 7,
          "title": "Nubra Valley Trek",
          "description": "Visit Diskit Monastery and sand dunes. Camel ride at Hunder. Overnight in Nubra Valley."
        },
        {
          "day": 8,
          "title": "Departure",
          "description": "Transfer to Kushok Bakula Rimpochee Airport for departure."
        }
      ],
      "inclusions": [
        "Accommodation in camps/tents and 4-star hotels",
        "Daily breakfast and dinner",
        "Private vehicle for transfers",
        "Experienced trekking guide",
        "All sightseeing and entrance fees",
        "Airport transfers",
        "All applicable taxes"
      ],
      "exclusions": [
        "Airfare",
        "Lunch",
        "Personal expenses",
        "Camera fees",
        "Tips and gratuities",
        "Travel insurance",
        "Any item not mentioned in inclusions"
      ],
      "price": "Starting from ₹55,000 per person"
    },
    {
      "id": "rajasthan-heritage",
      "type": "national",
      "name": "Royal Rajasthan",
      "cardImage": "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "bannerImage": "https://images.unsplash.com/photo-1537996194471-e657df2c6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1506880018603-83d5b891d781?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1510125594113-143db2476e56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      "duration": "7 Days / 6 Nights",
      "overview": "Experience the grandeur of Rajasthan's royal heritage. Explore magnificent palaces, forts, and desert landscapes.",
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Jaipur",
          "description": "Arrive at Jaipur Airport. Transfer to your hotel. Evening visit to Hawa Mahal. Overnight in Jaipur."
        },
        {
          "day": 2,
          "title": "Jaipur Sightseeing",
          "description": "Visit Amber Fort, City Palace, and Jantar Mantar. Overnight in Jaipur."
        },
        {
          "day": 3,
          "title": "Jodhpur Exploration",
          "description": "Drive to Jodhpur. Visit Mehrangarh Fort and Jaswant Thada. Overnight in Jodhpur."
        },
        {
          "day": 4,
          "title": "Udaipur Adventure",
          "description": "Drive to Udaipur. Visit City Palace and Jagdish Temple. Overnight in Udaipur."
        },
        {
          "day": 5,
          "title": "Udaipur Boat Ride",
          "description": "Morning boat ride on Lake Pichola. Visit Saheliyon ki Bari. Overnight in Udaipur."
        },
        {
          "day": 6,
          "title": "Jaisalmer Desert",
          "description": "Drive to Jaisalmer. Evening camel safari in Sam Sand Dunes. Overnight in Jaisalmer."
        },
        {
          "day": 7,
          "title": "Departure",
          "description": "Transfer to Jodhpur Airport for departure."
        }
      ],
      "inclusions": [
        "Accommodation in heritage hotels",
        "Daily breakfast and dinner",
        "Private air-conditioned vehicle",
        "English-speaking guide",
        "All sightseeing and entrance fees",
        "Airport transfers",
        "All applicable taxes"
      ],
      "exclusions": [
        "Airfare",
        "Lunch",
        "Personal expenses",
        "Camera fees",
        "Tips and gratuities",
        "Travel insurance",
        "Any item not mentioned in inclusions"
      ],
      "price": "Starting from ₹48,000 per person"
    },
    {
      "id": "goa-beach-vacation",
      "type": "national",
      "name": "Goa Beach Getaway",
      "cardImage": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "bannerImage": "https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519996263570-656494ee8155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      "duration": "5 Days / 4 Nights",
      "overview": "Relax on Goa's pristine beaches, explore its vibrant nightlife, and indulge in delicious seafood. This is the perfect tropical escape!",
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Goa",
          "description": "Arrive at Dabolim Airport. Transfer to your beachfront hotel. Evening at leisure. Overnight in Goa."
        },
        {
          "day": 2,
          "title": "North Goa Exploration",
          "description": "Visit Calangute, Anjuna, and Vagator beaches. Evening at a beachside shack. Overnight in Goa."
        },
        {
          "day": 3,
          "title": "South Goa Adventure",
          "description": "Explore Palolem and Colva beaches. Visit Dudhsagar Waterfalls. Overnight in Goa."
        },
        {
          "day": 4,
          "title": "Cultural Day",
          "description": "Visit Old Goa churches and spice plantations. Evening sunset cruise. Overnight in Goa."
        },
        {
          "day": 5,
          "title": "Departure",
          "description": "Transfer to Dabolim Airport for departure."
        }
      ],
      "inclusions": [
        "Accommodation in beachfront resorts",
        "Daily breakfast and dinner",
        "Private air-conditioned vehicle",
        "English-speaking guide",
        "All sightseeing and entrance fees",
        "Sunset cruise",
        "Airport transfers",
        "All applicable taxes"
      ],
      "exclusions": [
        "Airfare",
        "Lunch",
        "Personal expenses",
        "Camera fees",
        "Tips and gratuities",
        "Travel insurance",
        "Any item not mentioned in inclusions"
      ],
      "price": "Starting from ₹28,000 per person"
    },
    {
      "id": "andaman-islands",
      "type": "national",
      "name": "Andaman Island Escape",
      "cardImage": "https://images.unsplash.com/photo-1588314720235-9000f8953a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "bannerImage": "https://images.unsplash.com/photo-1588312899748-3e7b5f8e6f6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1588314720235-9000f8953a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1588312899748-3e7b5f8e6f6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1588313373723-4a9b5c1f2f4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      "duration": "6 Days / 5 Nights",
      "overview": "Discover the unspoiled beauty of the Andaman Islands. Snorkel in crystal-clear waters, relax on pristine beaches, and explore marine life.",
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Port Blair",
          "description": "Arrive at Veer Savarkar International Airport. Transfer to your hotel. Evening visit to Cellular Jail. Overnight in Port Blair."
        },
        {
          "day": 2,
          "title": "Port Blair Exploration",
          "description": "Visit Corbyn's Cove Beach and Anthropological Museum. Evening light and sound show at Cellular Jail. Overnight in Port Blair."
        },
        {
          "day": 3,
          "title": "Havelock Island",
          "description": "Ferry to Havelock Island. Relax at Radhanagar Beach. Overnight in Havelock."
        },
        {
          "day": 4,
          "title": "Snorkeling Adventure",
          "description": "Morning snorkeling session. Afternoon at Elephant Beach. Overnight in Havelock."
        },
        {
          "day": 5,
          "title": "Neil Island",
          "description": "Ferry to Neil Island. Visit Bharatpur Beach and Laxmanpur Beach. Overnight in Neil Island."
        },
        {
          "day": 6,
          "title": "Departure",
          "description": "Transfer to Port Blair Airport for departure."
        }
      ],
      "inclusions": [
        "Accommodation in beach resorts",
        "Daily breakfast and dinner",
        "Private ferry transfers",
        "English-speaking guide",
        "Snorkeling equipment",
        "All sightseeing and entrance fees",
        "Airport transfers",
        "All applicable taxes"
      ],
      "exclusions": [
        "Airfare",
        "Lunch",
        "Personal expenses",
        "Camera fees",
        "Tips and gratuities",
        "Travel insurance",
        "Any item not mentioned in inclusions"
      ],
      "price": "Starting from ₹42,000 per person"
    },
    {
      "id": "ladakh-high-altitude",
      "type": "national",
      "name": "Ladakh High Altitude Adventure",
      "cardImage": "https://images.unsplash.com/photo-1565287952071-ef7c5c5f4c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "bannerImage": "https://images.unsplash.com/photo-1565287952071-ef7c5c5f4c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1565287952071-ef7c5c5f4c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565287952071-ef7c5c5f4c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565287952071-ef7c5c5f4c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      "duration": "9 Days / 8 Nights",
      "overview": "Embark on a high-altitude adventure in Ladakh. Explore monasteries, lakes, and deserts while soaking in breathtaking views.",
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Leh",
          "description": "Arrive at Kushok Bakula Rimpochee Airport. Acclimatization day. Overnight in Leh."
        },
        {
          "day": 2,
          "title": "Leh Sightseeing",
          "description": "Visit Shanti Stupa, Leh Palace, and Magnetic Hill. Overnight in Leh."
        },
        {
          "day": 3,
          "title": "Pangong Lake",
          "description": "Day trip to Pangong Lake. Overnight in Leh."
        },
        {
          "day": 4,
          "title": "Nubra Valley",
          "description": "Drive to Nubra Valley via Khardung La Pass. Camel ride at Hunder. Overnight in Nubra Valley."
        },
        {
          "day": 5,
          "title": "Diskit Monastery",
          "description": "Visit Diskit Monastery and sand dunes. Overnight in Nubra Valley."
        },
        {
          "day": 6,
          "title": "Tso Moriri Lake",
          "description": "Drive to Tso Moriri Lake. Overnight in tents."
        },
        {
          "day": 7,
          "title": "Tso Kar Lake",
          "description": "Visit Tso Kar Lake and hot springs. Overnight in tents."
        },
        {
          "day": 8,
          "title": "Hemis Monastery",
          "description": "Return to Leh. Visit Hemis Monastery. Overnight in Leh."
        },
        {
          "day": 9,
          "title": "Departure",
          "description": "Transfer to Kushok Bakula Rimpochee Airport for departure."
        }
      ],
      "inclusions": [
        "Accommodation in tents and 4-star hotels",
        "Daily breakfast and dinner",
        "Private air-conditioned vehicle",
        "English-speaking guide",
        "All sightseeing and entrance fees",
        "Airport transfers",
        "All applicable taxes"
      ],
      "exclusions": [
        "Airfare",
        "Lunch",
        "Personal expenses",
        "Camera fees",
        "Tips and gratuities",
        "Travel insurance",
        "Any item not mentioned in inclusions"
      ],
      "price": "Starting from ₹60,000 per person"
    },
    {
      "id": "south-india-temples",
      "type": "national",
      "name": "South India Temple Trail",
      "cardImage": "https://images.unsplash.com/photo-1580289543171-0d4dd35c73e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "bannerImage": "https://images.unsplash.com/photo-1580289543171-0d4dd35c73e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1580289543171-0d4dd35c73e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1580289543171-0d4dd35c73e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1580289543171-0d4dd35c73e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      "duration": "8 Days / 7 Nights",
      "overview": "Embark on a spiritual journey through South India's most revered temples. Experience divine rituals and architectural marvels.",
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Chennai",
          "description": "Arrive at Chennai Airport. Transfer to your hotel. Evening visit to Kapaleeshwarar Temple. Overnight in Chennai."
        },
        {
          "day": 2,
          "title": "Mahabalipuram Exploration",
          "description": "Visit Shore Temple and Five Rathas. Overnight in Chennai."
        },
        {
          "day": 3,
          "title": "Tanjore Adventure",
          "description": "Drive to Tanjore. Visit Brihadeeswarar Temple. Overnight in Tanjore."
        },
        {
          "day": 4,
          "title": "Madurai Exploration",
          "description": "Drive to Madurai. Visit Meenakshi Amman Temple. Overnight in Madurai."
        },
        {
          "day": 5,
          "title": "Rameswaram Pilgrimage",
          "description": "Drive to Rameswaram. Visit Ramanathaswamy Temple. Overnight in Rameswaram."
        },
        {
          "day": 6,
          "title": "Kanyakumari Adventure",
          "description": "Drive to Kanyakumari. Visit Vivekananda Rock Memorial. Overnight in Kanyakumari."
        },
        {
          "day": 7,
          "title": "Trivandrum Exploration",
          "description": "Drive to Trivandrum. Visit Padmanabhaswamy Temple. Overnight in Trivandrum."
        },
        {
          "day": 8,
          "title": "Departure",
          "description": "Transfer to Trivandrum Airport for departure."
        }
      ],
      "inclusions": [
        "Accommodation in 4-star hotels",
        "Daily breakfast and dinner",
        "Private air-conditioned vehicle",
        "English-speaking guide",
        "All sightseeing and entrance fees",
        "Airport transfers",
        "All applicable taxes"
      ],
      "exclusions": [
        "Airfare",
        "Lunch",
        "Personal expenses",
        "Camera fees",
        "Tips and gratuities",
        "Travel insurance",
        "Any item not mentioned in inclusions"
      ],
      "price": "Starting from ₹52,000 per person"
    },
    {
      "id": "wildlife-safari",
      "type": "national",
      "name": "Indian Wildlife Safari",
      "cardImage": "https://images.unsplash.com/photo-1534879206547-2a6a5b6c1f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "bannerImage": "https://images.unsplash.com/photo-1534879206547-2a6a5b6c1f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1534879206547-2a6a5b6c1f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534879206547-2a6a5b6c1f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534879206547-2a6a5b6c1f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      "duration": "7 Days / 6 Nights",
      "overview": "Embark on a thrilling wildlife safari across India's top national parks. Spot tigers, leopards, elephants, and more in their natural habitats.",
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Nagpur",
          "description": "Arrive at Dr. Babasaheb Ambedkar International Airport. Transfer to Pench National Park. Evening jungle safari. Overnight in Pench."
        },
        {
          "day": 2,
          "title": "Pench Exploration",
          "description": "Morning and evening jungle safaris. Overnight in Pench."
        },
        {
          "day": 3,
          "title": "Kanha Adventure",
          "description": "Drive to Kanha National Park. Evening jungle safari. Overnight in Kanha."
        },
        {
          "day": 4,
          "title": "Kanha Exploration",
          "description": "Morning and evening jungle safaris. Overnight in Kanha."
        },
        {
          "day": 5,
          "title": "Bandhavgarh Adventure",
          "description": "Drive to Bandhavgarh National Park. Evening jungle safari. Overnight in Bandhavgarh."
        },
        {
          "day": 6,
          "title": "Bandhavgarh Exploration",
          "description": "Morning and evening jungle safaris. Overnight in Bandhavgarh."
        },
        {
          "day": 7,
          "title": "Departure",
          "description": "Transfer to Jabalpur Airport for departure."
        }
      ],
      "inclusions": [
        "Accommodation in jungle lodges",
        "Daily breakfast and dinner",
        "Private air-conditioned vehicle",
        "English-speaking guide",
        "All jungle safaris and park fees",
        "Airport transfers",
        "All applicable taxes"
      ],
      "exclusions": [
        "Airfare",
        "Lunch",
        "Personal expenses",
        "Camera fees",
        "Tips and gratuities",
        "Travel insurance",
        "Any item not mentioned in inclusions"
      ],
      "price": "Starting from ₹58,000 per person"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Incredible India</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the rich heritage, diverse cultures, and breathtaking landscapes of India
          </p>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Link 
              key={tour.id}
              to={`/tours/national/${tour.id}`}
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

export default National;
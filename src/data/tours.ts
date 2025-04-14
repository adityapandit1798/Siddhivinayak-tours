export interface TourItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Tour {
  id: string;
  type: 'national' | 'international';
  name: string;
  cardImage: string;
  bannerImage: string;
  gallery: string[];
  duration: string;
  overview: string;
  itinerary: TourItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  price: string;
}

export const tours: Tour[] = [
  {
    "id": "kerala-backwaters",
    "type": "national",
    "name": "Enchanting Kerala",
    "cardImage": "https://images.unsplash.com/photo-1602301716438-0f6488e4a4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1602301716438-0f6488e4a4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1575955903629-0da1081df542?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588314720235-9000f8953a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
    "id": "golden-triangle",
    "type": "national",
    "name": "Golden Triangle Explorer",
    "cardImage": "https://images.unsplash.com/photo-1534879206547-2a6a5b6c1f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1501523301138-2b0e30d8f23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
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
    id: 'goa-beach-vacation',
    type: 'national',
    name: 'Goa Beach Getaway',
    cardImage: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519996263570-656494ee8155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    duration: '5 Days / 4 Nights',
    overview: "Relax on Goa's pristine beaches, explore its vibrant nightlife, and indulge in delicious seafood. This is the perfect tropical escape!",
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Goa',
        description: 'Arrive at Dabolim Airport. Transfer to your beachfront hotel. Evening at leisure. Overnight in Goa.'
      },
      {
        day: 2,
        title: 'North Goa Exploration',
        description: 'Visit Calangute, Anjuna, and Vagator beaches. Evening at a beachside shack. Overnight in Goa.'
      },
      {
        day: 3,
        title: 'South Goa Adventure',
        description: 'Explore Palolem and Colva beaches. Visit Dudhsagar Waterfalls. Overnight in Goa.'
      },
      {
        day: 4,
        title: 'Cultural Day',
        description: 'Visit Old Goa churches and spice plantations. Evening sunset cruise. Overnight in Goa.'
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Transfer to Dabolim Airport for departure.'
      }
    ],
    inclusions: [
      'Accommodation in beachfront resorts',
      'Daily breakfast and dinner',
      'Private air-conditioned vehicle',
      'English-speaking guide',
      'All sightseeing and entrance fees',
      'Sunset cruise',
      'Airport transfers',
      'All applicable taxes'
    ],
    exclusions: [
      'Airfare',
      'Lunch',
      'Personal expenses',
      'Camera fees',
      'Tips and gratuities',
      'Travel insurance',
      'Any item not mentioned in inclusions'
    ],
    price: 'Starting from ₹28,000 per person'
},
{
  id: 'andaman-islands',
  type: 'national',
  name: 'Andaman Island Escape',
  cardImage: 'https://images.unsplash.com/photo-1588314720235-9000f8953a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  bannerImage: 'https://images.unsplash.com/photo-1588312899748-3e7b5f8e6f6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1588314720235-9000f8953a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1588312899748-3e7b5f8e6f6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1588313373723-4a9b5c1f2f4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ],
  duration: '6 Days / 5 Nights',
  overview: "Discover the unspoiled beauty of the Andaman Islands. Snorkel in crystal-clear waters, relax on pristine beaches, and explore marine life.",
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Port Blair',
      description: 'Arrive at Veer Savarkar International Airport. Transfer to your hotel. Evening visit to Cellular Jail. Overnight in Port Blair.'
    },
    {
      day: 2,
      title: 'Port Blair Exploration',
      description: 'Visit Corbyn\'s Cove Beach and Anthropological Museum. Evening light and sound show at Cellular Jail. Overnight in Port Blair.'
    },
    {
      day: 3,
      title: 'Havelock Island',
      description: 'Ferry to Havelock Island. Relax at Radhanagar Beach. Overnight in Havelock.'
    },
    {
      day: 4,
      title: 'Snorkeling Adventure',
      description: 'Morning snorkeling session. Afternoon at Elephant Beach. Overnight in Havelock.'
    },
    {
      day: 5,
      title: 'Neil Island',
      description: 'Ferry to Neil Island. Visit Bharatpur Beach and Laxmanpur Beach. Overnight in Neil Island.'
    },
    {
      day: 6,
      title: 'Departure',
      description: 'Transfer to Port Blair Airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in beach resorts',
    'Daily breakfast and dinner',
    'Private ferry transfers',
    'English-speaking guide',
    'Snorkeling equipment',
    'All sightseeing and entrance fees',
    'Airport transfers',
    'All applicable taxes'
  ],
  exclusions: [
    'Airfare',
    'Lunch',
    'Personal expenses',
    'Camera fees',
    'Tips and gratuities',
    'Travel insurance',
    'Any item not mentioned in inclusions'
  ],
  price: 'Starting from ₹42,000 per person'
},
{
  id: 'ladakh-high-altitude',
  type: 'national',
  name: 'Ladakh High Altitude Adventure',
  cardImage: 'https://images.unsplash.com/photo-1565287952071-ef7c5c5f4c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  bannerImage: 'https://images.unsplash.com/photo-1565287952071-ef7c5c5f4c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1565287952071-ef7c5c5f4c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1565287952071-ef7c5c5f4c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1565287952071-ef7c5c5f4c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ],
  duration: '9 Days / 8 Nights',
  overview: "Embark on a high-altitude adventure in Ladakh. Explore monasteries, lakes, and deserts while soaking in breathtaking views.",
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Leh',
      description: 'Arrive at Kushok Bakula Rimpochee Airport. Acclimatization day. Overnight in Leh.'
    },
    {
      day: 2,
      title: 'Leh Sightseeing',
      description: 'Visit Shanti Stupa, Leh Palace, and Magnetic Hill. Overnight in Leh.'
    },
    {
      day: 3,
      title: 'Pangong Lake',
      description: 'Day trip to Pangong Lake. Overnight in Leh.'
    },
    {
      day: 4,
      title: 'Nubra Valley',
      description: 'Drive to Nubra Valley via Khardung La Pass. Camel ride at Hunder. Overnight in Nubra Valley.'
    },
    {
      day: 5,
      title: 'Diskit Monastery',
      description: 'Visit Diskit Monastery and sand dunes. Overnight in Nubra Valley.'
    },
    {
      day: 6,
      title: 'Tso Moriri Lake',
      description: 'Drive to Tso Moriri Lake. Overnight in tents.'
    },
    {
      day: 7,
      title: 'Tso Kar Lake',
      description: 'Visit Tso Kar Lake and hot springs. Overnight in tents.'
    },
    {
      day: 8,
      title: 'Hemis Monastery',
      description: 'Return to Leh. Visit Hemis Monastery. Overnight in Leh.'
    },
    {
      day: 9,
      title: 'Departure',
      description: 'Transfer to Kushok Bakula Rimpochee Airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in tents and 4-star hotels',
    'Daily breakfast and dinner',
    'Private air-conditioned vehicle',
    'English-speaking guide',
    'All sightseeing and entrance fees',
    'Airport transfers',
    'All applicable taxes'
  ],
  exclusions: [
    'Airfare',
    'Lunch',
    'Personal expenses',
    'Camera fees',
    'Tips and gratuities',
    'Travel insurance',
    'Any item not mentioned in inclusions'
  ],
  price: 'Starting from ₹60,000 per person'
},
{
  id: 'south-india-temples',
  type: 'national',
  name: 'South India Temple Trail',
  cardImage: 'https://images.unsplash.com/photo-1580289543171-0d4dd35c73e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  bannerImage: 'https://images.unsplash.com/photo-1580289543171-0d4dd35c73e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1580289543171-0d4dd35c73e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1580289543171-0d4dd35c73e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1580289543171-0d4dd35c73e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ],
  duration: '8 Days / 7 Nights',
  overview: "Embark on a spiritual journey through South India's most revered temples. Experience divine rituals and architectural marvels.",
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Chennai',
      description: 'Arrive at Chennai Airport. Transfer to your hotel. Evening visit to Kapaleeshwarar Temple. Overnight in Chennai.'
    },
    {
      day: 2,
      title: 'Mahabalipuram Exploration',
      description: 'Visit Shore Temple and Five Rathas. Overnight in Chennai.'
    },
    {
      day: 3,
      title: 'Tanjore Adventure',
      description: 'Drive to Tanjore. Visit Brihadeeswarar Temple. Overnight in Tanjore.'
    },
    {
      day: 4,
      title: 'Madurai Exploration',
      description: 'Drive to Madurai. Visit Meenakshi Amman Temple. Overnight in Madurai.'
    },
    {
      day: 5,
      title: 'Rameswaram Pilgrimage',
      description: 'Drive to Rameswaram. Visit Ramanathaswamy Temple. Overnight in Rameswaram.'
    },
    {
      day: 6,
      title: 'Kanyakumari Adventure',
      description: 'Drive to Kanyakumari. Visit Vivekananda Rock Memorial. Overnight in Kanyakumari.'
    },
    {
      day: 7,
      title: 'Trivandrum Exploration',
      description: 'Drive to Trivandrum. Visit Padmanabhaswamy Temple. Overnight in Trivandrum.'
    },
    {
      day: 8,
      title: 'Departure',
      description: 'Transfer to Trivandrum Airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in 4-star hotels',
    'Daily breakfast and dinner',
    'Private air-conditioned vehicle',
    'English-speaking guide',
    'All sightseeing and entrance fees',
    'Airport transfers',
    'All applicable taxes'
  ],
  exclusions: [
    'Airfare',
    'Lunch',
    'Personal expenses',
    'Camera fees',
    'Tips and gratuities',
    'Travel insurance',
    'Any item not mentioned in inclusions'
  ],
  price: 'Starting from ₹52,000 per person'
},
{
  id: 'wildlife-safari',
  type: 'national',
  name: 'Indian Wildlife Safari',
  cardImage: 'https://images.unsplash.com/photo-1534879206547-2a6a5b6c1f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  bannerImage: 'https://images.unsplash.com/photo-1534879206547-2a6a5b6c1f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1534879206547-2a6a5b6c1f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1534879206547-2a6a5b6c1f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1534879206547-2a6a5b6c1f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ],
  duration: '7 Days / 6 Nights',
  overview: "Embark on a thrilling wildlife safari across India's top national parks. Spot tigers, leopards, elephants, and more in their natural habitats.",
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Nagpur',
      description: 'Arrive at Dr. Babasaheb Ambedkar International Airport. Transfer to Pench National Park. Evening jungle safari. Overnight in Pench.'
    },
    {
      day: 2,
      title: 'Pench Exploration',
      description: 'Morning and evening jungle safaris. Overnight in Pench.'
    },
    {
      day: 3,
      title: 'Kanha Adventure',
      description: 'Drive to Kanha National Park. Evening jungle safari. Overnight in Kanha.'
    },
    {
      day: 4,
      title: 'Kanha Exploration',
      description: 'Morning and evening jungle safaris. Overnight in Kanha.'
    },
    {
      day: 5,
      title: 'Bandhavgarh Adventure',
      description: 'Drive to Bandhavgarh National Park. Evening jungle safari. Overnight in Bandhavgarh.'
    },
    {
      day: 6,
      title: 'Bandhavgarh Exploration',
      description: 'Morning and evening jungle safaris. Overnight in Bandhavgarh.'
    },
    {
      day: 7,
      title: 'Departure',
      description: 'Transfer to Jabalpur Airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in jungle lodges',
    'Daily breakfast and dinner',
    'Private air-conditioned vehicle',
    'English-speaking guide',
    'All jungle safaris and park fees',
    'Airport transfers',
    'All applicable taxes'
  ],
  exclusions: [
    'Airfare',
    'Lunch',
    'Personal expenses',
    'Camera fees',
    'Tips and gratuities',
    'Travel insurance',
    'Any item not mentioned in inclusions'
  ],
  price: 'Starting from ₹58,000 per person'
},
{
  id: 'dubai-wonders',
  type: 'international',
  name: 'Dubai Wonders',
  cardImage: 'https://images.unsplash.com/photo-1583324712-3e7b99a0f6b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  bannerImage: 'https://images.unsplash.com/photo-1583324712-3e7b99a0f6b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1583324712-3e7b99a0f6b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1583324712-3e7b99a0f6b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1583324712-3e7b99a0f6b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ],
  duration: '5 Days / 4 Nights',
  overview: "Experience the glitz and glamour of Dubai, a city where futuristic skyscrapers meet golden deserts. Discover iconic landmarks, indulge in luxury shopping, and enjoy thrilling desert adventures.",
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Dubai',
      description: 'Arrive at Dubai International Airport. Transfer to your hotel. Evening visit to the Dubai Mall and Burj Khalifa. Overnight in Dubai.'
    },
    {
      day: 2,
      title: 'City Exploration',
      description: 'Morning city tour covering Dubai Creek, Gold Souk, and Spice Souk. Afternoon visit to the iconic Palm Jumeirah and Atlantis Hotel. Evening dhow cruise dinner on Dubai Marina. Overnight in Dubai.'
    },
    {
      day: 3,
      title: 'Desert Safari Adventure',
      description: 'Morning at leisure. Afternoon desert safari with dune bashing, camel rides, and cultural shows. Overnight in Dubai.'
    },
    {
      day: 4,
      title: 'Modern Dubai',
      description: 'Visit the Museum of the Future, Dubai Frame, and Madinat Jumeirah. Evening free for shopping or exploring nightlife. Overnight in Dubai.'
    },
    {
      day: 5,
      title: 'Departure',
      description: 'Transfer to Dubai International Airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in 5-star hotels',
    'Daily breakfast',
    'Private air-conditioned vehicle',
    'English-speaking guide',
    'All sightseeing and entrance fees',
    'Desert safari with dune bashing and cultural show',
    'Dhow cruise dinner',
    'Airport transfers',
    'All applicable taxes'
  ],
  exclusions: [
    'International airfare',
    'Lunch and additional meals',
    'Personal expenses',
    'Camera fees',
    'Tips and gratuities',
    'Travel insurance',
    'Visa fees',
    'Any item not mentioned in inclusions'
  ],
  price: 'Starting from ₹85,000 per person'
},
{
  id: 'thailand-explorer',
  type: 'international',
  name: 'Thailand Explorer',
  cardImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  bannerImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ],
  duration: '7 Days / 6 Nights',
  overview: "Discover the vibrant culture, stunning beaches, and rich heritage of Thailand. From bustling Bangkok to serene islands like Phuket and Krabi, this tour offers an unforgettable experience.",
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Bangkok',
      description: 'Arrive at Suvarnabhumi Airport. Transfer to your hotel. Evening visit to Asiatique Night Market. Overnight in Bangkok.'
    },
    {
      day: 2,
      title: 'Bangkok Exploration',
      description: 'Visit Grand Palace, Wat Arun, and Wat Pho. Evening Chao Phraya River dinner cruise. Overnight in Bangkok.'
    },
    {
      day: 3,
      title: 'Phuket Adventure',
      description: 'Fly to Phuket. Visit Big Buddha and Kata Beach. Evening at leisure. Overnight in Phuket.'
    },
    {
      day: 4,
      title: 'Phi Phi Island Tour',
      description: 'Full-day boat trip to Phi Phi Islands. Snorkeling and beach relaxation. Overnight in Phuket.'
    },
    {
      day: 5,
      title: 'Krabi Exploration',
      description: 'Drive to Krabi. Visit Railay Beach and Emerald Pool. Overnight in Krabi.'
    },
    {
      day: 6,
      title: 'Krabi Cultural Day',
      description: 'Visit Tiger Cave Temple and Hot Springs. Evening at Ao Nang Beach. Overnight in Krabi.'
    },
    {
      day: 7,
      title: 'Departure',
      description: 'Transfer to Krabi Airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in 4-star hotels',
    'Daily breakfast',
    'Private air-conditioned vehicle',
    'English-speaking guide',
    'All sightseeing and entrance fees',
    'Boat trips and island tours',
    'Airport transfers',
    'All applicable taxes'
  ],
  exclusions: [
    'International airfare',
    'Lunch and additional meals',
    'Personal expenses',
    'Camera fees',
    'Tips and gratuities',
    'Travel insurance',
    'Visa fees',
    'Any item not mentioned in inclusions'
  ],
  price: 'Starting from ₹95,000 per person'
},
{
  id: 'singapore-delights',
  type: 'international',
  name: 'Singapore Delights',
  cardImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  bannerImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ],
  duration: '4 Days / 3 Nights',
  overview: "Explore the vibrant city-state of Singapore, known for its modern skyline, lush gardens, and multicultural heritage. Enjoy world-class attractions and delectable cuisine.",
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Singapore',
      description: 'Arrive at Changi Airport. Transfer to your hotel. Evening visit to Marina Bay Sands and Gardens by the Bay. Overnight in Singapore.'
    },
    {
      day: 2,
      title: 'City Highlights',
      description: 'Visit Merlion Park, Sentosa Island, and Universal Studios. Evening Light and Sound Show at Marina Bay. Overnight in Singapore.'
    },
    {
      day: 3,
      title: 'Cultural Exploration',
      description: 'Visit Chinatown, Little India, and Kampong Glam. Afternoon at Orchard Road for shopping. Overnight in Singapore.'
    },
    {
      day: 4,
      title: 'Departure',
      description: 'Transfer to Changi Airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in 4-star hotels',
    'Daily breakfast',
    'Private air-conditioned vehicle',
    'English-speaking guide',
    'All sightseeing and entrance fees',
    'Airport transfers',
    'All applicable taxes'
  ],
  exclusions: [
    'International airfare',
    'Lunch and additional meals',
    'Personal expenses',
    'Camera fees',
    'Tips and gratuities',
    'Travel insurance',
    'Visa fees',
    'Any item not mentioned in inclusions'
  ],
  price: 'Starting from ₹75,000 per person'
},
{
  id: 'bali-paradise',
  type: 'international',
  name: 'Bali Paradise',
  cardImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  bannerImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ],
  duration: '6 Days / 5 Nights',
  overview: "Discover the enchanting beauty of Bali, from its lush rice terraces and volcanic mountains to its pristine beaches and vibrant culture.",
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Bali',
      description: 'Arrive at Ngurah Rai International Airport. Transfer to Ubud. Evening at leisure. Overnight in Ubud.'
    },
    {
      day: 2,
      title: 'Ubud Exploration',
      description: 'Visit Monkey Forest, Tegalalang Rice Terraces, and Ubud Palace. Evening traditional Kecak dance performance. Overnight in Ubud.'
    },
    {
      day: 3,
      title: 'Seminyak Adventure',
      description: 'Drive to Seminyak. Visit Tanah Lot Temple and Batu Bolong Beach. Evening at Potato Head Beach Club. Overnight in Seminyak.'
    },
    {
      day: 4,
      title: 'Nusa Dua Relaxation',
      description: 'Drive to Nusa Dua. Enjoy water sports and beach relaxation. Overnight in Nusa Dua.'
    },
    {
      day: 5,
      title: 'Uluwatu Sunset',
      description: 'Visit Uluwatu Temple and Jimbaran Bay. Evening seafood dinner. Overnight in Nusa Dua.'
    },
    {
      day: 6,
      title: 'Departure',
      description: 'Transfer to Ngurah Rai International Airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in 4-star hotels',
    'Daily breakfast',
    'Private air-conditioned vehicle',
    'English-speaking guide',
    'All sightseeing and entrance fees',
    'Airport transfers',
    'All applicable taxes'
  ],
  exclusions: [
    'International airfare',
    'Lunch and additional meals',
    'Personal expenses',
    'Camera fees',
    'Tips and gratuities',
    'Travel insurance',
    'Visa fees',
    'Any item not mentioned in inclusions'
  ],
  price: 'Starting from ₹80,000 per person'
},
{
  id: 'europe-classics',
  type: 'international',
  name: 'Europe Classics',
  cardImage: 'https://images.unsplash.com/photo-1516155510355-7bb6ca06f4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  bannerImage: 'https://images.unsplash.com/photo-1516155510355-7bb6ca06f4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1516155510355-7bb6ca06f4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516155510355-7bb6ca06f4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516155510355-7bb6ca06f4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ],
  duration: '10 Days / 9 Nights',
  overview: "Embark on a journey through Europe's most iconic cities—Paris, Rome, and Barcelona. Experience art, history, and culture like never before.",
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Paris',
      description: 'Arrive at Charles de Gaulle Airport. Transfer to your hotel. Evening Seine River cruise. Overnight in Paris.'
    },
    {
      day: 2,
      title: 'Paris Exploration',
      description: 'Visit Eiffel Tower, Louvre Museum, and Notre Dame Cathedral. Evening at Montmartre. Overnight in Paris.'
    },
    {
      day: 3,
      title: 'Versailles Day Trip',
      description: 'Day trip to Palace of Versailles. Evening free time. Overnight in Paris.'
    },
    {
      day: 4,
      title: 'Rome Adventure',
      description: 'Fly to Rome. Visit Colosseum and Roman Forum. Evening at Trevi Fountain. Overnight in Rome.'
    },
    {
      day: 5,
      title: 'Vatican City',
      description: 'Visit Vatican Museums, Sistine Chapel, and St. Peter’s Basilica. Evening at Piazza Navona. Overnight in Rome.'
    },
    {
      day: 6,
      title: 'Barcelona Discovery',
      description: 'Fly to Barcelona. Visit Sagrada Familia and Gothic Quarter. Evening at Las Ramblas. Overnight in Barcelona.'
    },
    {
      day: 7,
      title: 'Park Güell',
      description: 'Visit Park Güell and Casa Batlló. Evening at Barceloneta Beach. Overnight in Barcelona.'
    },
    {
      day: 8,
      title: 'Montserrat Day Trip',
      description: 'Day trip to Montserrat Monastery. Evening free time. Overnight in Barcelona.'
    },
    {
      day: 9,
      title: 'Leisure Day',
      description: 'Day at leisure for shopping or exploring local markets. Overnight in Barcelona.'
    },
    {
      day: 10,
      title: 'Departure',
      description: 'Transfer to Barcelona Airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in 4-star hotels',
    'Daily breakfast',
    'Private air-conditioned vehicle',
    'English-speaking guide',
    'All sightseeing and entrance fees',
    'Airport transfers',
    'All applicable taxes'
  ],
  exclusions: [
    'International airfare',
    'Lunch and additional meals',
    'Personal expenses',
    'Camera fees',
    'Tips and gratuities',
    'Travel insurance',
    'Visa fees',
    'Any item not mentioned in inclusions'
  ],
  price: 'Starting from ₹1,85,000 per person'
},
{
  id: 'maldives-romance',
  type: 'international',
  name: 'Maldives Romance',
  cardImage: 'https://images.unsplash.com/photo-1562577309-497a62e3e22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  bannerImage: 'https://images.unsplash.com/photo-1562577309-497a62e3e22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1562577309-497a62e3e22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1562577309-497a62e3e22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1562577309-497a62e3e22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ],
  duration: '5 Days / 4 Nights',
  overview: "Escape to the Maldives for a romantic getaway. Stay in overwater villas, snorkel in crystal-clear waters, and enjoy sunsets like no other.",
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Male',
      description: 'Arrive at Velana International Airport. Transfer to your resort via speedboat. Evening at leisure. Overnight in overwater villa.'
    },
    {
      day: 2,
      title: 'Snorkeling Adventure',
      description: 'Morning snorkeling session. Afternoon relaxation at the beach. Evening sunset cruise. Overnight in overwater villa.'
    },
    {
      day: 3,
      title: 'Water Sports',
      description: 'Enjoy water sports like kayaking and paddleboarding. Afternoon spa treatment. Overnight in overwater villa.'
    },
    {
      day: 4,
      title: 'Ari Atoll Excursion',
      description: 'Day trip to Ari Atoll for dolphin watching and reef exploration. Evening private dinner on the beach. Overnight in overwater villa.'
    },
    {
      day: 5,
      title: 'Departure',
      description: 'Transfer to Velana International Airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in overwater villas',
    'Daily breakfast and dinner',
    'Private speedboat transfers',
    'English-speaking guide',
    'All water sports activities',
    'Sunset cruise',
    'Airport transfers',
    'All applicable taxes'
  ],
  exclusions: [
    'International airfare',
    'Lunch and additional meals',
    'Personal expenses',
    'Camera fees',
    'Tips and gratuities',
    'Travel insurance',
    'Visa fees',
    'Any item not mentioned in inclusions'
  ],
  price: 'Starting from ₹1,20,000 per person'
},
{
  id: 'japan-culture',
  type: 'international',
  name: 'Japan Culture',
  cardImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  bannerImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ],
  duration: '8 Days / 7 Nights',
  overview: "Immerse yourself in Japan's unique blend of tradition and modernity. Explore ancient temples, cherry blossoms, and bustling cities.",
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Tokyo',
      description: 'Arrive at Narita/Haneda Airport. Transfer to your hotel. Evening at Shibuya Crossing. Overnight in Tokyo.'
    },
    {
      day: 2,
      title: 'Tokyo Exploration',
      description: 'Visit Senso-ji Temple, Meiji Shrine, and Harajuku. Evening at Tokyo Skytree. Overnight in Tokyo.'
    },
    {
      day: 3,
      title: 'Mount Fuji Adventure',
      description: 'Day trip to Mount Fuji and Hakone. Enjoy hot springs and scenic views. Overnight in Tokyo.'
    },
    {
      day: 4,
      title: 'Kyoto Discovery',
      description: 'Travel to Kyoto via Shinkansen (bullet train). Visit Fushimi Inari Shrine and Arashiyama Bamboo Grove. Overnight in Kyoto.'
    },
    {
      day: 5,
      title: 'Kyoto Temples',
      description: 'Visit Kinkaku-ji (Golden Pavilion) and Gion District. Evening traditional tea ceremony. Overnight in Kyoto.'
    },
    {
      day: 6,
      title: 'Osaka Exploration',
      description: 'Travel to Osaka. Visit Osaka Castle and Dotonbori. Evening street food tasting. Overnight in Osaka.'
    },
    {
      day: 7,
      title: 'Universal Studios',
      description: 'Full-day visit to Universal Studios Japan. Overnight in Osaka.'
    },
    {
      day: 8,
      title: 'Departure',
      description: 'Transfer to Kansai International Airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in 4-star hotels',
    'Daily breakfast',
    'Private air-conditioned vehicle',
    'English-speaking guide',
    'All sightseeing and entrance fees',
    'Bullet train tickets',
    'Airport transfers',
    'All applicable taxes'
  ],
  exclusions: [
    'International airfare',
    'Lunch and additional meals',
    'Personal expenses',
    'Camera fees',
    'Tips and gratuities',
    'Travel insurance',
    'Visa fees',
    'Any item not mentioned in inclusions'
  ],
  price: 'Starting from ₹1,50,000 per person'
},
{
  id: 'new-zealand-adventure',
  type: 'international',
  name: 'New Zealand Adventure',
  cardImage: 'https://images.unsplash.com/photo-1537151608828-ea3838c12eaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  bannerImage: 'https://images.unsplash.com/photo-1537151608828-ea3838c12eaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1537151608828-ea3838c12eaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1537151608828-ea3838c12eaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1537151608828-ea3838c12eaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ],
  duration: '9 Days / 8 Nights',
  overview: "Experience the breathtaking landscapes of New Zealand—from geothermal wonders to snow-capped mountains and pristine lakes.",
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Auckland',
      description: 'Arrive at Auckland Airport. Transfer to your hotel. Evening at Sky Tower. Overnight in Auckland.'
    },
    {
      day: 2,
      title: 'Auckland Exploration',
      description: 'Visit Waiheke Island and Viaduct Harbour. Evening at Mission Bay. Overnight in Auckland.'
    },
    {
      day: 3,
      title: 'Rotorua Adventure',
      description: 'Drive to Rotorua. Visit Wai-O-Tapu Thermal Wonderland and Maori Cultural Show. Overnight in Rotorua.'
    },
    {
      day: 4,
      title: 'Hobbiton Tour',
      description: 'Visit Hobbiton Movie Set. Afternoon at Lake Taupo. Overnight in Rotorua.'
    },
    {
      day: 5,
      title: 'Queenstown Discovery',
      description: 'Fly to Queenstown. Visit Lake Wakatipu and Skyline Gondola. Evening at leisure. Overnight in Queenstown.'
    },
    {
      day: 6,
      title: 'Milford Sound Cruise',
      description: 'Full-day excursion to Milford Sound. Scenic cruise and nature walks. Overnight in Queenstown.'
    },
    {
      day: 7,
      title: 'Adventure Activities',
      description: 'Choose from bungee jumping, jet boating, or hiking. Evening at Onsen Hot Pools. Overnight in Queenstown.'
    },
    {
      day: 8,
      title: 'Wanaka Exploration',
      description: 'Day trip to Wanaka. Visit Roys Peak and Puzzling World. Overnight in Queenstown.'
    },
    {
      day: 9,
      title: 'Departure',
      description: 'Transfer to Queenstown Airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in 4-star hotels',
    'Daily breakfast',
    'Private air-conditioned vehicle',
    'English-speaking guide',
    'All sightseeing and entrance fees',
    'Scenic cruises',
    'Airport transfers',
    'All applicable taxes'
  ],
  exclusions: [
    'International airfare',
    'Lunch and additional meals',
    'Personal expenses',
    'Camera fees',
    'Tips and gratuities',
    'Travel insurance',
    'Visa fees',
    'Any item not mentioned in inclusions'
  ],
  price: 'Starting from ₹1,95,000 per person'
},
{
  id: 'egypt-heritage',
  type: 'international',
  name: 'Egypt Heritage',
  cardImage: 'https://images.unsplash.com/photo-1518760698656-fd12d690faea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  bannerImage: 'https://images.unsplash.com/photo-1518760698656-fd12d690faea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1518760698656-fd12d690faea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518760698656-fd12d690faea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518760698656-fd12d690faea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ],
  duration: '7 Days / 6 Nights',
  overview: "Uncover the mysteries of ancient Egypt. Explore the Pyramids, Nile River, and historic temples while experiencing the vibrant culture.",
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Cairo',
      description: 'Arrive at Cairo International Airport. Transfer to your hotel. Evening at leisure. Overnight in Cairo.'
    },
    {
      day: 2,
      title: 'Pyramids and Sphinx',
      description: 'Visit the Great Pyramids of Giza and the Sphinx. Evening sound and light show. Overnight in Cairo.'
    },
    {
      day: 3,
      title: 'Egyptian Museum',
      description: 'Visit the Egyptian Museum and Khan El Khalili Bazaar. Evening Nile River dinner cruise. Overnight in Cairo.'
    },
    {
      day: 4,
      title: 'Luxor Exploration',
      description: 'Fly to Luxor. Visit Karnak Temple and Luxor Temple. Evening at leisure. Overnight in Luxor.'
    },
    {
      day: 5,
      title: 'Valley of the Kings',
      description: 'Visit Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon. Evening hot air balloon ride. Overnight in Luxor.'
    },
    {
      day: 6,
      title: 'Aswan Adventure',
      description: 'Travel to Aswan. Visit Philae Temple and Aswan High Dam. Evening felucca ride on the Nile. Overnight in Aswan.'
    },
    {
      day: 7,
      title: 'Departure',
      description: 'Transfer to Aswan Airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in 4-star hotels',
    'Daily breakfast',
    'Private air-conditioned vehicle',
    'English-speaking guide',
    'All sightseeing and entrance fees',
    'Felucca ride and hot air balloon',
    'Airport transfers',
    'All applicable taxes'
  ],
  exclusions: [
    'International airfare',
    'Lunch and additional meals',
    'Personal expenses',
    'Camera fees',
    'Tips and gratuities',
    'Travel insurance',
    'Visa fees',
    'Any item not mentioned in inclusions'
  ],
  price: 'Starting from ₹1,10,000 per person'
},



];

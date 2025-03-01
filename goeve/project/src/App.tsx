import React, { useState } from 'react';
import Header from './components/Header';
import EventCard from './components/EventCard';

const EVENTS = [
  {
    id: 1,
    title: "Spring Tech Hackathon 2024",
    date: "Mar 15, 2024",
    time: "9:00 AM - 9:00 PM",
    location: "Engineering Building",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
    category: "Technology",
    spots: 50
  },
  {
    id: 2,
    title: "Cultural Festival",
    date: "Mar 20, 2024",
    time: "11:00 AM - 8:00 PM",
    location: "Campus Square",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
    category: "Culture",
    spots: 200
  },
  {
    id: 3,
    title: "Career Fair 2024",
    date: "Mar 25, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Student Center",
    image: "https://images.unsplash.com/photo-1559998267-611e683c2cfd?auto=format&fit=crop&q=80&w=1000",
    category: "Career",
    spots: 150
  },
  {
    id: 4,
    title: "Science Symposium",
    date: "Apr 1, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Science Complex",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000",
    category: "Academic",
    spots: 100
  },
  {
    id: 5,
    title: "Sports Tournament",
    date: "Apr 5, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Sports Complex",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000",
    category: "Sports",
    spots: 80
  },
  {
    id: 6,
    title: "Music Concert",
    date: "Apr 10, 2024",
    time: "7:00 PM - 10:00 PM",
    location: "Auditorium",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=1000",
    category: "Entertainment",
    spots: 300
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Technology', 'Culture', 'Career', 'Academic', 'Sports', 'Entertainment'];

  const filteredEvents = selectedCategory === 'All' 
    ? EVENTS 
    : EVENTS.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Campus Events
          </h1>
          <p className="text-xl text-gray-600">
            Join, learn, and connect with your college community
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              image={event.image}
              category={event.category}
              spots={event.spots}
              onClick={() => alert(`Clicked on ${event.title}`)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            © 2024 CampusEvents. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
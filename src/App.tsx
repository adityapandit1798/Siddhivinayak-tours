import React from 'react';
import { unstable_HistoryRouter as Router, Routes, Route } from 'react-router-dom';
import history from './history'; // Import the custom history object
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import National from './pages/tours/National';
import International from './pages/tours/International';
import TourDetail from './pages/tours/TourDetail';

function App() {
  return (
    <Router history={history}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tours/national" element={<National />} />
            <Route path="/tours/international" element={<International />} />
            <Route path="/tours/:type/:tourId" element={<TourDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Monasteries from './pages/Monasteries';
import About from './pages/About';
import Contact from './pages/Contact';
import DirectionsPage from './pages/DirectionsPage';
import WeatherPage from './pages/WeatherPage';
import VirtualTour from './components/VirtualTour/VirtualTour';
import InteractiveMap from './components/InteractiveMap/InteractiveMap';
import CulturalCalendar from './components/CulturalCalendar/CulturalCalendar';
import MonasteryDetails from './components/MonasteryDetails/MonasteryDetails';
import EventDetails from './components/EventDetails/EventDetails';
import Virtual from './pages/Virtual';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monasteries" element={<Monasteries />} />
          <Route path="/monasteries/:id" element={<MonasteryDetails />} />
          <Route path="/virtual/:id" element={<Virtual />} />
          <Route path="/directions/:monasteryId" element={<DirectionsPage />} />
          <Route path="/weather/:monasteryId" element={<WeatherPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/interactive-map" element={<InteractiveMap />} />
          <Route path="/cultural-calendar" element={<CulturalCalendar />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
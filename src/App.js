// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import LoginForm from "./components/LoginForm";
import "./App.css";
import BookingForm from "./components/BookingForm";
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Services />
      <ContactForm />
      <LoginForm />
    </div>
  );
}
<Route path="/booking" element={
  <ProtectedRoute>
    <BookingForm />
  </ProtectedRoute>
} />


export default App;

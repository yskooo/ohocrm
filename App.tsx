
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import WhyOHO from './pages/WhyOHO';
import ZohoProductPage from './pages/ZohoProductPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/why-oho" element={<WhyOHO />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            
            {/* Zoho Ecosystem Routes */}
            <Route path="/zoho" element={<ZohoProductPage type="ecosystem" />} />
            <Route path="/zoho/zoho-crm" element={<ZohoProductPage type="crm" />} />
            <Route path="/zoho/zoho-forms" element={<ZohoProductPage type="forms" />} />
            <Route path="/zoho/zoho-partner-australia" element={<ZohoProductPage type="partner" />} />
          </Routes>
        </main>
        <FloatingCTA />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DefenceCoverage } from './components/DefenceCoverage';
import { BookingForm } from './components/BookingForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';
import { MyBookingsModal } from './components/MyBookingsModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BookingRecord, ServiceId } from './types';
import { bookingStorage } from './services/bookingStorage';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('all-rounder');
  const [selectedPhase, setSelectedPhase] = useState<string>('DHA Phase 5');
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);

  // Load existing bookings from local storage
  useEffect(() => {
    const list = bookingStorage.getAll();
    setBookings(list);
  }, []);

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromCard = (serviceId: ServiceId) => {
    setSelectedServiceId(serviceId);
    scrollToBooking();
  };

  const handleBookInPhase = (phase: string) => {
    setSelectedPhase(phase);
    scrollToBooking();
  };

  const handleBookingCreated = (record: BookingRecord) => {
    setBookings((prev) => [record, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#070B12] text-[#F5F5F7] flex flex-col selection:bg-amber-400 selection:text-black font-[-apple-system,BlinkMacSystemFont,'Inter','Plus_Jakarta_Sans',sans-serif] pb-16 md:pb-0">
      {/* Top Navbar */}
      <Navbar
        onBookClick={scrollToBooking}
        onViewRequestsClick={() => setIsMyBookingsOpen(true)}
        bookingCount={bookings.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={scrollToBooking}
          onExploreClick={scrollToServices}
        />

        {/* Services Section with Colourful Cards */}
        <ServicesSection
          onSelectService={handleSelectServiceFromCard}
          onBookClick={scrollToBooking}
        />

        {/* 4-Step Process Section */}
        <HowItWorks />

        {/* Why Choose Us - Four Good Reasons Section */}
        <WhyChooseUs onBookClick={scrollToBooking} />

        {/* Dedicated Interactive Booking Experience */}
        <BookingForm
          initialServiceId={selectedServiceId}
          initialPhase={selectedPhase}
          onBookingCreated={handleBookingCreated}
          onBackToHome={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Defence Karachi Geographic Focus & Coverage */}
        <DefenceCoverage onBookInPhase={handleBookInPhase} />

        {/* Contact & FAQ Integrated Section matching screenshot */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectService={handleSelectServiceFromCard}
        onBookClick={scrollToBooking}
      />

      {/* Floating AI Customer Support Assistant */}
      <ChatbotWidget
        onSelectService={handleSelectServiceFromCard}
        onOpenBooking={scrollToBooking}
      />

      {/* Customer Bookings Modal Drawer */}
      <MyBookingsModal
        isOpen={isMyBookingsOpen}
        onClose={() => setIsMyBookingsOpen(false)}
        bookings={bookings}
      />

      {/* Mobile Sticky Quick CTA Bar */}
      <MobileStickyBar onBookClick={scrollToBooking} />
    </div>
  );
}

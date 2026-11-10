'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import FactoryPartners from '@/components/FactoryPartners';
import CoverageMap from '@/components/CoverageMap';
import AboutCompany from '@/components/AboutCompany';
import ContactsFooter from '@/components/ContactsFooter';
import MobileStickyBar from '@/components/MobileStickyBar';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FactoryPartners />
      <CoverageMap />
      <AboutCompany />
      <ContactsFooter />
      <MobileStickyBar />
    </main>
  );
}

'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import FactoryPartners from '@/components/FactoryPartners';
import CoverageMap from '@/components/CoverageMap';
import AboutCompany from '@/components/AboutCompany';
import WarehouseLogistics from '@/components/WarehouseLogistics';
import CollaborationSteps from '@/components/CollaborationSteps';
import ContactsFooter from '@/components/ContactsFooter';
import MobileStickyBar from '@/components/MobileStickyBar';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FactoryPartners />
      <CoverageMap />
      <AboutCompany />
      <WarehouseLogistics />
      <CollaborationSteps />
      <ContactsFooter />
      <MobileStickyBar />
    </main>
  );
}

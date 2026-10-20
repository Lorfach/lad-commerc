'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CategoryShowcase from '@/components/CategoryShowcase';
import AboutCompany from '@/components/AboutCompany';
import WarehouseLogistics from '@/components/WarehouseLogistics';
import CollaborationSteps from '@/components/CollaborationSteps';
import ContactsFooter from '@/components/ContactsFooter';
import InquiryFormModal from '@/components/InquiryFormModal';
import MobileStickyBar from '@/components/MobileStickyBar';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const handleOpenInquiry = (category?: string) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setModalOpen(false);
    setSelectedCategory(undefined);
  };

  return (
    <main>
      <HeroSection onOpenInquiry={handleOpenInquiry} />
      <CategoryShowcase onSelectCategory={handleOpenInquiry} />
      <AboutCompany />
      <WarehouseLogistics />
      <CollaborationSteps onOpenInquiry={() => handleOpenInquiry()} />
      <ContactsFooter />

      <InquiryFormModal
        isOpen={modalOpen}
        onClose={handleCloseInquiry}
        initialCategory={selectedCategory}
      />

      <MobileStickyBar onOpenInquiry={() => handleOpenInquiry()} />
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import FactoryPartners from '@/components/FactoryPartners';
import CoverageMap from '@/components/CoverageMap';
import AboutCompany from '@/components/AboutCompany';
import WarehouseLogistics from '@/components/WarehouseLogistics';
import CollaborationSteps from '@/components/CollaborationSteps';
import ContactsFooter from '@/components/ContactsFooter';
import InquiryFormModal from '@/components/InquiryFormModal';
import MobileStickyBar from '@/components/MobileStickyBar';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTarget, setSelectedTarget] = useState<string | undefined>();

  const handleOpenInquiry = (targetName?: string) => {
    setSelectedTarget(targetName);
    setModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setModalOpen(false);
    setSelectedTarget(undefined);
  };

  return (
    <main>
      <HeroSection onOpenInquiry={handleOpenInquiry} />
      <FactoryPartners onSelectFactory={handleOpenInquiry} />
      <CoverageMap onConnectStore={() => handleOpenInquiry('Подключение торговой точки')} />
      <AboutCompany />
      <WarehouseLogistics />
      <CollaborationSteps onOpenInquiry={() => handleOpenInquiry()} />
      <ContactsFooter />

      <InquiryFormModal
        isOpen={modalOpen}
        onClose={handleCloseInquiry}
        initialCategory={selectedTarget}
      />

      <MobileStickyBar onOpenInquiry={() => handleOpenInquiry()} />
    </main>
  );
}

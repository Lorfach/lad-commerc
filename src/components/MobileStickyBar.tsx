'use client';

import React from 'react';
import styles from './MobileStickyBar.module.css';
import { MessageCircle, FileSpreadsheet } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenInquiry: () => void;
}

export default function MobileStickyBar({ onOpenInquiry }: MobileStickyBarProps) {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/77078233422?text=' +
        encodeURIComponent('Здравствуйте! Интересуют условия поставок кондитерских изделий ТОО Лад Коммерц.'),
      '_blank'
    );
  };

  return (
    <div className={styles.stickyBar}>
      <div className={styles.buttons}>
        <button type="button" className={styles.btnPrice} onClick={onOpenInquiry}>
          Узнать условия
        </button>
        <button type="button" className={styles.btnWhatsApp} onClick={handleWhatsApp}>
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

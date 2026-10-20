'use client';

import React from 'react';
import styles from './MobileStickyBar.module.css';
import { MessageCircle } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenInquiry: () => void;
}

export default function MobileStickyBar({ onOpenInquiry }: MobileStickyBarProps) {
  const handleWhatsApp = () => {
    window.open('https://wa.me/77273830906?text=' + encodeURIComponent('Здравствуйте! Интересует оптовый прайс-лист Лад Коммерц.'), '_blank');
  };

  return (
    <div className={styles.stickyBar}>
      <div className={styles.buttons}>
        <button type="button" className={styles.btnPrice} onClick={onOpenInquiry}>
          Прайс-лист
        </button>
        <button type="button" className={styles.btnWhatsApp} onClick={handleWhatsApp}>
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

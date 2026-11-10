'use client';

import React from 'react';
import styles from './MobileStickyBar.module.css';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileStickyBar() {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/77078233422?text=' +
        encodeURIComponent('Здравствуйте! Интересуют условия поставок кондитерских изделий ТОО Лад Коммерц.'),
      '_blank'
    );
  };

  return (
    <div className={styles.stickyBar} role="region" aria-label="Быстрая связь">
      <div className={styles.stickyInner}>
        <a href="tel:+77017139738" className={styles.btnCallOutline}>
          <Phone size={16} />
          <span>Позвонить</span>
        </a>
        <button type="button" className={styles.btnWhatsAppGold} onClick={handleWhatsApp}>
          <MessageCircle size={17} />
          <span>Написать в WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

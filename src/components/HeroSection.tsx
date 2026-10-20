'use client';

import React from 'react';
import styles from './HeroSection.module.css';
import { MapPin, MessageCircle } from 'lucide-react';

interface HeroSectionProps {
  onOpenInquiry: (category?: string) => void;
}

export default function HeroSection({ onOpenInquiry }: HeroSectionProps) {
  const handleWhatsApp = () => {
    window.open('https://wa.me/77273830906?text=' + encodeURIComponent('Здравствуйте! Интересует оптовый прайс-лист компании Лад Коммерц.'), '_blank');
  };

  return (
    <section className={styles.heroWrapper} id="hero">
      {/* Top Status Strip */}
      <div className={styles.topStrip} data-region="top-strip">
        <div className={styles.topLocationContent} data-region="top-location">
          <MapPin size={14} className={styles.topPinIcon} />
          <span>г. Алматы, ул. Черноморская, 12 • Оптовый склад кондитерских изделий</span>
        </div>
      </div>

      {/* Header Navigation Strip */}
      <div className={styles.headerStrip}>
        <header className={styles.headerNav}>
          <a href="#hero" className={styles.brandLogo} data-region="brand-logo">
            <svg className={styles.brandEmblemSvg} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="19" stroke="#be8b4d" strokeWidth="2.5" />
              <path d="M14 28V16M14 28H22M22 16V28M22 22L29 16M22 22L29 28" stroke="#643831" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className={styles.brandText}>
              <span>ЛАД</span>
              <span>КОММЕРЦ</span>
            </div>
          </a>

          <nav className={styles.navMenu} data-region="nav-menu">
            <ul className={styles.navLinks}>
              <li><a href="#catalog" className={styles.navLink}>Каталог</a></li>
              <li><a href="#about" className={styles.navLink}>О компании</a></li>
              <li><a href="#warehouse" className={styles.navLink}>Склад в Алматы</a></li>
              <li><a href="#process" className={styles.navLink}>Условия опта</a></li>
              <li><a href="#contacts" className={styles.navLink}>Контакты</a></li>
            </ul>
          </nav>

          <a href="tel:+77273830906" className={styles.navPhoneLink} data-region="nav-phone">
            <span>+7 (727) 383-09-06</span>
          </a>
        </header>
      </div>

      {/* Main Hero Viewport */}
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle} data-region="hero-title">
            Прямые оптовые поставки<br className={styles.desktopBr} />
            кондитерских изделий<br className={styles.desktopBr} />
            со склада в Алматы
          </h1>

          <p className={styles.heroDescription} data-region="hero-description">
            Поставки кондитерской продукции для розничных магазинов, торговых сетей и оптовиков Алматы и области. Заводские фасовки, свежие сроки и отгрузка со склада на Черноморской, 12.
          </p>

          <div className={styles.heroActions}>
            <button
              type="button"
              className={styles.btnPrice}
              data-region="btn-price"
              onClick={() => onOpenInquiry()}
            >
              Запросить оптовый прайс-лист
            </button>

            <button
              type="button"
              className={styles.btnWhatsApp}
              data-region="btn-whatsapp"
              onClick={handleWhatsApp}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      <figure className={styles.heroShowcasePlate} data-region="confectionery-showcase">
        <img
          src="/assets/plates/confectionery-showcase.png"
          alt="Ассортимент кондитерских изделий ТОО Лад Коммерц"
          className={styles.plateImage}
        />
      </figure>

      {/* Metrics Footer Strip */}
      <div className={styles.metricsStrip}>
        <div className={styles.metricsContainer}>
          <div className={styles.metricItem} data-region="metric-sku">
            <span className={styles.metricNumber}>500+</span>
            <span className={styles.metricLabel}>позиций<br />в прайсе</span>
          </div>

          <div className={styles.metricItem} data-region="metric-freshness">
            <span className={styles.metricNumber}>100%</span>
            <span className={styles.metricLabel}>сертификаты<br />ЕАС</span>
          </div>

          <div className={styles.metricItem} data-region="metric-direct">
            <span className={styles.metricNumber}>Прямой</span>
            <span className={styles.metricLabel}>опт<br />от фабрик</span>
          </div>
        </div>
      </div>
    </section>
  );
}

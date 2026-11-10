'use client';

import React from 'react';
import styles from './HeroSection.module.css';
import { MapPin, Phone, Package, Navigation, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/77078233422?text=' +
        encodeURIComponent('Здравствуйте! Интересуют условия поставок кондитерских изделий ТОО Лад Коммерц.'),
      '_blank'
    );
  };

  return (
    <section className={styles.heroWrapper} id="hero">
      {/* Top Status Strip */}
      <div className={styles.topStrip}>
        <div className={styles.topContainer}>
          <div className={styles.topLocation}>
            <MapPin size={14} className={styles.topPinIcon} />
            <span>г. Алматы, ул. Черноморская, 12 • Склад кондитерских изделий (+18°C)</span>
          </div>
          <div className={styles.topDistributorBadge}>
            <span>Поставки от 3 российских фабрик</span>
          </div>
        </div>
      </div>

      {/* Header Navigation Strip */}
      <div className={styles.headerStrip}>
        <header className={styles.headerNav}>
          <a href="#hero" className={styles.brandLogo}>
            <svg className={styles.brandEmblemSvg} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="19" stroke="#be8b4d" strokeWidth="2.5" />
              <path d="M14 28V16M14 28H22M22 16V28M22 22L29 16M22 22L29 28" stroke="#643831" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className={styles.brandText}>
              <span className={styles.brandName}>ЛАД КОММЕРЦ</span>
              <span className={styles.brandSub}>ДИСТРИБЬЮТОР КОНДИТЕРСКИХ ИЗДЕЛИЙ</span>
            </div>
          </a>

          <nav className={styles.navMenu}>
            <ul className={styles.navLinks}>
              <li><a href="#factories" className={styles.navLink}>Фабрики и ассортимент</a></li>
              <li><a href="#coverage" className={styles.navLink}>Карта доставки</a></li>
              <li><a href="#about" className={styles.navLink}>О компании</a></li>
              <li><a href="#warehouse" className={styles.navLink}>Склад</a></li>
              <li><a href="#contacts" className={styles.navLink}>Контакты</a></li>
            </ul>
          </nav>

          <div className={styles.headerPhones}>
            <a href="tel:+77017139738" className={styles.phoneLink}>
              <span className={styles.phoneLabel}>Kcell:</span>
              <span className={styles.phoneNumber}>+7 (701) 713-97-38</span>
            </a>
            <a href="tel:+77078233422" className={styles.phoneLink}>
              <span className={styles.phoneLabel}>Tele2:</span>
              <span className={styles.phoneNumber}>+7 (707) 823-34-22</span>
            </a>
          </div>
        </header>
      </div>

      {/* Main Hero Container */}
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Дистрибьюция кондитерских изделий в Алматы и области
          </h1>

          <p className={styles.heroDescription}>
            Поставляем продукцию трех российских кондитерских фабрик: <strong>«Завод АлёшинА»</strong>, <strong>«Черногорский Кондитер»</strong> и <strong>«Томский Кондитер»</strong>. Склад на Черноморской, 12. Отдельные условия для розничных магазинов и оптовых складов.
          </p>

          {/* 3 Fast Action Navigation Buttons */}
          <div className={styles.fastActionGrid}>
            <a href="#factories" className={styles.fastActionCard}>
              <div className={styles.fastIconWrap}>
                <Package size={20} />
              </div>
              <div className={styles.fastText}>
                <span className={styles.fastTitle}>Продукция 3 фабрик</span>
                <span className={styles.fastDesc}>Вафли, печенье, соломка, кексы</span>
              </div>
            </a>

            <a href="#coverage" className={styles.fastActionCard}>
              <div className={styles.fastIconWrap}>
                <Navigation size={20} />
              </div>
              <div className={styles.fastText}>
                <span className={styles.fastTitle}>Склад и карта доставки</span>
                <span className={styles.fastDesc}>Черноморская 12, Алматы и область</span>
              </div>
            </a>

            <a href="#contacts" className={styles.fastActionCard}>
              <div className={styles.fastIconWrap}>
                <Phone size={20} />
              </div>
              <div className={styles.fastText}>
                <span className={styles.fastTitle}>Связаться с нами</span>
                <span className={styles.fastDesc}>Kcell, Tele2 и WhatsApp</span>
              </div>
            </a>
          </div>

          {/* Primary CTA Button: WhatsApp */}
          <div className={styles.heroActions}>
            <button
              type="button"
              className={styles.btnWhatsAppPrimary}
              onClick={handleWhatsApp}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Перейти в WhatsApp</span>
            </button>

            <a href="#contacts" className={styles.btnSecondaryContacts}>
              Контакты и склад
            </a>
          </div>
        </div>

        {/* Right visual showcase */}
        <div className={styles.heroShowcasePlate}>
          <div className={styles.plateWrapper}>
            <img
              src="/assets/plates/confectionery-showcase.png"
              alt="Кондитерские изделия ТОО Лад Коммерц"
              className={styles.plateImage}
            />

            <div className={`${styles.factoryTag} ${styles.tagAlyoshina}`}>
              <img
                src="/assets/factories/alyoshina-logo.jpg"
                alt="Логотип фабрики Алёшина"
                className={styles.tagLogo}
              />
              <span>«Завод АлёшинА»</span>
            </div>

            <div className={`${styles.factoryTag} ${styles.tagChernogorsk}`}>
              <img
                src="/assets/factories/chernogorsk-logo.png"
                alt="Логотип Кондитерского концерна Черногорский"
                className={styles.tagLogo}
              />
              <span>«Черногорский Кондитер»</span>
            </div>

            <div className={`${styles.factoryTag} ${styles.tagTomsk}`}>
              <img
                src="/assets/factories/tomsk-logo.png"
                alt="Логотип фабрики Томский Кондитер"
                className={styles.tagLogo}
              />
              <span>«Томский Кондитер»</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className={styles.metricsStrip}>
        <div className={styles.metricsContainer}>
          <div className={styles.metricItem}>
            <span className={styles.metricNumber}>3 фабрики</span>
            <span className={styles.metricLabel}>прямые поставки с производств</span>
          </div>

          <div className={styles.metricItem}>
            <span className={styles.metricNumber}>+18°C</span>
            <span className={styles.metricLabel}>склад в Алматы с климат-контролем</span>
          </div>

          <div className={styles.metricItem}>
            <span className={styles.metricNumber}>24 часа</span>
            <span className={styles.metricLabel}>отгрузка и доставка по городу и области</span>
          </div>
        </div>
      </div>
    </section>
  );
}

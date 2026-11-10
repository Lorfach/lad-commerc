'use client';

import React from 'react';
import styles from './HeroSection.module.css';
import { MapPin, Phone, Package, Navigation } from 'lucide-react';

export default function HeroSection() {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/77078233422?text=' +
        encodeURIComponent('Здравствуйте! Интересуют условия поставок кондитерских изделий ТОО Лад Коммерц.'),
      '_blank'
    );
  };

  const heroFactories = [
    {
      name: '«Завод АлёшинА»',
      origin: 'г. Абакан',
      items: 'Соломка, хворост, сушки, драже',
      logo: '/assets/factories/alyoshina-logo.jpg',
      photo: '/assets/factories/alyoshina-solomka.jpg',
    },
    {
      name: '«Черногорский Кондитер»',
      origin: 'Хакасия',
      items: 'Вафли, печенье с суфле, пряники, зефир',
      logo: '/assets/factories/chernogorsk-logo.png',
      photo: '/assets/factories/chernogorsk-vafli.jpg',
    },
    {
      name: '«Томский Кондитер»',
      origin: 'г. Томск',
      items: 'Маффины «Мафф и Ози», печенье, крекеры',
      logo: '/assets/factories/tomsk-logo.png',
      photo: '/assets/factories/tomsk-toplenoe.jpg',
    },
  ];

  return (
    <section className={styles.heroWrapper} id="hero">
      {/* Top Status Strip */}
      <div className={styles.topStrip}>
        <div className={styles.topContainer}>
          <div className={styles.topLocation}>
            <MapPin size={14} className={styles.topPinIcon} />
            <span>г. Алматы, ул. Черноморская, 12 • Температурный склад (+18°C)</span>
          </div>
          <div className={styles.topSchedule}>
            <span>Пн – Пт: 09:00 – 18:00, Сб: 09:00 – 14:00</span>
          </div>
        </div>
      </div>

      {/* Header Navigation Strip */}
      <div className={styles.headerStrip}>
        <header className={styles.headerNav}>
          <a href="#hero" className={styles.brandLogo}>
            <svg className={styles.brandEmblemSvg} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="22" cy="22" r="19" stroke="#be8b4d" strokeWidth="2.5" />
              <path d="M14 28V16M14 28H22M22 16V28M22 22L29 16M22 22L29 28" stroke="#643831" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className={styles.brandText}>
              <span className={styles.brandName}>ЛАД КОММЕРЦ</span>
              <span className={styles.brandSub}>ДИСТРИБЬЮТОР КОНДИТЕРСКИХ ИЗДЕЛИЙ</span>
            </div>
          </a>

          <nav className={styles.navMenu} aria-label="Основная навигация">
            <ul className={styles.navLinks}>
              <li><a href="#factories" className={styles.navLink}>Фабрики и ассортимент</a></li>
              <li><a href="#coverage" className={styles.navLink}>Склад и доставка</a></li>
              <li><a href="#about" className={styles.navLink}>О компании и реквизиты</a></li>
              <li><a href="#contacts" className={styles.navLink}>Контакты</a></li>
            </ul>
          </nav>

          <div className={styles.headerPhones}>
            <a href="tel:+77017139738" className={styles.phoneLink}>
              <Phone size={13} className={styles.phoneIcon} />
              <span className={styles.phoneNumber}>+7 (701) 713-97-38</span>
            </a>
            <a href="tel:+77078233422" className={styles.phoneLink}>
              <span className={styles.phoneNumber}>+7 (707) 823-34-22</span>
              <span className={styles.phoneWaBadge}>WhatsApp</span>
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
            Прямые поставки с трех российских фабрик: <strong>«Завод АлёшинА»</strong>, <strong>«Черногорский Кондитер»</strong> и <strong>«Томский Кондитер»</strong>. Собственный склад на ул. Черноморская, 12. Раздельные условия для розничных магазинов и оптовых баз.
          </p>

          {/* 3 Fast Action Navigation Links */}
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
                <span className={styles.fastTitle}>Склад и доставка</span>
                <span className={styles.fastDesc}>Черноморская, 12 • Алматы и область</span>
              </div>
            </a>

            <a href="#contacts" className={styles.fastActionCard}>
              <div className={styles.fastIconWrap}>
                <Phone size={20} />
              </div>
              <div className={styles.fastText}>
                <span className={styles.fastTitle}>Контакты и реквизиты</span>
                <span className={styles.fastDesc}>Звонки и WhatsApp</span>
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Написать в WhatsApp</span>
            </button>

            <a href="#factories" className={styles.btnSecondaryContacts}>
              Смотреть ассортимент
            </a>
          </div>
        </div>

        {/* Right visual showcase: Authentic 3 Partner Factories */}
        <div className={styles.heroShowcase}>
          <div className={styles.showcaseStack}>
            {heroFactories.map((item) => (
              <a key={item.name} href="#factories" className={styles.showcaseItem}>
                <div className={styles.showcaseThumbWrap}>
                  <img
                    src={item.photo}
                    alt={`Продукция фабрики ${item.name}`}
                    width={88}
                    height={72}
                    className={styles.showcaseThumb}
                  />
                </div>
                <div className={styles.showcaseMeta}>
                  <div className={styles.showcaseTitleRow}>
                    <span className={styles.showcaseFactoryName}>{item.name}</span>
                    <span className={styles.showcaseOrigin}>{item.origin}</span>
                  </div>
                  <span className={styles.showcaseItems}>{item.items}</span>
                </div>
                <div className={styles.showcaseLogoBox}>
                  <img
                    src={item.logo}
                    alt={`Логотип ${item.name}`}
                    width={56}
                    height={36}
                    className={styles.showcaseLogo}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

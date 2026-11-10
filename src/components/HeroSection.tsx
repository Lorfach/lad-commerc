'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';
import { MapPin, Phone, ChevronDown, X, Menu, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

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
      items: 'Соломка, хворост, сушки, драже, щербет',
      logo: '/assets/factories/alyoshina-logo.jpg',
      photo: '/assets/factories/alyoshina-solomka.jpg',
    },
    {
      name: '«Черногорский Кондитер»',
      origin: 'Хакасия',
      items: 'Многослойные вафли, печенье с суфле, пряники, зефир',
      logo: '/assets/factories/chernogorsk-logo.png',
      photo: '/assets/factories/chernogorsk-vafli.jpg',
    },
    {
      name: '«Томский Кондитер»',
      origin: 'г. Томск',
      items: 'Маффины «Мафф и Ози», сахарное и сдобное печенье, крекеры',
      logo: '/assets/factories/tomsk-logo.png',
      photo: '/assets/factories/tomsk-toplenoe.jpg',
    },
  ];

  const navItems = [
    { href: '#factories', label: 'Фабрики и ассортимент' },
    { href: '#coverage', label: 'Склад и доставка' },
    { href: '#about', label: 'О компании и реквизиты' },
    { href: '#contacts', label: 'Контакты' },
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
            <div className={styles.brandText}>
              <div className={styles.brandTitleRow}>
                <span className={styles.brandName}>ЛАД КОММЕРЦ</span>
                <span className={styles.brandSinceBadge}>с 2005 г.</span>
              </div>
              <span className={styles.brandSub}>ДИСТРИБЬЮЦИЯ КОНДИТЕРСКИХ ИЗДЕЛИЙ</span>
            </div>
          </a>

          <nav className={styles.navMenu} aria-label="Основная навигация">
            <ul className={styles.navLinks}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.headerRight}>
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

            {/* Compact non-intrusive Mobile/Tablet Dropdown Menu */}
            <div className={styles.mobileMenuContainer} ref={dropdownRef}>
              <a
                href="tel:+77017139738"
                className={styles.mobileQuickCall}
                aria-label="Позвонить: +7 (701) 713-97-38"
              >
                <Phone size={15} />
              </a>

              <button
                type="button"
                className={`${styles.dropdownTrigger} ${menuOpen ? styles.dropdownTriggerOpen : ''}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav-dropdown"
                aria-label="Открыть навигационное меню"
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
                <span className={styles.dropdownTriggerText}>Разделы</span>
                <ChevronDown
                  size={14}
                  className={`${styles.dropdownChevron} ${menuOpen ? styles.dropdownChevronOpen : ''}`}
                />
              </button>

              {menuOpen && (
                <div
                  id="mobile-nav-dropdown"
                  className={styles.dropdownPanel}
                  role="dialog"
                  aria-label="Навигация по сайту"
                >
                  <nav aria-label="Мобильная навигация">
                    <ul className={styles.dropdownList}>
                      {navItems.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className={styles.dropdownLink}
                            onClick={() => setMenuOpen(false)}
                          >
                            <span>{item.label}</span>
                            <ArrowUpRight size={15} className={styles.dropdownLinkArrow} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className={styles.dropdownDivider} />

                  <div className={styles.dropdownContacts}>
                    <span className={styles.dropdownContactsLabel}>Отдел продаж и склад:</span>
                    <a href="tel:+77017139738" className={styles.dropdownPhoneRow}>
                      <Phone size={14} className={styles.phoneIcon} />
                      <span>+7 (701) 713-97-38</span>
                    </a>
                    <a href="tel:+77078233422" className={styles.dropdownPhoneRow}>
                      <Phone size={14} className={styles.phoneIcon} />
                      <span>+7 (707) 823-34-22</span>
                      <span className={styles.phoneWaBadge}>WhatsApp</span>
                    </a>
                    <div className={styles.dropdownAddressRow}>
                      <MapPin size={14} className={styles.topPinIcon} />
                      <span>г. Алматы, ул. Черноморская, 12</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>

      {/* Main Hero Container */}
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.editorialMetaRow}>
            <span className={styles.editorialTag}>ТОО «Лад Коммерц» • Алматы</span>
            <span className={styles.editorialDot}>•</span>
            <span className={styles.editorialSubTag}>Склад: ул. Черноморская, 12</span>
          </div>

          <h1 className={styles.heroTitle}>
            Дистрибьюция кондитерских изделий в Алматы и области
          </h1>

          <p className={styles.heroDescription}>
            Прямые поставки с трех российских фабрик: <strong>«Завод АлёшинА»</strong>, <strong>«Черногорский Кондитер»</strong> и <strong>«Томский Кондитер»</strong>. Отгрузка с собственного температурного склада (+18°C) и доставка автотранспортом по торговым точкам.
          </p>

          <dl className={styles.heroSpecsList}>
            <div className={styles.heroSpecItem}>
              <dt className={styles.heroSpecTerm}>Формат работы</dt>
              <dd className={styles.heroSpecValue}>Раздельные условия для розницы и оптовых баз</dd>
            </div>
            <div className={styles.heroSpecItem}>
              <dt className={styles.heroSpecTerm}>Документооборот</dt>
              <dd className={styles.heroSpecValue}>НДС, ЭСФ, СНТ, сертификаты соответствия ЕАС</dd>
            </div>
          </dl>

          {/* Primary & Outline Pill CTA Buttons per DESIGN.md */}
          <div className={styles.heroActions}>
            <button
              type="button"
              className={styles.btnPrimaryGold}
              onClick={handleWhatsApp}
            >
              <span>Написать в WhatsApp</span>
            </button>

            <a href="#factories" className={styles.btnSecondaryOutline}>
              Смотреть ассортимент
            </a>
          </div>
        </div>

        {/* Right visual showcase: Authentic 3 Partner Factories */}
        <div className={styles.heroShowcase}>
          <div className={styles.showcaseHeader}>
            <span className={styles.showcaseHeaderTitle}>Продукция 3 фабрик на складе</span>
            <a href="#factories" className={styles.showcaseHeaderLink}>
              К каталогу →
            </a>
          </div>
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

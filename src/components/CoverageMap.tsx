'use client';

import React, { useState } from 'react';
import styles from './CoverageMap.module.css';
import { MapPin, Warehouse, Store, MessageCircle } from 'lucide-react';

export default function CoverageMap() {
  const [filter, setFilter] = useState<'all' | 'city' | 'region'>('all');
  const [selectedPoint, setSelectedPoint] = useState<string>('hub');

  // Central distribution hub: Chernomorskaya 12
  const hub = {
    id: 'hub',
    name: 'Центральный склад ТОО «Лад Коммерц»',
    address: 'г. Алматы, ул. Черноморская, д. 12',
    type: 'hub' as const,
    x: 48,
    y: 44,
    description:
      'Собственный складской комплекс с температурным режимом +18°C, асфальтированным подъездом для грузового транспорта и зоной самовывоза.',
  };

  const points = [
    // Almaty Districts
    { id: 'almaty-zhetysu', name: 'Жетысуский район', area: 'Алматы', x: 49, y: 39, type: 'city' as const, desc: 'Пр. Рыскулова, Северное кольцо, ул. Аэродромная, мкр. Кулагер, Айнабулак' },
    { id: 'almaty-almaly', name: 'Алмалинский район', area: 'Алматы', x: 44, y: 52, type: 'city' as const, desc: 'Ул. Толе би, Гоголя, пр. Абылай хана, пр. Сейфуллина, Тастак' },
    { id: 'almaty-medeu', name: 'Медеуский район', area: 'Алматы', x: 55, y: 55, type: 'city' as const, desc: 'Пр. Достык, Жибек Жолы, ул. Луганского, мкр. Самал, Думан' },
    { id: 'almaty-bostandyk', name: 'Бостандыкский район', area: 'Алматы', x: 42, y: 62, type: 'city' as const, desc: 'Ул. Розыбакиева, пр. Аль-Фараби, ул. Тимирязева, мкр. Орбита, Казахфильм' },
    { id: 'almaty-auezov', name: 'Ауэзовский район', area: 'Алматы', x: 33, y: 54, type: 'city' as const, desc: 'Ул. Шаляпина, Саина, пр. Улугбека, мкр. Аксай, Жетысу, Мамыр' },
    { id: 'almaty-turksib', name: 'Турксибский район', area: 'Алматы', x: 58, y: 32, type: 'city' as const, desc: 'Пр. Суюнбая, ул. Шолохова, Майлина, район вокзала Алматы-1, мкр. Жулдыз' },
    { id: 'almaty-alatau', name: 'Алатауский район', area: 'Алматы', x: 34, y: 38, type: 'city' as const, desc: 'Ул. Момышулы, пр. Райымбека, мкр. Саялы, Акбулак, Алгабас, Зердели' },
    { id: 'almaty-nauryzbay', name: 'Наурызбайский район', area: 'Алматы', x: 26, y: 60, type: 'city' as const, desc: 'Пр. Абая, мкр. Калкаман, Акжар, Шугыла, Таусамалы' },

    // Almaty Oblast (Region)
    { id: 'region-talgar', name: 'г. Талгар', area: 'Алматинская область', x: 74, y: 56, type: 'region' as const, desc: 'Талгарский тракт, доставка в розничные магазины и оптовые точки города' },
    { id: 'region-kaskelen', name: 'г. Каскелен', area: 'Алматинская область', x: 16, y: 64, type: 'region' as const, desc: 'Карасайский район, верхняя и нижняя трассы, снабжение магазинов и рынков' },
    { id: 'region-konaev', name: 'г. Конаев', area: 'Алматинская область', x: 72, y: 16, type: 'region' as const, desc: 'Северное направление по трассе А3, поставки партий по согласованию' },
    { id: 'region-otegen', name: 'пос. Отеген-Батыр', area: 'Алматинская область', x: 56, y: 22, type: 'region' as const, desc: 'Илийский район (ГРЭС), доставка собственным автотранспортом со склада' },
    { id: 'region-baiserke', name: 'пос. Байсерке', area: 'Алматинская область', x: 51, y: 15, type: 'region' as const, desc: 'Илийский район, снабжение продуктовых магазинов и торговых точек' },
    { id: 'region-esik', name: 'г. Есик', area: 'Алматинская область', x: 86, y: 62, type: 'region' as const, desc: 'Енбекшиказахский район, восточный маршрут по Кульджинскому и Талгарскому трактам' },
    { id: 'region-shelek', name: 'с. Шелек', area: 'Алматинская область', x: 92, y: 48, type: 'region' as const, desc: 'Восточное направление по Кульджинскому тракту, регулярные поставки' },
  ];

  const visiblePoints = points.filter((p) => {
    if (filter === 'city') return p.type === 'city';
    if (filter === 'region') return p.type === 'region';
    return true;
  });

  const activeData =
    selectedPoint === 'hub'
      ? hub
      : points.find((p) => p.id === selectedPoint) || hub;

  const handleWhatsAppDelivery = () => {
    const pointName = activeData.name;
    window.open(
      'https://wa.me/77078233422?text=' +
        encodeURIComponent(`Здравствуйте! Интересует поставка кондитерских изделий (${pointName}).`),
      '_blank'
    );
  };

  return (
    <section className={styles.section} id="coverage">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Склад в Алматы и карта доставки</h2>
          <p className={styles.subtitle}>
            База и склад расположены на ул. Черноморская, 12. Отгружаем заказы самовывозом и доставляем собственным автотранспортом по районам Алматы и населенным пунктам области.
          </p>

          <div className={styles.filterBar} role="group" aria-label="Фильтр территории доставки">
            <button
              type="button"
              aria-pressed={filter === 'all'}
              className={`${styles.filterBtn} ${filter === 'all' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter('all')}
            >
              Вся карта
            </button>
            <button
              type="button"
              aria-pressed={filter === 'city'}
              className={`${styles.filterBtn} ${filter === 'city' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter('city')}
            >
              Алматы (8 районов)
            </button>
            <button
              type="button"
              aria-pressed={filter === 'region'}
              className={`${styles.filterBtn} ${filter === 'region' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter('region')}
            >
              Алматинская область (7 направлений)
            </button>
          </div>
        </div>

        <div className={styles.contentGrid}>
          {/* Visual Map Canvas */}
          <div className={styles.mapCard}>
            <div className={styles.mapLegend}>
              <div className={styles.legendItem}>
                <span className={styles.legendHubDot} />
                <span>Центральный склад (ул. Черноморская, 12)</span>
              </div>
              <div className={styles.legendItem}>
                <span className={styles.legendStarDot}>★</span>
                <span>Районы и направления доставки</span>
              </div>
            </div>

            <div className={styles.mapCanvasWrapper}>
              <svg className={styles.mapSvgBg} viewBox="0 0 100 80" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <radialGradient id="almatyGlow" cx="48%" cy="50%" r="42%">
                    <stop offset="0%" stopColor="#be8b4d" stopOpacity="0.16" />
                    <stop offset="60%" stopColor="#643831" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="100" height="80" fill="url(#almatyGlow)" />
                {/* Ring road / highway contours */}
                <ellipse
                  cx="45"
                  cy="49"
                  rx="20"
                  ry="16"
                  fill="none"
                  stroke="rgba(100, 56, 49, 0.1)"
                  strokeWidth="0.6"
                  strokeDasharray="2,1.5"
                />
                <path
                  d="M6,62 L48,44 L94,48"
                  fill="none"
                  stroke="rgba(100, 56, 49, 0.1)"
                  strokeWidth="0.7"
                />
                <path
                  d="M48,44 L72,16"
                  fill="none"
                  stroke="rgba(100, 56, 49, 0.1)"
                  strokeWidth="0.7"
                />
                {visiblePoints.map((p) => (
                  <line
                    key={`line-${p.id}`}
                    x1={hub.x}
                    y1={hub.y}
                    x2={p.x}
                    y2={p.y}
                    stroke="rgba(190, 139, 77, 0.25)"
                    strokeWidth="0.5"
                    strokeDasharray="1.5,1.5"
                  />
                ))}
              </svg>

              {/* Hub Marker as accessible button */}
              <button
                type="button"
                className={`${styles.markerHub} ${selectedPoint === 'hub' ? styles.markerHubActive : ''}`}
                style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                onClick={() => setSelectedPoint('hub')}
                aria-label="Центральный склад ТОО Лад Коммерц, ул. Черноморская, 12"
              >
                <span className={styles.hubBeacon} />
                <span className={styles.hubIconBox}>
                  <Warehouse size={16} />
                </span>
                <span className={styles.hubLabel}>Склад: Черноморская, 12</span>
              </button>

              {/* Retail / Partner Star Points */}
              {visiblePoints.map((pt) => {
                const isSelected = selectedPoint === pt.id;
                return (
                  <button
                    key={pt.id}
                    type="button"
                    className={`${styles.markerStar} ${isSelected ? styles.markerStarActive : ''} ${pt.type === 'region' ? styles.markerRegion : ''}`}
                    style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                    onClick={() => setSelectedPoint(pt.id)}
                    aria-label={pt.name}
                  >
                    <span className={styles.starGlyph}>★</span>
                    <span className={styles.starLabel}>{pt.name}</span>
                  </button>
                );
              })}
            </div>

            <div className={styles.mapFooterNote}>
              <span>Выберите район или склад на схеме, чтобы посмотреть ориентиры доставки</span>
            </div>
          </div>

          {/* Details Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.pointDetailCard}>
              <div className={styles.pointHeader}>
                <div className={styles.pointIconWrap}>
                  {activeData.type === 'hub' ? (
                    <Warehouse size={22} className={styles.pointIconHub} />
                  ) : (
                    <Store size={22} className={styles.pointIconStore} />
                  )}
                </div>
                <div>
                  <h3 className={styles.pointName}>{activeData.name}</h3>
                  <span className={styles.pointAreaSub}>
                    {activeData.type === 'hub' ? hub.address : (activeData as typeof points[number]).area}
                  </span>
                </div>
              </div>

              <p className={styles.pointDesc}>
                {'description' in activeData ? activeData.description : activeData.desc}
              </p>

              <div className={styles.warehouseSpecs} id="warehouse">
                <div className={styles.specRow}>
                  <MapPin size={15} className={styles.specIcon} />
                  <span><strong>Самовывоз со склада:</strong> ул. Черноморская, 12 (Пн–Сб)</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specDot} />
                  <span><strong>Температурный режим:</strong> +18°C круглый год</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specDot} />
                  <span><strong>Комплектация и выезд:</strong> в течение 24 часов после заявки</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specDot} />
                  <span><strong>Документы:</strong> НДС, ЭСФ, СНТ, сертификаты ЕАС</span>
                </div>
              </div>

              <div className={styles.sidebarAction}>
                <button
                  type="button"
                  className={styles.btnConnect}
                  onClick={handleWhatsAppDelivery}
                >
                  <MessageCircle size={18} />
                  <span>Написать в WhatsApp</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

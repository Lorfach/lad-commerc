'use client';

import React, { useState } from 'react';
import styles from './CoverageMap.module.css';
import { MapPin, Warehouse, Store, MessageCircle } from 'lucide-react';

export default function CoverageMap() {
  const [filter, setFilter] = useState<'all' | 'city' | 'region'>('all');
  const [selectedPoint, setSelectedPoint] = useState<string>('hub');

  // Central distribution hub: Chernomorskaya 12 (Zhetysu / Turksib border near Ryskulov)
  const hub = {
    id: 'hub',
    name: 'Центральный склад ТОО «Лад Коммерц»',
    address: 'г. Алматы, ул. Черноморская, д. 12',
    type: 'hub' as const,
    x: 48,
    y: 40,
    description:
      'Собственный складской комплекс с температурным режимом +18°C, асфальтированным подъездом для грузового транспорта и зоной самовывоза.',
  };

  const points = [
    // Almaty Districts (well-spaced geographic positions)
    { id: 'almaty-zhetysu', name: 'Жетысуский р-н', fullName: 'Жетысуский район', area: 'Алматы', x: 45, y: 31, type: 'city' as const, desc: 'Пр. Рыскулова, Северное кольцо, ул. Аэродромная, мкр. Кулагер, Айнабулак' },
    { id: 'almaty-turksib', name: 'Турксибский р-н', fullName: 'Турксибский район', area: 'Алматы', x: 61, y: 31, type: 'city' as const, desc: 'Пр. Суюнбая, ул. Шолохова, Майлина, район вокзала Алматы-1, мкр. Жулдыз' },
    { id: 'almaty-alatau', name: 'Алатауский р-н', fullName: 'Алатауский район', area: 'Алматы', x: 30, y: 37, type: 'city' as const, desc: 'Ул. Момышулы, пр. Райымбека, мкр. Саялы, Акбулак, Алгабас, Зердели' },
    { id: 'almaty-almaly', name: 'Алмалинский р-н', fullName: 'Алмалинский район', area: 'Алматы', x: 46, y: 51, type: 'city' as const, desc: 'Ул. Толе би, Гоголя, пр. Абылай хана, пр. Сейфуллина, Тастак' },
    { id: 'almaty-auezov', name: 'Ауэзовский р-н', fullName: 'Ауэзовский район', area: 'Алматы', x: 31, y: 52, type: 'city' as const, desc: 'Ул. Шаляпина, Саина, пр. Улугбека, мкр. Аксай, Жетысу, Мамыр' },
    { id: 'almaty-medeu', name: 'Медеуский р-н', fullName: 'Медеуский район', area: 'Алматы', x: 60, y: 54, type: 'city' as const, desc: 'Пр. Достык, Жибек Жолы, ул. Луганского, ВОАД, мкр. Самал, Думан' },
    { id: 'almaty-bostandyk', name: 'Бостандыкский р-н', fullName: 'Бостандыкский район', area: 'Алматы', x: 44, y: 65, type: 'city' as const, desc: 'Ул. Розыбакиева, пр. Аль-Фараби, ул. Тимирязева, мкр. Орбита, Казахфильм' },
    { id: 'almaty-nauryzbay', name: 'Наурызбайский р-н', fullName: 'Наурызбайский район', area: 'Алматы', x: 24, y: 66, type: 'city' as const, desc: 'Пр. Абая, мкр. Калкаман, Акжар, Шугыла, Таусамалы' },

    // Almaty Oblast (Region)
    { id: 'region-konaev', name: 'г. Конаев', fullName: 'г. Конаев', area: 'Алматинская область', x: 67, y: 11, type: 'region' as const, desc: 'Северное направление по трассе А3, поставки партий по согласованию' },
    { id: 'region-baiserke', name: 'пос. Байсерке', fullName: 'пос. Байсерке', area: 'Алматинская область', x: 48, y: 14, type: 'region' as const, desc: 'Илийский район, снабжение продуктовых магазинов и торговых точек' },
    { id: 'region-otegen', name: 'Отеген-Батыр', fullName: 'пос. Отеген-Батыр (ГРЭС)', area: 'Алматинская область', x: 58, y: 20, type: 'region' as const, desc: 'Илийский район (ГРЭС), доставка собственным автотранспортом со склада' },
    { id: 'region-kaskelen', name: 'г. Каскелен', fullName: 'г. Каскелен', area: 'Алматинская область', x: 12, y: 58, type: 'region' as const, desc: 'Карасайский район, верхняя и нижняя трассы, снабжение магазинов и рынков' },
    { id: 'region-talgar', name: 'г. Талгар', fullName: 'г. Талгар', area: 'Алматинская область', x: 75, y: 54, type: 'region' as const, desc: 'Талгарский тракт, доставка в розничные магазины и оптовые точки города' },
    { id: 'region-esik', name: 'г. Есик', fullName: 'г. Есик', area: 'Алматинская область', x: 86, y: 60, type: 'region' as const, desc: 'Енбекшиказахский район, восточный маршрут по Кульджинскому и Талгарскому трактам' },
    { id: 'region-shelek', name: 'с. Шелек', fullName: 'с. Шелек', area: 'Алматинская область', x: 91, y: 42, type: 'region' as const, desc: 'Восточное направление по Кульджинскому тракту, регулярные поставки' },
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
    const pointName = 'fullName' in activeData ? activeData.fullName : activeData.name;
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
          <h2 className={styles.title}>Склад в Алматы и география доставки</h2>
          <p className={styles.subtitle}>
            База и склад расположены на ул. Черноморская, 12. Отгружаем заказы самовывозом и доставляем собственным автотранспортом по всем районам Алматы и населенным пунктам области.
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
          {/* Visual Map Canvas + Quick Selector */}
          <div className={styles.mapCard}>
            <div className={styles.mapLegend}>
              <div className={styles.legendItem}>
                <span className={styles.legendHubDot} />
                <span>Центральный склад (ул. Черноморская, 12)</span>
              </div>
              <div className={styles.legendItem}>
                <span className={styles.legendStarDot}>★</span>
                <span>Районы Алматы и города области</span>
              </div>
            </div>

            <div className={styles.mapCanvasWrapper}>
              <svg className={styles.mapSvgBg} viewBox="0 0 100 80" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <radialGradient id="almatyGlow" cx="46%" cy="48%" r="40%">
                    <stop offset="0%" stopColor="#be8b4d" stopOpacity="0.18" />
                    <stop offset="65%" stopColor="#643831" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="100" height="80" fill="url(#almatyGlow)" />

                {/* Almaty City Boundary Contour */}
                <ellipse
                  cx="45"
                  cy="49"
                  rx="22"
                  ry="21"
                  fill="rgba(190, 139, 77, 0.04)"
                  stroke="rgba(100, 56, 49, 0.14)"
                  strokeWidth="0.5"
                  strokeDasharray="2,1.5"
                />

                {/* BAKAD / Northern Ring & Highway axes */}
                <path
                  d="M12,58 Q26,22 48,14 Q68,18 91,42"
                  fill="none"
                  stroke="rgba(100, 56, 49, 0.12)"
                  strokeWidth="0.6"
                  strokeDasharray="2.5,2"
                />
                {/* East-West Rayimbek / Tole Bi / Kultdzhinsky Axis */}
                <path
                  d="M12,58 L48,40 L91,42"
                  fill="none"
                  stroke="rgba(100, 56, 49, 0.12)"
                  strokeWidth="0.7"
                />
                {/* North A3 Konaev Highway */}
                <path
                  d="M48,40 L67,11"
                  fill="none"
                  stroke="rgba(100, 56, 49, 0.12)"
                  strokeWidth="0.7"
                />
                {/* Southern Zailiyskiy Alatau foothills contour */}
                <path
                  d="M8,76 L22,71 L35,75 L50,69 L66,74 L82,68 L96,75"
                  fill="none"
                  stroke="rgba(100, 56, 49, 0.15)"
                  strokeWidth="0.8"
                />

                {/* Radial delivery vectors from Chernomorskaya 12 hub */}
                {visiblePoints.map((p) => (
                  <line
                    key={`line-${p.id}`}
                    x1={hub.x}
                    y1={hub.y}
                    x2={p.x}
                    y2={p.y}
                    stroke="rgba(190, 139, 77, 0.28)"
                    strokeWidth="0.45"
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
                  <Warehouse size={15} />
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
                    aria-label={pt.fullName}
                  >
                    <span className={styles.starGlyph}>★</span>
                    <span className={styles.starLabel}>{pt.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Adaptive touch-friendly quick selector strip */}
            <div className={styles.quickSelectWrap} role="group" aria-label="Быстрый выбор района или города">
              <button
                type="button"
                aria-pressed={selectedPoint === 'hub'}
                className={`${styles.quickChip} ${selectedPoint === 'hub' ? styles.quickChipActive : ''}`}
                onClick={() => setSelectedPoint('hub')}
              >
                Склад (Черноморская, 12)
              </button>
              {visiblePoints.map((pt) => (
                <button
                  key={`chip-${pt.id}`}
                  type="button"
                  aria-pressed={selectedPoint === pt.id}
                  className={`${styles.quickChip} ${selectedPoint === pt.id ? styles.quickChipActive : ''}`}
                  onClick={() => setSelectedPoint(pt.id)}
                >
                  {pt.name}
                </button>
              ))}
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
                  <h3 className={styles.pointName}>
                    {'fullName' in activeData ? activeData.fullName : activeData.name}
                  </h3>
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

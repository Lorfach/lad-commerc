'use client';

import React, { useState, useMemo } from 'react';
import styles from './CoverageMap.module.css';
import { MapPin, Warehouse, Store, MessageCircle, ExternalLink, Navigation } from 'lucide-react';

interface DeliveryPoint {
  id: string;
  name: string;
  fullName: string;
  area: string;
  lat: number;
  lon: number;
  zoom: number;
  type: 'city' | 'region';
  desc: string;
}

const HUB = {
  id: 'hub',
  name: 'Центральный склад ТОО «Лад Коммерц»',
  address: 'г. Алматы, ул. Черноморская, д. 12',
  type: 'hub' as const,
  lat: 43.3013,
  lon: 76.9385,
  zoom: 15,
  description:
    'Собственный складской комплекс с температурным режимом +18°C, удобным подъездом с пр. Рыскулова для грузового транспорта и зоной самовывоза.',
};

const POINTS: DeliveryPoint[] = [
  // Almaty Districts (real geographic coordinates)
  {
    id: 'almaty-zhetysu',
    name: 'Жетысуский р-н',
    fullName: 'Жетысуский район',
    area: 'г. Алматы',
    lat: 43.2965,
    lon: 76.924,
    zoom: 13,
    type: 'city',
    desc: 'Пр. Рыскулова, Северное кольцо, ул. Аэродромная, мкр. Кулагер, Айнабулак',
  },
  {
    id: 'almaty-turksib',
    name: 'Турксибский р-н',
    fullName: 'Турксибский район',
    area: 'г. Алматы',
    lat: 43.328,
    lon: 76.965,
    zoom: 13,
    type: 'city',
    desc: 'Пр. Суюнбая, ул. Шолохова, Майлина, район вокзала Алматы-1, мкр. Жулдыз',
  },
  {
    id: 'almaty-alatau',
    name: 'Алатауский р-н',
    fullName: 'Алатауский район',
    area: 'г. Алматы',
    lat: 43.268,
    lon: 76.825,
    zoom: 12,
    type: 'city',
    desc: 'Ул. Момышулы, пр. Райымбека, мкр. Саялы, Акбулак, Алгабас, Зердели',
  },
  {
    id: 'almaty-almaly',
    name: 'Алмалинский р-н',
    fullName: 'Алмалинский район',
    area: 'г. Алматы',
    lat: 43.255,
    lon: 76.928,
    zoom: 13,
    type: 'city',
    desc: 'Ул. Толе би, Гоголя, пр. Абылай хана, пр. Сейфуллина, Тастак',
  },
  {
    id: 'almaty-auezov',
    name: 'Ауэзовский р-н',
    fullName: 'Ауэзовский район',
    area: 'г. Алматы',
    lat: 43.228,
    lon: 76.862,
    zoom: 13,
    type: 'city',
    desc: 'Ул. Шаляпина, Саина, пр. Улугбека, мкр. Аксай, Жетысу, Мамыр',
  },
  {
    id: 'almaty-medeu',
    name: 'Медеуский р-н',
    fullName: 'Медеуский район',
    area: 'г. Алматы',
    lat: 43.258,
    lon: 76.968,
    zoom: 13,
    type: 'city',
    desc: 'Пр. Достык, Жибек Жолы, ул. Луганского, ВОАД, мкр. Самал, Думан',
  },
  {
    id: 'almaty-bostandyk',
    name: 'Бостандыкский р-н',
    fullName: 'Бостандыкский район',
    area: 'г. Алматы',
    lat: 43.218,
    lon: 76.912,
    zoom: 13,
    type: 'city',
    desc: 'Ул. Розыбакиева, пр. Аль-Фараби, ул. Тимирязева, мкр. Орбита, Казахфильм',
  },
  {
    id: 'almaty-nauryzbay',
    name: 'Наурызбайский р-н',
    fullName: 'Наурызбайский район',
    area: 'г. Алматы',
    lat: 43.205,
    lon: 76.805,
    zoom: 13,
    type: 'city',
    desc: 'Пр. Абая, мкр. Калкаман, Акжар, Шугыла, Таусамалы',
  },

  // Almaty Oblast (Region)
  {
    id: 'region-konaev',
    name: 'г. Конаев',
    fullName: 'г. Конаев',
    area: 'Алматинская область',
    lat: 43.864,
    lon: 77.063,
    zoom: 12,
    type: 'region',
    desc: 'Северное направление по трассе А3, поставки партий по согласованию',
  },
  {
    id: 'region-baiserke',
    name: 'пос. Байсерке',
    fullName: 'пос. Байсерке',
    area: 'Алматинская область',
    lat: 43.421,
    lon: 77.039,
    zoom: 13,
    type: 'region',
    desc: 'Илийский район, снабжение продуктовых магазинов и торговых точек',
  },
  {
    id: 'region-otegen',
    name: 'Отеген-Батыр',
    fullName: 'пос. Отеген-Батыр (ГРЭС)',
    area: 'Алматинская область',
    lat: 43.371,
    lon: 77.018,
    zoom: 13,
    type: 'region',
    desc: 'Илийский район (ГРЭС), доставка собственным автотранспортом со склада',
  },
  {
    id: 'region-kaskelen',
    name: 'г. Каскелен',
    fullName: 'г. Каскелен',
    area: 'Алматинская область',
    lat: 43.2,
    lon: 76.625,
    zoom: 13,
    type: 'region',
    desc: 'Карасайский район, верхняя и нижняя трассы, снабжение магазинов и рынков',
  },
  {
    id: 'region-talgar',
    name: 'г. Талгар',
    fullName: 'г. Талгар',
    area: 'Алматинская область',
    lat: 43.303,
    lon: 77.24,
    zoom: 13,
    type: 'region',
    desc: 'Талгарский тракт, доставка в розничные магазины и оптовые точки города',
  },
  {
    id: 'region-esik',
    name: 'г. Есик',
    fullName: 'г. Есик',
    area: 'Алматинская область',
    lat: 43.355,
    lon: 77.46,
    zoom: 12,
    type: 'region',
    desc: 'Енбекшиказахский район, восточный маршрут по Кульджинскому и Талгарскому трактам',
  },
  {
    id: 'region-shelek',
    name: 'с. Шелек',
    fullName: 'с. Шелек',
    area: 'Алматинская область',
    lat: 43.597,
    lon: 78.251,
    zoom: 11,
    type: 'region',
    desc: 'Восточное направление по Кульджинскому тракту, регулярные поставки',
  },
];

export default function CoverageMap() {
  const [filter, setFilter] = useState<'all' | 'city' | 'region'>('all');
  const [selectedPoint, setSelectedPoint] = useState<string>('hub');

  const visiblePoints = useMemo(() => {
    return POINTS.filter((p) => {
      if (filter === 'city') return p.type === 'city';
      if (filter === 'region') return p.type === 'region';
      return true;
    });
  }, [filter]);

  const activeData =
    selectedPoint === 'hub'
      ? HUB
      : POINTS.find((p) => p.id === selectedPoint) || HUB;

  // Build interactive Yandex Map Widget URL with real placemarks (pt)
  const yandexMapUrl = useMemo(() => {
    const hubPin = `${HUB.lon},${HUB.lat},pm2rdl`;
    const districtPins = visiblePoints.map((pt) => {
      const pinStyle = selectedPoint === pt.id ? 'pm2ywl' : 'pm2dol';
      return `${pt.lon},${pt.lat},${pinStyle}`;
    });

    const allPins = [hubPin, ...districtPins].join('~');

    let centerLon = activeData.lon;
    let centerLat = activeData.lat;
    let zoom = activeData.zoom;

    // If user switched category filter while keeping 'hub' selected, show overview zoom for that filter
    if (selectedPoint === 'hub' && filter === 'city') {
      centerLon = 76.915;
      centerLat = 43.265;
      zoom = 11;
    } else if (selectedPoint === 'hub' && filter === 'region') {
      centerLon = 77.12;
      centerLat = 43.38;
      zoom = 9;
    }

    return `https://yandex.kz/map-widget/v1/?ll=${centerLon}%2C${centerLat}&z=${zoom}&pt=${encodeURIComponent(
      allPins
    )}&lang=ru_RU`;
  }, [visiblePoints, selectedPoint, activeData, filter]);

  const yandexDirectLink = `https://yandex.kz/maps/162/almaty/?ll=${activeData.lon}%2C${activeData.lat}&z=${activeData.zoom}&pt=${HUB.lon}%2C${HUB.lat}`;

  const handleFilterChange = (nextFilter: 'all' | 'city' | 'region') => {
    setFilter(nextFilter);
    setSelectedPoint('hub');
  };

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
            База и температурный склад расположены по адресу: <strong>г. Алматы, ул. Черноморская, 12</strong>. Отгружаем заказы самовывозом и доставляем собственным автотранспортом по районам Алматы и населенным пунктам области.
          </p>

          <div className={styles.filterBar} role="group" aria-label="Режим отображения карты">
            <button
              type="button"
              aria-pressed={filter === 'all' && selectedPoint === 'hub'}
              className={`${styles.filterBtn} ${filter === 'all' ? styles.filterBtnActive : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              Склад (Черноморская, 12)
            </button>
            <button
              type="button"
              aria-pressed={filter === 'city'}
              className={`${styles.filterBtn} ${filter === 'city' ? styles.filterBtnActive : ''}`}
              onClick={() => handleFilterChange('city')}
            >
              Алматы (8 районов)
            </button>
            <button
              type="button"
              aria-pressed={filter === 'region'}
              className={`${styles.filterBtn} ${filter === 'region' ? styles.filterBtnActive : ''}`}
              onClick={() => handleFilterChange('region')}
            >
              Алматинская область (7 направлений)
            </button>
          </div>
        </div>

        <div className={styles.contentGrid}>
          {/* Real Interactive Yandex Map + Quick Selector */}
          <div className={styles.mapCard}>
            <div className={styles.mapLegend}>
              <div className={styles.legendGroup}>
                <div className={styles.legendItem}>
                  <span className={styles.legendHubDot} />
                  <span>Центральный склад (ул. Черноморская, 12)</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={styles.legendDistrictDot} />
                  <span>Районы и города доставки</span>
                </div>
              </div>

              <a
                href={yandexDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openYandexLink}
              >
                <Navigation size={13} />
                <span>Открыть в Яндекс.Картах</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className={styles.mapCanvasWrapper}>
              <iframe
                key={yandexMapUrl}
                src={yandexMapUrl}
                title="Яндекс.Карта склада ТОО Лад Коммерц (ул. Черноморская, 12) и зон доставки"
                className={styles.yandexIframe}
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Adaptive touch-friendly quick selector strip */}
            <div className={styles.quickSelectWrap} role="group" aria-label="Быстрый выбор точки на Яндекс.Карте">
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
                    {activeData.type === 'hub' ? HUB.address : (activeData as DeliveryPoint).area}
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

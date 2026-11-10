'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from './CoverageMap.module.css';
import {
  MapPin,
  Warehouse,
  Store,
  MessageCircle,
  ExternalLink,
  Navigation,
  Maximize2,
  Minimize2,
} from 'lucide-react';

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

declare global {
  interface Window {
    ymaps?: any;
  }
}

// Verified exact coordinates of Chernomorskaya 12, Zhetysu district, Almaty (Yandex Maps / 2GIS)
const HUB = {
  id: 'hub',
  name: 'Центральный склад ТОО «Лад Коммерц»',
  address: 'г. Алматы, ул. Черноморская, д. 12',
  type: 'hub' as const,
  lat: 43.284794,
  lon: 76.935269,
  zoom: 16,
  description:
    'Собственный складской комплекс с температурным режимом +18°C, удобным заездом с пр. Рыскулова и ул. Жансугурова для грузового транспорта и зоной самовывоза.',
};

const POINTS: DeliveryPoint[] = [
  // Almaty Districts (exact district centers)
  {
    id: 'almaty-zhetysu',
    name: 'Жетысуский р-н',
    fullName: 'Жетысуский район',
    area: 'г. Алматы',
    lat: 43.3015,
    lon: 76.916,
    zoom: 13,
    type: 'city',
    desc: 'Пр. Рыскулова, Северное кольцо, ул. Жансугурова, мкр. Кулагер, Айнабулак',
  },
  {
    id: 'almaty-turksib',
    name: 'Турксибский р-н',
    fullName: 'Турксибский район',
    area: 'г. Алматы',
    lat: 43.336,
    lon: 76.973,
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
    lon: 76.828,
    zoom: 13,
    type: 'city',
    desc: 'Ул. Момышулы, пр. Райымбека, мкр. Саялы, Акбулак, Алгабас, Зердели',
  },
  {
    id: 'almaty-almaly',
    name: 'Алмалинский р-н',
    fullName: 'Алмалинский район',
    area: 'г. Алматы',
    lat: 43.2555,
    lon: 76.9285,
    zoom: 13,
    type: 'city',
    desc: 'Ул. Толе би, Гоголя, пр. Абылай хана, пр. Сейфуллина, Тастак',
  },
  {
    id: 'almaty-auezov',
    name: 'Ауэзовский р-н',
    fullName: 'Ауэзовский район',
    area: 'г. Алматы',
    lat: 43.2265,
    lon: 76.8585,
    zoom: 13,
    type: 'city',
    desc: 'Ул. Шаляпина, Саина, пр. Улугбека, мкр. Аксай, Жетысу, Мамыр',
  },
  {
    id: 'almaty-medeu',
    name: 'Медеуский р-н',
    fullName: 'Медеуский район',
    area: 'г. Алматы',
    lat: 43.246,
    lon: 76.959,
    zoom: 13,
    type: 'city',
    desc: 'Пр. Достык, Жибек Жолы, ул. Луганского, ВОАД, мкр. Самал, Думан',
  },
  {
    id: 'almaty-bostandyk',
    name: 'Бостандыкский р-н',
    fullName: 'Бостандыкский район',
    area: 'г. Алматы',
    lat: 43.2135,
    lon: 76.9045,
    zoom: 13,
    type: 'city',
    desc: 'Ул. Розыбакиева, пр. Аль-Фараби, ул. Тимирязева, мкр. Орбита, Казахфильм',
  },
  {
    id: 'almaty-nauryzbay',
    name: 'Наурызбайский р-н',
    fullName: 'Наурызбайский район',
    area: 'г. Алматы',
    lat: 43.2045,
    lon: 76.8095,
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
    lat: 43.8644,
    lon: 77.0631,
    zoom: 12,
    type: 'region',
    desc: 'Северное направление по трассе А3, поставки партий по согласованию',
  },
  {
    id: 'region-baiserke',
    name: 'пос. Байсерке',
    fullName: 'пос. Байсерке',
    area: 'Алматинская область',
    lat: 43.4214,
    lon: 77.0392,
    zoom: 13,
    type: 'region',
    desc: 'Илийский район, снабжение продуктовых магазинов и торговых точек',
  },
  {
    id: 'region-otegen',
    name: 'Отеген-Батыр',
    fullName: 'пос. Отеген-Батыр (ГРЭС)',
    area: 'Алматинская область',
    lat: 43.3711,
    lon: 77.0183,
    zoom: 13,
    type: 'region',
    desc: 'Илийский район (ГРЭС), доставка собственным автотранспортом со склада',
  },
  {
    id: 'region-kaskelen',
    name: 'г. Каскелен',
    fullName: 'г. Каскелен',
    area: 'Алматинская область',
    lat: 43.2003,
    lon: 76.6253,
    zoom: 13,
    type: 'region',
    desc: 'Карасайский район, верхняя и нижняя трассы, снабжение магазинов и рынков',
  },
  {
    id: 'region-talgar',
    name: 'г. Талгар',
    fullName: 'г. Талгар',
    area: 'Алматинская область',
    lat: 43.3036,
    lon: 77.2408,
    zoom: 13,
    type: 'region',
    desc: 'Талгарский тракт, доставка в розничные магазины и оптовые точки города',
  },
  {
    id: 'region-esik',
    name: 'г. Есик',
    fullName: 'г. Есик',
    area: 'Алматинская область',
    lat: 43.3553,
    lon: 77.4606,
    zoom: 13,
    type: 'region',
    desc: 'Енбекшиказахский район, восточный маршрут по Кульджинскому и Талгарскому трактам',
  },
  {
    id: 'region-shelek',
    name: 'с. Шелек',
    fullName: 'с. Шелек',
    area: 'Алматинская область',
    lat: 43.5972,
    lon: 78.2514,
    zoom: 12,
    type: 'region',
    desc: 'Восточное направление по Кульджинскому тракту, регулярные поставки',
  },
];

export default function CoverageMap() {
  const [filter, setFilter] = useState<'all' | 'city' | 'region'>('all');
  const [selectedPoint, setSelectedPoint] = useState<string>('hub');
  const [viewMode, setViewMode] = useState<'point' | 'overview'>('point');
  const [focusTrigger, setFocusTrigger] = useState<number>(0);
  const [mapReady, setMapReady] = useState(false);
  const [scriptFailed, setScriptFailed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const placemarksRef = useRef<Map<string, any>>(new Map());

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

  // Synchronize Yandex Map viewport size when entering or exiting fullscreen
  useEffect(() => {
    const syncViewport = () => {
      const map = mapInstanceRef.current;
      if (map && map.container) {
        map.container.fitToViewport();
        if (viewMode === 'point') {
          map.setCenter([activeData.lat, activeData.lon], activeData.zoom, {
            duration: 0,
            checkZoomRange: true,
          });
        }
      }
    };

    syncViewport();
    const rafId = window.requestAnimationFrame(syncViewport);
    const t1 = setTimeout(syncViewport, 50);
    const t2 = setTimeout(syncViewport, 200);

    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (!isFullscreen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // 1. Load Yandex Maps JS API 2.1 and initialize interactive map instance
  useEffect(() => {
    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;

    const initMap = () => {
      if (cancelled || !mapContainerRef.current || !window.ymaps) return;
      if (mapInstanceRef.current) return;

      window.ymaps.ready(() => {
        if (cancelled || !mapContainerRef.current || mapInstanceRef.current) return;

        try {
          // Only use zoomControl; fullscreen is handled by our own glitch-free React container state
          const map = new window.ymaps.Map(
            mapContainerRef.current,
            {
              center: [HUB.lat, HUB.lon],
              zoom: 12,
              controls: ['zoomControl'],
            },
            {
              suppressMapOpenBlock: true,
            }
          );

          map.behaviors.disable('scrollZoom');
          mapInstanceRef.current = map;

          if (typeof ResizeObserver !== 'undefined' && mapContainerRef.current) {
            resizeObserver = new ResizeObserver(() => {
              if (mapInstanceRef.current && mapInstanceRef.current.container) {
                mapInstanceRef.current.container.fitToViewport();
              }
            });
            resizeObserver.observe(mapContainerRef.current);
          }

          setMapReady(true);
        } catch {
          setScriptFailed(true);
        }
      });
    };

    if (window.ymaps) {
      initMap();
    } else {
      const existingScript = document.getElementById('yandex-maps-js-api') as HTMLScriptElement | null;
      if (existingScript) {
        existingScript.addEventListener('load', initMap);
        existingScript.addEventListener('error', () => !cancelled && setScriptFailed(true));
      } else {
        const script = document.createElement('script');
        script.id = 'yandex-maps-js-api';
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.async = true;
        script.onload = initMap;
        script.onerror = () => {
          if (!cancelled) setScriptFailed(true);
        };
        document.head.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // 2. Rebuild placemarks when filter changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!mapReady || !map || !window.ymaps) return;

    map.geoObjects.removeAll();
    placemarksRef.current.clear();

    // Central Warehouse Placemark (Chernomorskaya 12)
    const hubPlacemark = new window.ymaps.Placemark(
      [HUB.lat, HUB.lon],
      {
        iconCaption: 'Склад: Черноморская, 12',
        balloonContentHeader: '<strong>Центральный склад ТОО «Лад Коммерц»</strong>',
        balloonContentBody: 'г. Алматы, ул. Черноморская, д. 12<br/>Температурный режим +18°C • Самовывоз и отгрузка',
        balloonContentFooter: 'Пн–Пт: 09:00–18:00, Сб: 09:00–14:00',
      },
      {
        preset: 'islands#redDotIconWithCaption',
        balloonAutoPan: false,
        balloonMaxWidth: 260,
        zIndex: 1200,
      }
    );

    hubPlacemark.events.add('click', () => {
      setViewMode('point');
      setSelectedPoint('hub');
      setFocusTrigger((c) => c + 1);
    });

    map.geoObjects.add(hubPlacemark);
    placemarksRef.current.set('hub', hubPlacemark);

    // District & Regional Delivery Placemarks
    visiblePoints.forEach((pt) => {
      const pm = new window.ymaps.Placemark(
        [pt.lat, pt.lon],
        {
          iconCaption: pt.name,
          balloonContentHeader: `<strong>${pt.fullName}</strong>`,
          balloonContentBody: `${pt.area}<br/>${pt.desc}`,
          balloonContentFooter: 'Доставка со склада ул. Черноморская, 12',
        },
        {
          preset: pt.type === 'city' ? 'islands#brownDotIconWithCaption' : 'islands#orangeDotIconWithCaption',
          balloonAutoPan: false,
          balloonMaxWidth: 260,
          zIndex: 500,
        }
      );

      pm.events.add('click', () => {
        setViewMode('point');
        setSelectedPoint(pt.id);
        setFocusTrigger((c) => c + 1);
      });

      map.geoObjects.add(pm);
      placemarksRef.current.set(pt.id, pm);
    });
  }, [filter, visiblePoints, mapReady]);

  // 3. Synchronize active pin styling, camera zoom/center, and balloon popup
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!mapReady || !map) return;

    placemarksRef.current.forEach((pm, id) => {
      if (id === 'hub') {
        const isHubActive = selectedPoint === 'hub' && viewMode === 'point';
        pm.options.set('preset', isHubActive ? 'islands#redIcon' : 'islands#redDotIconWithCaption');
        pm.options.set('zIndex', 1200);
      } else {
        const pt = POINTS.find((item) => item.id === id);
        const isActive = selectedPoint === id && viewMode === 'point';
        if (isActive) {
          pm.options.set('preset', 'islands#darkOrangeIcon');
          pm.options.set('zIndex', 1100);
        } else {
          pm.options.set(
            'preset',
            pt?.type === 'city' ? 'islands#brownDotIconWithCaption' : 'islands#orangeDotIconWithCaption'
          );
          pm.options.set('zIndex', 500);
        }
      }
    });

    if (viewMode === 'overview') {
      map.balloon.close();
      if (filter === 'city') {
        map.setCenter([43.265, 76.905], 11, { duration: 300, checkZoomRange: true });
      } else if (filter === 'region') {
        map.setCenter([43.42, 77.12], 9, { duration: 300, checkZoomRange: true });
      } else {
        map.setCenter([43.284794, 76.935269], 10, { duration: 300, checkZoomRange: true });
      }
    } else {
      const promise = map.setCenter([activeData.lat, activeData.lon], activeData.zoom, {
        duration: 300,
        checkZoomRange: true,
      });

      const openActiveBalloon = () => {
        const activePm = placemarksRef.current.get(selectedPoint);
        if (activePm && activePm.balloon) {
          activePm.balloon.open();
        }
      };

      if (promise && typeof promise.then === 'function') {
        promise.then(openActiveBalloon, openActiveBalloon);
      } else {
        setTimeout(openActiveBalloon, 320);
      }
    }
  }, [selectedPoint, viewMode, filter, focusTrigger, activeData, mapReady]);

  // Fallback iframe URL (only used if api-maps.yandex.ru is blocked)
  const fallbackIframeUrl = useMemo(() => {
    const lon = activeData.lon;
    const lat = activeData.lat;
    const zoom = viewMode === 'overview' ? (filter === 'region' ? 9 : 11) : activeData.zoom;
    return `https://yandex.kz/map-widget/v1/?ll=${lon},${lat}&z=${zoom}&pt=${lon},${lat},pm2rdl&lang=ru_RU`;
  }, [activeData, viewMode, filter]);

  const twoGisDirectLink = useMemo(() => {
    const searchQuery =
      selectedPoint === 'hub'
        ? 'Алматы, ул. Черноморская, 12'
        : `${(activeData as DeliveryPoint).area}, ${(activeData as DeliveryPoint).fullName}`;
    return `https://2gis.kz/almaty/search/${encodeURIComponent(searchQuery)}?m=${activeData.lon}%2C${activeData.lat}%2F${activeData.zoom}`;
  }, [selectedPoint, activeData]);

  const yandexDirectLink = `https://yandex.kz/maps/162/almaty/?ll=${activeData.lon}%2C${activeData.lat}&z=${activeData.zoom}&pt=${activeData.lon}%2C${activeData.lat}`;

  const handleSelectFilter = (nextFilter: 'all' | 'city' | 'region') => {
    setFilter(nextFilter);
    setViewMode('overview');
    if (nextFilter === 'city') {
      setSelectedPoint('almaty-zhetysu');
    } else if (nextFilter === 'region') {
      setSelectedPoint('region-talgar');
    } else {
      setSelectedPoint('hub');
    }
    setFocusTrigger((c) => c + 1);
  };

  const handleSelectChip = (id: string) => {
    setViewMode('point');
    setSelectedPoint(id);
    setFocusTrigger((c) => c + 1);
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
            База и температурный склад расположены по адресу: <strong>г. Алматы, ул. Черноморская, 12</strong> (Жетысуский р-н). Отгружаем заказы самовывозом и доставляем собственным автотранспортом по районам Алматы и населенным пунктам области.
          </p>

          <div className={styles.filterBar} role="group" aria-label="Режим отображения карты">
            <button
              type="button"
              aria-pressed={filter === 'all'}
              className={`${styles.filterBtn} ${filter === 'all' ? styles.filterBtnActive : ''}`}
              onClick={() => handleSelectFilter('all')}
            >
              Вся карта (Склад + 15 зон)
            </button>
            <button
              type="button"
              aria-pressed={filter === 'city'}
              className={`${styles.filterBtn} ${filter === 'city' ? styles.filterBtnActive : ''}`}
              onClick={() => handleSelectFilter('city')}
            >
              Алматы (8 районов)
            </button>
            <button
              type="button"
              aria-pressed={filter === 'region'}
              className={`${styles.filterBtn} ${filter === 'region' ? styles.filterBtnActive : ''}`}
              onClick={() => handleSelectFilter('region')}
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

              <div className={styles.externalLinksGroup}>
                <a
                  href={twoGisDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.openYandexLink}
                >
                  <Navigation size={13} />
                  <span>Открыть в 2ГИС</span>
                  <ExternalLink size={12} />
                </a>
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
            </div>

            <div className={styles.mapCanvasWrapper}>
              <div
                className={`${styles.mapViewport} ${
                  isFullscreen ? styles.mapCanvasFullscreen : ''
                }`}
              >
                {!scriptFailed ? (
                  <>
                    <div
                      ref={mapContainerRef}
                      className={styles.yandexMapContainer}
                      aria-label="Интерактивная Яндекс.Карта склада ТОО Лад Коммерц и районов доставки"
                    />
                    <button
                      type="button"
                      className={styles.fullscreenToggleBtn}
                      onClick={() => setIsFullscreen((prev) => !prev)}
                      aria-label={isFullscreen ? 'Свернуть карту' : 'Развернуть карту на весь экран'}
                    >
                      {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                      <span>{isFullscreen ? 'Свернуть' : 'Во весь экран'}</span>
                    </button>
                    {!mapReady && (
                      <div className={styles.mapLoadingOverlay}>
                        <span>Загрузка интерактивной Яндекс.Карты…</span>
                      </div>
                    )}
                  </>
                ) : (
                  <iframe
                    key={fallbackIframeUrl}
                    src={fallbackIframeUrl}
                    title="Яндекс.Карта склада ТОО Лад Коммерц (ул. Черноморская, 12) и зон доставки"
                    className={styles.yandexIframe}
                    loading="lazy"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            {/* Adaptive touch-friendly quick selector strip */}
            <div className={styles.quickSelectWrap} role="group" aria-label="Быстрый выбор точки на Яндекс.Карте">
              <button
                type="button"
                aria-pressed={selectedPoint === 'hub'}
                className={`${styles.quickChip} ${selectedPoint === 'hub' ? styles.quickChipActive : ''}`}
                onClick={() => handleSelectChip('hub')}
              >
                Склад (Черноморская, 12)
              </button>
              {visiblePoints.map((pt) => (
                <button
                  key={`chip-${pt.id}`}
                  type="button"
                  aria-pressed={selectedPoint === pt.id}
                  className={`${styles.quickChip} ${selectedPoint === pt.id ? styles.quickChipActive : ''}`}
                  onClick={() => handleSelectChip(pt.id)}
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

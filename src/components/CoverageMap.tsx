'use client';

import React, { useState } from 'react';
import styles from './CoverageMap.module.css';
import { MapPin, Star, Building2, Truck, Navigation, CheckCircle, Store, Warehouse } from 'lucide-react';

interface CoverageMapProps {
  onConnectStore?: () => void;
}

export default function CoverageMap({ onConnectStore }: CoverageMapProps) {
  const [filter, setFilter] = useState<'all' | 'city' | 'region'>('all');
  const [selectedPoint, setSelectedPoint] = useState<string | null>('hub');

  // Hub: Chernomorskaya 12
  const hub = {
    id: 'hub',
    name: 'Центральный склад ТОО «Лад Коммерц»',
    address: 'г. Алматы, ул. Черноморская, д. 12',
    type: 'hub',
    x: 48,
    y: 44,
    description: 'Складской комплекс с постоянным температурным режимом (+18°C), офис и зона комплектации заказов.',
    status: 'База дистрибьюции',
  };

  const points = [
    // Almaty Districts
    { id: 'almaty-zhetysu', name: 'Жетысуский район', area: 'Алматы', stores: '28 торговых точек', x: 49, y: 39, type: 'city', desc: 'Рыскулова, Северное кольцо, Аэродромная' },
    { id: 'almaty-almaly', name: 'Алмалинский район', area: 'Алматы', stores: '34 торговых точки', x: 44, y: 52, type: 'city', desc: 'Толе би, Гоголя, Абылай хана, Сейфуллина' },
    { id: 'almaty-medeu', name: 'Медеуский район', area: 'Алматы', stores: '22 торговые точки', x: 55, y: 55, type: 'city', desc: 'Достык, Жибек Жолы, Луганского, Самал' },
    { id: 'almaty-bostandyk', name: 'Бостандыкский район', area: 'Алматы', stores: '31 торговая точка', x: 42, y: 62, type: 'city', desc: 'Розыбакиева, Аль-Фараби, Тимирязева' },
    { id: 'almaty-auezov', name: 'Ауэзовский район', area: 'Алматы', stores: '26 торговых точек', x: 33, y: 54, type: 'city', desc: 'Шаляпина, Саина, мкр. 1–12, Улугбека' },
    { id: 'almaty-turksib', name: 'Турксибский район', area: 'Алматы', stores: '19 торговых точек', x: 58, y: 32, type: 'city', desc: 'Суюнбая, Шолохова, Майлина, ж/д вокзал-1' },
    { id: 'almaty-alatau', name: 'Алатауский район', area: 'Алматы', stores: '18 торговых точек', x: 34, y: 38, type: 'city', desc: 'Момышулы, Райымбека, мкр. Саялы, Алгабас' },
    { id: 'almaty-nauryzbay', name: 'Наурызбайский район', area: 'Алматы', stores: '14 торговых точек', x: 26, y: 60, type: 'city', desc: 'Абая, Таусамалы, мкр. Калкаман' },

    // Almaty Oblast (Region)
    { id: 'region-talgar', name: 'г. Талгар', area: 'Область', stores: '16 магазинов-партнеров', x: 74, y: 56, type: 'region', desc: 'Талгарский тракт, регулярный рейс по Вт и Пт' },
    { id: 'region-kaskelen', name: 'г. Каскелен', area: 'Область', stores: '18 магазинов-партнеров', x: 16, y: 64, type: 'region', desc: 'Верхняя трасса, рейс по Пн и Чт' },
    { id: 'region-konaev', name: 'г. Конаев (Капшагай)', area: 'Область', stores: '12 торговых точек', x: 72, y: 16, type: 'region', desc: 'Северное направление, поставки по согласованию' },
    { id: 'region-otegen', name: 'пос. Отеген-Батыр (ГРЭС)', area: 'Область', stores: '15 торговых точек', x: 56, y: 22, type: 'region', desc: 'Илийский район, поставка в течение 24ч' },
    { id: 'region-baiserke', name: 'пос. Байсерке', area: 'Область', stores: '9 торговых точек', x: 51, y: 15, type: 'region', desc: 'Илийский район, снабжение розницы' },
    { id: 'region-esik', name: 'г. Есик', area: 'Область', stores: '11 магазинов-партнеров', x: 86, y: 62, type: 'region', desc: 'Енбекшиказахский район, восточный маршрут' },
    { id: 'region-shelek', name: 'с. Шелек', area: 'Область', stores: '8 торговых точек', x: 92, y: 48, type: 'region', desc: 'Кульджинский тракт, поставка по графику' },
  ];

  const visiblePoints = points.filter((p) => {
    if (filter === 'city') return p.type === 'city';
    if (filter === 'region') return p.type === 'region';
    return true;
  });

  const activeData = selectedPoint === 'hub'
    ? hub
    : points.find((p) => p.id === selectedPoint) || hub;

  return (
    <section className={styles.section} id="coverage">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Карта доставки: Алматы и область</h2>
          <p className={styles.subtitle}>
            Склад компании находится на ул. Черноморская, 12. Развозим заказы собственным транспортом по магазинам города и отправляем машины в населенные пункты области.
          </p>

          <div className={styles.filterBar}>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'all' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter('all')}
            >
              Вся карта охвата
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'city' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter('city')}
            >
              Районы Алматы (8 районов)
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'region' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter('region')}
            >
              Алматинская область
            </button>
          </div>
        </div>

        <div className={styles.contentGrid}>
          {/* Visual Map Canvas */}
          <div className={styles.mapCard}>
            <div className={styles.mapLegend}>
              <div className={styles.legendItem}>
                <span className={styles.legendHubDot} />
                <span>Центральный склад (Черноморская, 12)</span>
              </div>
              <div className={styles.legendItem}>
                <span className={styles.legendStarDot}>★</span>
                <span>Торговые точки и магазины</span>
              </div>
            </div>

            <div className={styles.mapCanvasWrapper}>
              <svg className={styles.mapSvgBg} viewBox="0 0 100 80" preserveAspectRatio="none">
                <defs>
                  <radialGradient id="almatyGlow" cx="48%" cy="50%" r="40%">
                    <stop offset="0%" stopColor="#be8b4d" stopOpacity="0.16" />
                    <stop offset="60%" stopColor="#643831" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="100" height="80" fill="url(#almatyGlow)" />
                <path
                  d="M10,70 Q25,65 40,75 T70,68 T95,50"
                  fill="none"
                  stroke="rgba(100, 56, 49, 0.12)"
                  strokeWidth="0.8"
                  strokeDasharray="2,2"
                />
                <path
                  d="M15,20 Q35,10 65,15 T95,30"
                  fill="none"
                  stroke="rgba(100, 56, 49, 0.12)"
                  strokeWidth="0.8"
                  strokeDasharray="2,2"
                />
                {visiblePoints.map((p) => (
                  <line
                    key={`line-${p.id}`}
                    x1={hub.x}
                    y1={hub.y}
                    x2={p.x}
                    y2={p.y}
                    stroke="rgba(190, 139, 77, 0.22)"
                    strokeWidth="0.5"
                    strokeDasharray="1.5,1.5"
                  />
                ))}
              </svg>

              {/* Hub Marker */}
              <div
                className={`${styles.markerHub} ${selectedPoint === 'hub' ? styles.markerHubActive : ''}`}
                style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                onClick={() => setSelectedPoint('hub')}
                title="Складской комплекс ТОО «Лад Коммерц» (ул. Черноморская, 12)"
              >
                <div className={styles.hubBeacon} />
                <div className={styles.hubIconBox}>
                  <Warehouse size={16} />
                </div>
                <span className={styles.hubLabel}>Склад: Черноморская, 12</span>
              </div>

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
              <span>Нажмите на точку или склад на карте для просмотра подробностей</span>
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
                  <span className={styles.pointType}>
                    {activeData.type === 'hub' ? 'Центральная база' : `Точки дистрибьюции (${(activeData as any).area})`}
                  </span>
                  <h3 className={styles.pointName}>{activeData.name}</h3>
                </div>
              </div>

              {'address' in activeData && (
                <div className={styles.detailRow}>
                  <MapPin size={16} className={styles.detailIcon} />
                  <span><strong>Адрес:</strong> {(activeData as any).address}</span>
                </div>
              )}

              {'stores' in activeData && (
                <div className={styles.detailRow}>
                  <Star size={16} className={styles.detailIconGold} />
                  <span><strong>Сеть:</strong> {(activeData as any).stores}</span>
                </div>
              )}

              <p className={styles.pointDesc}>
                {'description' in activeData ? (activeData as any).description : (activeData as any).desc}
              </p>

              <div className={styles.metricsBox}>
                <div className={styles.metricItem}>
                  <span className={styles.metricVal}>24ч</span>
                  <span className={styles.metricSub}>Срок сборки</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricVal}>+18°C</span>
                  <span className={styles.metricSub}>Температурный режим</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricVal}>3 завода</span>
                  <span className={styles.metricSub}>Прямой контракт</span>
                </div>
              </div>

              <div className={styles.sidebarAction}>
                <button
                  type="button"
                  className={styles.btnConnect}
                  onClick={onConnectStore}
                >
                  <Truck size={17} />
                  <span>Подключить вашу точку</span>
                </button>
              </div>
            </div>

            <div className={styles.factsCard}>
              <h4 className={styles.factsTitle}>Параметры доставки:</h4>
              <ul className={styles.factsList}>
                <li>
                  <CheckCircle size={15} className={styles.factCheck} />
                  <span><strong>Сборка заказа:</strong> комплектация на ул. Черноморская, 12 день в день.</span>
                </li>
                <li>
                  <CheckCircle size={15} className={styles.factCheck} />
                  <span><strong>Свой транспорт:</strong> выгрузка на рампу склада или в зону приемки магазина.</span>
                </li>
                <li>
                  <CheckCircle size={15} className={styles.factCheck} />
                  <span><strong>Официальный пакет:</strong> работа с НДС, ЭСФ, накладные, сертификаты ЕАС.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

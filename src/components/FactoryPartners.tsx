'use client';

import React, { useState } from 'react';
import styles from './FactoryPartners.module.css';
import { Package, MessageCircle, MapPin } from 'lucide-react';

interface FactoryPhoto {
  src: string;
  title: string;
  alt: string;
}

interface FactoryFlagship {
  title: string;
  note: string;
}

interface FactoryData {
  id: string;
  code: 'alyoshina' | 'chernogorsk' | 'tomsk';
  name: string;
  logo: string;
  location: string;
  description: string;
  photos: FactoryPhoto[];
  flagships: FactoryFlagship[];
  formats: string[];
}

const FACTORIES: FactoryData[] = [
  {
    id: 'alyoshina',
    code: 'alyoshina',
    name: '«Завод АлёшинА»',
    logo: '/assets/factories/alyoshina-logo.jpg',
    location: 'г. Абакан (Хакасия)',
    description:
      'Соломка, хворост, сушки, драже и щербет в розничных пачках флоу-пак с прозрачным окном, прикассовых шоу-боксах и весовых коробках.',
    photos: [
      {
        src: '/assets/factories/alyoshina-solomka.jpg',
        title: 'Соломка «Для мамы / папы / дочки» в пачках',
        alt: 'Соломка Завод Алёшина в розничной упаковке',
      },
      {
        src: '/assets/factories/alyoshina-hvorost.jpg',
        title: 'Хворост «Хруст хвороста» в сахарной пудре',
        alt: 'Хворост Завод Алёшина Хруст хвороста',
      },
    ],
    flagships: [
      { title: 'Соломка «Для папы», «Для мамы», «Для дочки»', note: 'Соленая, ванильная и сладкая соломка в пачках' },
      { title: 'Глазированная соломка «Шоко Шоу»', note: 'В шоколадной и белой глазури с арахисом и кокосом' },
      { title: 'Слойка и хворост «Хруст хвороста»', note: 'Хворост в сахарной пудре и со сгущенкой' },
      { title: 'Сдобные сушки и баранки по ГОСТу', note: 'Фасовка в розничных пачках и весовых гофрокоробах' },
      { title: 'Драже «Грибочки, цветочки»', note: 'Глазированное печенье в штучной упаковке для прикассовой зоны' },
      { title: 'Сливочный и ореховый щербет, ирис', note: 'Тираженный ирис и щербет в индивидуальной и весовой фасовке' },
    ],
    formats: ['Шоу-боксы для прикассовой зоны', 'Пачки флоу-пак для полок', 'Весовые коробки по 2–4 кг'],
  },
  {
    id: 'chernogorsk',
    code: 'chernogorsk',
    name: 'Кондитерский концерн «Черногорский»',
    logo: '/assets/factories/chernogorsk-logo.png',
    location: 'г. Черногорск (Хакасия)',
    description:
      'Производство многослойных вафель, сахарного и затяжного печенья с суфле, сырцовых и глазированных пряников, зефира на пектине.',
    photos: [
      {
        src: '/assets/factories/chernogorsk-vafli.jpg',
        title: 'Вафли «Детский Орлёнок» и «Мамина сказка»',
        alt: 'Вафли Черногорский Кондитер Детский Орленок',
      },
      {
        src: '/assets/factories/chernogorsk-pechene.jpg',
        title: 'Печенье с суфле «Сибирская колибри»',
        alt: 'Печенье с суфле Черногорский Кондитер Сибирская колибри',
      },
      {
        src: '/assets/factories/chernogorsk-pryaniki.jpg',
        title: 'Пряники «Черногорские» с начинкой',
        alt: 'Пряники Черногорский Кондитер в глазури',
      },
    ],
    flagships: [
      { title: 'Вафли «Детский Орлёнок» и «Мамина сказка»', note: 'Многослойные вафли со сливочной и шоколадной начинкой' },
      { title: 'Вафли «Полосатый Тёма» и «Черногорские»', note: 'Плотные вафли с начинкой из какао и ореха' },
      { title: 'Печенье с суфле «Сибирская колибри»', note: 'Затяжное печенье с воздушной прослойкой суфле' },
      { title: 'Сахарное и овсяное печенье по ГОСТу', note: 'Весовое и фасованное печенье для розничных магазинов' },
      { title: 'Пряники с фруктовыми начинками', note: 'С яблочным повидлом, вареной сгущенкой и в сахарной глазури' },
      { title: 'Зефир и пастила на пектине', note: 'Ванильный и бело-розовый зефир в телевизорах и пачках' },
    ],
    formats: ['Весовые гофрокороба 3–5 кг', 'Розничные пачки 200–450 г', 'Шоу-боксы'],
  },
  {
    id: 'tomsk',
    code: 'tomsk',
    name: '«Томский Кондитер»',
    logo: '/assets/factories/tomsk-logo.png',
    location: 'г. Томск • с 1986 года',
    description:
      'Выпуск кексов и маффинов с начинкой, сдобного и творожного печенья, сахарного печенья в глазури, песочного курабье и крекеров.',
    photos: [
      {
        src: '/assets/factories/tomsk-products.webp',
        title: 'Маффины «Мафф и Ози», кексы и сдоба',
        alt: 'Линейка продукции фабрики Томский Кондитер Маффины и кексы',
      },
      {
        src: '/assets/factories/tomsk-toplenoe.jpg',
        title: 'Печенье «Топлёное молоко» и «К кофе»',
        alt: 'Сахарное печенье Топленое молоко Томский Кондитер',
      },
      {
        src: '/assets/factories/tomsk-factory.webp',
        title: 'Производственный комплекс в Томске',
        alt: 'Производственные линии Томский Кондитер',
      },
    ],
    flagships: [
      { title: 'Маффины «Мафф и Ози»', note: 'Кексы с начинкой из вареной сгущенки, шоколада и клубники' },
      { title: 'Печенье «Топлёное молоко» и «К кофе»', note: 'Классическое сахарное печенье и печенье в кондитерской глазури' },
      { title: 'Сдобное и творожное печенье', note: 'Выпечка на сливочном и творожном тесте' },
      { title: 'Печенье серии «Юбилейное фото»', note: 'Рассыпчатое сдобное печенье в фасованных пачках' },
      { title: 'Песочное курабье и колечки', note: 'Курабье в весовых гофрокоробах и прозрачных коррексах' },
      { title: 'Хрустящий крекер и снеки', note: 'Соленый, сырный, луковый и классический крекер' },
    ],
    formats: ['Фасованные пачки 450 г', 'Лотки и коррексы', 'Весовая гофротара'],
  },
];

function FactoryCardItem({
  factory,
  onWhatsApp,
}: {
  factory: FactoryData;
  onWhatsApp: (name: string) => void;
}) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const currentPhoto = factory.photos[photoIndex] || factory.photos[0];

  return (
    <article className={styles.factoryCard}>
      <div className={styles.cardTop}>
        <div className={styles.brandRow}>
          <div className={styles.logoWrap}>
            <img
              src={factory.logo}
              alt={`Логотип ${factory.name}`}
              width={110}
              height={38}
              loading="lazy"
              decoding="async"
              className={styles.factoryLogoImg}
            />
          </div>
          <div className={styles.locationWrap}>
            <MapPin size={13} className={styles.locationIcon} />
            <span className={styles.factoryLocation}>{factory.location}</span>
          </div>
        </div>

        <h3 className={styles.factoryName}>{factory.name}</h3>
        <p className={styles.factoryDesc}>{factory.description}</p>
      </div>

      {/* Visual Product Showcase */}
      <div className={styles.gallerySection}>
        <div className={styles.mainPhotoFrame}>
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            width={360}
            height={220}
            loading="lazy"
            decoding="async"
            className={styles.mainPhotoImg}
          />
          <div className={styles.photoCaptionBar}>
            <span className={styles.photoCaptionText}>{currentPhoto.title}</span>
          </div>
        </div>

        {factory.photos.length > 1 && (
          <div className={styles.thumbRow} role="group" aria-label={`Фотографии продукции ${factory.name}`}>
            {factory.photos.map((photo, idx) => (
              <button
                key={photo.src}
                type="button"
                aria-pressed={idx === photoIndex}
                className={`${styles.thumbBtn} ${idx === photoIndex ? styles.thumbBtnActive : ''}`}
                onClick={() => setPhotoIndex(idx)}
                aria-label={`Показать фото: ${photo.title}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={54}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className={styles.thumbImg}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.flagshipsSection}>
        <h4 className={styles.flagshipsHeading}>Позиции в наличии на складе:</h4>
        <div className={styles.flagshipsGrid}>
          {factory.flagships.map((item, idx) => (
            <div key={idx} className={styles.flagshipItem}>
              <span className={styles.flagshipBullet} />
              <div className={styles.flagshipText}>
                <strong className={styles.flagshipTitle}>{item.title}</strong>
                <span className={styles.flagshipNote}>{item.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cardBottom}>
        <div className={styles.formatsBox}>
          <Package size={15} className={styles.formatIcon} />
          <span>
            <strong>Фасовка:</strong> {factory.formats.join(' • ')}
          </span>
        </div>

        <div className={styles.actionRow}>
          <button
            type="button"
            className={styles.btnWhatsAppFactory}
            onClick={() => onWhatsApp(factory.name)}
          >
            <MessageCircle size={17} />
            <span>Написать в WhatsApp</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function FactoryPartners() {
  const [activeTab, setActiveTab] = useState<'all' | 'alyoshina' | 'chernogorsk' | 'tomsk'>('all');

  const handleWhatsAppFactory = (factoryName: string) => {
    window.open(
      'https://wa.me/77078233422?text=' +
        encodeURIComponent(`Здравствуйте! Интересует продукция фабрики «${factoryName}» в ТОО Лад Коммерц.`),
      '_blank'
    );
  };

  const filteredFactories =
    activeTab === 'all' ? FACTORIES : FACTORIES.filter((f) => f.code === activeTab);

  return (
    <section className={styles.section} id="factories">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Продукция 3 фабрик в наличии на складе</h2>
          <p className={styles.subtitle}>
            ТОО «Лад Коммерц» — дистрибьютор фабрик «Завод АлёшинА», «Черногорский Кондитер» и «Томский Кондитер». Продукция хранится на складе в Алматы и готова к отгрузке.
          </p>

          <div className={styles.tabsNav} role="group" aria-label="Фильтр по фабрикам">
            <button
              type="button"
              aria-pressed={activeTab === 'all'}
              className={`${styles.tabBtn} ${activeTab === 'all' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('all')}
            >
              Все 3 завода
            </button>
            <button
              type="button"
              aria-pressed={activeTab === 'alyoshina'}
              className={`${styles.tabBtn} ${activeTab === 'alyoshina' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('alyoshina')}
            >
              «Завод АлёшинА»
            </button>
            <button
              type="button"
              aria-pressed={activeTab === 'chernogorsk'}
              className={`${styles.tabBtn} ${activeTab === 'chernogorsk' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('chernogorsk')}
            >
              «Черногорский Кондитер»
            </button>
            <button
              type="button"
              aria-pressed={activeTab === 'tomsk'}
              className={`${styles.tabBtn} ${activeTab === 'tomsk' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('tomsk')}
            >
              «Томский Кондитер»
            </button>
          </div>
        </div>

        <div className={styles.factoryGrid}>
          {filteredFactories.map((factory) => (
            <FactoryCardItem
              key={factory.id}
              factory={factory}
              onWhatsApp={handleWhatsAppFactory}
            />
          ))}
        </div>

        <div className={styles.bottomNote}>
          <p>
            <strong>Коммерческие условия:</strong> розничным магазинам и оптовым складам предоставляем раздельные условия с учетом объема и регулярности поставок. Напишите нам в WhatsApp по номеру <strong>+7 (707) 823-34-22</strong> — согласуем условия под вашу точку.
          </p>
        </div>
      </div>
    </section>
  );
}

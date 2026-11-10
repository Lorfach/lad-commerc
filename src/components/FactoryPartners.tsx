'use client';

import React, { useState } from 'react';
import styles from './FactoryPartners.module.css';
import { Package, ArrowRight } from 'lucide-react';

interface FactoryPartnersProps {
  onSelectFactory: (factoryName: string) => void;
}

export default function FactoryPartners({ onSelectFactory }: FactoryPartnersProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'alyoshina' | 'chernogorsk' | 'tomsk'>('all');

  const factories = [
    {
      id: 'alyoshina',
      code: 'alyoshina',
      name: 'Кондитерская фабрика «Завод АлёшинА»',
      location: 'Сибирь • Поставки с завода',
      tagline: 'Соломка, хворост, сушки и глазированные сладости',
      description:
        'Автоматизированные линии производства. Продукция упакована в пачки флоу-пак с прозрачным окном. Удобно для выкладки на полках продуктовых магазинов и супермаркетов.',
      flagships: [
        { title: 'Соломка «Для папы», «Для мамы», «Для дочки»', note: 'Соленая, ванильная и классическая сладкая соломка' },
        { title: 'Глазированная соломка «Шоко Шоу»', note: 'В шоколадной и белой глазури с арахисом и кокосом' },
        { title: 'Слойка и хворост «Хруст хвороста»', note: 'Хрустящий хворост в сахарной пудре и с начинкой из сгущенки' },
        { title: 'Сдобные сушки и баранки по ГОСТу', note: 'Длительный срок хранения, фасовка в пачках и коробках' },
        { title: 'Драже «Грибочки, цветочки»', note: 'Глазированное печенье в штучной упаковке для прикассовой зоны' },
        { title: 'Сливочный и ореховый щербет, ирис', note: 'Мягкий ирис и щербет в индивидуальной и весовой упаковке' },
      ],
      formats: ['Шоу-боксы для прикассовой зоны', 'Пачки флоу-пак для полок', 'Весовые коробки по 2–4 кг'],
    },
    {
      id: 'chernogorsk',
      code: 'chernogorsk',
      name: 'Кондитерский концерн «Черногорский»',
      location: 'г. Черногорск (Хакасия) • Более 300 позиций',
      tagline: 'Вафли, печенье, пряники и зефир',
      description:
        'Крупный производитель Хакасии с широкой вафельной и печеньевой группой. Стабильные объемы весовой и фасованной продукции для повседневного чаепития.',
      flagships: [
        { title: 'Вафли «Детский Орлёнок» и «Мамина сказка»', note: 'Многослойные вафли со сливочной и шоколадной начинкой' },
        { title: 'Вафли «Полосатый Тёма» и «Черногорские»', note: 'Плотные вафли с начинкой из какао и ореха' },
        { title: 'Печенье с суфле «Сибирская колибри»', note: 'Затяжное печенье с воздушной прослойкой суфле' },
        { title: 'Сахарное и овсяное печенье по ГОСТу', note: 'Весовое и фасованное печенье для розничной торговли' },
        { title: 'Пряники с фруктовыми начинками', note: 'С джемом, вареной сгущенкой и сахарной глазурью' },
        { title: 'Зефир и пастила на пектине', note: 'Классический ванильный и яблочный зефир в коробках и на развес' },
      ],
      formats: ['Весовые гофрокороба 3–5 кг', 'Розничные пачки', 'Шоу-боксы'],
    },
    {
      id: 'tomsk',
      code: 'tomsk',
      name: '«Томский Кондитер» (с 1986 года)',
      location: 'г. Томск • Производство с 1986 года',
      tagline: 'Маффины «Мафф и Ози», сдобное печенье и крекеры',
      description:
        'Более 250 видов выпечки и печенья на европейском оборудовании. Позиции регулярного спроса для розничных полок и сетей.',
      flagships: [
        { title: 'Маффины «Мафф и Ози»', note: 'Кексы с начинкой из вареной сгущенки, шоколада и клубники' },
        { title: 'Печенье «Топлёное молоко» и «К кофе»', note: 'Классическое сахарное печенье, в том числе глазированное' },
        { title: 'Сдобное и творожное печенье', note: 'Печенье на сливочном и натуральном творожном тесте' },
        { title: 'Печенье серии «Юбилейное фото»', note: 'Рассыпчатое сдобное печенье в фасованных пачках' },
        { title: 'Песочное курабье и колечки', note: 'Курабье в весовых гофрокоробах и прозрачных блистерах' },
        { title: 'Хрустящий крекер и снеки', note: 'Соленый, сырный, луковый и классический крекер' },
      ],
      formats: ['Фасованные пачки 450 г', 'Лотки и блистеры', 'Весовая гофротара'],
    },
  ];

  const filteredFactories = activeTab === 'all'
    ? factories
    : factories.filter((f) => f.code === activeTab);

  return (
    <section className={styles.section} id="factories">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Продукция 3 фабрик в наличии на складе</h2>
          <p className={styles.subtitle}>
            ТОО «Лад Коммерц» — дистрибьютор фабрик «Завод АлёшинА», «Черногорский Кондитер» и «Томский Кондитер». Продукция хранится на складе в Алматы и готова к отгрузке.
          </p>

          <div className={styles.tabsNav}>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'all' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('all')}
            >
              Все 3 завода
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'alyoshina' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('alyoshina')}
            >
              «Завод АлёшинА»
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'chernogorsk' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('chernogorsk')}
            >
              «Черногорский Кондитер»
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'tomsk' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('tomsk')}
            >
              «Томский Кондитер»
            </button>
          </div>
        </div>

        <div className={styles.factoryGrid}>
          {filteredFactories.map((factory) => (
            <article key={factory.id} className={styles.factoryCard}>
              <div className={styles.cardTop}>
                <div className={styles.cardHeaderInfo}>
                  <span className={styles.factoryLocation}>{factory.location}</span>
                </div>

                <h3 className={styles.factoryName}>{factory.name}</h3>
                <p className={styles.factoryTagline}>{factory.tagline}</p>
                <p className={styles.factoryDesc}>{factory.description}</p>
              </div>

              <div className={styles.flagshipsSection}>
                <span className={styles.flagshipsHeading}>Позиции в наличии:</span>
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
                    className={styles.btnCalculate}
                    onClick={() => onSelectFactory(factory.name)}
                  >
                    <span>Узнать условия поставок</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottomNote}>
          <p>
            <strong>Цены и расчет:</strong> у розничных магазинов и оптовиков разные объемы и периодичность отгрузок, поэтому цены рассчитываются индивидуально. Свяжитесь с нами — назовем условия под ваш заказ.
          </p>
        </div>
      </div>
    </section>
  );
}

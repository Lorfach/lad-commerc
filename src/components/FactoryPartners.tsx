'use client';

import React, { useState } from 'react';
import styles from './FactoryPartners.module.css';
import { ShieldCheck, Award, Package, Sparkles, ArrowRight } from 'lucide-react';

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
      shortName: '«Завод АлёшинА»',
      location: 'Сибирь • Федеральные и экспортные поставки',
      badge: 'Официальный контракт',
      tagline: 'Соломка, хворост и сдобные глазированные изделия',
      description:
        'Производитель с автоматизированными линиями. Фасовка в пачки флоу-пак с прозрачным окном для полок розничных магазинов и супермаркетов.',
      flagships: [
        { title: 'Соломка «Для папы», «Для мамы», «Для дочки»', note: 'Соленая, ванильная и классическая сладкая рецептура' },
        { title: 'Глазированная соломка «Шоко Шоу»', note: 'В шоколадной и белой глазури с натуральным кокосом и арахисом' },
        { title: 'Слойка и хворост «Хруст хвороста»', note: 'Хрустящий хворост с вареной сгущенкой и сахарной пудрой' },
        { title: 'Сдобные сушки и баранки', note: 'Классический ГОСТ, длительный срок хранения без потери хруста' },
        { title: 'Драже «Грибочки, цветочки»', note: 'Шоколадная глазурь и печенье, фасовка для прикассовой зоны' },
        { title: 'Сливочный ирис и щербет', note: 'Сливочный и ореховый щербет, весовой и фасованный мягкий ирис' },
      ],
      formats: ['Шоу-боксы для прикассовой зоны', 'Флоу-пак пачки для полок', 'Весовые гофрокороба по 2–4 кг'],
    },
    {
      id: 'chernogorsk',
      code: 'chernogorsk',
      name: 'Кондитерский концерн «Черногорский»',
      shortName: '«Черногорский Кондитер» / ТМ «Суфле»',
      location: 'г. Черногорск (Хакасия) • Более 300 позиций сладостей',
      badge: 'Официальный контракт',
      tagline: 'Вафельная группа, печенье и суфле',
      description:
        'Крупный кондитерский комбинат Хакасии. Специализируется на классических многослойных вафлях, зефире и печенье с суфле по ГОСТу.',
      flagships: [
        { title: 'Вафли «Детский Орлёнок» и «Мамина сказка»', note: 'Многослойные вафли со сливочной и шоколадной начинкой' },
        { title: 'Вафли «Полосатый Тёма» и «Черногорские»', note: 'Плотные десертные вафли с начинкой из какао и ореха' },
        { title: 'Печенье с суфле «Сибирская колибри»', note: 'Затяжное печенье с воздушной прослойкой суфле' },
        { title: 'Сахарное и овсяное печенье по ГОСТу', note: 'Линейка весового и фасованного печенья регулярного спроса' },
        { title: 'Пряники с начинками', note: 'Фруктовый джем, вареная сгущенка, сахарная глазурь' },
        { title: 'Зефир, пастила и суфле', note: 'Натуральный пектин, классический ванильный и яблочный вкус' },
      ],
      formats: ['Весовые гофрокороба 3–5 кг', 'Розничные пачки', 'Индивидуальные шоу-боксы'],
    },
    {
      id: 'tomsk',
      code: 'tomsk',
      name: '«Томский Кондитер» (с 1986 года)',
      shortName: 'ООО «Континент-Сервис», г. Томск',
      location: 'г. Томск • Европейские автоматизированные линии',
      badge: 'Официальный контракт',
      tagline: 'Маффины «Мафф и Ози», сдобное и сахарное печенье',
      description:
        'Более 250 видов выпечки и печенья на европейском оборудовании. Позиции регулярного спроса для розничных полок и торговых сетей.',
      flagships: [
        { title: 'Бисквитные маффины «Мафф и Ози»', note: 'Кексы с начинкой из вареной сгущенки, шоколадного и клубничного крема' },
        { title: 'Печенье «Топлёное молоко» и «К кофе»', note: 'Сахарное печенье, в том числе в шоколадной глазури' },
        { title: 'Сдобное и творожное печенье', note: 'Сдобное печенье на натуральном творожном и сливочном тесте' },
        { title: 'Печенье серии «Юбилейное фото»', note: 'Классическое рассыпчатое печенье в фасовках для полок' },
        { title: 'Сахарные курабье и колечки', note: 'Песочное курабье в гофрокоробах и розничных блистерах' },
        { title: 'Крекер и соленые снеки', note: 'Соленый, сырный, луковый и классический хрустящий крекер' },
      ],
      formats: ['Фасованные пачки 450 г', 'Лотки и блистеры', 'Гофротара для весовой торговли'],
    },
  ];

  const filteredFactories = activeTab === 'all'
    ? factories
    : factories.filter((f) => f.code === activeTab);

  return (
    <section className={styles.section} id="factories">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeRow}>
            <span className={styles.directDistributorBadge}>
              <Award size={16} />
              Официальный дистрибьютор
            </span>
            <span className={styles.regionBadge}>Прямые поставки в Алматы и область</span>
          </div>

          <h2 className={styles.title}>3 российских кондитерских завода</h2>
          <p className={styles.subtitle}>
            ТОО «Лад Коммерц» поставляет оригинальную фабричную продукцию без посредников. Заводские партии поступают напрямую на наш складской комплекс на ул. Черноморская, 12.
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
              КФ «Завод АлёшинА»
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
                  <span className={styles.factoryBadge}>{factory.badge}</span>
                  <span className={styles.factoryLocation}>{factory.location}</span>
                </div>

                <h3 className={styles.factoryName}>{factory.name}</h3>
                <p className={styles.factoryTagline}>{factory.tagline}</p>
                <p className={styles.factoryDesc}>{factory.description}</p>
              </div>

              <div className={styles.flagshipsSection}>
                <div className={styles.flagshipsHeader}>
                  <Sparkles size={16} className={styles.sparkleIcon} />
                  <span>Серии и позиции в наличии на складе:</span>
                </div>
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
                    <strong>Форматы фасовок:</strong> {factory.formats.join(' • ')}
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
          <ShieldCheck size={20} className={styles.noteIcon} />
          <p>
            <strong>Индивидуальный расчет условий:</strong> для розничных магазинов у дома, торговых сетей и оптовых складов действуют раздельные условия и графики отгрузок. Свяжитесь с отделом продаж для подбора позиций под вашу торговую точку.
          </p>
        </div>
      </div>
    </section>
  );
}

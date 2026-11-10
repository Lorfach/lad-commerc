'use client';

import React, { useState } from 'react';
import styles from './FactoryPartners.module.css';
import { ShieldCheck, Award, Package, Sparkles, ArrowRight, Check } from 'lucide-react';

interface FactoryPartnersProps {
  onSelectFactory: (factoryName: string) => void;
}

export default function FactoryPartners({ onSelectFactory }: FactoryPartnersProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'alyoshina' | 'chernogorsk' | 'tomsk'>('all');

  const factories = [
    {
      id: 'alyoshina',
      code: 'alyoshina',
      name: 'Кондитерская фабрика «Алёшина»',
      shortName: 'Завод «Алёшина»',
      location: 'Сибирь • Федеральные и экспортные поставки',
      badge: 'Официальный контракт',
      accentColor: '#8a4332',
      accentBg: 'rgba(138, 67, 50, 0.08)',
      tagline: 'Флагман мучных и глазированных сдобных изделий',
      description:
        'Современное производство с автоматизированными линиями. Высокая оборачиваемость на полках розничных магазинов и супермаркетов за счет узнаваемой упаковки и стабильного спроса.',
      flagships: [
        { title: 'Глазированная соломка', note: 'С натуральным кокосом, арахисом и воздушным рисом' },
        { title: 'Хворост «Хруст Хвороста»', note: 'Воздушный традиционный хворост в сахарной пудре' },
        { title: 'Мини-круассаны и слойки', note: 'С шоколадными, карамельными и ягодными начинками' },
        { title: 'Сдобные сушки и баранки', note: 'Классическая рецептура, длительное сохранение свежести' },
        { title: 'Драже «Грибочки, цветочки»', note: 'Шоколадная глазурь и хрустящая ножка, любимец детской аудитории' },
        { title: 'Мягкий ирис и щербет', note: 'Традиционные сливочные и ореховые восточные сладости' },
      ],
      formats: ['Шоу-боксы для прикассовой зоны', 'Фасовка в пачках для полок', 'Весовые гофрокороба по 2–4 кг'],
    },
    {
      id: 'chernogorsk',
      code: 'chernogorsk',
      name: 'Кондитерский концерн «Черногорский»',
      shortName: '«Черногорский Кондитер»',
      location: 'г. Черногорск • Более 300 позиций сладостей',
      badge: 'Официальный контракт',
      accentColor: '#9c6628',
      accentBg: 'rgba(156, 102, 40, 0.08)',
      tagline: 'Эталон вафельной и печеньевой группы Сибири',
      description:
        'Крупнейший кондитерский комбинат региона. Известен легендарной рецептурой хрустящих вафель и широчайшим ассортиментом для повседневного чаепития.',
      flagships: [
        { title: 'Вафли «Детский Орлёнок» и «Мамина сказка»', note: 'Хрустящие вафли с нежной сливочной и шоколадной начинкой' },
        { title: 'Вафли «Полосатый Тёма» и «Олеандр»', note: 'Многослойные ароматные вафли высокой плотности' },
        { title: 'Сахарное и сдобное печенье', note: 'Широкая линейка весового и фасованного печенья к чаю' },
        { title: 'Традиционные пряники', note: 'С фруктовыми джемами, вареной сгущенкой и глазурью' },
        { title: 'Нежный зефир и пастила', note: 'Натуральный пектин, классический ванильный и яблочный вкус' },
        { title: 'Кондитерские конфеты и драже', note: 'Популярные весовые позиции для розничных полок' },
      ],
      formats: ['Весовые гофрокороба 3–5 кг', 'Фирменные розничные пачки', 'Специальные наборы'],
    },
    {
      id: 'tomsk',
      code: 'tomsk',
      name: '«Томский Кондитер»',
      shortName: '«Томский Кондитер» (с 1986 г.)',
      location: 'г. Томск • Европейские автоматические линии',
      badge: 'Официальный контракт',
      accentColor: '#5c4033',
      accentBg: 'rgba(92, 64, 51, 0.08)',
      tagline: 'Премиальное сдобное, творожное печенье и выпечка',
      description:
        'Более 250 видов выпечки и печенья, изготовленных на европейском оборудовании. Нежная структура теста, проверенные ингредиенты и стабильный потребительский спрос.',
      flagships: [
        { title: 'Сдобное и творожное печенье', note: 'Тающая во рту текстура, натуральный творожный и сливочный профиль' },
        { title: 'Печенье с начинками', note: 'Спелая вишня, земляника, вареное сгущенное молоко, шоколадный крем' },
        { title: 'Ароматные маффины и кексы', note: 'Порционная выпечка в индивидуальных формочках' },
        { title: 'Сахарные курабье и колечки', note: 'Классические восточные и европейские десерты' },
        { title: 'Хрустящий крекер и снеки', note: 'Соленый, сырный, луковый и классический крекер' },
        { title: 'Мини-выпечка в коробах', note: 'Идеальный формат для магазинов у дома и супермаркетов' },
      ],
      formats: ['Фасованные лотки и блистеры', 'Весовая гофротара', 'Семейные упаковки'],
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

          <h2 className={styles.title}>3 ведущих российских кондитерских завода</h2>
          <p className={styles.subtitle}>
            ТОО «Лад Коммерц» поставляет оригинальную фабричную продукцию без посредников. Свежие заводские партии поступают напрямую на наш складской комплекс на Черноморской, 12.
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
              КФ «Алёшина»
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
                  <span>Ключевые позиции ассортимента:</span>
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
                    <strong>Форматы:</strong> {factory.formats.join(' • ')}
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
            <strong>Цены формируются индивидуально:</strong> для розничных магазинов, торговых сетей и оптовых складов действуют дифференцированные условия и графики поставок. Свяжитесь с нами для согласования объемов и условий под вашу торговую точку.
          </p>
        </div>
      </div>
    </section>
  );
}


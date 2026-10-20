'use client';

import React from 'react';
import styles from './CategoryShowcase.module.css';
import { ArrowRight } from 'lucide-react';

interface CategoryShowcaseProps {
  onSelectCategory: (categoryName: string) => void;
}

export default function CategoryShowcase({ onSelectCategory }: CategoryShowcaseProps) {
  const categories = [
    {
      id: 'chocolate',
      badge: 'ВЕСОВЫЕ И В КОРОБКАХ',
      title: 'Шоколад и конфеты',
      desc: 'Шоколадные конфеты с начинками, пралине, трюфели, весовой шоколад, плитки и подарочные наборы.',
      features: ['Весовые коробки от фабрик', 'Подарочные наборы', 'Шоколадные плитки и батончики'],
      batch: 'Опт от 1 коробки',
    },
    {
      id: 'biscuits',
      badge: 'ГОФРОКОРОБА И ПАЧКИ',
      title: 'Печенье и вафли',
      desc: 'Сахарное, овсяное и сдобное печенье, хрустящие вафли, крекер и пряники для розничной торговли.',
      features: ['Гофрокороба по 3–5 кг', 'Фасовка в пачках для полок', 'Свежие заводские даты'],
      batch: 'Опт от 1 коробки',
    },
    {
      id: 'marmalade',
      badge: 'ВЕСОВОЙ И ФАСОВАННЫЙ',
      title: 'Мармелад и карамель',
      desc: 'Жевательный и пластовой мармелад, леденцовая карамель, карамель с начинками, зефир и пастила.',
      features: ['Весовой и фасованный мармелад', 'Карамель и леденцы', 'Зефир и пастила'],
      batch: 'Опт от 1 места',
    },
    {
      id: 'sweets',
      badge: 'ТРАДИЦИОННЫЕ СЛАДОСТИ',
      title: 'Халва и восточные сладости',
      desc: 'Подсолнечная и тахинная халва, рахат-лукум, щербет, драже и козинаки от фабрик-производителей.',
      features: ['Весовая и фасованная халва', 'Рахат-лукум и щербет', 'Кондитерское драже'],
      batch: 'Опт от 1 места',
    },
  ];

  return (
    <section className={styles.section} id="catalog">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Оптовый каталог кондитерских изделий</h2>
          <p className={styles.description}>
            Прямые поставки от кондитерских фабрик. Продукция сертифицирована по регламентам ЕАС и хранится на оптовом складе в Алматы.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.id} className={styles.card}>
              <div>
                <div className={styles.cardHeader}>
                  <span className={styles.cardBadge}>{cat.badge}</span>
                  <h3 className={styles.cardTitle}>{cat.title}</h3>
                  <p className={styles.cardText}>{cat.desc}</p>
                </div>

                <ul className={styles.featuresList}>
                  {cat.features.map((feat, i) => (
                    <li key={i} className={styles.featureItem}>
                      <span className={styles.featureBullet} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.batchInfo}>{cat.batch}</span>
                <button
                  type="button"
                  className={styles.btnAction}
                  onClick={() => onSelectCategory(cat.title)}
                >
                  <span>Запросить прайс</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

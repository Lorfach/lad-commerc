'use client';

import React from 'react';
import styles from './CollaborationSteps.module.css';

interface CollaborationStepsProps {
  onOpenInquiry: () => void;
}

export default function CollaborationSteps({ onOpenInquiry }: CollaborationStepsProps) {
  const steps = [
    {
      num: '01',
      title: 'Подбор ассортимента 3 заводов',
      desc: 'Выбираете востребованные позиции фабрик «Алёшина», «Черногорский Кондитер» и «Томский Кондитер» под вашу категорию и целевую аудиторию.',
    },
    {
      num: '02',
      title: 'Индивидуальный расчет условий',
      desc: 'Согласуем персональные коммерческие условия, объемы партий и периодичность поставок с учетом специфики вашей розницы или оптовой базы.',
    },
    {
      num: '03',
      title: 'Договор и официальный пакет',
      desc: 'Заключение договора для юрлиц и ИП. Безналичный расчет, выписка ЭСФ, электронных накладных и сертификатов качества ЕАС.',
    },
    {
      num: '04',
      title: 'Быстрая отгрузка и доставка',
      desc: 'Сборка заказа на складе на Черноморской, 12 за 24 часа. Доставка собственным автопарком по Алматы и области либо оперативный самовывоз.',
    },
  ];

  return (
    <section className={styles.section} id="process">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Как начать сотрудничество</h2>
          <p className={styles.subtitle}>
            Прозрачный и оперативный процесс поставок кондитерских изделий для розничных магазинов, торговых сетей и региональных покупателей.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((s) => (
            <div key={s.num} className={styles.stepCard}>
              <span className={styles.stepNumber}>{s.num}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            <h3>Обсудить условия поставок под ваш бизнес</h3>
            <p>Оставьте контакты — специалист отдела дистрибьюции перезвонит, предоставит образцы и рассчитает индивидуальные условия.</p>
          </div>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={onOpenInquiry}
          >
            Рассчитать условия поставок
          </button>
        </div>
      </div>
    </section>
  );
}

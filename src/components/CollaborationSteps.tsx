'use client';

import React from 'react';
import styles from './CollaborationSteps.module.css';

interface CollaborationStepsProps {
  onOpenInquiry: () => void;
}

export default function CollaborationSteps({ onOpenInquiry }: CollaborationStepsProps) {
  const steps = [
    {
      step: '1',
      title: 'Выбор позиций',
      desc: 'Выбираете нужные позиции фабрик «Завод АлёшинА», «Черногорский Кондитер» и «Томский Кондитер» под ваши витрины или склад.',
    },
    {
      step: '2',
      title: 'Расчет условий',
      desc: 'Менеджер рассчитывает цены под ваш объем партии, согласует график отгрузок и условия оплаты.',
    },
    {
      step: '3',
      title: 'Договор и документы',
      desc: 'Заключаем договор поставки с ТОО или ИП. Предоставляем ЭСФ, электронные накладные и сертификаты ЕАС.',
    },
    {
      step: '4',
      title: 'Отгрузка или доставка',
      desc: 'Собираем заказ на Черноморской, 12 за 24 часа. Забираете самовывозом со склада или привозим нашим транспортом.',
    },
  ];

  return (
    <section className={styles.section} id="process">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Порядок работы</h2>
          <p className={styles.subtitle}>
            От первой заявки до отгрузки со склада в Алматы — 4 простых шага.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((s) => (
            <div key={s.step} className={styles.stepCard}>
              <span className={styles.stepBadge}>Шаг {s.step}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            <h3>Узнать условия поставок под ваш объем</h3>
            <p>Оставьте контакты — перезвоним в рабочее время склада, ответим на вопросы и рассчитаем цены.</p>
          </div>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={onOpenInquiry}
          >
            Рассчитать условия
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import styles from './CollaborationSteps.module.css';
import { MessageCircle } from 'lucide-react';

export default function CollaborationSteps() {
  const steps = [
    {
      step: '1',
      title: 'Выбор позиций',
      desc: 'Выбираете продукцию фабрик «Завод АлёшинА», «Черногорский Кондитер» и «Томский Кондитер» под вашу матрицу.',
    },
    {
      step: '2',
      title: 'Расчет условий',
      desc: 'Согласуем цены под ваш объем партии, график регулярных отгрузок и условия оплаты.',
    },
    {
      step: '3',
      title: 'Договор и документы',
      desc: 'Заключаем договор поставки с ТОО или ИП. Предоставляем ЭСФ, электронные накладные и сертификаты ЕАС.',
    },
    {
      step: '4',
      title: 'Отгрузка и доставка',
      desc: 'Комплектуем заказ на Черноморской, 12 за 24 часа. Самовывоз со склада или доставка нашим транспортом.',
    },
  ];

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/77078233422?text=' +
        encodeURIComponent('Здравствуйте! Интересуют условия поставок кондитерских изделий ТОО Лад Коммерц.'),
      '_blank'
    );
  };

  return (
    <section className={styles.section} id="process">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Порядок работы</h2>
          <p className={styles.subtitle}>
            От заявки до отгрузки со склада в Алматы.
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
            <h3>Запросить условия в WhatsApp</h3>
            <p>Напишите нам по номеру +7 (707) 823-34-22 — согласуем условия под вашу точку.</p>
          </div>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={handleWhatsApp}
          >
            <MessageCircle size={18} />
            <span>Написать в WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}

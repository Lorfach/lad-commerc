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
      title: 'Запрос прайс-листа',
      desc: 'Оставьте заявку на сайте, позвоните или напишите в WhatsApp. Отправим файл с актуальными оптовыми ценами и остатками на складе.',
    },
    {
      num: '02',
      title: 'Согласование заказа',
      desc: 'Подбор позиций, весовых и штучных фасовок под формат вашей торговой точки или сети.',
    },
    {
      num: '03',
      title: 'Договор и оплата',
      desc: 'Заключение договора поставки для юрлиц и ИП. Безналичный расчет с оформлением ЭСФ и накладных.',
    },
    {
      num: '04',
      title: 'Отгрузка продукции',
      desc: 'Самовывоз со склада на ул. Черноморская, 12 либо доставка по Алматы и области согласованным транспортом.',
    },
  ];

  return (
    <section className={styles.section} id="process">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Порядок сотрудничества</h2>
          <p className={styles.subtitle}>
            Поставки кондитерских изделий для розничных магазинов, торговых сетей и оптовых покупателей.
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
            <h3>Запросить оптовый прайс-лист</h3>
            <p>Отправьте заявку, и мы вышлем актуальный каталог кондитерских изделий со склада в Алматы.</p>
          </div>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={onOpenInquiry}
          >
            Получить прайс-лист
          </button>
        </div>
      </div>
    </section>
  );
}

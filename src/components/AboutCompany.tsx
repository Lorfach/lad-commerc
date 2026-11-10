'use client';

import React from 'react';
import styles from './AboutCompany.module.css';

export default function AboutCompany() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <h2 className={styles.title}>О компании ТОО «Лад Коммерц»</h2>
          <p className={styles.text}>
            ТОО «Лад Коммерц» занимается дистрибьюцией кондитерских изделий в Алматы и Алматинской области с 2005 года. Офис и собственный температурный склад (+18°C) расположены по адресу: <strong>г. Алматы, ул. Черноморская, 12</strong>.
          </p>
          <p className={styles.text}>
            Поставляем продукцию напрямую с трех российских кондитерских фабрик: <strong>«Завод АлёшинА»</strong>, <strong>«Кондитерский концерн Черногорский»</strong> и <strong>«Томский Кондитер»</strong>. Снабжаем розничные магазины у дома, супермаркеты и оптовые базы региона.
          </p>
          <p className={styles.text}>
            Каждая партия сопровождается полным комплектом документов: работаем с НДС, выписываем электронные счета-фактуры (ЭСФ), сопроводительные накладные на товары (СНТ) и предоставляем декларации о соответствии ЕАС.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h3 className={styles.infoTitle}>Юридические реквизиты</h3>

          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Организация:</span>
            <span className={styles.detailValue}>ТОО «ЛАД КОММЕРЦ»</span>
          </div>

          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>БИН:</span>
            <span className={styles.detailValue}>050640006693 (с 2005 г.)</span>
          </div>

          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Руководитель:</span>
            <span className={styles.detailValue}>Ершов Александр Владимирович</span>
          </div>

          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Склад и офис:</span>
            <span className={styles.detailValue}>г. Алматы, ул. Черноморская, д. 12</span>
          </div>

          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Юр. адрес:</span>
            <span className={styles.detailValue}>г. Алматы, ул. Байзакова, д. 225, кв. 94</span>
          </div>

          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Телефоны:</span>
            <span className={styles.detailValue}>
              +7 (701) 713-97-38,<br />+7 (707) 823-34-22 (WhatsApp)
            </span>
          </div>

          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Электронная почта:</span>
            <span className={styles.detailValue}>ladcomerc@mail.ru</span>
          </div>

          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Режим работы:</span>
            <span className={styles.detailValue}>Пн – Пт: 09:00 – 18:00, Сб: 09:00 – 14:00 (Вс: выходной)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

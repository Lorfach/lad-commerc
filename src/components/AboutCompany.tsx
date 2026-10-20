'use client';

import React from 'react';
import styles from './AboutCompany.module.css';

export default function AboutCompany() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>О компании ТОО «Лад Коммерц»</h2>
          <p className={styles.text}>
            ТОО «Лад Коммерц» работает на рынке оптовой торговли кондитерскими изделиями в Алматы с 2005 года. Офис и оптовый склад расположены в Жетысуском районе по адресу: ул. Черноморская, 12.
          </p>
          <p className={styles.text}>
            Компания осуществляет прямые поставки сладостей от фабрик-производителей Казахстана и стран СНГ. Отгружаем продукцию магазинам, розничным сетям и оптовым покупателям с полным пакетом документов: ЭСФ, электронные накладные и сертификаты соответствия ЕАС.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statVal}>19 лет</div>
              <div className={styles.statLabel}>На рынке оптовой торговли Казахстана (с 2005 года)</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statVal}>500+</div>
              <div className={styles.statLabel}>Позиций кондитерского ассортимента в наличии</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statVal}>100%</div>
              <div className={styles.statLabel}>Сертификаты соответствия ЕАС на каждую партию</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statVal}>Алматы</div>
              <div className={styles.statLabel}>Оптовый склад на ул. Черноморская, 12</div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Реквизиты и статус компании</h3>
            
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Организация:</span>
              <span className={styles.detailValue}>ТОО «ЛАД КОММЕРЦ»</span>
            </div>

            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>БИН:</span>
              <span className={styles.detailValue}>050640006693</span>
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
              <span className={styles.detailValue}>+7 (727) 383-09-06, +7 (707) 823-34-22</span>
            </div>

            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Электронная почта:</span>
              <span className={styles.detailValue}>ladcomerc@mail.ru</span>
            </div>

            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Режим работы:</span>
              <span className={styles.detailValue}>Понедельник – Суббота, 09:00 – 18:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

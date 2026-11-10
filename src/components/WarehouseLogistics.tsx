'use client';

import React from 'react';
import styles from './WarehouseLogistics.module.css';
import { Warehouse, Truck, ShieldCheck, Clock, FileText, CheckCircle2 } from 'lucide-react';

export default function WarehouseLogistics() {
  const advantages = [
    {
      icon: <Warehouse size={26} />,
      title: 'Склад в черте города',
      desc: 'Складской комплекс в Алматы: ',
      address: 'ул. Черноморская, 12. Асфальтированный подъезд для грузового транспорта и оперативный самовывоз.',
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'Микроклимат +18°C',
      desc: 'Температурный склад с постоянным контролем влажности. Глазурь не тает, вафли и печенье не отсыревают.',
    },
    {
      icon: <Clock size={26} />,
      title: 'Отгрузка день в день',
      desc: 'Сборка и комплектация заказов в течение 24 часов. Быстрая отгрузка со склада без задержек.',
    },
    {
      icon: <Truck size={26} />,
      title: 'Доставка по городу и области',
      desc: 'Доставка собственным транспортом по розничным торговым точкам и оптовым складам Алматы и области.',
    },
    {
      icon: <FileText size={26} />,
      title: 'Официальный документооборот',
      desc: 'Работа с НДС, выписка ЭСФ, электронные накладные и сертификаты соответствия ЕАС.',
    },
    {
      icon: <CheckCircle2 size={26} />,
      title: 'Сезонное резервирование',
      desc: 'Бронирование объемов продукции 3 заводов под праздничные и предновогодние поставки.',
    },
  ];

  return (
    <section className={styles.section} id="warehouse">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Складской комплекс и логистика</h2>
          <p className={styles.subtitle}>
            Собственный склад на ул. Черноморская, 12 обеспечивает постоянный запас продукции 3 заводов и отгрузку в течение 24 часов.
          </p>
        </div>

        <div className={styles.grid}>
          {advantages.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>
                {item.desc}
                {item.address && <span className={styles.highlightAddress}>{item.address}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

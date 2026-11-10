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
      address: 'ул. Черноморская, 12. Удобный подъезд для грузового транспорта и оперативный самовывоз.',
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'Микроклимат +18°C',
      desc: 'Специализированный температурный склад с постоянным контролем влажности. Шоколад, глазурь и вафли сохраняют идеальный товарный вид.',
    },
    {
      icon: <Clock size={26} />,
      title: 'Отгрузка день в день',
      desc: 'Сборка и комплектация заказов в течение 24 часов. Быстрая отгрузка со склада без простоев.',
    },
    {
      icon: <Truck size={26} />,
      title: 'Логистика по Алматы и области',
      desc: 'Регулярная доставка до дверей розничных магазинов и торговых сетей по городу и районам Алматинской области.',
    },
    {
      icon: <FileText size={26} />,
      title: 'Официальный документооборот',
      desc: 'Работа с НДС, выписка ЭСФ, электронные накладные и официальные сертификаты соответствия ЕАС.',
    },
    {
      icon: <CheckCircle2 size={26} />,
      title: 'Сезонное резервирование',
      desc: 'Бронирование объемов продукции 3 фабрик к праздничным пикам продаж и комплектация новогодних подарков.',
    },
  ];

  return (
    <section className={styles.section} id="warehouse">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Складской комплекс и логистика</h2>
          <p className={styles.subtitle}>
            Собственный склад на ул. Черноморская, 12 обеспечивает постоянное наличие ходового ассортимента трех заводов и ритмичные поставки в торговые точки.
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

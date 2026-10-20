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
      address: 'ул. Черноморская, 12. Удобный подъезд для грузового транспорта и самовывоз.',
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'Условия хранения',
      desc: 'Специализированный склад с контролем влажности и температуры. Шоколад, конфеты и глазурь сохраняют товарный вид.',
    },
    {
      icon: <Clock size={26} />,
      title: 'Оперативная отгрузка',
      desc: 'Сборка и комплектация заказов день в день. Быстрая отгрузка со склада без задержек.',
    },
    {
      icon: <Truck size={26} />,
      title: 'Логистика по Алматы и области',
      desc: 'Доставка до торговой точки по городу и области или отправка в регионы Казахстана через транспортные компании.',
    },
    {
      icon: <FileText size={26} />,
      title: 'Официальный документооборот',
      desc: 'Безналичный расчет, выписка ЭСФ, электронные накладные и сертификаты соответствия ЕАС.',
    },
    {
      icon: <CheckCircle2 size={26} />,
      title: 'Сезонное резервирование',
      desc: 'Бронирование объемов к праздничным пикам продаж и комплектация новогодних детских подарков.',
    },
  ];

  return (
    <section className={styles.section} id="warehouse">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Склад и условия поставок</h2>
          <p className={styles.subtitle}>
            Складской комплекс на ул. Черноморская, 12 обеспечивает постоянное наличие ходовых кондитерских позиций в черте города.
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

'use client';

import React from 'react';
import styles from './ContactsFooter.module.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactsFooter() {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <h3>ТОО «ЛАД КОММЕРЦ»</h3>
            <p className={styles.brandDesc}>
              Оптовые поставки кондитерских изделий со склада в Алматы. Прямые поставки от фабрик-производителей с 2005 года.
            </p>
            <div className={styles.requisitesBox}>
              <p>ТОО «Лад Коммерц» • БИН: 050640006693</p>
              <p>Руководитель: Ершов А. В.</p>
              <p>Юр. адрес: Алматы, ул. Байзакова, 225, кв. 94</p>
            </div>
          </div>

          <div className={styles.contactsCol}>
            <h4 className={styles.colTitle}>Контакты и склад</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <div>
                  <strong>Склад и офис:</strong>
                  <br />г. Алматы, ул. Черноморская, д. 12
                </div>
              </li>

              <li className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <div>
                  <strong>Телефоны отдела продаж:</strong>
                  <br />
                  <a href="tel:+77273830906" style={{ color: '#fff', textDecoration: 'underline' }}>
                    +7 (727) 383-09-06
                  </a>
                  <br />
                  <a href="tel:+77078233422" style={{ color: '#fff', textDecoration: 'underline' }}>
                    +7 (707) 823-34-22 (WhatsApp)
                  </a>
                </div>
              </li>

              <li className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <div>
                  <strong>Электронная почта:</strong>
                  <br />ladcomerc@mail.ru
                </div>
              </li>

              <li className={styles.contactItem}>
                <Clock size={18} className={styles.contactIcon} />
                <div>
                  <strong>Режим работы склада:</strong>
                  <br />Пн – Пт: 09:00 – 18:00, Сб: 09:00 – 14:00 (Вс: выходной)
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Разделы сайта</h4>
            <ul>
              <li><a href="#hero" className={styles.navLink}>Главная</a></li>
              <li><a href="#catalog" className={styles.navLink}>Каталог кондитерских изделий</a></li>
              <li><a href="#about" className={styles.navLink}>О компании Лад Коммерц</a></li>
              <li><a href="#warehouse" className={styles.navLink}>Складской комплекс в Алматы</a></li>
              <li><a href="#process" className={styles.navLink}>Как начать сотрудничать</a></li>
              <li><a href="#contacts" className={styles.navLink}>Контакты и реквизиты</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} ТОО «Лад Коммерц». Все права защищены. Алматы, Казахстан.</p>
          <p>Оптовая торговля кондитерскими изделиями • БИН 050640006693</p>
        </div>
      </div>
    </footer>
  );
}

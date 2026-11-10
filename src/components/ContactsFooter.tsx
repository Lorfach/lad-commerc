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
              Дистрибьютор кондитерских изделий фабрик «Завод АлёшинА», «Черногорский Кондитер» и «Томский Кондитер» в Алматы и Алматинской области. Работаем с 2005 года.
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
                  <strong>Телефоны:</strong>
                  <br />
                  <a href="tel:+77017139738" className={styles.footerPhoneLink}>
                    +7 (701) 713-97-38 (Kcell)
                  </a>
                  <br />
                  <a href="tel:+77078233422" className={styles.footerPhoneLink}>
                    +7 (707) 823-34-22 (Tele2, WhatsApp)
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
            <h4 className={styles.colTitle}>Разделы</h4>
            <ul>
              <li><a href="#hero" className={styles.navLink}>Главная</a></li>
              <li><a href="#factories" className={styles.navLink}>Продукция 3 фабрик</a></li>
              <li><a href="#coverage" className={styles.navLink}>Карта доставки</a></li>
              <li><a href="#about" className={styles.navLink}>О компании</a></li>
              <li><a href="#warehouse" className={styles.navLink}>Склад на Черноморской</a></li>
              <li><a href="#process" className={styles.navLink}>Порядок работы</a></li>
              <li><a href="#contacts" className={styles.navLink}>Контакты и реквизиты</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} ТОО «Лад Коммерц». Алматы, Казахстан.</p>
          <p>Дистрибьюция кондитерских изделий • БИН 050640006693</p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import styles from './InquiryFormModal.module.css';
import { X, CheckCircle2, FileDown, MessageCircle } from 'lucide-react';

interface InquiryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function InquiryFormModal({ isOpen, onClose, initialCategory }: InquiryFormModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategories([initialCategory]);
    } else {
      setSelectedCategories(['Шоколад и конфеты', 'Печенье и вафли']);
    }
    setIsSubmitted(false);
  }, [initialCategory, isOpen]);

  if (!isOpen) return null;

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Закрыть">
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <h3 className={styles.title}>Запрос оптового прайс-листа</h3>
            <p className={styles.subtitle}>
              Заполните контактные данные, и мы вышлем актуальный прайс-лист кондитерских изделий со склада в Алматы.
            </p>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Ваше имя или контактное лицо *</label>
                <input
                  type="text"
                  required
                  placeholder="Александр"
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Телефон или WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  className={styles.input}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Название магазина / компании / сети</label>
                <input
                  type="text"
                  placeholder="Магазин «У дома», супермаркет или ИП"
                  className={styles.input}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Интересующие категории:</label>
                <div className={styles.checkboxGrid}>
                  {['Шоколад и конфеты', 'Печенье и вафли', 'Мармелад и карамель', 'Халва и восточные сладости'].map((cat) => (
                    <label key={cat} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" disabled={loading} className={styles.submitBtn}>
                {loading ? 'Отправка...' : 'Получить оптовый прайс-лист'}
              </button>
            </form>
          </div>
        ) : (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>
              <CheckCircle2 size={36} />
            </div>
            <h3 className={styles.successTitle}>Заявка принята</h3>
            <p className={styles.successText}>
              Спасибо, <strong>{name}</strong>. Мы свяжемся с вами по номеру <strong>{phone}</strong> и отправим оптовый прайс-лист со складскими остатками на ул. Черноморская, 12.
            </p>

            <div className={styles.successActions}>
              <button
                type="button"
                className={styles.btnDownload}
                onClick={onClose}
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

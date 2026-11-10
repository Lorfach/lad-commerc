'use client';

import React, { useState, useEffect } from 'react';
import styles from './InquiryFormModal.module.css';
import { X, CheckCircle2, Building, Store } from 'lucide-react';

interface InquiryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function InquiryFormModal({ isOpen, onClose, initialCategory }: InquiryFormModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState<'retail' | 'wholesale'>('retail');
  const [company, setCompany] = useState('');
  const [selectedFactories, setSelectedFactories] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedFactories([initialCategory]);
    } else {
      setSelectedFactories([
        'Кондитерская фабрика «Алёшина»',
        '«Черногорский Кондитер»',
        '«Томский Кондитер»',
      ]);
    }
    setIsSubmitted(false);
  }, [initialCategory, isOpen]);

  if (!isOpen) return null;

  const toggleFactory = (factoryName: string) => {
    setSelectedFactories((prev) =>
      prev.includes(factoryName) ? prev.filter((f) => f !== factoryName) : [...prev, factoryName]
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
            <h3 className={styles.title}>Расчет условий поставок</h3>
            <p className={styles.subtitle}>
              Цены и условия формируются индивидуально под формат торговой точки. Заполните заявку — менеджер свяжется с вами и рассчитает персональные условия.
            </p>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Формат вашего бизнеса *</label>
                <div className={styles.businessTypeGrid}>
                  <button
                    type="button"
                    className={`${styles.typeBtn} ${businessType === 'retail' ? styles.typeBtnActive : ''}`}
                    onClick={() => setBusinessType('retail')}
                  >
                    <Store size={18} />
                    <span>Розничный магазин / сеть</span>
                  </button>

                  <button
                    type="button"
                    className={`${styles.typeBtn} ${businessType === 'wholesale' ? styles.typeBtnActive : ''}`}
                    onClick={() => setBusinessType('wholesale')}
                  >
                    <Building size={18} />
                    <span>Оптовая база / дистрибьютор</span>
                  </button>
                </div>
              </div>

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
                <label className={styles.label}>Сотовый телефон или WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (7__) ___-__-__"
                  className={styles.input}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Название точки / магазина / ИП</label>
                <input
                  type="text"
                  placeholder="Например: магазин «Берёзка» или ИП Смирнов"
                  className={styles.input}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Интересующие фабрики:</label>
                <div className={styles.checkboxGrid}>
                  {[
                    'Кондитерская фабрика «Алёшина»',
                    '«Черногорский Кондитер»',
                    '«Томский Кондитер»',
                  ].map((factory) => (
                    <label key={factory} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={selectedFactories.includes(factory)}
                        onChange={() => toggleFactory(factory)}
                      />
                      <span>{factory}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" disabled={loading} className={styles.submitBtn}>
                {loading ? 'Отправка...' : 'Рассчитать индивидуальные условия'}
              </button>
            </form>
          </div>
        ) : (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>
              <CheckCircle2 size={36} />
            </div>
            <h3 className={styles.successTitle}>Заявка успешно принята</h3>
            <p className={styles.successText}>
              Спасибо, <strong>{name}</strong>! Мы подготовим индивидуальный расчет условий поставок для вашей точки и перезвоним по номеру <strong>{phone}</strong> в течение 15 минут.
            </p>

            <div className={styles.successActions}>
              <button
                type="button"
                className={styles.btnClose}
                onClick={onClose}
              >
                Отлично, понятно
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

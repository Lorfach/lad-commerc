import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ТОО «Лад Коммерц» — Оптовые поставки кондитерских изделий в Алматы',
  description: 'Прямые оптовые поставки кондитерских изделий со склада в Алматы (ул. Черноморская, 12). Шоколад, конфеты, печенье, мармелад и бакалея от ведущих фабрик.',
  keywords: 'Лад Коммерц, оптовые поставки кондитерских изделий, сладости оптом Алматы, кондитерский склад Алматы, дистрибьютор кондитерских изделий Казахстан',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Display:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

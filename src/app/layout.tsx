import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ТОО «Лад Коммерц» — Официальная дистрибьюция кондитерских изделий в Алматы',
  description: 'Официальный дистрибьютор кондитерских фабрик «Алёшина», «Черногорский Кондитер» и «Томский Кондитер» в Алматы и Алматинской области. Склад на ул. Черноморская, 12.',
  keywords: 'Лад Коммерц, дистрибьютор кондитерских изделий, завод Алёшина Алматы, Черногорский кондитер Казахстан, Томский кондитер Алматы, кондитерский склад Алматы',
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

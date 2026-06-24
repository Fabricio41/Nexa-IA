import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agência IA - Automação Inteligente',
  description: 'Landing page para agência de automação com IA.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

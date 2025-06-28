import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/lib/providers/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Advanced Next.js App',
  description: 'Advanced Next.js application with Redux and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
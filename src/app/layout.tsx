import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Aswath Siddharth R - Software Engineer',
  description: 'Portfolio of Aswath Siddharth R, Software Engineering Intern.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

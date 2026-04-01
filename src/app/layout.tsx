import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aswath Siddharth R | Portfolio',
  description: 'Software Engineering Intern | Systems Builder | ML Enthusiast',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--foreground-muted)', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
          <p>© {new Date().getFullYear()} Aswath Siddharth R. Built with Next.js.</p>
        </footer>
      </body>
    </html>
  );
}

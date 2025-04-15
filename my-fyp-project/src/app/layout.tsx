// app/layout.tsx
import NavBar from '@/components/NavBar';
import './globals.css'; // 可选，引入全局样式

export const metadata = {
  title: 'FYP AI Learning',
  description: 'An AI-based learning path generator',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="p-6">{children}</main> {/* 类似 <router-outlet> */}
      </body>
    </html>
  );
}

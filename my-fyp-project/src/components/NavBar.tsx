// components/NavBar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  // 导航链接数据
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/community', label: 'Community' },
    { href: '/users/form/login', label: 'Login' },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold text-lg">My FYP Project</div>
      <div className="space-x-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`
              px-3 py-2 rounded-md transition-all duration-200
              ${
                pathname === link.href
                  ? 'bg-blue-800 font-semibold' // 当前页面样式
                  : 'hover:bg-blue-700 hover:scale-105' // 悬停效果
              }
            `}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="p-6">{children}</main> {/* 类似 <router-outlet> */}
      </body>
    </html>
  );
}

import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
<script src="http://192.168.86.154:8097"></script>
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

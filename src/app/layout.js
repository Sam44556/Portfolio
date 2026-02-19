import ClientLayout from "./_component/ClientLayout";

import "./globals.css";
export const metadata = {
  title: 'Samuel Girma Portfolio',
  description: 'Portfolio of Samuel Girma - Software Engineer.',
  icons: {
    // Use download.webp as the primary favicon (file exists in public/)
    icon: '/download.webp',
    shortcut: '/download.webp',
  },
};
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});




export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${josefin.className} antialiased bg-background text-foreground min-h-screen flex flex-col overflow-x-hidden`}
      >
        {/* ClientLayout wraps all client components (Header, Footer, ThemeProvider) */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

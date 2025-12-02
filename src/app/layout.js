import ClientLayout from "./_component/ClientLayout";

import "./globals.css";
export const metadata = {
  title: 'Samuel Girma Portfolio',
  description: 'Portfolio of Samuel Girma - Web Developer',
  icons: {
    icon: "/download.webp", // favicon path
  },
};
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {/* ClientLayout wraps all client components (Header, Footer, ThemeProvider) */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

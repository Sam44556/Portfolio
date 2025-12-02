'use client';

import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeProvider";

/**
 * ClientLayout Component
 * This wraps all client-side components (Header, Footer, ThemeProvider)
 * Separated from layout.js because layout.js needs to be a Server Component
 * to export metadata
 */
export default function ClientLayout({ children }) {
  return (
    <ThemeProvider>
      <Header />
      <div className="">
        <main className="w-full flex-grow pt-14 sm:pt-0">
          {children}
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

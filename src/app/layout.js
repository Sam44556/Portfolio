
import Header from "@/app/_component/Header";
import Footer from "./_component/Footer";

import { Provider } from "@/app/_component/Context";
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
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col `}
      >
        <Header />

        <div className="">
          <main className="w-full flex-grow">
           <Provider>

            {children}
              </Provider></main>
        </div>
        <Footer />
        </body>
    </html>
  );
}

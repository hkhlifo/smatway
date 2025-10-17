import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Smart Way Consultancy | UAE Business Setup & Visa Experts",
  description:
    "Smart Way Consultancy offers premium business setup, visa processing, IT, and accounting services in the UAE. Trusted by entrepreneurs, investors, and families.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-white text-[#2B2B2B]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
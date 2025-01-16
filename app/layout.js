import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "./(compoents)/NavBar";
import Footer from "./(compoents)/Footer";
import { ToastContainer } from "react-toastify";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Imdb clone",
  description: "tunning, feature-packed movie app using Next.js 15, Tailwind CSS, MongoDB, and Clerk for secure user authentication. ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar/>
        {children}
        <ToastContainer/>
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}

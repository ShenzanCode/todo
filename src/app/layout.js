import { Inter } from "next/font/google";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import "./globals.css";
import Navebar from "@/components/Navebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "todo app shenzan",
  description: "this is a simple todo application. it is for my personal purposes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastContainer/>
        {/* <Navebar/> */}
        {children}
        </body>
    </html>
  );
}

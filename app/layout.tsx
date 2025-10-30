import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Circles from "@/components/Background/Circles";
import RightMenu from "@/components/Burger-Menu/Right-contact/Right-menu";
import Metrika from "@/app/utils/metrika"
export const metadata: Metadata = {
  title: "GROZTEX-BUSINESS",
  description: "GROZTEX BUSINESS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <link rel="icon" href="/logo.png"/>
      </header>
      <body>
        <RightMenu/>
        <Circles/>
          <Header/>
        {children}
          <Footer/>
          <Metrika/>
      </body>
    </html>
  );
}

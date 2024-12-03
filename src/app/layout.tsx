import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NavbarProps } from "@/components/Navbar";

import "./globals.css";
import { getNavBar } from "@/utils/sanity";

export const metadata: Metadata = {
  title: "Basc Cartagena",
  description:
    "BASC es una alianza empresarial que promueve el cumplimiento de estándares internacionales de seguridad",
  icons:
    "https://res.cloudinary.com/do0umhryh/image/upload/v1731011169/1._Logo_Original_BASC_nz3vvn.png",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getNavBar();
  const { items } = data;

  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>

        <Navbar menuItems={items as NavbarProps["menuItems"]} />

        <main className="pb-20 w-full"> {children} </main>
        <Footer />
      </body>
    </html>
  );
}

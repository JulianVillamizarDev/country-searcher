import type { Metadata } from "next";
import { Nunito_Sans, Inter } from "next/font/google";
import { Providers } from './providers'
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito_Sans({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className} bg-primary-50 dark:bg-secondary-100`}>
        <Providers>
          {children}  
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gully Staking On Flare",
  description: "Stake your Gullys on Flare Today!! and earn $billy the next big meme on flare",
  icons: {
    icon: "/favicon.ico", // this file goes in /public
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Prompt } from "next/font/google"
import "./globals.css";

const PromptGoogle = Prompt({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-prompt',
});

export const metadata: Metadata = {
  title: "Khachonsak-Nantasen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PromptGoogle.variable}>{children}</body>
    </html>
  );
}

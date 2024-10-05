import type { Metadata } from "next";
import localFont from "next/font/local";


import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


const dancingScript = localFont({
  src:"./fonts/DancingScript.ttf",
  variable:"--font-dancing-script",
  weight:'400 500 600 700',
  style:'normal'
})
const IBMRegular = localFont({
  src:"./fonts/IBMRegular.ttf",
  variable:"--font-IBM-regular",
})
const IBMBold = localFont({
  src:"./fonts/IBMBold.ttf",
  variable:"--font-IBM-bold",
})
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
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${IBMBold.variable} ${IBMRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

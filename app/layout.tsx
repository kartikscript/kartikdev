import type { Metadata } from "next";
import {Roboto, Oxanium} from "next/font/google";


import "./globals.css";
import { ThemeProvider } from '@/components/Providers';

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


const roboto = Roboto({
  variable:'--font-Roboto',
  weight:['100','300','400','500','700','900'],
  subsets:['latin']
})

const oxanium = Oxanium({
  variable:'--font-Oxanium',
  weight:['400','500','600','700',"300"],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Kartik Script",
  description: "Portfolio showcasing about a frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >

          <body
            className={`${oxanium.variable} ${roboto.variable}  dark:bg-stone-950 bg-slate-300  font-Roboto selection:text-slate-100 selection:bg-main`}
          >
      <ThemeProvider
            attribute="class"
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
            
          >

            {children}
      </ThemeProvider>
          </body>
    </html>
  );
}

import localFont from "next/font/local";
// import Head from "next/head";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Undangan Digital",
  description: "Undangan Pernikahan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head> */}
      {/* </Head> */}
      <head>
        <link rel="icon" href="/icons.jpeg" />
      <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import Header from "./components/Header";
import BackToTopButton from "./components/BackToTopButton";
import { ScrollProvider } from "./components/ScrollContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nakorn Portfolio website",  // Default title for global use
  description: "My Portfolio website develop using nextJS",
};

export default function RootLayout({ children, pageMetadata = metadata }) {
  return (
    <html lang="en">
      <Head>
        <title>{pageMetadata.title || "Nakorn Portfolio"}</title> {/* Default to "Nakorn Portfolio" */}
        <meta name="description" content={pageMetadata.description || "My Portfolio website develop using nextJS"} />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ScrollProvider>
          <Header />
          {children}
          <BackToTopButton />
        </ScrollProvider>
      </body>
    </html>
  );
}


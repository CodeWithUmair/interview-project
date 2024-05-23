import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Orbitron } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";
import { Metadata } from "next";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SeperHeroine Nft's",
  description: "SeperHeroine Collectibles",
  // other metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="!scroll-smooth">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${orbitron.className}`}>
        <Providers>
          <Header />
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}

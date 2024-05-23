"use client";

import Chronicles from "@/components/Chronicles";
import DigitalCollectibles from "@/components/Digital-Collectibles";
import Hero from "@/components/Hero";
import CommunityPerks from "@/components/Perks";
import ScrollButton from "@/components/Scroll-Buttons/ScrollToBottom";
// import ScrollToTop from "@/components/Scroll-Buttons/ScrollToTop";
// import SidebarSocial from "@/components/SidebarSocial";

export default function Home() {
  const sections = ["Home", "Digital-Collectibles", "Chronicles", "Perks"];

  return (
    <>
      <Hero />
      <DigitalCollectibles />
      <Chronicles />
      <CommunityPerks />
      {/* <ScrollToTop /> */}
      <ScrollButton sections={sections} />
      {/* <SidebarSocial /> */}
    </>
  );
}

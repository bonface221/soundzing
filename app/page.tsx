import HeroSection from "./components/hero";
import LatestPosts from "./components/latest-posts";
import Stats from "./components/stats";
import WhatYouWillLearn from "./components/to learn";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatYouWillLearn />
      <Stats />
      <LatestPosts />
    </>
  );
}

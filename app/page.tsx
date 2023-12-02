import Footer from "./components/footer";
import HeroSection from "./components/hero";
import LatestPosts from "./components/latest-posts";
import Stats from "./components/stats";
import Testimonials from "./components/testimonials";
import WhatYouWillLearn from "./components/to learn";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatYouWillLearn />
      <Stats />
      <LatestPosts />
      <Testimonials />
      <Footer />
    </>
  );
}

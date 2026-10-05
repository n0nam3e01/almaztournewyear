import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Route } from "@/components/sections/Route";
import { Destinations } from "@/components/sections/Destinations";
import { Comfort } from "@/components/sections/Comfort";
import { Program } from "@/components/sections/Program";
import { Guide } from "@/components/sections/Guide";
import { Logistics } from "@/components/sections/Logistics";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/layout/Footer";
import { MobileActions } from "@/components/layout/MobileActions";
import { Reveal } from "@/components/ui/Reveal";
import { Snowfall } from "@/components/ui/Snowfall";
export default function Home() {
  return (
    <>
      <Snowfall />
      <Header />
      <main id="main">
        <Hero />
        <Reveal>
          <Route />
        </Reveal>
        <Reveal>
          <Destinations />
        </Reveal>
        <Reveal>
          <Comfort />
        </Reveal>
        <Program />
        <Reveal>
          <Guide />
        </Reveal>
        <Reveal>
          <Logistics />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Faq />
        <Reveal>
          <Booking />
        </Reveal>
      </main>
      <Footer />
      <MobileActions />
    </>
  );
}

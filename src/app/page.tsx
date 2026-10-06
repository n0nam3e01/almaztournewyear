import { Header } from "@/components/reference/Header";
import { Hero } from "@/components/reference/Hero";
import { Comparison } from "@/components/reference/Comparison";
import { TravelSupport } from "@/components/reference/TravelSupport";
import { Route } from "@/components/reference/Route";
import { Program } from "@/components/reference/Program";
import { Company } from "@/components/reference/Company";
import { Pricing } from "@/components/reference/Pricing";
import { Faq } from "@/components/reference/Faq";
import { FinalContact } from "@/components/reference/FinalContact";
import { Footer } from "@/components/reference/Footer";
import { ContactDock } from "@/components/reference/ContactDock";
import { Snowfall } from "@/components/ui/Snowfall";
export default function Home() {
  return (
    <>
      <div
        className="ambient-aurora fixed inset-0 pointer-events-none"
        aria-hidden="true"
      />
      <Snowfall />
      <Header />
      <main id="main">
        <Hero />
        <Comparison />
        <TravelSupport />
        <Route />
        <Program />
        <Company />
        <Pricing />
        <Faq />
        <FinalContact />
      </main>
      <Footer />
      <ContactDock />
    </>
  );
}

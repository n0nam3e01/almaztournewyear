import { referenceCopy as copy } from "@/data/reference-copy";
import { FaqAccordion } from "./Accordions";
export function Faq() {
  return (
    <section
      id="faq"
      className="py-16 md:py-24 relative border-t border-white/10 bg-[#062428]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">
            {copy.faq01}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            {copy.faq02}
          </h2>
          <p className="text-base text-brand-moonLight/80">{copy.faq03}</p>
        </div>
        <FaqAccordion />
      </div>
    </section>
  );
}

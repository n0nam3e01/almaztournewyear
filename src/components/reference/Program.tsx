import { referenceCopy as copy } from "@/data/reference-copy";
import { ProgramAccordion } from "./Accordions";
export function Program() {
  return (
    <section
      id="program"
      className="py-16 md:py-24 relative border-t border-white/10 bg-[#062428]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">
            {copy.program01}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            {copy.program02}
          </h2>
          <p className="text-base text-brand-moonLight/80">{copy.program03}</p>
        </div>
        <ProgramAccordion />
      </div>
    </section>
  );
}

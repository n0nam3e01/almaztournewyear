import { referenceCopy as copy } from "@/data/reference-copy";
import { whatsappUrl, contactMessages } from "@/data/company";
import { tour } from "@/data/tour";
import { GlassLink } from "./GlassLink";
export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 md:py-24 relative border-t border-white/10 bg-[#062428] scroll-mt-20"
    >
      <div id="booking" className="scroll-mt-24"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">
            {copy.pricing01}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            {copy.pricing02}
          </h2>
          <p className="text-base text-brand-moonLight/80">{copy.pricing03}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          <div
            className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0A3A40]/90 to-[#062428] border-2 border-brand-amber/50 shadow-2xl flex flex-col justify-between relative overflow-hidden"
            style={{
              boxShadow:
                "inset 0 0 16px rgba(212, 175, 55, 0.18), 0 12px 36px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-red-600 to-brand-amber text-white text-[11px] font-extrabold uppercase tracking-wider rounded-bl-2xl shadow-md">
              {copy.pricing04}
            </div>
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/15">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {copy.pricing05}
                  </h3>
                  <p className="text-xs text-brand-amber font-semibold mt-0.5">
                    {copy.pricing06}
                  </p>
                </div>
                <span className="text-2xl">{copy.pricing07}</span>
              </div>
              <ul className="space-y-3.5 text-sm text-brand-moonLight/90">
                {tour.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-waGreen/20 text-brand-waGreen flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-5 border-t border-white/15">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
                <div>
                  <span className="text-xs text-brand-moonLight/70 block">
                    {copy.pricing08}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-white whitespace-nowrap">
                      {copy.pricing09}
                    </span>
                    <span className="text-base line-through text-brand-moonLight/40 whitespace-nowrap">
                      {copy.pricing10}
                    </span>
                    <span className="text-xs font-bold text-brand-amber ml-1 whitespace-nowrap">
                      {copy.pricing11}
                    </span>
                  </div>
                </div>
                <GlassLink
                  href={whatsappUrl(contactMessages.booking)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="threeui-btn threeui-btn-gold w-full sm:w-auto"
                >
                  <span className="threeui-btn-content">
                    <span className="whitespace-nowrap">{copy.pricing12}</span>
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                </GlassLink>
              </div>
              <p className="text-[11px] sm:text-xs text-brand-moonLight/60 text-center sm:text-left">
                {copy.pricing13}
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 glass-card border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {copy.pricing14}
                  </h3>
                  <p className="text-xs text-brand-moonLight/60 mt-0.5">
                    {copy.pricing15}
                  </p>
                </div>
                <span className="text-2xl">{copy.pricing16}</span>
              </div>
              <div className="space-y-4 text-sm text-brand-moonLight/80">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between font-bold text-white mb-1">
                    <span>{copy.pricing17}</span>
                    <span className="text-brand-amber">{copy.pricing18}</span>
                  </div>
                  <p className="text-xs text-brand-moonLight/70">
                    {copy.pricing19}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between font-bold text-white mb-1">
                    <span>{copy.pricing20}</span>
                    <span className="text-brand-amber">{copy.pricing21}</span>
                  </div>
                  <p className="text-xs text-brand-moonLight/70">
                    {copy.pricing22}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between font-bold text-white mb-1">
                    <span>{copy.pricing23}</span>
                    <span className="text-brand-amber">{copy.pricing24}</span>
                  </div>
                  <p className="text-xs text-brand-moonLight/70">
                    {copy.pricing25}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between font-bold text-white mb-1">
                    <span>{copy.pricing26}</span>
                    <span className="text-brand-amber">{copy.pricing27}</span>
                  </div>
                  <p className="text-xs text-brand-moonLight/70">
                    {copy.pricing28}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-brand-moonLight/60">
              {copy.pricing29}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { referenceCopy as copy } from "@/data/reference-copy";
export function TravelSupport() {
  return (
    <section className="py-14 sm:py-20 relative bg-gradient-to-b from-[#062428] via-[#0A3A40]/40 to-[#062428] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">
            {copy.travelSupport01}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-3">
            {copy.travelSupport02}
          </h2>
          <p className="text-xs sm:text-base text-brand-moonLight/80">
            {copy.travelSupport03}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-brand-amber/30 hover:border-brand-amber/60 shadow-xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-brand-amber/15 border border-brand-amber/30 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
              {copy.travelSupport04}
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-brand-amber/15 text-brand-amber text-xs font-bold uppercase tracking-wider mb-3">
              {copy.travelSupport05}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              {copy.travelSupport06}
            </h3>
            <p className="text-xs sm:text-sm text-brand-moonLight/85 leading-relaxed">
              {copy.travelSupport07}
            </p>
          </div>
          <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-brand-amber/30 hover:border-brand-amber/60 shadow-xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-brand-amber/15 border border-brand-amber/30 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
              {copy.travelSupport08}
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-brand-amber/15 text-brand-amber text-xs font-bold uppercase tracking-wider mb-3">
              {copy.travelSupport09}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              {copy.travelSupport10}
            </h3>
            <p className="text-xs sm:text-sm text-brand-moonLight/85 leading-relaxed">
              {copy.travelSupport11}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

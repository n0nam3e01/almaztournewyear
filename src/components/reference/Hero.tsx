import { referenceCopy as copy } from "@/data/reference-copy";
import { whatsappUrl, contactMessages } from "@/data/company";
import { GlassLink } from "./GlassLink";
import { HeroBackdrop } from "./Photos";
export function Hero() {
  return (
    <section className="relative pt-8 pb-14 md:pt-16 md:pb-24 overflow-hidden">
      <HeroBackdrop></HeroBackdrop>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 max-w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-amber/15 border border-brand-amber/35 text-brand-amber text-xs font-bold tracking-wide shadow-sm whitespace-nowrap">
              <span>{copy.hero01}</span>
              <span>{copy.hero02}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/35 text-emerald-300 text-xs font-bold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
              <span className="leading-tight">{copy.hero03}</span>
            </div>
          </div>
          <h1 className="font-serif text-[26px] xs:text-[30px] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
            {copy.hero04}
            <br className="hidden sm:inline" />
            <span className="text-gold-gradient font-normal italic">
              {copy.hero05}
            </span>
            {copy.hero06}
          </h1>
          <p className="text-xs sm:text-xl text-brand-moonLight/85 font-normal max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10">
            <span className="font-bold text-white">
              <span className="text-brand-amber">{copy.hero07}</span>
              {copy.hero08}
              <span className="text-brand-amber">{copy.hero09}</span>
              {copy.hero10}
              <span className="text-brand-amber">{copy.hero11}</span>
            </span>
            {copy.hero12}
            <span className="text-brand-amber font-semibold">
              {copy.hero13}
            </span>
            {copy.hero14}
            <span className="text-brand-amber font-semibold">
              {copy.hero15}
            </span>
            {copy.hero16}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12 text-left">
            <div className="p-3.5 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0A3A40]/80 to-[#062428]/90 border border-brand-amber/40 shadow-lg relative overflow-hidden group hover:border-brand-amber transition-all">
              <div className="absolute -right-3 -top-3 w-16 h-16 bg-brand-amber/10 rounded-full blur-xl group-hover:bg-brand-amber/20 transition-colors"></div>
              <div className="flex items-start gap-3 sm:gap-3.5">
                <span className="text-xl sm:text-2xl p-1.5 sm:p-2 rounded-xl bg-brand-amber/15 text-brand-amber border border-brand-amber/20 flex-shrink-0">
                  {copy.hero17}
                </span>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-0.5 sm:mb-1">
                    {copy.hero18}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-brand-moonLight/80 leading-normal">
                    {copy.hero19}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3.5 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0A3A40]/80 to-[#062428]/90 border border-brand-amber/40 shadow-lg relative overflow-hidden group hover:border-brand-amber transition-all">
              <div className="absolute -right-3 -top-3 w-16 h-16 bg-brand-amber/10 rounded-full blur-xl group-hover:bg-brand-amber/20 transition-colors"></div>
              <div className="flex items-start gap-3 sm:gap-3.5">
                <span className="text-xl sm:text-2xl p-1.5 sm:p-2 rounded-xl bg-brand-amber/15 text-brand-amber border border-brand-amber/20 flex-shrink-0">
                  {copy.hero20}
                </span>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-0.5 sm:mb-1">
                    {copy.hero21}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-brand-moonLight/80 leading-normal">
                    {copy.hero22}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3.5 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0A3A40]/80 to-[#062428]/90 border border-brand-amber/40 shadow-lg relative overflow-hidden group hover:border-brand-amber transition-all">
              <div className="absolute -right-3 -top-3 w-16 h-16 bg-brand-amber/10 rounded-full blur-xl group-hover:bg-brand-amber/20 transition-colors"></div>
              <div className="flex items-start gap-3 sm:gap-3.5">
                <span className="text-xl sm:text-2xl p-1.5 sm:p-2 rounded-xl bg-brand-amber/15 text-brand-amber border border-brand-amber/20 flex-shrink-0">
                  {copy.hero23}
                </span>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-0.5 sm:mb-1">
                    {copy.hero24}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-brand-moonLight/80 leading-normal">
                    {copy.hero25}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto rounded-3xl glass-panel p-4 sm:p-7 shadow-2xl relative mt-4 border border-white/20">
            <div className="threeui-btn-group">
              <GlassLink
                href="#booking"
                className="threeui-btn threeui-btn-gold"
              >
                <span className="threeui-btn-content">
                  <span>{copy.hero26}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </GlassLink>
              <GlassLink
                href={whatsappUrl(contactMessages.program)}
                target="_blank"
                rel="noopener noreferrer"
                className="threeui-btn threeui-btn-emerald"
              >
                <span className="threeui-btn-content">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm0 10.375c-.917 0-1.68-.26-2.427-.723l-.173-.103-1.802.473.481-1.758-.113-.18c-.496-.79-.757-1.571-.756-2.316.001-2.484 2.023-4.504 4.509-4.504 2.484 0 4.506 2.021 4.507 4.505-.001 2.483-2.023 4.503-4.509 4.503z"></path>
                  </svg>
                  <span>{copy.hero27}</span>
                </span>
              </GlassLink>
            </div>
            <div className="mt-3 sm:mt-4 flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-brand-moonLight/75 text-center font-medium">
              <svg
                className="w-3.5 h-3.5 text-brand-amber flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{copy.hero28}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

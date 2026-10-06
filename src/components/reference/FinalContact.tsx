import { referenceCopy as copy } from "@/data/reference-copy";
import { whatsappUrl, contactMessages } from "@/data/company";
import { GlassLink } from "./GlassLink";
export function FinalContact() {
  return (
    <section
      id="final-cta"
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#062428] via-[#0A3A40]/70 to-[#062428] border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-8 shadow-xl animate-pulse-slow">
          <span>{copy.finalContact01}</span>
          <span>{copy.finalContact02}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          {copy.finalContact03}
        </h2>
        <p className="text-base sm:text-xl text-brand-moonLight/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          {copy.finalContact04}
        </p>
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <GlassLink
            href={whatsappUrl(contactMessages.booking)}
            target="_blank"
            rel="noopener noreferrer"
            className="threeui-btn threeui-btn-emerald w-full sm:w-auto"
          >
            <span className="threeui-btn-content flex-col sm:flex-row py-4 sm:py-5 px-6 sm:px-8 text-sm sm:text-base font-extrabold tracking-wide">
              <span className="inline-flex items-center gap-2.5">
                <svg
                  className="w-5 h-5 fill-current flex-shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.7c.974.553 1.95.845 2.791.845 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.77-5.767-5.77zm3.393 8.163c-.144.405-.837.774-1.17.822-.312.043-.683.08-2.096-.505-1.745-.724-2.859-2.505-2.946-2.62-.088-.116-.697-.93-.697-1.773 0-.843.438-1.258.594-1.432.156-.175.341-.219.455-.219.114 0 .228.001.328.007.105.006.246-.04.385.295.144.348.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.088.188-.175.29-.088.102-.185.228-.264.307-.088.087-.18.182-.077.359.102.176.455.75 1.012 1.246.717.639 1.32.837 1.507.925.188.088.298.073.407-.058.11-.13.469-.545.594-.733.125-.188.25-.157.422-.094.172.063 1.092.515 1.279.608.187.094.312.14.359.219.047.078.047.452-.097.857z"></path>
                </svg>
                <span className="whitespace-nowrap">{copy.finalContact05}</span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/90 whitespace-nowrap">
                {copy.finalContact06}
              </span>
            </span>
          </GlassLink>
          <span className="text-xs text-brand-moonLight/60 mt-4 block">
            {copy.finalContact07}
          </span>
        </div>
      </div>
    </section>
  );
}

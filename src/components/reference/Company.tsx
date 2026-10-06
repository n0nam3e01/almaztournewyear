import Image from "next/image";
import { referenceCopy as copy } from "@/data/reference-copy";
import { company, whatsappUrl, contactMessages } from "@/data/company";
import { GlassLink } from "./GlassLink";
export function Company() {
  return (
    <section
      id="expert"
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#062428] via-[#0A3A40]/30 to-[#062428]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md rounded-3xl p-3 bg-gradient-to-b from-brand-amber/40 via-white/10 to-brand-gold/40 border border-brand-amber/40 shadow-2xl">
              <div className="overflow-hidden rounded-2xl relative aspect-[3/4] bg-[#0A3A40]">
                <Image
                  src="/images/tour/aliya-portrait.webp"
                  alt="Алия — сопровождающая рождественского тура Almaz Tour"
                  className="w-full h-full object-cover object-top filter brightness-[1.02]"
                  width={1024}
                  height={1365}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062428]/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] py-2.5 px-4 rounded-xl bg-brand-tealDeep/95 backdrop-blur-md border border-brand-amber text-center shadow-xl">
                <span className="text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-1.5 whitespace-nowrap">
                  <span>{copy.company01}</span>
                  {copy.company02}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 pt-6 lg:pt-0">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">
              {copy.company03}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 leading-tight">
              {copy.company04}
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-brand-amber/30 transition-colors">
                <span className="text-2xl p-2 rounded-xl bg-brand-amber/15 text-brand-amber border border-brand-amber/20">
                  {copy.company05}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {copy.company06}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-moonLight/80">
                    {copy.company07}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-brand-amber/30 transition-colors">
                <span className="text-2xl p-2 rounded-xl bg-brand-amber/15 text-brand-amber border border-brand-amber/20">
                  {copy.company08}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {copy.company09}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-moonLight/80">
                    {copy.company10}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-brand-amber/30 transition-colors">
                <span className="text-2xl p-2 rounded-xl bg-brand-amber/15 text-brand-amber border border-brand-amber/20">
                  {copy.company11}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {copy.company12}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-moonLight/80">
                    {copy.company13}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-brand-amber/30 transition-colors">
                <span className="text-2xl p-2 rounded-xl bg-brand-amber/15 text-brand-amber border border-brand-amber/20">
                  {copy.company14}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {copy.company15}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-moonLight/80">
                    {copy.company16}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-brand-amber/15 via-white/[0.03] to-transparent border-l-4 border-brand-amber text-brand-moonLight text-sm sm:text-base leading-relaxed mb-6 shadow-lg">
              <p className="italic">{copy.company17}</p>
              <div className="not-italic text-xs font-bold text-white mt-3 uppercase tracking-wider flex flex-wrap items-center gap-2">
                <span className="text-brand-amber font-extrabold">
                  {copy.company18}
                </span>
                <span className="text-brand-moonLight/60">
                  {copy.company19}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <GlassLink
                href={company.phoneHref}
                className="threeui-btn threeui-btn-gold w-full sm:w-auto"
              >
                <span
                  className="threeui-btn-content"
                  style={{ padding: "12px 22px", fontSize: "14px" }}
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0 animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z"></path>
                  </svg>
                  <span className="whitespace-nowrap">{copy.company20}</span>
                </span>
              </GlassLink>
              <GlassLink
                href={whatsappUrl(contactMessages.question)}
                target="_blank"
                rel="noopener noreferrer"
                className="threeui-btn threeui-btn-emerald w-full sm:w-auto"
              >
                <span
                  className="threeui-btn-content"
                  style={{ padding: "12px 22px", fontSize: "14px" }}
                >
                  <svg
                    className="w-4 h-4 fill-current flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.7c.974.553 1.95.845 2.791.845 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.77-5.767-5.77zm3.393 8.163c-.144.405-.837.774-1.17.822-.312.043-.683.08-2.096-.505-1.745-.724-2.859-2.505-2.946-2.62-.088-.116-.697-.93-.697-1.773 0-.843.438-1.258.594-1.432.156-.175.341-.219.455-.219.114 0 .228.001.328.007.105.006.246-.04.385.295.144.348.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.088.188-.175.29-.088.102-.185.228-.264.307-.088.087-.18.182-.077.359.102.176.455.75 1.012 1.246.717.639 1.32.837 1.507.925.188.088.298.073.407-.058.11-.13.469-.545.594-.733.125-.188.25-.157.422-.094.172.063 1.092.515 1.279.608.187.094.312.14.359.219.047.078.047.452-.097.857z"></path>
                  </svg>
                  <span className="whitespace-nowrap">{copy.company21}</span>
                </span>
              </GlassLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

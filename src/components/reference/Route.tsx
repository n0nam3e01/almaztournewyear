import Image from "next/image";
import { referenceCopy as copy } from "@/data/reference-copy";
import { MapCard } from "./MapCard";
import { Photo } from "./Photos";
export function Route() {
  return (
    <section
      id="route"
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#062428] via-[#0A3A40]/40 to-[#062428]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">
            {copy.route01}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            {copy.route02}
          </h2>
          <p className="text-base text-brand-moonLight/80">{copy.route03}</p>
        </div>
        <div className="threeui-map-wrapper mb-16">
          <MapCard>
            <div className="threeui-map-media">
              <Image
                src="/images/tour/christmas-route-map.webp"
                alt="Авторская иллюстрированная карта рождественского маршрута: Базель, Кольмар, Париж, Версаль, Амстердам"
                id="routeMapImg"
                className="w-full h-auto object-contain block mx-auto cursor-pointer"
                width={1408}
                height={768}
              />
            </div>
            <div className="threeui-map-overlay"></div>
            <div className="threeui-map-glare"></div>
            <div className="threeui-map-markers">
              <button
                className="threeui-beacon"
                style={{ top: "76.5%", left: "11.5%" }}
                type="button"
                aria-label="🇨🇭 Базель · Точка старта (12 дек)"
              >
                <div className="threeui-beacon-wave"></div>
                <div className="threeui-beacon-wave delay-1"></div>
                <div className="threeui-beacon-core"></div>
                <div className="threeui-beacon-tooltip">{copy.route04}</div>
              </button>
              <button
                className="threeui-beacon"
                style={{ top: "49.5%", left: "30.8%" }}
                type="button"
                aria-label="🇫🇷 Сказочный Кольмар & Эльзас"
              >
                <div className="threeui-beacon-wave"></div>
                <div className="threeui-beacon-wave delay-1"></div>
                <div className="threeui-beacon-core"></div>
                <div className="threeui-beacon-tooltip">{copy.route05}</div>
              </button>
              <button
                className="threeui-beacon"
                style={{ top: "73%", left: "60.5%" }}
                type="button"
                aria-label="🇫🇷 Париж & Королевский Версаль"
              >
                <div className="threeui-beacon-wave"></div>
                <div className="threeui-beacon-wave delay-1"></div>
                <div className="threeui-beacon-core"></div>
                <div className="threeui-beacon-tooltip">{copy.route06}</div>
              </button>
              <button
                className="threeui-beacon"
                style={{ top: "31.5%", left: "72.8%" }}
                type="button"
                aria-label="🇳🇱 Амстердам · Круиз & Гала-ужин"
              >
                <div className="threeui-beacon-wave"></div>
                <div className="threeui-beacon-wave delay-1"></div>
                <div className="threeui-beacon-core"></div>
                <div className="threeui-beacon-tooltip">{copy.route07}</div>
              </button>
              <button
                className="threeui-beacon"
                style={{ top: "49%", left: "90.5%" }}
                type="button"
                aria-label="✈️ Аэропорт Схипхол · Вылет (20 дек)"
              >
                <div className="threeui-beacon-wave"></div>
                <div className="threeui-beacon-wave delay-1"></div>
                <div className="threeui-beacon-core"></div>
                <div className="threeui-beacon-tooltip">{copy.route08}</div>
              </button>
            </div>
            <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 z-10 px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#062428]/90 backdrop-blur-md border border-brand-amber/40 text-brand-amber text-[10px] sm:text-xs font-semibold flex items-center gap-1 sm:gap-1.5 shadow-xl pointer-events-none">
              <svg
                className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                ></path>
              </svg>
              <span>{copy.route09}</span>
            </div>
          </MapCard>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between">
            <Photo city="basel"></Photo>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-amber">
                {copy.route10}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-brand-moonLight font-medium">
                {copy.route11}
              </span>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {copy.route12}
              </h3>
              <p className="text-sm text-brand-moonLight/80 leading-relaxed">
                {copy.route13}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-brand-gold">
              <span>{copy.route14}</span>
            </div>
          </div>
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between lg:col-span-2">
            <Photo city="colmar"></Photo>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-amber">
                {copy.route15}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-brand-moonLight font-medium">
                {copy.route16}
              </span>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {copy.route17}
              </h3>
              <p className="text-sm text-brand-moonLight/80 leading-relaxed mb-3">
                {copy.route18}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-amber/15 text-brand-amber text-xs font-semibold">
                {copy.route19}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-brand-gold">
              <span>{copy.route20}</span>
            </div>
          </div>
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between">
            <Photo city="paris"></Photo>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-amber">
                {copy.route21}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-brand-moonLight font-medium">
                {copy.route22}
              </span>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {copy.route23}
              </h3>
              <p className="text-sm text-brand-moonLight/80 leading-relaxed">
                {copy.route24}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-brand-gold">
              <span>{copy.route25}</span>
            </div>
          </div>
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between">
            <Photo city="versailles"></Photo>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-amber">
                {copy.route26}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-brand-moonLight font-medium">
                {copy.route27}
              </span>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {copy.route28}
              </h3>
              <p className="text-sm text-brand-moonLight/80 leading-relaxed">
                {copy.route29}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-brand-gold">
              <span>{copy.route30}</span>
            </div>
          </div>
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between">
            <Photo city="amsterdam"></Photo>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-amber">
                {copy.route31}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-brand-moonLight font-medium">
                {copy.route32}
              </span>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {copy.route33}
              </h3>
              <p className="text-sm text-brand-moonLight/80 leading-relaxed">
                {copy.route34}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-brand-gold">
              <span>{copy.route35}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

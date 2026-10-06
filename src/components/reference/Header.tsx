import Image from "next/image";
import { referenceCopy as copy } from "@/data/reference-copy";
import { whatsappUrl, contactMessages } from "@/data/company";
import { GlassLink } from "./GlassLink";
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#062428]/95 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        <a
          href="#"
          className="flex items-center space-x-2.5 sm:space-x-3.5 group flex-shrink-0"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-brand-amber to-brand-gold/60 shadow-md">
            <Image
              src="/images/brand/almaz-tour-icon.png"
              alt="Логотип Almaz Tour"
              className="w-full h-full object-contain rounded-full bg-[#062428]"
              width={96}
              height={96}
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-sans font-black text-base sm:text-xl tracking-tight whitespace-nowrap uppercase text-white">
                {copy.header01}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-brand-amber/15 text-brand-amber border border-brand-amber/30 rounded-full whitespace-nowrap">
                {copy.header02}
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-brand-moonLight/70 font-medium leading-tight whitespace-nowrap">
              {copy.header03}
            </p>
          </div>
        </a>
        <nav className="hidden 2xl:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-brand-moonLight/80 flex-shrink-0">
          <a
            href="#why-us"
            className="hover:text-brand-amber transition-colors whitespace-nowrap"
          >
            {copy.header04}
          </a>
          <a
            href="#route"
            className="hover:text-brand-amber transition-colors whitespace-nowrap"
          >
            {copy.header05}
          </a>
          <a
            href="#program"
            className="hover:text-brand-amber transition-colors whitespace-nowrap"
          >
            {copy.header06}
          </a>
          <a
            href="#expert"
            className="hover:text-brand-amber transition-colors whitespace-nowrap"
          >
            {copy.header07}
          </a>
          <a
            href="#pricing"
            className="hover:text-brand-amber transition-colors whitespace-nowrap"
          >
            {copy.header08}
          </a>
          <a
            href="#faq"
            className="hover:text-brand-amber transition-colors whitespace-nowrap"
          >
            {copy.header09}
          </a>
        </nav>
        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
          <div className="hidden lg:flex flex-col text-right leading-tight flex-shrink-0">
            <span className="text-[11px] text-brand-moonLight/60 font-medium whitespace-nowrap">
              {copy.header10}
            </span>
            <span className="text-xs text-white font-semibold flex items-center justify-end gap-1 mt-0.5 whitespace-nowrap">
              <svg
                className="w-3.5 h-3.5 text-brand-amber flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="whitespace-nowrap font-bold">
                {copy.header11}
              </span>
            </span>
          </div>
          <GlassLink
            href={whatsappUrl(contactMessages.booking)}
            target="_blank"
            rel="noopener noreferrer"
            className="threeui-btn threeui-btn-emerald flex-shrink-0"
            style={{ padding: "2px" }}
          >
            <span
              className="threeui-btn-content"
              style={{
                padding: "7px 16px",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              <svg
                className="w-4 h-4 fill-current flex-shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.7c.974.553 1.95.845 2.791.845 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.77-5.767-5.77zm3.393 8.163c-.144.405-.837.774-1.17.822-.312.043-.683.08-2.096-.505-1.745-.724-2.859-2.505-2.946-2.62-.088-.116-.697-.93-.697-1.773 0-.843.438-1.258.594-1.432.156-.175.341-.219.455-.219.114 0 .228.001.328.007.105.006.246-.04.385.295.144.348.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.088.188-.175.29-.088.102-.185.228-.264.307-.088.087-.18.182-.077.359.102.176.455.75 1.012 1.246.717.639 1.32.837 1.507.925.188.088.298.073.407-.058.11-.13.469-.545.594-.733.125-.188.25-.157.422-.094.172.063 1.092.515 1.279.608.187.094.312.14.359.219.047.078.047.452-.097.857z"></path>
              </svg>
              <span className="hidden md:inline font-bold">
                {copy.header12}
              </span>
              <span className="md:hidden font-bold">{copy.header13}</span>
            </span>
          </GlassLink>
        </div>
      </div>
    </header>
  );
}

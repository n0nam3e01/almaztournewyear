import { referenceCopy as copy } from "@/data/reference-copy";
import { company, whatsappUrl, contactMessages } from "@/data/company";
import { GlassLink } from "./GlassLink";
import { Fragment } from "react";
export function ContactDock() {
  return (
    <Fragment>
      <aside
        aria-label="Быстрая связь"
        className="hidden lg:flex fixed bottom-8 right-8 z-40"
      >
        <a
          href={whatsappUrl(contactMessages.booking)}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-brand-waGreen text-white shadow-2xl shadow-brand-waGreen/40 hover:bg-brand-waHover transition-transform duration-300 hover:scale-110 active:scale-95"
          title="Написать в WhatsApp Almaz Tour"
        >
          <span className="absolute -inset-1 rounded-full bg-brand-waGreen opacity-60 animate-ping pointer-events-none"></span>
          <svg
            className="w-7 h-7 fill-current relative z-10"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.7c.974.553 1.95.845 2.791.845 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.77-5.767-5.77zm3.393 8.163c-.144.405-.837.774-1.17.822-.312.043-.683.08-2.096-.505-1.745-.724-2.859-2.505-2.946-2.62-.088-.116-.697-.93-.697-1.773 0-.843.438-1.258.594-1.432.156-.175.341-.219.455-.219.114 0 .228.001.328.007.105.006.246-.04.385.295.144.348.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.088.188-.175.29-.088.102-.185.228-.264.307-.088.087-.18.182-.077.359.102.176.455.75 1.012 1.246.717.639 1.32.837 1.507.925.188.088.298.073.407-.058.11-.13.469-.545.594-.733.125-.188.25-.157.422-.094.172.063 1.092.515 1.279.608.187.094.312.14.359.219.047.078.047.452-.097.857z"></path>
          </svg>
        </a>
      </aside>
      <aside
        aria-label="Быстрое бронирование тура"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#062428]/95 backdrop-blur-md border-t border-brand-amber/35 px-3 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_25px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center justify-between gap-2 max-w-lg mx-auto">
          <GlassLink
            href={company.phoneHref}
            className="threeui-btn threeui-btn-gold"
            style={{
              padding: "2px",
              width: "44px",
              height: "44px",
              flexShrink: "0",
            }}
            title="Позвонить напрямую"
          >
            <span
              className="threeui-btn-content"
              style={{
                padding: "0",
                width: "100%",
                height: "100%",
                borderRadius: "9999px",
              }}
            >
              <svg
                className="w-5 h-5 text-[#141f18]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z"></path>
              </svg>
            </span>
          </GlassLink>
          <GlassLink
            href={whatsappUrl(contactMessages.booking)}
            target="_blank"
            rel="noopener noreferrer"
            className="threeui-btn threeui-btn-emerald flex-1"
            style={{ padding: "2px", minHeight: "44px" }}
          >
            <span
              className="threeui-btn-content"
              style={{
                padding: "8px 12px",
                fontSize: "13px",
                fontWeight: "800",
              }}
            >
              <svg
                className="w-4 h-4 fill-current flex-shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.7c.974.553 1.95.845 2.791.845 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.77-5.767-5.77zm3.393 8.163c-.144.405-.837.774-1.17.822-.312.043-.683.08-2.096-.505-1.745-.724-2.859-2.505-2.946-2.62-.088-.116-.697-.93-.697-1.773 0-.843.438-1.258.594-1.432.156-.175.341-.219.455-.219.114 0 .228.001.328.007.105.006.246-.04.385.295.144.348.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.088.188-.175.29-.088.102-.185.228-.264.307-.088.087-.18.182-.077.359.102.176.455.75 1.012 1.246.717.639 1.32.837 1.507.925.188.088.298.073.407-.058.11-.13.469-.545.594-.733.125-.188.25-.157.422-.094.172.063 1.092.515 1.279.608.187.094.312.14.359.219.047.078.047.452-.097.857z"></path>
              </svg>
              <span className="whitespace-nowrap">{copy.contactDock01}</span>
            </span>
          </GlassLink>
        </div>
      </aside>
    </Fragment>
  );
}

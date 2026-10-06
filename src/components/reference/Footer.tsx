import { PhotoCredits } from "./Photos";
import Image from "next/image";
import { referenceCopy as copy } from "@/data/reference-copy";
import { whatsappUrl } from "@/data/company";
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#041a1d] text-brand-moonLight/70 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10 items-start">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-brand-amber to-brand-gold/60 shadow-md">
                <Image
                  src="/images/brand/almaz-tour-icon.png"
                  alt="Логотип Almaz Tour"
                  className="w-full h-full object-contain rounded-full bg-[#062428]"
                  width={96}
                  height={96}
                />
              </div>
              <span className="font-sans font-black text-xl tracking-tight uppercase text-white">
                {copy.footer01}
              </span>
            </div>
            <p className="text-xs text-brand-moonLight/70 leading-relaxed mb-3">
              {copy.footer02}
            </p>
            <div className="text-xs text-brand-gold font-semibold">
              {copy.footer03}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              {copy.footer04}
            </h3>
            <p className="text-xs text-brand-moonLight/80 leading-relaxed mb-2 flex items-start gap-2">
              <span className="text-brand-amber mt-0.5">{copy.footer05}</span>
              <span>{copy.footer06}</span>
            </p>
            <p className="text-xs text-brand-moonLight/80 leading-relaxed flex items-start gap-2">
              <span className="text-brand-amber mt-0.5">{copy.footer07}</span>
              <span>
                {copy.footer08}
                <br />
                <span className="text-brand-moonLight/50">{copy.footer09}</span>
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              {copy.footer10}
            </h3>
            <p className="text-xs text-brand-moonLight/80 leading-relaxed mb-3">
              {copy.footer11}
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-waGreen transition-colors text-base"
            >
              <span className="w-3 h-3 rounded-full bg-brand-waGreen inline-block"></span>
              {copy.footer12}
            </a>
            <p className="text-[11px] text-brand-moonLight/50 mt-2">
              {copy.footer13}
            </p>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-moonLight/50 gap-4">
          <div>{copy.footer14}</div>
          <div className="flex space-x-6">
            <span>{copy.footer15}</span>
            <a href="https://almaztour.kz">{copy.footer16}</a>
          </div>
        </div>
      </div>
      <PhotoCredits />
    </footer>
  );
}

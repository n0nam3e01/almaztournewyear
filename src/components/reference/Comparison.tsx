import { referenceCopy as copy } from "@/data/reference-copy";
import { whatsappUrl, contactMessages } from "@/data/company";
import { GlassLink } from "./GlassLink";
export function Comparison() {
  return (
    <section
      id="why-us"
      className="py-16 md:py-24 relative border-t border-white/10 bg-[#062428]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">
            {copy.comparison01}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            {copy.comparison02}
          </h2>
          <p className="text-base text-brand-moonLight/80">
            {copy.comparison03}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          <div className="rounded-3xl p-6 sm:p-8 bg-red-950/20 border border-red-500/25 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-500/20">
              <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xl">
                {copy.comparison04}
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-200">
                  {copy.comparison05}
                </h3>
                <span className="text-xs text-red-300/70">
                  {copy.comparison06}
                </span>
              </div>
            </div>
            <ul className="space-y-4 text-sm text-brand-moonLight/80">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-base mt-0.5">
                  {copy.comparison07}
                </span>
                <div>
                  <strong className="text-white font-semibold">
                    {copy.comparison08}
                  </strong>
                  {copy.comparison09}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-base mt-0.5">
                  {copy.comparison10}
                </span>
                <div>
                  <strong className="text-white font-semibold">
                    {copy.comparison11}
                  </strong>
                  {copy.comparison12}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-base mt-0.5">
                  {copy.comparison13}
                </span>
                <div>
                  <strong className="text-white font-semibold">
                    {copy.comparison14}
                  </strong>
                  {copy.comparison15}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-base mt-0.5">
                  {copy.comparison16}
                </span>
                <div>
                  <strong className="text-white font-semibold">
                    {copy.comparison17}
                  </strong>
                  {copy.comparison18}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-base mt-0.5">
                  {copy.comparison19}
                </span>
                <div>
                  <strong className="text-white font-semibold">
                    {copy.comparison20}
                  </strong>
                  {copy.comparison21}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-base mt-0.5">
                  {copy.comparison22}
                </span>
                <div>
                  <strong className="text-white font-semibold">
                    {copy.comparison23}
                  </strong>
                  {copy.comparison24}
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl p-6 sm:p-8 bg-[#0A3A40]/70 border-2 border-brand-amber/50 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 px-4 py-1 bg-brand-amber text-[#062428] text-[11px] font-extrabold uppercase tracking-wider rounded-bl-xl shadow-md">
              {copy.comparison25}
            </div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-brand-waGreen/20 text-brand-waGreen flex items-center justify-center font-bold text-xl">
                {copy.comparison26}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {copy.comparison27}
                </h3>
                <span className="text-xs text-brand-amber font-medium">
                  {copy.comparison28}
                </span>
              </div>
            </div>
            <ul className="space-y-4 text-sm text-brand-moonLight/90">
              <li className="flex items-start gap-3">
                <span className="text-brand-waGreen font-bold text-base mt-0.5">
                  {copy.comparison29}
                </span>
                <div>
                  <strong className="text-white font-semibold">
                    {copy.comparison30}
                  </strong>
                  {copy.comparison31}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-waGreen font-bold text-base mt-0.5">
                  {copy.comparison32}
                </span>
                <div>
                  <strong className="text-white font-semibold">
                    {copy.comparison33}
                  </strong>
                  {copy.comparison34}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-waGreen font-bold text-base mt-0.5">
                  {copy.comparison35}
                </span>
                <div>
                  <strong className="text-white font-semibold">
                    {copy.comparison36}
                  </strong>
                  {copy.comparison37}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-waGreen font-bold text-base mt-0.5">
                  {copy.comparison38}
                </span>
                <div>
                  <strong className="text-white font-semibold">
                    {copy.comparison39}
                  </strong>
                  {copy.comparison40}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-waGreen font-bold text-base mt-0.5">
                  {copy.comparison41}
                </span>
                <div>
                  <strong className="text-white font-semibold">
                    {copy.comparison42}
                  </strong>
                  {copy.comparison43}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-waGreen font-bold text-base mt-0.5">
                  {copy.comparison44}
                </span>
                <div>
                  <strong className="text-white font-semibold">
                    {copy.comparison45}
                  </strong>
                  {copy.comparison46}
                </div>
              </li>
            </ul>
            <div className="mt-8 pt-4 border-t border-white/10 text-center">
              <GlassLink
                href={whatsappUrl(contactMessages.question)}
                target="_blank"
                rel="noopener noreferrer"
                className="threeui-btn threeui-btn-gold"
              >
                <span
                  className="threeui-btn-content"
                  style={{ padding: "12px 24px", fontSize: "14px" }}
                >
                  <span>{copy.comparison47}</span>
                  <span className="text-base font-bold">
                    {copy.comparison48}
                  </span>
                </span>
              </GlassLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

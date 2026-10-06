"use client";
import { useId, useState } from "react";
import { itinerary } from "@/data/itinerary";
import { faq } from "@/data/faq";

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className="accordion-chevron w-8 h-8 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center text-white transition-transform duration-300"
      data-open={open}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </span>
  );
}

export function ProgramAccordion() {
  const [open, setOpen] = useState<string | null>("01");
  const id = useId();
  return (
    <div className="space-y-4" id="itineraryAccordion">
      {itinerary.map((day) => (
        <div
          key={day.day}
          className="rounded-2xl glass-card border border-white/10 overflow-hidden transition-all duration-300"
        >
          <button
            type="button"
            id={`${id}-button-${day.day}`}
            aria-expanded={open === day.day}
            aria-controls={`${id}-panel-${day.day}`}
            className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4"
            onClick={() => setOpen(open === day.day ? null : day.day)}
          >
            <span className="flex items-center gap-3 sm:gap-5 min-w-0">
              <span className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-b from-brand-amber/25 to-brand-amber/5 border border-brand-amber/40 shadow-sm text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-amber leading-none">
                  ДЕНЬ
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-white leading-tight mt-0.5">
                  {day.day}
                </span>
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-brand-amber font-semibold uppercase tracking-wider">
                  {day.date} · {day.location}
                </span>
                <span className="block text-base sm:text-lg font-bold text-white">
                  {day.title}
                </span>
              </span>
            </span>
            <Chevron open={open === day.day} />
          </button>
          <div
            id={`${id}-panel-${day.day}`}
            role="region"
            aria-labelledby={`${id}-button-${day.day}`}
            className="accordion-content"
            data-open={open === day.day}
            inert={open !== day.day}
          >
            <div className="accordion-inner">
              <div className="px-5 sm:px-6 pb-6 text-sm text-brand-moonLight/80 border-t border-white/10 pt-4">
                {day.items.map((item) => (
                  <p key={item.time} className="mb-2">
                    <strong>{item.time}</strong> — {item.text}
                  </p>
                ))}
                <p className="text-brand-gold text-xs font-semibold">
                  {day.night}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export function FaqAccordion() {
  const [open, setOpen] = useState<number[]>([]);
  const id = useId();
  return (
    <div className="space-y-4" id="faqAccordion">
      {faq.map((item, index) => (
        <div
          key={item.question}
          className="glass-card rounded-2xl border border-white/10 overflow-hidden"
        >
          <button
            type="button"
            id={`${id}-button-${index}`}
            aria-expanded={open.includes(index)}
            aria-controls={`${id}-panel-${index}`}
            className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base"
            onClick={() =>
              setOpen(
                open.includes(index)
                  ? open.filter((i) => i !== index)
                  : [...open, index],
              )
            }
          >
            <span>{item.question}</span>
            <Chevron open={open.includes(index)} />
          </button>
          <div
            id={`${id}-panel-${index}`}
            role="region"
            aria-labelledby={`${id}-button-${index}`}
            className="accordion-content"
            data-open={open.includes(index)}
            inert={!open.includes(index)}
          >
            <div className="accordion-inner">
              <div className="px-5 sm:px-6 pb-6 text-sm text-brand-moonLight/80 leading-relaxed border-t border-white/10 pt-4">
                {item.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

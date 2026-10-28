import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-navy-pale/30 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 lg:mb-10">
          <div>
            <span className="mono-font text-[12px] tracking-[0.2em] text-navy-mid uppercase">
              Services
            </span>
            <h2 className="display-font font-semibold text-3xl lg:text-5xl tracking-tight mt-3">
              What we <span className="italic font-normal text-navy-mid">do for you.</span>
            </h2>
          </div>
          <p className="text-sm text-navy/70 max-w-sm leading-relaxed">
            From the first whiteboard sketch to the post-launch retainer — we cover the full arc of
            what it takes to ship and keep shipping.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/10 border border-navy/10">
          {services.map((s) => (
            <a
              key={s.num}
              href="#contact"
              className="group bg-white p-6 lg:p-8 flex flex-col hover:bg-navy hover:text-white transition-colors duration-300"
            >
              <span className="mono-font text-xs text-navy-mid group-hover:text-navy-pale">{s.num}</span>
              <h3 className="text-lg lg:text-xl font-semibold tracking-tight mt-4 mb-3">{s.title}</h3>
              <p className="text-sm leading-relaxed text-navy/70 group-hover:text-white/75 flex-1">
                {s.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold mt-6">
                {s.cta}
                <ArrowUpRight size={13} className="group-hover:rotate-45 transition-transform" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="display-font font-semibold text-xl lg:text-2xl tracking-tight">
            Not sure where to start? <span className="italic font-normal text-navy-mid">Talk it through with us.</span>
          </p>
          <a
            href="#contact"
            className="group bg-navy text-white px-6 py-3.5 text-sm font-semibold tracking-wide flex items-center gap-2 hover:bg-navy-mid transition-colors self-start"
          >
            BOOK A FREE CONSULT
            <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

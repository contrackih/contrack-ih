import { clients } from '../data/clients.js';

// Partner logos — continuous sliding strip on a tinted band
export default function Clients() {
  return (
    <section className="py-14 lg:py-20 bg-navy-pale/40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-8 lg:mb-10 text-center">
        <span className="mono-font text-[12px] tracking-[0.2em] text-navy-mid uppercase">
          Trusted by
        </span>
        <h2 className="display-font font-semibold text-2xl lg:text-4xl tracking-tight mt-3">
          Partners &amp; <span className="italic font-normal text-navy-mid">products we've built with.</span>
        </h2>
      </div>

      <div className="relative group">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-16 lg:w-40 bg-gradient-to-r from-[#eff0f5] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 lg:w-40 bg-gradient-to-l from-[#eff0f5] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="mx-3 lg:mx-4 bg-white rounded-xl shadow-sm w-44 lg:w-52 h-24 lg:h-28 flex items-center justify-center px-6 shrink-0"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className={`w-full ${client.maxW} max-h-14 object-contain [mix-blend-mode:multiply]`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

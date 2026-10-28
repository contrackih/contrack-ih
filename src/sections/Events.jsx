import { CalendarDays, Landmark, Users } from 'lucide-react';

const EVENTS = [
  { icon: CalendarDays, title: 'Digital Kano Conference', note: 'Tech conference for Northern Nigeria' },
  { icon: Landmark, title: 'Northern Investment Summit & Expo', note: 'Connecting founders, investors and industry' },
  { icon: Users, title: '200k+ professional tech network', note: 'Young professionals across the KDIN community' },
];

// Digital events co-hosted with KDIN (Kano Digital Innovation Network)
export default function Events() {
  return (
    <section id="events" className="py-16 lg:py-24 bg-navy text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-5">
          <span className="mono-font text-[12px] tracking-[0.2em] text-navy-pale uppercase">
            Co-hosted with KDIN
          </span>
          <h2 className="display-font font-semibold text-3xl lg:text-5xl tracking-tight mt-3 mb-5">
            Digital <span className="italic font-normal text-navy-pale">events.</span>
          </h2>
          <p className="text-base text-white/70 leading-relaxed max-w-md">
            Alongside Kano Digital Innovation Network, we bring Northern Nigeria's tech talent,
            founders and investors together — on stage and in the room.
          </p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
          {EVENTS.map(({ icon: Icon, title, note }) => (
            <div key={title} className="border border-white/15 bg-white/5 p-6 flex flex-col">
              <Icon size={22} className="text-navy-pale" />
              <h3 className="font-semibold text-lg leading-snug mt-5 mb-2">{title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

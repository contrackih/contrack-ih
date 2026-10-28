import { stats } from '../data/stats.js';

// Compact numbers band — sits directly under the hero
export default function Stats() {
  return (
    <section className="bg-white border-b border-navy/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-navy/10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white py-8 lg:py-12 px-4 lg:px-6">
              <div className="display-font font-semibold text-5xl lg:text-6xl leading-none mb-4 ticker-text">
                {stat.num}
              </div>
              <div className="text-sm font-semibold mb-1">{stat.label}</div>
              <div className="mono-font text-[10px] tracking-wider uppercase text-navy-mid">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

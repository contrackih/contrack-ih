import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import hero1 from '../assets/images/hero-1.jpg';
import hero2 from '../assets/images/hero-2.jpg';
import hero3 from '../assets/images/hero-3.jpg';

// Optional IT / automation photo — becomes the first slide when the file exists
const automation = Object.values(
  import.meta.glob('../assets/images/hero-automation.{jpg,png}', { eager: true, import: 'default' })
)[0];

// Each slide: background photo + a short headline
const SLIDES = [
  ...(automation ? [{ url: automation, title: 'Secure systems.', accent: 'Automated operations.' }] : []),
  { url: hero1, title: 'Software that', accent: 'moves business forward.' },
  ...(automation ? [] : [{ url: hero2, title: 'Secure systems.', accent: 'Automated operations.' }]),
  { url: hero3, title: 'From idea to', accent: 'launched product.' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative h-[100dvh] min-h-[600px] max-h-[920px] flex items-center overflow-hidden bg-navy text-white">
      {/* Background slider */}
      {SLIDES.map((slide, i) => (
        <img
          key={i}
          src={slide.url}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1400ms] ease-out ${
            i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />

      {/* Copy */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-20">
        <span className="mono-font text-[12px] tracking-[0.3em] uppercase text-navy-pale">
          Contrack Innovation Hub
        </span>

        <h1 key={current} className="display-font font-semibold text-[clamp(2.6rem,6vw,5.5rem)] leading-[1.02] tracking-tight mt-5 mb-6 max-w-4xl animate-reveal">
          {SLIDES[current].title}
          <br />
          <span className="italic font-normal text-navy-pale">{SLIDES[current].accent}</span>
        </h1>

        <p className="text-base lg:text-xl text-white/80 leading-relaxed max-w-xl mb-10">
          We build apps, SaaS platforms and secure IT systems — from Abuja, for the world.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="group bg-white text-navy px-8 py-4 text-sm font-semibold tracking-wide flex items-center gap-2 hover:bg-navy-pale transition-colors"
          >
            START A PROJECT
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
          </a>
          <a
            href="#work"
            className="border border-white/50 px-8 py-4 text-sm font-semibold tracking-wide hover:bg-white hover:text-navy transition-colors"
          >
            SEE OUR WORK
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? 'w-12 bg-white' : 'w-6 bg-white/35 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { leaders } from '../data/leaders.js';

const CERTIFICATIONS = [
  { name: 'CAC Registered', note: 'Corporate Affairs Commission, Nigeria' },
  { name: 'PMP Certified', note: 'Project Management Professional (PMI)' },
  { name: 'CSM Certified', note: 'Certified Scrum Master — Agile delivery' },
  { name: 'ISO Standards Compliant', note: 'International quality management' },
];

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 mb-10 lg:mb-12">
          <div className="lg:col-span-6">
            <span className="mono-font text-[12px] tracking-[0.2em] text-navy-mid uppercase">
              Who we are
            </span>
            <h2 className="display-font font-semibold text-3xl lg:text-5xl tracking-tight mt-3">
              We don't just build software.{' '}
              <span className="italic font-normal text-navy-mid">We build success stories.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-10">
            <p className="text-base lg:text-lg text-navy/75 leading-relaxed">
              With a focus on business automation, digital transformation, and scalable platforms,
              we help startups, SMEs, and government teams eliminate inefficiencies, optimize
              workflows, and grow with confidence — with 20+ years of combined leadership behind
              every project.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Combined expertise */}
          {leaders.map((p) => (
            <div key={p.area} className="lg:col-span-4 border border-navy/10 p-6 lg:p-8 flex flex-col">
              <span className="mono-font text-[11px] tracking-[0.2em] uppercase text-navy-mid">
                {p.area}
              </span>
              <h3 className="display-font text-3xl font-light tracking-tight mt-4 mb-4">{p.title}</h3>
              <p className="text-sm leading-relaxed text-navy/75 flex-1">{p.bio}</p>
              <div className="flex gap-2 flex-wrap mt-6">
                {p.creds.map((c) => (
                  <span key={c} className="mono-font text-[10px] tracking-wider uppercase border border-navy/20 px-2.5 py-1">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Certifications */}
          <div className="lg:col-span-4 bg-navy text-white p-6 lg:p-8">
            <span className="mono-font text-[11px] tracking-[0.2em] uppercase text-navy-pale">
              Certifications &amp; compliance
            </span>
            <ul className="mt-5 divide-y divide-white/10">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name} className="py-3">
                  <div className="font-semibold text-sm">{c.name}</div>
                  <div className="text-xs text-white/60 mt-0.5">{c.note}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mt-10">
          <Link
            to="/#contact"
            className="group bg-navy text-white px-7 py-4 text-sm font-semibold tracking-wide flex items-center gap-3 hover:bg-navy-mid transition-colors"
          >
            WORK WITH US
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
          </Link>
          <Link
            to="/projects"
            className="border border-navy px-7 py-4 text-sm font-semibold tracking-wide flex items-center gap-3 hover:bg-navy hover:text-white transition-colors"
          >
            SEE WHAT WE'VE BUILT
          </Link>
        </div>
      </div>
    </section>
  );
}

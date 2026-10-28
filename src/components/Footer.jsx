import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SocialLinks from './SocialLinks.jsx';
import logoLight from '../assets/images/contrack-logo-white.png';

const EXPLORE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/#services' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
];

const SERVICE_LINKS = ['Software', 'SaaS', 'Cybersecurity', 'Training', 'Consultancy'];
const CERTS = ['PMP', 'CSM', 'CAC REGD.', 'ISO-Aligned'];

export default function Footer({ time }) {
  return (
    <footer className="bg-navy text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Main footer grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoLight} alt="Contrack IH" className="h-10 w-10 object-contain" />
              <div className="flex items-baseline gap-2">
                <span className="display-font text-2xl font-bold tracking-tight">Contrack</span>
                <span className="mono-font text-[10px] tracking-[0.2em] text-navy-pale uppercase">
                  Innovation Hub
                </span>
              </div>
            </div>
            <p className="text-navy-pale/80 max-w-md leading-relaxed mb-6">
              Innovating, automating, and scaling businesses with technology — from Abuja to
              anywhere.
            </p>
            <div className="mono-font text-xs space-y-2">
              <a href='mailto:inquiries@contrack.ng' className="text-navy-pale/60 block">inquiries@contrack.ng</a>
              <div className="text-navy-pale/60">Plot No 1099, Mabushi District, Abuja</div>
              <div className="text-navy-pale/60">Mon – Fri, 9am – 6pm WAT</div>
            </div>
            <div className="mt-6">
              <SocialLinks variant="compact" tone="light" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mono-font text-[10px] tracking-[0.2em] uppercase text-navy-pale/60 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {EXPLORE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover-line">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mono-font text-[10px] tracking-[0.2em] uppercase text-navy-pale/60 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_LINKS.map((l) => (
                <li key={l}>
                  <Link to="/#services" className="hover-line">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mono-font text-[10px] tracking-[0.2em] uppercase text-navy-pale/60 mb-4">
              Certifications
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {CERTS.map((c) => (
                <span
                  key={c}
                  className="mono-font text-[10px] tracking-wider uppercase border border-white/20 px-2.5 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-white pb-1 hover:border-navy-pale hover:text-navy-pale transition-colors"
            >
              Get a Quote <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between gap-4">
          <div className="mono-font text-[10px] tracking-[0.15em] uppercase text-navy-pale/60">
            © 2026 Contrack Innovation Hub. All rights reserved.
          </div>
          <div className="flex gap-6 items-center mono-font text-[10px] tracking-[0.15em] uppercase text-navy-pale/60">
            <span>Privacy</span>
            <span>Terms</span>
            <span className="text-navy-pale">
              <span className="animate-blink">●</span> {time}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

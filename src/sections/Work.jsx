import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { featuredProjects, moreProjects } from '../data/projects.js';

// Logo imports — full-colour brand logos
import jetOpsLogo from '../assets/images/jet-ops-logo-navy.png';
import dsaLogo from '../assets/images/domestic-staff-app-logo.png';
import zariLogo from '../assets/images/zari-logo.png';
import moh40Logo from '../assets/images/moh-40-logo.png';
import flybirdLogo from '../assets/images/flybird-logo.png';
import kdinLogo from '../assets/images/kdin-logo.png';

// Map slug → logo import
const LOGOS = {
  'jetops': jetOpsLogo,
  'domestic-staff-app': dsaLogo,
  'zari': zariLogo,
  'moh40': moh40Logo,
  'flybird': flybirdLogo,
  'kdin': kdinLogo,
};

// Max-width per logo so wide/flat logos render at a readable size
const LOGO_WIDTHS = {
  'jetops': 'max-w-[170px]',
  'domestic-staff-app': 'max-w-[110px]',
  'zari': 'max-w-[170px]',
  'moh40': 'max-w-[170px]',
  'flybird': 'max-w-[120px]',
  'kdin': 'max-w-[90px]',
};

const domainOf = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

export default function Work() {
  return (
    <section id="work" className="py-16 lg:py-24 bg-white text-navy relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 lg:mb-10">
          <div>
            <span className="mono-font text-[12px] tracking-[0.2em] text-navy-mid uppercase">
              Selected projects
            </span>
            <h2 className="display-font font-semibold text-3xl lg:text-5xl tracking-tight mt-3">
              Products we've <span className="italic font-normal text-navy-mid">built and launched.</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold border-b border-navy pb-1 self-start lg:self-auto"
          >
            All projects
            <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        {/* Featured project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featuredProjects.map((p) => (
            <div
              key={p.slug}
              className="group bg-white border border-navy/10 hover:border-navy/30 hover:shadow-[0_12px_40px_-12px_rgba(4,22,93,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <Link
                to={`/projects/${p.slug}`}
                className="flex-1 flex items-center justify-center px-8 h-44 lg:h-52"
              >
                <img
                  src={LOGOS[p.slug]}
                  alt={`${p.name} logo`}
                  className={`w-full ${LOGO_WIDTHS[p.slug]} max-h-28 object-contain [mix-blend-mode:multiply] group-hover:scale-105 transition-transform duration-300`}
                />
              </Link>

              <div className="border-t border-navy/10 px-5 py-4">
                <div className="text-base font-semibold">{p.name}</div>
                <div className="mono-font text-[10px] tracking-[0.12em] uppercase text-navy-mid mt-1">
                  {p.sector}
                </div>
                <div className="flex items-center justify-between gap-3 mt-4 text-xs font-semibold">
                  <Link to={`/projects/${p.slug}`} className="hover-line">
                    Case study
                  </Link>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-navy-mid hover:text-navy"
                    >
                      {domainOf(p.liveUrl)} <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more — other projects, each with its own link */}
        <div className="mt-10">
          <div className="mono-font text-[12px] tracking-[0.2em] text-navy-mid uppercase mb-4">
            View more
          </div>
          <div className="border-t border-navy/15">
            {moreProjects.map((p) => (
              <div
                key={p.slug}
                className="grid grid-cols-12 gap-4 items-center py-5 border-b border-navy/15"
              >
                <div className="col-span-3 sm:col-span-2 flex items-center">
                  <img
                    src={LOGOS[p.slug]}
                    alt={`${p.name} logo`}
                    className={`w-full ${LOGO_WIDTHS[p.slug]} max-h-10 object-contain [mix-blend-mode:multiply]`}
                  />
                </div>
                <div className="col-span-9 sm:col-span-10">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-navy/70 line-clamp-1">{p.summary}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More products coming */}
        <div className="mt-10 bg-navy text-white px-6 py-8 lg:px-10 lg:py-10 grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <span className="mono-font text-[10px] border border-white/30 px-2 py-0.5 tracking-wider">
              COMING SOON
            </span>
            <h3 className="display-font font-semibold text-2xl lg:text-4xl tracking-tight mt-4">
              More products <span className="italic font-normal text-navy-pale">on the way</span>.
            </h3>
            <p className="text-sm text-white/65 mt-3 max-w-xl leading-relaxed">
              We're building new in-house products for construction, operations, and beyond.
              Get early access, or bring us the idea you want built next.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
            <a
              href="#contact"
              className="group bg-white text-navy px-6 py-3.5 text-sm font-semibold tracking-wide flex items-center gap-2 hover:bg-navy-pale transition-colors"
            >
              GET EARLY ACCESS
              <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform" />
            </a>
            <Link
              to="/projects"
              className="border border-white/40 px-6 py-3.5 text-sm font-semibold tracking-wide hover:bg-white hover:text-navy transition-colors"
            >
              ALL PROJECTS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

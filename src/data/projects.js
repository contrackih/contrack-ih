// ── Image imports ──────────────────────────────────────────────
// JETOps (jet-ops-1 to jet-ops-6)
import jetOps2 from '../assets/images/jet-ops-2.png'; // 1200×1210 — near-square
import jetOps3 from '../assets/images/jet-ops-3.png'; // 914×644   — 4:3
import jetOps4 from '../assets/images/jet-ops-4.png'; // 1206×518  — ultra-wide
import jetOps5 from '../assets/images/jet-ops-5.png'; // 1206×518  — ultra-wide
import jetOps6 from '../assets/images/jet-ops-6.png'; // 1566×1048 — 3:2 tall side

import jetOpsNew from '../assets/images/jet-ops-home-2026.png'; // 1800×1008 — current homepage

// DomesticStaffApp (dsa-1 to dsa-6)
import dsa2 from '../assets/images/dsa-2.png'; // 2258×1246 — wide tall side
import dsa3 from '../assets/images/dsa-3.png'; // 1902×884  — wide
import dsa4 from '../assets/images/dsa-4.png'; // 1326×1086 — near-square
import dsa5 from '../assets/images/dsa-5.png'; // 1310×1272 — near-square
import dsa6 from '../assets/images/dsa-6.png'; // 1326×1086 — near-square

import dsaNew from '../assets/images/dsa-home-2026.png'; // 1800×1017 — current homepage

// ZARI (zari-1 to zari-6)
import zari1 from '../assets/images/zari-1.png'; // 2406×1254 — wide hero
import zari2 from '../assets/images/zari-2.png'; // 2510×1274 — wide tall side
import zari3 from '../assets/images/zari-3.png'; // 1614×1074 — 4:3
import zari4 from '../assets/images/zari-4.png'; // 2050×1082 — wide
import zari5 from '../assets/images/zari-5.png'; // 1614×1074 — 4:3
import zari6 from '../assets/images/zari-6.png'; // 2000×1042 — wide

// ── Gallery slot assignment guide ──────────────────────────────
// The ProjectDetail gallery layout is:
//   [0] Large hero  — best for wide landscape shots (≥2:1 ratio)
//   [1] 2×2 top-left  ─┐
//   [2] 2×2 top-right  ├─ best for near-square or 4:3 shots
//   [3] 2×2 bot-left   |
//   [4] 2×2 bot-right ─┘
//   [5] Tall side   — works with any ratio, cropped to fill

export const projects = [
  {
    slug: 'jetops',
    name: 'JetOps',
    sector: 'Aviation Operations SaaS',
    year: '2026',
    role: 'SaaS Product Build',
    featuredOnHome: true,
    summary:
      'Aviation operations and charter coordination platform designed for private jet operators and brokers, featuring aircraft availability management, booking workflows, operational dashboards, and broker coordination tools.',
    challenge:
      'Private jet operators and brokers rely on fragmented tools — spreadsheets, WhatsApp threads, and legacy software — to manage aircraft availability, bookings, and crew. Errors are costly and coordination breakdowns directly impact revenue.',
    solution:
      'A purpose-built SaaS platform covering the full operational arc: aircraft availability calendar, booking and quote workflows, broker coordination portal, crew scheduling, and real-time operational dashboards for management oversight.',
    impact: null,
    tags: ['SaaS', 'Web App', 'Mobile', 'Aviation', 'Operations'],
    coverImage: jetOpsNew,
    gallery: [
      jetOpsNew, // [0] hero — 2558×1260 wide landscape, JETOps homepage
      jetOps2, // [1] 2×2 — 1200×1210 near-square, booking form
      jetOps3, // [2] 2×2 — 914×644, broker network section
      jetOps4, // [3] 2×2 — 1206×518 ultra-wide, "Need a flight?" CTA
      jetOps5, // [4] 2×2 — 1206×518 ultra-wide, "Charter Operator?" CTA
      jetOps6, // [5] side — 1566×1048, built for charter operators grid
    ],
    liveUrl: 'https://jetops.aero',
    testimonial: null,
  },
  {
    slug: 'domestic-staff-app',
    name: 'Domestic Staff App',
    sector: 'Workforce & Household Platform',
    year: '2025',
    role: 'Platform Build',
    featuredOnHome: true,
    summary:
      'Domestic staffing and workforce platform connecting households with verified domestic workers through onboarding, KYC verification, and operational management workflows.',
    challenge:
      'The domestic staffing market in Nigeria operates almost entirely on informal referrals, with no verification, no contracts, and no recourse when placements go wrong — for either the household or the worker.',
    solution:
      'A two-sided marketplace with rigorous KYC and background verification for workers, structured onboarding flows, contract management, payment rails, and an employer dashboard for ongoing workforce management.',
    impact: null,
    tags: ['SaaS', 'Marketplace', 'Mobile App', 'Platform', 'KYC'],
    coverImage: dsaNew,
    gallery: [
      dsaNew, // [0] hero — 2258×1246 wide, landing page
      dsa4, // [1] 2×2 — 1326×1086 near-square, service personnel listing
      dsa5, // [2] 2×2 — 1310×1272 near-square, rate the app screen
      dsa6, // [3] 2×2 — 1326×1086 near-square, create ticket screen
      dsa3, // [4] 2×2 — 1902×884 wide, dashboard welcome screen
      dsa2, // [5] side — 2258×1246 wide, sign-up screen
    ],
    liveUrl: 'https://domesticstaffapp.com',
    testimonial: null,
  },
  {
    slug: 'zari',
    name: 'ZARI.ng',
    sector: 'E-Commerce Platform',
    year: '2024',
    role: 'Full product build',
    featuredOnHome: true,
    summary:
      'Gift-based e-commerce platform with inventory automation and real-time payments — 3,500+ orders completed and 8,500+ items sold.',
    challenge:
      'ZARI needed a gift-focused e-commerce platform that could handle real-time inventory across multiple vendors, secure payment processing for the Nigerian market, and a delightful gifting experience that worked across mobile and desktop.',
    solution:
      'A custom platform with vendor inventory sync, Paystack integration with fallback gateways, a curated catalog system, and a checkout flow optimized for gift purchases — delivery scheduling, gift notes, anonymous sender option.',
    impact:
      '3,500+ orders completed and 8,500+ items sold through the platform.',
    tags: ['E-Commerce', 'Web App', 'Mobile App', 'Payments', 'Inventory'],
    coverImage: zari1,
    gallery: [
      zari1, // [0] hero — 2406×1254 wide, homepage collections
      zari3, // [1] 2×2 — 1614×1074, product detail modal
      zari5, // [2] 2×2 — 1614×1074, build your box products
      zari6, // [3] 2×2 — 2000×1042 wide, product detail page
      zari4, // [4] 2×2 — 2050×1082 wide, shop / gift box grid
      zari2, // [5] side — 2510×1274 wide, mobile app features
    ],
    liveUrl: 'https://zari.ng',
    testimonial: null,
  },
  {
    slug: 'flybird',
    name: 'FlyBird',
    sector: 'Private Aviation ERP',
    year: '2024',
    role: 'ERP + Mobile + Web',
    featuredOnHome: false,
    summary:
      'ERP and booking management system developed for a private jet charter operator, supporting aircraft operations, bookings, payments, crew coordination, and operational workflows.',
    challenge:
      "FlyBird needed to consolidate a set of disconnected tools into one platform. In high-stakes aviation, booking errors, crew scheduling conflicts, and payment delays aren't just inconvenient — they're expensive.",
    solution:
      'A unified ERP covering bookings, fleet management, crew rosters, payments, and customer CRM — plus a customer-facing mobile app (iOS/Android) for quote requests, flight tracking, and concierge communication.',
    impact: null,
    tags: ['ERP', 'Operations', 'Dashboard', 'Mobile', 'Aviation'],
    coverImage: null,
    gallery: [],
    liveUrl: null,
    testimonial: null,
  },
  {
    slug: 'moh40',
    name: 'Moh40 Worldwide',
    sector: 'Cargo & Logistics',
    year: '2023',
    role: 'Dashboard + Payments',
    featuredOnHome: true,
    summary:
      'Cargo logistics dashboard with secure payment rails and live shipment visibility.',
    challenge:
      "Moh40's clients needed transparency. Cargo movements were tracked across spreadsheets, WhatsApp messages, and phone calls — leading to disputes, delayed payments, and lost shipments.",
    solution:
      'A real-time dashboard with GPS-tracked shipment status, an escrow-style payment system, automated invoicing, and a client portal where shippers can monitor cargo from pickup to delivery.',
    impact: null,
    tags: ['Dashboard', 'Logistics', 'Fintech', 'React', 'Django'],
    coverImage: null,
    gallery: [],
    liveUrl: 'https://moh40worldwide.com',
    testimonial: null,
  },
  {
    slug: 'kdin',
    name: 'KDIN',
    sector: 'Tech Ecosystem',
    year: '2023',
    role: 'Digital Events & Ecosystem Partner',
    featuredOnHome: false,
    summary:
      "Kano Digital Innovation Network — Kano's leading tech ecosystem, connecting 200,000+ young professionals through digital conferences and training.",
    challenge:
      'Northern Nigeria has a large, fast-growing pool of young tech talent, but few platforms bringing that talent together with investors, industry, and training opportunities.',
    solution:
      'Contrack co-hosts digital events with KDIN, including the Digital Kano Conference and the Northern Investment Summit & Expo, alongside hands-on training for the network.',
    impact: null,
    tags: ['Tech Ecosystem', 'Community', 'Events', 'Training', 'Kano'],
    coverImage: null,
    gallery: [],
    liveUrl: null,
    testimonial: null,
  },
];

export const featuredProjects = projects.filter((p) => p.featuredOnHome);
export const moreProjects = projects.filter((p) => !p.featuredOnHome);

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
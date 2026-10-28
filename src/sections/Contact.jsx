import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SocialLinks from '../components/SocialLinks.jsx';

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Aisha Bello' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'aisha@company.com' },
  { name: 'business', label: 'Business', type: 'text', placeholder: 'Acme Corp.' },
];

const SERVICES = [
  'Software Development',
  'SaaS Platform',
  'Cybersecurity & Audits',
  'IT Consultancy',
  'Business Automation',
  'Social Media Management',
  'Training & Mentorship',
  'Co-Development',
  'Partnership / Investment',
  'Other',
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgoqgqpo';
const FALLBACK_EMAIL = 'contrackih@gmail.com';

const EMPTY_FORM = {
  name: '',
  email: '',
  business: '',
  service: SERVICES[0],
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // If Formspree is unreachable, open the visitor's mail client instead
  const mailFallback = () => {
    const body = `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business || 'N/A'}\nService: ${form.service}\n\nMessage:\n${form.message}`;
    window.open(
      `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(`Enquiry from ${form.name}`)}&body=${encodeURIComponent(body)}`,
      '_blank'
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Formspree error');
    } catch {
      mailFallback();
    }
    setStatus('sent');
    setForm(EMPTY_FORM);
    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-navy text-white relative overflow-hidden grain"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="mono-font text-[12px] tracking-[0.2em] text-navy-pale uppercase">
              Get in touch
            </span>
            <h2 className="display-font font-semibold text-4xl lg:text-6xl leading-[1.02] tracking-tight mt-3 mb-8">
              Let's build secure tech, <span className="italic font-normal text-navy-pale">together</span>.
            </h2>
            <p className="text-lg text-navy-pale/85 leading-relaxed max-w-xl mb-10">
              Tell us where you're stuck. We'll respond within one business day with next steps —
              and an honest read on whether we're the right fit.
            </p>
            <div className="space-y-4 mono-font text-sm">
              <div className="flex items-center gap-4">
                <span className="text-navy-pale/60 text-[10px] tracking-wider w-16">EMAIL</span>
                <a href='mailto:inquiries@contrack.ng' className="text-navy-pale/60">inquiries@contrack.ng</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-navy-pale/60 text-[10px] tracking-wider w-16">LOCATION</span>
                <span>Plot No 1099, Mabushi District, Abuja — Remote-first</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-navy-pale/60 text-[10px] tracking-wider w-16">HOURS</span>
                <span>Mon – Fri, 9am – 6pm WAT</span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 pt-10 border-t border-white/10">
              <span className="mono-font text-[10px] tracking-[0.2em] text-navy-pale/70 uppercase block mb-4">
                Or follow along
              </span>
              <SocialLinks variant="compact" tone="light" />
            </div>
          </div>

          <div className="lg:col-span-5">
            {status === 'sent' ? (
              <div className="border border-white/20 p-8 lg:p-10 animate-reveal">
                <span className="mono-font text-[10px] tracking-[0.2em] text-navy-pale/70 uppercase">
                  [ Received ]
                </span>
                <p className="display-font font-semibold text-3xl lg:text-4xl leading-tight mt-4">
                  Message sent. <span className="italic font-normal text-navy-pale">We'll reply within 24 hours.</span>
                </p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {FIELDS.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="mono-font text-[10px] tracking-[0.2em] text-navy-pale/70 uppercase"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.name !== 'business'}
                    className="w-full bg-transparent border-b border-white/30 py-3 focus:border-white outline-none transition-colors text-white placeholder:text-white/40"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="service"
                  className="mono-font text-[10px] tracking-[0.2em] text-navy-pale/70 uppercase"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/30 py-3 focus:border-white outline-none text-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s} className="bg-navy">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mono-font text-[10px] tracking-[0.2em] text-navy-pale/70 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Tell us about the project..."
                  className="w-full bg-transparent border-b border-white/30 py-3 focus:border-white outline-none transition-colors text-white placeholder:text-white/40 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-white text-navy py-4 text-sm font-semibold tracking-wider mt-6 flex items-center justify-center gap-3 hover:bg-navy-pale transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? 'SENDING…' : 'SEND ENQUIRY'} <ArrowUpRight size={16} />
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BarChart3, Crosshair, Palette, RefreshCw } from 'lucide-react';
import { CheckLine, Footer, Navbar, Reveal } from '@/components/ui';
import { ProductVisual } from '@/components/product-visual';
import { services } from '@/lib/site-data';

const process = [
  ['Understand', 'Business & funnel review', 'Clarify your offer, target audience, conversion path, and the action each campaign should create.'],
  ['Measure', 'Tracking & measurement', 'Review the available website, form, and conversion signals before deciding how campaign performance is evaluated.'],
  ['Plan', 'Campaign strategy', 'Shape objectives, audiences, creative direction, placements, and budget allocation around the business goal.'],
];

const creative = [
  { icon: Palette, title: 'Hooks, angles & offers', text: 'Develop campaign messaging around the customer need, the value of the offer, and the action you want customers to take.' },
  { icon: Crosshair, title: 'Creative for each placement', text: 'Plan suitable concepts for Feed, Stories, Reels, and other relevant Meta placements.' },
  { icon: RefreshCw, title: 'Learning & refreshes', text: 'Use campaign response and lead quality to decide what should be refined, tested, or replaced next.' },
];

const planning = [
  ['Business & market', 'Your objective, geography, product or service value, competition, and reachable audience.'],
  ['Acquisition & funnel', 'Your preferred conversion path, sales cycle, follow-up capacity, and the outcomes that matter most.'],
  ['Testing & history', 'Available campaign history, creative testing needs, and the scope required for useful learning.'],
];

export default function ServicesPage() {
  return <><Navbar /><main>
    <section className="bg-cloud py-20"><div className="section grid items-center gap-10 lg:grid-cols-[1fr_.9fr]"><Reveal><p className="eyebrow">Paytm Ads · Meta advertising services</p><h1 className="display mt-4 text-5xl font-semibold leading-tight sm:text-6xl">Campaigns built to move customers toward the next action.</h1><p className="mt-6 max-w-2xl leading-7 text-slate-600">Paytm Ads manages focused Meta advertising journeys: reaching the right audience on Facebook and Instagram, starting WhatsApp conversations, and directing high-intent traffic to the right website experience.</p></Reveal><Reveal><div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-premium"><Image src="/paytm-ads-meta-agency-hero.png" alt="Paytm Ads campaign journey from creative to customer response" width={1536} height={1024} className="h-auto w-full" /></div></Reveal></div></section>
    <div className="section py-12 sm:py-20">{services.map((service, index) => <section key={service.slug} className={`grid items-center gap-10 border-b border-slate-200 py-16 last:border-0 lg:grid-cols-2 lg:gap-20 ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}><Reveal><ProductVisual type={service.slug} /></Reveal><Reveal><p className="eyebrow">0{index + 1} · Paytm Ads service</p><h2 className="display mt-4 text-4xl font-semibold sm:text-5xl">{service.title}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{service.short}</p><p className="mt-5 border-l-2 border-cyan pl-4 text-sm font-semibold leading-6 text-navy">{service.benefit}</p><div className="mt-7 rounded-2xl border border-cyan/20 bg-cyan/5 px-4 py-3 text-sm font-semibold text-navy">{service.availability}</div><ul className="mt-7 grid gap-3">{service.features.map(feature => <CheckLine key={feature}>{feature}</CheckLine>)}</ul><Link href="/pricing" className="btn-primary mt-8">Discuss this service <ArrowRight size={16} /></Link></Reveal></section>)}</div>
    <section className="border-y border-slate-200 bg-[#061D49] py-20 text-white"><div className="section grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow">How Paytm Ads works</p><h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Your business context guides every campaign decision.</h2><p className="mt-6 max-w-md leading-7 text-slate-300">Our Meta Ads work connects strategy, measurement, and creative direction so each test has a clear purpose.</p></Reveal><div className="divide-y divide-white/15">{process.map(([number, title, text], index) => <Reveal key={title}><div className="grid gap-3 py-6 sm:grid-cols-[88px_1fr]"><p className="text-xs font-bold uppercase tracking-[.16em] text-cyan">0{index + 1} / {number}</p><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">{text}</p></div></div></Reveal>)}</div></div></section>
    <section className="section py-20"><Reveal><p className="eyebrow">Creative drives discovery</p><h2 className="display mt-3 text-4xl font-semibold sm:text-5xl">Creative testing with a performance purpose.</h2><p className="mt-5 max-w-2xl leading-7 text-slate-600">A strong Meta Ads campaign needs a clear offer, a message that earns attention, and a straightforward next step.</p></Reveal><div className="mt-10 grid gap-5 md:grid-cols-3">{creative.map(item => <Reveal key={item.title}><article className="h-full rounded-2xl border border-slate-200 bg-cloud p-6"><item.icon className="text-cyan" size={24} /><h3 className="mt-6 text-xl font-bold text-navy">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p></article></Reveal>)}</div></section>
    <section className="bg-cloud py-20"><div className="section grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow">Meta Ads budget planning</p><h2 className="display mt-3 text-4xl font-semibold sm:text-5xl">Plan a budget with a business reason.</h2><p className="mt-5 max-w-md leading-7 text-slate-600">We recommend a practical test-and-learn approach after understanding what you want the campaign to achieve. Advertising spend is paid to Meta separately from Paytm Ads management fees.</p></Reveal><Reveal><div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">{planning.map(([title, text]) => <div key={title} className="grid gap-3 border-b border-slate-200 p-6 last:border-0 sm:grid-cols-[160px_1fr]"><h3 className="font-bold text-navy">{title}</h3><p className="text-sm leading-6 text-slate-600">{text}</p></div>)}</div></Reveal></div></section>
    <section className="bg-cloud py-20"><div className="section text-center"><Reveal><p className="eyebrow">One Meta Ads partner</p><h2 className="display mx-auto mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">From the first impression to the next customer action.</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">Paytm Ads helps you choose a Meta campaign objective that fits the route you want customers to take: discover, converse, enquire, or convert.</p><Link href="/pricing" className="btn-primary mt-8">Discuss your Meta Ads goals <ArrowRight size={16} /></Link></Reveal></div></section>
  </main><Footer /></>;
}

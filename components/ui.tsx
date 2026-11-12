'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { contact, nav } from '@/lib/site-data';

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55 }}>{children}</motion.div>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-[#e7edf5] bg-white/90 backdrop-blur-xl"><div className="section flex h-[76px] items-center justify-between"><Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}><span className="grid h-9 w-9 place-items-center rounded-xl bg-navy text-sm font-black text-cyan">P</span><span className="text-lg font-bold tracking-tight text-navy">Paytm <span className="text-cyan">Ads</span></span></Link><nav className="hidden items-center gap-7 md:flex">{nav.map(item => <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-navy">{item.label}</Link>)}</nav><a href={contact.whatsappUrl} className="btn-primary hidden md:inline-flex">Get Started <ArrowRight size={16} /></a><button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="grid h-10 w-10 place-items-center md:hidden">{open ? <X /> : <Menu />}</button></div><AnimatePresence>{open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-slate-100 bg-white md:hidden"><nav className="section flex flex-col gap-1 py-4">{nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-navy hover:bg-cloud">{item.label}</Link>)}<a href={contact.whatsappUrl} className="btn-primary mt-2">Get Started <ArrowRight size={16} /></a></nav></motion.div>}</AnimatePresence></header>;
}

export function Footer() {
  return <footer className="bg-[#061D49] text-white"><div className="section grid gap-12 py-16 md:grid-cols-[1.25fr_1fr_1fr]"><div><div className="mb-4 flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-lg font-bold text-navy">P</span><span className="text-lg font-bold">Pi Ads</span></div><p className="max-w-sm text-sm leading-6 text-slate-300">Tools for businesses running Meta Ads and creating direct customer conversations.</p></div><div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-cyan">Explore</p><div className="flex flex-col gap-3">{nav.map(item => <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white">{item.label}</Link>)}</div></div><div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-cyan">Start a conversation</p><a href={contact.whatsappUrl} className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-white"><MessageCircle size={17} />WhatsApp <span className="text-slate-400">(editable)</span></a><p className="mt-4 text-sm leading-6 text-slate-400">Email address and business address can be added here when available.</p></div></div><div className="border-t border-white/10"><div className="section flex flex-col justify-between gap-3 py-6 text-xs text-slate-400 sm:flex-row"><span>© {new Date().getFullYear()} Pi Ads. All rights reserved.</span><span>LinkedIn · Instagram · Facebook</span></div></div></footer>;
}

export function CheckLine({ children }: { children: React.ReactNode }) {
  return <li className="flex gap-3 text-sm leading-6 text-slate-600"><Check className="mt-1 shrink-0 text-cyan" size={16} />{children}</li>;
}

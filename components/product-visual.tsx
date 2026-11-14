import { BarChart3, MessageCircle, MousePointer2, Sparkles } from 'lucide-react';
import { services } from '@/lib/site-data';

export function ProductVisual({ type = 'hero' }: { type?: string }) {
  const service = services.find(item => item.slug === type);
  const isHero = type === 'hero';

  return <div className="relative mx-auto w-full max-w-[540px]"><div className="absolute -inset-10 rounded-full hero-orb blur-xl" /><div className="relative overflow-hidden rounded-[26px] border border-white/80 bg-white p-4 shadow-premium"><div className="mb-4 flex items-center justify-between"><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-cyan" /><span className="text-xs font-bold text-navy">Meta campaign workspace</span></div><span className="rounded-full bg-cloud px-2.5 py-1 text-[10px] font-bold text-slate-500">ACTIVE</span></div>{isHero ? <HeroDashboard /> : <ServiceDashboard title={service?.title ?? 'Meta Ads'} />}</div></div>;
}

function HeroDashboard() {
  return <><div className="rounded-2xl bg-[#061D49] p-5 text-white"><div className="mb-6 flex items-start justify-between"><div><p className="text-[11px] text-slate-300">Campaign activity</p><p className="mt-1 text-3xl font-semibold">Live view</p></div><div className="rounded-xl bg-cyan/20 p-2 text-cyan"><BarChart3 size={20} /></div></div><div className="flex h-20 items-end gap-2">{[32,46,38,64,54,80,73,100,86,92].map((height, index) => <span key={index} style={{ height: `${height}%` }} className="w-full rounded-t-md bg-gradient-to-t from-cyan to-[#5ddcf4] opacity-90" />)}</div></div><div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-2xl border border-slate-100 p-4"><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Campaign focus</p><p className="mt-2 text-lg font-semibold text-navy">Meta Ads</p><p className="mt-1 text-[11px] text-slate-500">Creative · Audience · Action</p></div><div className="rounded-2xl bg-cloud p-4"><div className="mb-2 flex items-center gap-2"><MessageCircle size={14} className="text-cyan" /><span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Customer journey</span></div><span className="text-sm font-semibold text-navy">Ad → Conversation</span></div></div></>;
}

function ServiceDashboard({ title }: { title: string }) {
  return <><div className="rounded-2xl bg-cloud p-5"><div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.15em] text-slate-400">{title}</p><p className="mt-1 text-lg font-semibold text-navy">Campaign built for action</p></div><div className="rounded-xl bg-white p-2.5 text-cyan shadow-sm"><MousePointer2 size={20} /></div></div><div className="mt-5 flex h-28 items-end gap-2 rounded-xl bg-white p-3">{[45,70,52,95,68,82,100].map((height, index) => <span key={index} className="w-full rounded-sm bg-navy/10" style={{ height: `${height}%` }}><span className="block w-full rounded-sm bg-cyan" style={{ height: `${Math.max(height - 20, 20)}%` }} /></span>)}</div></div><div className="mt-3 flex items-center justify-between rounded-xl border border-slate-100 p-3"><span className="text-xs font-semibold text-navy">Meta Ads campaign flow</span><Sparkles size={16} className="text-cyan" /></div></>;
}

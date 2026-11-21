import Image from 'next/image';
import { Footer, Navbar } from '@/components/ui';

export default function PricingPage() {
  return <><Navbar /><main className="bg-[#eeeeee] py-2 sm:py-4"><section className="mx-auto max-w-[1120px]"><Image src="/paytm-ads-pricing-plans.png" alt="Paytm Ads pricing plans: Startup, Basic, Professional, and Enterprise" width={1114} height={1668} priority className="h-auto w-full" /></section></main><Footer /></>;
}

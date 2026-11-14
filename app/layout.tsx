import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Paytm Ads | Meta Advertising Agency', description: 'Performance marketing agency focused on Meta Ads, campaign strategy, and conversion journeys.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }

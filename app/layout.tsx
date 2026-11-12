import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Pi Ads | Meta Advertising Plans', description: 'Independent tools for businesses running Meta Ads and driving WhatsApp conversations.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }

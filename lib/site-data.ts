import { Globe2, Megaphone, MessageCircle } from 'lucide-react';

export const contact = {
  whatsappNumber: 'YOUR_WHATSAPP_NUMBER',
  whatsappUrl: 'https://wa.me/YOUR_WHATSAPP_NUMBER',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
] as const;

export const services = [
  { slug: 'click-to-whatsapp', title: 'Click-to-WhatsApp Ads', short: 'Turn Meta ad engagement into direct WhatsApp conversations.', benefit: 'Convert high-intent interest into a conversation in one tap.', icon: MessageCircle, availability: 'Available on every Meta Ads plan', features: ['Direct customer connection through WhatsApp', 'One-tap conversation initiation', 'No additional landing page required', 'Higher-intent customer enquiries', 'Easy customer communication'] },
  { slug: 'website-ads', title: 'Website Ads', short: 'Send high-intent customers directly to the pages where they can browse, enquire, or buy.', benefit: 'Create a clear path from your ad to your website journey.', icon: Globe2, availability: 'Available on Platinum', features: ['Direct website traffic', 'Full-catalogue browsing', 'Add-to-cart and purchase journeys', 'Website visitor retargeting', 'Built for e-commerce businesses'] },
  { slug: 'instagram-facebook', title: 'Instagram & Facebook Ads', short: 'Reach people where they scroll, discover, and engage with brands every day.', benefit: 'Build awareness and generate meaningful action across Meta placements.', icon: Megaphone, availability: 'Available across Meta Ads plans', features: ['Facebook Feed and Stories placements', 'Instagram Feed and Reels placements', 'Audience-led campaign setup', 'Flexible creative formats', 'Clear campaign objectives'] },
] as const;

export const plans = [
  { name: 'Silver', price: '₹1,999', credits: '₹2,000', detail: 'A focused launchpad for direct-response advertising.', featured: false, features: ['AI-generated images and copy', 'Click-to-WhatsApp Ads', 'Request a callback', 'Location-based targeting'], unavailable: ['Video Ads', 'In-app CRM', 'Website Ads'] },
  { name: 'Gold', price: '₹4,999', credits: '₹5,000', detail: 'More Meta Ads creative control for growing businesses.', featured: false, features: ['Everything in Silver', 'Video Ads (merchant self-upload)', 'Lead Generation Ads'], unavailable: [] },
  { name: 'Platinum', price: '₹9,999', credits: '₹10,000', detail: 'The complete Meta Ads plan for ambitious businesses.', featured: true, features: ['Everything in Gold', 'AI Video Generation + self upload', 'Advanced advertising solutions'], unavailable: [] },
] as const;

export const comparison = [
  ['AI-generated images and copy', true, true, true], ['Click-to-WhatsApp Ads', true, true, true], ['Location-based targeting', true, true, true], ['Video Ads — self-upload', false, true, true], ['AI Video Generation', false, false, true],
] as const;

export const pricingReferenceNote = 'The pricing-card reference lists ₹2,000 / ₹5,000 / ₹10,000 free credits, while the comparison reference lists ₹2,000 / ₹5,500 / ₹11,000. The plan cards use the first source; confirm Gold and Platinum credits before launch.';

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
  { slug: 'facebook-instagram', title: 'Facebook & Instagram Ads', short: 'Reach people across the Meta placements where they discover, engage, and act.', benefit: 'Build awareness and meaningful action with one focused Meta campaign plan.', icon: Megaphone, availability: 'Core Meta Ads service', features: ['Facebook Feed and Stories', 'Instagram Feed and Reels', 'Audience-led campaign setup', 'Creative testing', 'Campaign optimisation'] },
  { slug: 'click-to-whatsapp', title: 'Click-to-WhatsApp Ads', short: 'Turn Meta ad engagement into direct WhatsApp conversations.', benefit: 'Convert high-intent interest into a conversation in one tap.', icon: MessageCircle, availability: 'Meta Ads conversation objective', features: ['Direct customer connection through WhatsApp', 'One-tap conversation initiation', 'No additional landing page required', 'Higher-intent customer enquiries', 'Easy customer communication'] },
  { slug: 'website-conversion', title: 'Meta Website Conversion Ads', short: 'Guide high-intent visitors from Meta Ads to the pages where they can enquire or purchase.', benefit: 'Create a clear route from an ad click to an action on your website.', icon: Globe2, availability: 'Meta Ads conversion objective', features: ['Website conversion campaigns', 'Landing page journeys', 'Add-to-cart and purchase paths', 'Remarketing audiences', 'Conversion signal review'] },
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

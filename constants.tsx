
import { Service, Industry, Testimonial } from './types';

export const LOGO_URL = "https://ohocrmsoftware.com.au/wp-content/uploads/2025/10/cropped-1758524972952005_277593193161232-1-54x54.png";

export const SERVICES: Service[] = [
  {
    id: 'implementation',
    title: 'Zoho CRM Implementation',
    description: 'Bespoke setup designed to fit your unique sales processes and pipeline.',
    icon: 'fa-rocket',
    details: ['Data Migration', 'Pipeline Mapping', 'User Hierarchy', 'Initial Training']
  },
  {
    id: 'customization',
    title: 'Customization & Automation',
    description: 'Workflow automation that eliminates manual tasks and scales your productivity.',
    icon: 'fa-gears',
    details: ['Blueprint Design', 'Custom Modules', 'Deluge Scripting', 'Automated Emails']
  },
  {
    id: 'integration',
    title: 'Seamless Integrations',
    description: 'Connect Zoho with Xero, Mailchimp, WhatsApp, and Google Workspace.',
    icon: 'fa-link',
    details: ['Accounting Sync', 'Email Marketing', 'VoIP Integration', 'Cloud Storage']
  },
  {
    id: 'support',
    title: 'Training & Support',
    description: 'Empower your team with ongoing Australian-based expert guidance.',
    icon: 'fa-users',
    details: ['Team Workshops', 'Priority Support', 'CRM Audits', 'Monthly Optimization']
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Manage listings, leads, and follow-ups automatically.',
    icon: 'fa-building',
    challenges: ['Lead Leakage', 'Inefficient Follow-ups', 'Manual Property Matching']
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Streamline client onboarding and project management.',
    icon: 'fa-briefcase',
    challenges: ['Inconsistent Client Onboarding', 'Siloed Project Data', 'Complex Billing']
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Connect your store with your CRM for ultimate customer insights.',
    icon: 'fa-shopping-cart',
    challenges: ['Order Management', 'Customer Retention', 'Abandoned Cart Recovery']
  },
  {
    id: 'sme',
    name: 'SMEs',
    description: 'Enterprise-level tools optimized for small business growth.',
    icon: 'fa-chart-line',
    challenges: ['Limited Resources', 'Need for Scalability', 'Disconnected Data']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Kopak Auto',
    company: 'Prime Properties AU',
    text: 'I wanna learn about zoho inventory any one can help me. I will pay for it',
    rating: 5
  },
  {
    id: '2',
    name: 'Lachlan Kerr',
    company: 'Elite Consulting',
    text: 'Thank you, Sharvan, for your time – your broad knowledge of the Zoho CRM product was really evident throughout our chat – which you presented in a friendly, simple, effective and very useful way. We are enthusiastic to get started and customise Zoho CRM for our current business needs. Your advice and tips were very much appreciated.',
    rating: 5
  }
];

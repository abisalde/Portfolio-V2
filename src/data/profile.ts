export const CAREER_START_YEAR = 2018;

export const yearsOfExperience = (today = new Date()) =>
  today.getFullYear() - CAREER_START_YEAR;

export const CALENDLY_URL = 'https://calendly.com/abisalde/30min';
export const GITHUB_URL = 'https://github.com/abisalde';

export const socials = [
  { name: 'GitHub', href: GITHUB_URL, icon: 'github' },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/abisalde',
    icon: 'linkedin',
  },
  { name: 'X', href: 'https://x.com/abisalde', icon: 'x' },
  {
    name: 'Instagram',
    href: 'https://instagram.com/abisalde',
    icon: 'instagram',
  },
] as const;

export const styleFacts = (today = new Date()) => [
  ['role', 'software engineer'],
  ['focus', 'mobile, web & the services behind them'],
  ['experience', `${yearsOfExperience(today)}+ years`],
  ['mobile', 'React Native, Expo, Reanimated'],
  ['web', 'React, TypeScript, TanStack, Tailwind'],
  ['backend', 'Go, GraphQL, gRPC, PostgreSQL'],
  ['background', 'engineering graduate'],
];

export const mobileHighlights = [
  'Workout player that keeps going offline and syncs when back online',
  'Arabic and right-to-left layouts',
  'Layouts that adapt to tablets and foldables',
  'Render-performance tests that run in CI',
  'Toast, dialog and bottom-sheet systems shared across screens',
];

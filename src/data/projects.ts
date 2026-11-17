export type ProjectLink = { label: string; href: string };

type ScreenshotVisual = {
  kind: 'screenshot';
  src: string;
  alt: string;
  width: number;
  height: number;
  address: string;
};

type LayersVisual = {
  kind: 'layers';
  layers: readonly { name: string; detail: string }[];
};

export type FeaturedProject = {
  id: string;
  title: string;
  category: string;
  headline: string;
  summary: string;
  tags: readonly string[];
  links: readonly ProjectLink[];
  wide?: boolean;
  visual: ScreenshotVisual | LayersVisual;
};

export const featuredProjects: readonly FeaturedProject[] = [
  {
    id: 'garama',
    wide: true,
    title: 'Garama',
    category: 'Mobile · Backend · CMS',
    headline: 'A fitness challenge, end to end.',
    summary:
      'A 30-day fitness challenge platform: an Expo app with a guided workout player that works offline, a Go GraphQL gateway in front of gRPC services, and a Strapi CMS for the content.',
    tags: [
      'Expo',
      'React Native',
      'Go',
      'GraphQL',
      'gRPC',
      'PostgreSQL',
      'Strapi',
    ],
    links: [
      { label: 'Staging', href: 'https://staging.garama.app' },
      {
        label: 'TestFlight beta',
        href: 'https://testflight.apple.com/join/UTMsaqPB',
      },
    ],
    visual: {
      kind: 'layers',
      layers: [
        { name: 'app', detail: 'Expo · offline workouts · RTL · foldables' },
        { name: 'gateway', detail: 'Go · GraphQL' },
        { name: 'services', detail: 'gRPC · auth, workout, progress, billing' },
        { name: 'data', detail: 'PostgreSQL · Ent · Atlas' },
        { name: 'content', detail: 'Strapi 5 · Cloudflare R2' },
      ],
    },
  },
  {
    id: 'github-profile',
    wide: true,
    title: 'GitHub Profile Preview',
    category: 'Web · API integration',
    headline: 'GitHub, at a glance.',
    summary:
      'A profile preview that brings repositories and contributions together through the GitHub GraphQL API.',
    tags: ['React', 'Gatsby', 'GraphQL'],
    links: [
      { label: 'Live', href: 'https://githubgraphql.abisalde.dev/' },
      {
        label: 'Code',
        href: 'https://github.com/abisalde/afrihealth-github-challenge',
      },
    ],
    visual: {
      kind: 'screenshot',
      src: '/image/github-profile.webp',
      alt: 'GitHub Profile Preview showing repositories and a contribution calendar',
      width: 1600,
      height: 800,
      address: 'githubgraphql.abisalde.dev',
    },
  },
  {
    id: 'my-reads',
    title: 'My Reads',
    category: 'Web · Personal library',
    headline: 'A place for your next read.',
    summary:
      'Find books and keep track of what you are reading, what is next, and what you have finished.',
    tags: ['React', 'React Router'],
    links: [
      { label: 'Live', href: 'https://myreads.abisalde.dev/' },
      { label: 'Code', href: 'https://github.com/abisalde/reactnd-myreads' },
    ],
    visual: {
      kind: 'screenshot',
      src: '/image/my-reads.webp',
      alt: 'My Reads bookshelf with currently reading, want to read and read shelves',
      width: 1600,
      height: 793,
      address: 'myreads.abisalde.dev',
    },
  },
  {
    id: 'copy-paste-editor',
    title: 'Copy & Paste Editor',
    category: 'Web · Rich text',
    headline: 'Ideas without the friction.',
    summary:
      'A rich-text editor built on Draft.js that takes pasted text and images.',
    tags: ['Next.js', 'Draft.js', 'Tailwind CSS'],
    links: [
      { label: 'Live', href: 'https://copy-paste-draftjs.vercel.app/' },
      { label: 'Code', href: 'https://github.com/abisalde/mateo-challenge' },
    ],
    visual: {
      kind: 'screenshot',
      src: '/image/copy-paste-editor.webp',
      alt: 'Copy and Paste Editor with formatted text and a pasted image',
      width: 1222,
      height: 611,
      address: 'copy-paste-draftjs.vercel.app',
    },
  },
];

export type IndexEntry = {
  id: string;
  title: string;
  note: string;
  links: readonly ProjectLink[];
};

export const indexEntries: readonly IndexEntry[] = [
  {
    id: 'authentication-service',
    title: 'Authentication service',
    note: 'Go · GraphQL · Ent · Redis',
    links: [
      {
        label: 'Code',
        href: 'https://github.com/abisalde/authentication-service',
      },
    ],
  },
  {
    id: 'react-native-animation',
    title: 'React Native animation',
    note: 'Reanimated playground',
    links: [
      {
        label: 'Code',
        href: 'https://github.com/abisalde/react-native-animation',
      },
    ],
  },
  {
    id: 'would-you-rather',
    title: 'Would You Rather',
    note: 'Polls with a leaderboard',
    links: [
      { label: 'Live', href: 'https://abisalde-wyr.vercel.app/' },
      {
        label: 'Code',
        href: 'https://github.com/abisalde/reactnd-would-you-rather',
      },
    ],
  },
  {
    id: 'readable',
    title: 'Readable',
    note: 'Posts, comments and voting',
    links: [
      { label: 'Live', href: 'https://readable-blog.vercel.app/' },
      { label: 'Code', href: 'https://github.com/abisalde/project-readable' },
    ],
  },
  {
    id: 'ear1',
    title: 'Ear1',
    note: 'Fans meet influencers',
    links: [
      { label: 'Live', href: 'https://abisalde.github.io/Ear1-Challenge/' },
      { label: 'Code', href: 'https://github.com/abisalde/Ear1-Challenge' },
    ],
  },
  {
    id: 'dashboard-display',
    title: 'Dashboard Display',
    note: 'Users from an API',
    links: [
      { label: 'Live', href: 'https://dashboard-api-data.netlify.app/' },
      { label: 'Code', href: 'https://github.com/abisalde/working-with-data' },
    ],
  },
  {
    id: 'wedding-profile',
    title: 'Wedding Profile',
    note: 'Gallery',
    links: [
      { label: 'Live', href: 'https://ourwedding2020.netlify.app/' },
      { label: 'Code', href: 'https://github.com/abisalde/wedding-ceremony' },
    ],
  },
];

export type SnackApp = {
  id: string;
  title: string;
  summary: string;
  src: string;
};

export const snackApps: readonly SnackApp[] = [
  {
    id: 'custom-switch',
    title: 'Custom switch',
    summary: 'An animated toggle, built from scratch.',
    src: 'https://snack.expo.dev/embedded/@abisalde/customswitchreactnative?iframeId=281llpd3zh&preview=true&platform=web&theme=dark',
  },
  {
    id: 'react-native-apps',
    title: 'React Native apps',
    summary: 'A set of small apps and screens.',
    src: 'https://snack.expo.dev/embedded/@abisalde/react-native-apps?iframeId=lviqd5wg6g&preview=true&platform=android&theme=dark',
  },
];

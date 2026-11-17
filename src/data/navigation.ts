export const navigation = [
  { id: 'top', label: 'Home', railLabel: null, icon: 'home', arrow: '' },
  {
    id: 'work',
    label: 'Work',
    railLabel: 'Selected work',
    icon: 'work',
    arrow: '↘',
  },
  {
    id: 'apps',
    label: 'Apps',
    railLabel: 'Apps on a phone',
    icon: 'apps',
    arrow: '↘',
  },
  {
    id: 'about',
    label: 'About',
    railLabel: 'A bit about me',
    icon: 'about',
    arrow: '↘',
  },
  {
    id: 'contact',
    label: 'Contact',
    railLabel: 'Get in touch',
    icon: 'contact',
    arrow: '↗',
  },
] as const;

type NavLinkType = {
  name: string;
  urlPath: string;
  path: string;
  id?: string;
  entry?: object;
};

export const NavLinks: NavLinkType[] = [
  {
    name: "Home",
    urlPath: "/",
    path: "/",
    id: "home-link",
    entry: {
      delay: 0.6,
      length: 0.4,
      state: {
        y: -window.innerWidth,
        fromPage: true,
      },
    },
  },
  {
    name: "About",
    urlPath: "/about",
    path: "about",
    id: "about-me-link",
    entry: {
      delay: 0.6,
      length: 0.4,
      state: {
        x: -window.innerWidth,
        fromPage: true,
      },
      appearAfter: 1.5,
    },
  },
  {
    name: "Skills",
    urlPath: "/skills",
    path: "skills",
    id: "skills-link",
    entry: {
      delay: 0.7,
      length: 0.5,
      state: {
        x: window.innerWidth,
        fromPage: true,
      },
      appearAfter: 1,
    },
  },
  {
    name: "Projects",
    urlPath: "/projects",
    path: "projects",
    id: "all-projects-link",
    entry: {
      delay: 0.4,
      length: 1,
      state: {
        y: window.innerHeight,
        fromPage: true,
      },
    },
  },
  {
    name: "Contact",
    urlPath: "/contact",
    path: "contact",
    id: "contact-link",
    entry: {
      delay: 0.4,
      length: 1.2,
      state: {
        x: -window.innerHeight,
        fromPage: true,
      },
      appearAfter: 1.5,
    },
  },
];

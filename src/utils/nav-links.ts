type NavLinkType = {
  name: string;
  urlPath: string;
  path: string;
  id?: string;
};

export const NavLinks: NavLinkType[] = [
  {
    name: "Home",
    urlPath: "/",
    path: "/",
    id: "home-link",
  },
  {
    name: "About",
    urlPath: "/about",
    path: "about",
    id: "about-me-link",
  },
  {
    name: "Projects",
    urlPath: "/projects",
    path: "projects",
    id: "all-projects-link",
  },
  {
    name: "Resume",
    urlPath: "/resume",
    path: "resume",
    id: "resume-link",
  },
  {
    name: "Contact",
    urlPath: "/contact",
    path: "contact",
    id: "contact-link",
  },
];

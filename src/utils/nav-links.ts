export type NavLinkType = {
  name: string;
  urlPath: string;
};

export const NavLinks: NavLinkType[] = [
  {
    name: "Home",
    urlPath: "/",
  },
  {
    name: "About",
    urlPath: "/about",
  },
  {
    name: "Contact",
    urlPath: "/contact",
  },
  {
    name: "Projects",
    urlPath: "/projects",
  },
];

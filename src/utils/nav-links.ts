import { GoHome, GoPerson } from "react-icons/go";
import { GrUserSettings, GrContact } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";

export type NavLinkType = {
  name: string;
  urlPath: string;
  path: string;
  id?: string;
  entry?: object;
  Icon?: any;
  iconClassName?: string;
  className?: string;
  color?: string;
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
    className: "col-span-4 row-start-1 row-end-1 justify-center items-center h-full w-full",
    color: "#0ce5b5",
    Icon: GoHome,
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
    className: "col-span-3 row-start-2 row-end-2 justify-center items-center h-full w-full",
    color: "#CAF3F5",
    Icon: GoPerson,
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
    className: "col-span-4 row-start-3 row-end-3 justify-center items-center h-full w-full",
    color: "#15ea25",
    Icon: GrUserSettings,
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
    className: "col-span-4 row-start-4 row-end-4 justify-center items-center h-full w-full",
    color: "#5bb7f0",
    Icon: FaProjectDiagram,
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
    className: "col-span-3 row-start-5 row-end-5 justify-center items-center h-full w-full",
    color: "#67c2e2",
    Icon: GrContact,
  },
];

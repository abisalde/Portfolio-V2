import { IconType } from "react-icons";
import { GoHome, GoPerson } from "react-icons/go";
import { GrUserSettings, GrContact } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";

export type NavLinkType = {
  name: string;
  urlPath: string;
  path: string;
  id?: string;
  entry?: object;
  Icon?: IconType;
  iconClassName?: string;
  className?: string;
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
    className: "col-start-6 col-span-4 row-start-1 row-end-1 flex justify-center items-end",
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
    className: "col-start-5 col-span-3 row-start-2 row-end-2 flex justify-center items-end",
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
    className: "col-start-3 col-span-4 row-start-3 row-end-3 flex justify-center items-end",
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
    className: "col-start-2 col-span-4 row-start-4 row-end-4 justify-center flex items-end",
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
    className: "col-start-1 col-span-3 row-start-5 row-end-5 justify-center flex items-center flex-col",
    Icon: GrContact,
  },
];

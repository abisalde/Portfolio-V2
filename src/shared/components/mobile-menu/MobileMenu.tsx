import React, { SetStateAction } from "react";
import { motion } from "framer-motion";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import AniLink from "gatsby-plugin-transition-link/AniLink";

/**
 * ? Local Imports
 */
import { NavLinks } from "@utils";
import { clsMerge } from "@helpers";

interface MobileMenuProps {
  openMobileMenu: boolean;
  setOpenMobileMenu: React.Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ openMobileMenu, setOpenMobileMenu }) => {
  const handleClick = (): void => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <>
      <div
        className={clsMerge(
          "grid grid-cols-12 grid-rows-6 place-items-stretch absolute h-full w-full sm:hidden",
          openMobileMenu && ["backdrop-blur-sm bg-white/30 backdrop-saturate-500 z-10"],
        )}
      >
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            ease: "easeInOut",
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="col-start-11 col-span-2 row-start-6 row-end-7 flex items-center m-1"
        >
          <motion.button
            onClick={handleClick}
            data-test="NavLinks"
            className="rounded-full w-12 h-12 bg-gradient-to-tr from-primary-500 via-purple-400 to-primary-main flex justify-center items-center"
            whileTap={{ rotate: 90, scale: 1.1 }}
          >
            {openMobileMenu ? <RiCloseLine fontSize={28} /> : <RiMenu4Line fontSize={28} />}
          </motion.button>
        </motion.div>
        {NavLinks?.map((links) => {
          const { Icon, className, urlPath, id, name, color } = links;
          return (
            <AniLink
              className={clsMerge(openMobileMenu && [className], openMobileMenu ? "flex flex-col" : "hidden", [
                name === "Home" && ["col-start-2"],
                name === "About" && ["col-start-5"],
                name === "Skills" && ["col-start-6"],
                name === "Projects" && ["col-start-7"],
                name === "Contact" && ["col-start-9"],
              ])}
              key={id}
              paintDrip
              hex={color}
              to={urlPath}
              data-test="links"
              onClick={(): void => setOpenMobileMenu(false)}
            >
              <motion.div
                initial={{ x: -7 }}
                animate={{ x: 7 }}
                transition={{
                  ease: "easeInOut",
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="rounded-full flex justify-center items-center m-1 bg-gradient-to-r from-primary-400 via-purple-500 to-primary-main w-12 h-12">
                  <Icon fontSize={19} color="#101010" />
                </div>
                <div>
                  <p className="text-sans2 text-base font-semibold bg-clip-text bg-gradient-to-tl dark:text-amber-400">
                    {name}
                  </p>
                </div>
              </motion.div>
            </AniLink>
          );
        })}
      </div>
    </>
  );
};

export default MobileMenu;

{
  /* <div className="col-start-1 col-span-3 row-start-5 row-end-5 justify-center flex items-center flex-col h-full w-full">
          Contact
        </div>
        <div className="col-start-2 col-span-4 row-start-4 row-end-4 justify-center flex flex-col items-center h-full w-full">
          Projects
        </div> */
}

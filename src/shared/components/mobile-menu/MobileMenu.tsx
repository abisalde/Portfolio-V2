import React, { SetStateAction } from "react";
import { motion } from "framer-motion";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import AniLink from "gatsby-plugin-transition-link/AniLink";

/**
 * ? Local Imports
 */
import { NavLinks } from "@utils";
import TransitionLink from "gatsby-plugin-transition-link";

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
      <div className="grid grid-cols-12 grid-rows-6 place-items-stretch absolute z-10 h-full w-full sm:hidden backdrop-blur-sm bg-white/30 backdrop-saturate-500">
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            ease: "easeInOut",
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="col-start-1 col-span-2 row-start-6 row-end-7 flex items-center m-1"
        >
          <motion.button
            onClick={handleClick}
            className="rounded-full w-14 h-14 bg-gradient-to-tr from-primary-500 via-purple-400 to-primary-main flex justify-center items-center"
          >
            {openMobileMenu ? <RiCloseLine fontSize={30} /> : <RiMenu4Line fontSize={30} />}
          </motion.button>
        </motion.div>
        {typeof window !== "undefined" &&
          NavLinks?.map((links) => {
            const { Icon, className, urlPath, id, name, entry } = links;
            return (
              <TransitionLink entry={entry} to={urlPath} className={className} key={id}>
                <div className="rounded-full flex justify-center items-center m-1 bg-gradient-to-r from-primary-400 via-purple-500 to-primary-main w-12 h-12">
                  <Icon fontSize={19} color="#101010" />
                </div>
                <div>
                  <p className="text-sans2 text-base font-semibold">{name}</p>
                </div>
              </TransitionLink>
            );
          })}
      </div>
    </>
  );
};

export default MobileMenu;

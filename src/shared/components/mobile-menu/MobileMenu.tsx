import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiMenu4Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import TransitionLink from "gatsby-plugin-transition-link";

/**
 * ? Local Imports
 */
import { NavLinkType } from "@utils";

const MobileMenu: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

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
            {openMobileMenu ? <GrClose fontSize={26} /> : <RiMenu4Line fontSize={26} />}
          </motion.button>
        </motion.div>
        <div className="col-start-1 col-span-3 row-start-5 row-end-5 justify-center flex items-center flex-col">
          <div className="flex items-center justify-center rounded-full m-1 bg-gradient-to-r from-primary-400 via-purple-500 to-primary-main w-12 h-12">
            Icon
          </div>
          <div className="border-2 border-rose-600 p-1">
            <div className="bg-secondary flex items-center justify-center">Projects</div>
          </div>
        </div>
        <div className="col-start-2 col-span-4 row-start-4 row-end-4 justify-center flex items-end">Projects</div>
        <div className="col-start-3 col-span-4 row-start-3 row-end-3 flex justify-center items-end">Skills</div>
        <div className="col-start-5 col-span-3 row-start-2 row-end-2 flex justify-center items-end">About</div>
        <div className="col-start-6 col-span-4 row-start-1 row-end-1 flex justify-center items-end">Home</div>
      </div>
    </>
  );
};

export default MobileMenu;

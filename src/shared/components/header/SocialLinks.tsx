import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Button, Tooltip } from "flowbite-react";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-end relative">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: 5 }}
        animate={{
          x: -15,
        }}
        transition={{
          ease: "easeInOut",
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <a
          href="https://linkedin.com/in/abisalde"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          className="px-2"
        >
          <Tooltip content="LinkedIn Profile">
            <Button gradientDuoTone={"greenToBlue"}>
              <FaLinkedinIn fontSize={20} />
            </Button>
          </Tooltip>
        </a>

        <a
          href="https://github.com/abisalde"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className="px-2"
        >
          <Tooltip content="GitHub Profile">
            <Button gradientDuoTone={"greenToBlue"}>
              <FaGithub fontSize={20} />
            </Button>
          </Tooltip>
        </a>

        <a
          href="https://twitter.com/abisalde"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter Profile"
          className="pl-2"
        >
          <Tooltip content="Twitter Profile">
            <Button gradientDuoTone={"greenToBlue"}>
              <FaTwitter fontSize={20} />
            </Button>
          </Tooltip>
        </a>
      </motion.div>
    </div>
  );
};

export default SocialLinks;

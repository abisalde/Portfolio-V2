import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export enum Images {
  bg = "background",
  home = "home",
  about = "about",
}

interface ImagesProps {
  type: typeof Images[keyof typeof Images];
}

const Image: React.FC<ImagesProps> = ({ type }) => {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "banner-image.PNG" }) {
        childImageSharp {
          gatsbyImageData(width: 1680, quality: 85, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      avatarImage: file(relativePath: { eq: "avatar.jpeg" }) {
        childImageSharp {
          gatsbyImageData(height: 400, quality: 85, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const bgImage: any = getImage(data.bannerImage);
  const avatarImage: any = getImage(data.avatarImage);

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    duration: 3,
  };

  if (type === Images.home) {
    return (
      <GatsbyImage
        aria-describedby="avatar"
        aria-label="Isaiah Abiodun"
        alt="Isaiah Abiodun"
        className="h-full w-full bg-no-repeat bg-cover"
        image={avatarImage}
        loading="eager"
        objectFit="cover"
        objectPosition={"50% 30%"}
        style={{
          borderRadius: "75% 25% 32% 68% / 53% 47% 53% 57%",
        }}
      />
    );
  } else if (type === Images.about) {
    return <div>about</div>;
  } else {
    return (
      <motion.div
        transition={spring}
        translate="yes"
        className="transform scale-100 -z-10 h-full w-full absolute bg-cover bg-no-repeat"
      >
        <GatsbyImage
          aria-describedby="background-banner"
          className={"absolute h-full w-full transform scale-100 bg-cover"}
          alt={"banner-image"}
          image={bgImage}
          loading="eager"
          objectFit="cover"
          objectPosition={"50% 50%"}
        />
      </motion.div>
    );
  }
};

export default Image;

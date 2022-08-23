import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const BackgroundImage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "banner-image.PNG" }) {
        childImageSharp {
          gatsbyImageData(width: 1680, quality: 85, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const image: any = getImage(data.bannerImage);

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <motion.div transition={spring} translate="yes">
      <GatsbyImage
        aria-describedby="background-banner"
        className={"absolute h-full w-full transform scale-100"}
        alt={"banner-image"}
        image={image}
        loading="eager"
        objectFit="cover"
        objectPosition={"50% 50%"}
      />
    </motion.div>
  );
};

export default BackgroundImage;

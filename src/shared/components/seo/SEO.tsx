import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  pathname?: string;
}

const SEO: React.FC<SEOProps> = ({ children, description, pathname, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitterUsername
            siteUrl
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const siteTitle = title || site.siteMetadata.title;
  const siteUrl = site.siteMetadata.siteUrl;
  const twitterUsername = site.siteMetadata.twitterUsername;

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta charSet="utf-8" />
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta name="image" property="og:image" content="" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content="" />
      <meta name="theme-color" content="#E5FA9F" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      {children}
    </>
  );
};

export default SEO;

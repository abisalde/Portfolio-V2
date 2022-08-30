import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Abisalde | Portfolio",
    siteUrl: "https://abisalde.tech",
    description:
      "I am Software Engineer with over 4+ years of industrial experience building scalable, readable, maintainable pixel perfect UI/'s both as a mobile and web applications targeting consumer experience with adequate metrics",
    author: "Isaiah Abiodun",
    twitterUsername: "@abisalde",
    image: "./src/assets/images/graphql.png",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-tsconfig-paths",
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-image",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: "Abisalde Portfolio",
        short_name: "Abisalde",
        start_url: "/",
        background_color: "#13142b",
        theme_color: "#FEFBEA",
        display: "standalone",
        cache_busting_mode: "none",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;

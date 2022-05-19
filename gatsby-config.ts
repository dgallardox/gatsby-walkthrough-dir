import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-walkthrough`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://tiburontastic.wpengine.com/graphql"
    }
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};

export default config;

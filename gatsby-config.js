const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: `중앙대학교 실내환경디자인학과 제 16회 졸업 전시회 CAU Creative Housing & Interior Design 16th Graduation Exhibition`,
    description: `CAU Creative Housing & Interior Design 16th Graduation Exhibition 중앙대학교 실내환경디자인학과 제 16회 졸업 전시회`,
    author: `중앙대학교 실내환경디자인학과`,
    siteUrl: "https://2020-cau-chid-16th-exhibition.netlify.app",
    pathPrefix: "/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CAU Creative Housing & Interior Design 16th Graduation Exhibition`,
        short_name: `CAU Creative Housing & Interior Design 16th Graduation Exhibition`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0029f5`,
        display: `minimal-ui`,
        icon: `src/static/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: !isProd,
      },
    },
  ],
};

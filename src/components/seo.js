import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ title, description, robots = "all" }) {
  const { site, logoImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        logoImage: file(relativePath: { eq: "favicon.png" }) {
          childImageSharp {
            fixed(width: 512) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  const image = `${site.siteMetadata.siteUrl}${logoImage.childImageSharp.fixed.src}`;

  const seoTitle = title || site.siteMetadata.title;
  const seoDesc = description || site.siteMetadata.description;

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: site.siteMetadata.siteUrl,
      name: seoTitle,
      alternateName: seoTitle,
    },
  ];

  return (
    <Helmet htmlAttributes={{ lang: "ko" }}>
      <title>{seoTitle}</title>
      <meta name="image" content={image} />
      <meta name="description" content={seoDesc} />
      <meta name="robots" content={robots} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;

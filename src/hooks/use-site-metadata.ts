import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              bio
              name
              photo
              contacts {
                firstory
                spotify
                applepodcast
                googlepodcast
                kkbox
                youtube
                facebook
                instagram
                twitter
                linkedin
                rss
                email
                telegram
                codepen
                github
                soundcloud
              }
          }
          menu {
            path
            label
          }
          url
          title
          subtitle
          copyright
          disqusShortname
        }
      }
    }
  `);

  return site?.siteMetadata || {};
};

export default useSiteMetadata;

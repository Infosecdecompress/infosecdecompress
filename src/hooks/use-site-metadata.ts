import { graphql, useStaticQuery } from "gatsby";

import type { SiteMetadata } from "@/types";

interface SiteMetadataQueryResult {
  site?: {
    siteMetadata?: SiteMetadata;
  };
}

const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery<SiteMetadataQueryResult>(graphql`
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
              bluesky
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

  return site?.siteMetadata ?? ({} as SiteMetadata);
};

export default useSiteMetadata;

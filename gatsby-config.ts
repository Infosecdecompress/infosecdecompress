import path from "path";

import config from "./content/config.json";
const siteUrl = `https://infosecdecompress.com`;

export default {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    url: config.url,
    menu: config.menu,
    title: config.title,
    author: config.author,
    subtitle: config.subtitle,
    copyright: config.copyright,
    postsLimit: config.postsLimit,
    disqusShortname: config.disqusShortname,
    description: config.description,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: path.resolve("content"),
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allMarkdownRemark },
            }: {
              query: {
                site: {
                  siteMetadata: {
                    url: string;
                  };
                };
                allMarkdownRemark: {
                  edges: Array<types.Edge>;
                };
              };
            }) =>
              allMarkdownRemark.edges.map(({ node }) => ({
                ...node.frontmatter,
                date: node?.frontmatter?.date,
                description: node?.frontmatter?.description,
                url:
                  site.siteMetadata.url +
                  (node.frontmatter?.slug || node.fields?.slug),
                guid:
                  site.siteMetadata.url +
                  (node.frontmatter?.slug || node.fields?.slug),
                custom_elements: [{ "content:encoded": node.html }],
              })),
            query: `
              {
                site {
                  siteMetadata {
                    url
                  }
                }
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        title
                        slug
                        date
                        template
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: config.title,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl: siteUrl,
        graphQLQuery: `
          {
            allMarkdownRemark(
              limit: 1000,
              sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
              ) {
              edges {
                node {
                  rawMarkdownBody
                  frontmatter {
                    slug
                    title
                  }
                }
              }
            }
          }
        `,
        serializeFeed: (results) =>
          results.data.allMarkdownRemark.edges.map(({ node }) => ({
            id: node.frontmatter.slug,
            url: node.frontmatter.slug,
            title: node.frontmatter.title,
            // content: node.rawMarkdownBody.replace(/(\\r\\n)*|(\((.*?)\))|(\#*|\**)/g, ``)
            content: node.rawMarkdownBody
              .replace(/(\((.*?)\))|(\#)|(\*)|(\[)|(\])/g, " ")
              .replace(/(?:\\[rn]|[\r\n]+)|(\\)+/g, " ")
              .replace(/\s\s+/g, " "),
          })),
        nodesPerFeedFile: 500,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: { wrapperStyle: "margin-bottom: 1.0725rem" },
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          "gatsby-remark-external-links",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [config.googleAnalyticsId],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl: url
              }
            }
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        output: "/",
        serialize: (page, { resolvePagePath }) => ({
          url: resolvePagePath(page),
          changefreq: `daily`,
          priority: 0.7,
        }),
        resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,
        resolvePagePath: (page) => {
          if (!(page !== null && page !== void 0 && page.path)) {
            throw Error(
              "`path` does not exist on your page object.\nMake the page URI available at `path` or provide a custom `resolvePagePath` function.\nhttps://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/#api-reference\n      ",
            );
          }

          return page.path;
        },
        resolvePages: (data) =>
          data.allSitePage.edges.map(({ node }) => ({ path: node.path })),
        excludes: [
          `/404`,
          `/tag/*`,
          `/tags`,
          `/category/*`,
          `/categories`,
          `/pages/*`,
          `/page/*`,
          `/admin`,
          `/offline-plugin-app-shell-fallback`,
        ],
        filterPages: (
          page,
          excludedRoute,
          { minimatch, withoutTrailingSlash, resolvePagePath },
        ) => {
          if (typeof excludedRoute !== "string") {
            throw new Error(
              "You've passed something other than string to the exclude array. This is supported, but you'll have to write a custom filter function.\nIgnoring the input for now: " +
                JSON.stringify(excludedRoute, null, 2) +
                "\nhttps://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/#api-reference\n      ",
            );
          }
          return minimatch(
            withoutTrailingSlash(resolvePagePath(page)),
            withoutTrailingSlash(excludedRoute),
          );
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.title,
        short_name: config.title,
        description: config.description,
        lang: `zh-tw`,
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#CDD9D9",
        display: "standalone",
        orientation: "portrait",
        icon: "content/maskable_icon.png",
        icon_options: {
          type: `image/png`,
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$|[^:]static\/)/,
              handler: "CacheFirst",
            },
            {
              urlPattern: /^https?:.*\/page-data\/.*\.json/,
              handler: "StaleWhileRevalidate",
            },
            {
              urlPattern:
                /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: "StaleWhileRevalidate",
            },
            {
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: "StaleWhileRevalidate",
            },
          ],
        },
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://e813e5e7c9304c2ba68e33f9eb206dca@o1129413.ingest.sentry.io/6196807",
        tracesSampleRate: 1,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-optimize-svgs",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: false,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: false, // you can disable scripts sha256 hashes
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          "default-src": "'self'",
          "script-src":
            "'self' 'unsafe-inline' 'unsafe-eval' www.google-analytics.com www.googletagmanager.com fonts.googleapis.com fonts.gstatic.com ajax.cloudflare.com static.cloudflareinsights.com infoseczip.disqus.com disqus.com c.disquscdn.com twitter.com",
          "style-src":
            "'self' blob: 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com c.disquscdn.com",
          "img-src": "'self' disqus.com",
          "font-src": "'self' fonts.gstatic.com fonts.googleapis.com",
          "object-src": "'self' blob:",
          "manifest-src": "'self'",
          "connect-src":
            "'self' blob: data: wss://infosecdecompress.com www.google-analytics.com stats.g.doubleclick.net o1129413.ingest.sentry.io",
          "frame-src": "'self' www.youtube-nocookie.com disqus.com twitter.com",
          "report-uri": "https://o1129413.ingest.sentry.io/api/6196807/security/?sentry_key=e813e5e7c9304c2ba68e33f9eb206dca"
        },
      },
    },
    {
      resolve: "gatsby-plugin-security-txt",
      options: {
        contact: "contact@infosecdecompress.com",
        canonical: "https://infosecdecompress.com/.well-known/security.txt",
        languages: "en, zh-Hant-TW",
      },
    },
  ],
};

import path from "path";

import type { GatsbyConfig } from "gatsby";

import config from "./content/config.json";
import type { Edge } from "./internal/gatsby/types";
import toPlainText from "./src/utils/to-plain-text";

const postsQuery = `
  {
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
    ) {
      edges {
        node {
          html
          rawMarkdownBody
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
`;

interface SearchNode {
  rawMarkdownBody: string;
  frontmatter: {
    slug: string;
    title: string;
  };
}

const gatsbyConfig: GatsbyConfig = {
  pathPrefix: config.pathPrefix,
  // Match tsconfig ("jsx": "react-jsx") and the swc test transform so
  // components never need a manual `import React`.
  jsxRuntime: "automatic",
  siteMetadata: {
    url: config.url,
    siteUrl: config.url,
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
            query: postsQuery,
            output: "/rss.xml",
            title: config.title,
            serialize: ({
              query: { allMarkdownRemark },
            }: {
              query: { allMarkdownRemark: { edges: Array<Edge> } };
            }) =>
              allMarkdownRemark.edges.map(({ node }) => {
                const url =
                  config.url + (node.frontmatter?.slug || node.fields?.slug);

                return {
                  ...node.frontmatter,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": node.html }],
                };
              }),
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-json-output",
      options: {
        siteUrl: config.url,
        graphQLQuery: postsQuery,
        serializeFeed: (results: {
          data: { allMarkdownRemark: { edges: Array<{ node: SearchNode }> } };
        }) =>
          results.data.allMarkdownRemark.edges.map(({ node }) => ({
            id: node.frontmatter.slug,
            url: node.frontmatter.slug,
            title: node.frontmatter.title,
            content: toPlainText(node.rawMarkdownBody),
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
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
        excludes: [
          "/404",
          "/tag/*",
          "/tags",
          "/category/*",
          "/categories",
          "/pages/*",
          "/page/*",
          "/admin",
          "/offline-plugin-app-shell-fallback",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.title,
        short_name: config.title,
        description: config.description,
        lang: "zh-TW",
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#CDD9D9",
        display: "standalone",
        orientation: "portrait",
        icon: "content/maskable_icon.png",
        icon_options: {
          type: "image/png",
          purpose: "any maskable",
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
    "@sentry/gatsby",
    "gatsby-plugin-image",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-optimize-svgs",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          loadPaths: [path.resolve(__dirname)],
        },
      },
    },
    {
      resolve: "gatsby-plugin-csp",
      options: {
        disableOnDev: false,
        reportOnly: false,
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          "default-src": "'self'",
          "script-src":
            "'self' 'unsafe-inline' 'unsafe-eval' www.googletagmanager.com fonts.googleapis.com fonts.gstatic.com ajax.cloudflare.com static.cloudflareinsights.com infoseczip.disqus.com disqus.com c.disquscdn.com twitter.com",
          "style-src":
            "'self' blob: 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com c.disquscdn.com",
          "img-src": "'self' data: disqus.com",
          "font-src": "'self' fonts.gstatic.com fonts.googleapis.com",
          "object-src": "'self' blob:",
          "manifest-src": "'self'",
          "worker-src": "'self' blob:",
          "connect-src":
            "'self' blob: data: wss://infosecdecompress.com o1129413.ingest.sentry.io",
          "frame-src": "'self' www.youtube-nocookie.com disqus.com twitter.com",
          // report-uri is ignored in a <meta> CSP; violation reporting to Sentry is
          // configured as a response header in Cloudflare instead.
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

export default gatsbyConfig;

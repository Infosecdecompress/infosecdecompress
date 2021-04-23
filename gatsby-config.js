'use strict';

const siteConfig = require('./config.js');
const postCssPlugins = require('./postcss-config.js');
const siteUrl = `https://infosecdecompress.com`;

module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    disqusShortname: siteConfig.disqusShortname,
    menu: siteConfig.menu,
    author: siteConfig.author
  },  
  flags: {
    PRESERVE_WEBPACK_CACHE: true
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static`,
        name: 'assets'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'media'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'css',
        path: `${__dirname}/static/css`
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [{
          serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const siteUrl = site.siteMetadata.site_url;
                let html = edge.node.html;
                html = html
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`);

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.site_url + edge.node.fields.slug,
                  guid: site.siteMetadata.site_url + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': html }]
                })
              })
            },
          query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
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
          output: '/rss.xml',
          title: siteConfig.title
        }]
      }
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
                  fields { slug }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `,
        serializeFeed: results => results.data.allMarkdownRemark.edges.map(({ node }) => ({
          id: node.fields.slug,
          url: siteUrl + node.fields.slug,
          title: node.frontmatter.title,
          // content: node.rawMarkdownBody.replace(/(\\r\\n)*|(\((.*?)\))|(\#*|\**)/g, ``)
          content: node.rawMarkdownBody
              .replace(/(\((.*?)\))|(\#)|(\*)|(\[)|(\])/g, ' ')
              .replace(/(?:\\[rn]|[\r\n]+)|(\\)+/g,' ')
              .replace(/\s\s+/g, ' ')
        })),
        nodesPerFeedFile: 500,
      }
    },
    'gatsby-plugin-netlify-cms-paths',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-katex',
            options: {
              strict: 'ignore'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              withWebp: true,
              linkImagesToOriginal: false,
              disableBgImageOnAlpha: true,
              disableBgImage: true, 
              backgroundColor: `transparent`,
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/index.js`
      }
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [siteConfig.googleAnalyticsId],
        pluginConfig: {
          head: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
		    exclude: [`/404`, `/tag/*`, `/category/*`, `/page/*`, `/admin`,`/offline-plugin-app-shell-fallback`, `/tags`, `/pages/success`],
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
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) => allSitePage.edges.map((edge) => ({
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: 'daily',
          priority: 0.7
        }))
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#F7A046',
        display: 'standalone',
        icon: 'static/photo.jpg'
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          runtimeCaching: [{
            // Use cacheFirst since these don't need to be revalidated (same RegExp
            // and same reason as above)
            urlPattern: /(\.js$|\.css$|[^:]static\/)/,
            handler: 'CacheFirst',
          },
          {
            // page-data.json files, static query results and app-data.json
            // are not content hashed
            urlPattern: /^https?:.*\/page-data\/.*\.json/,
            handler: 'StaleWhileRevalidate',
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: 'StaleWhileRevalidate',
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: 'StaleWhileRevalidate',
          },
          ],
        },
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false
        }
      }
    },
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn: process.env.SENTRY_DSN,
        tracesSampleRate: 1
      }
    },
    'gatsby-plugin-flow',
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
          "script-src": "'self' 'unsafe-inline' 'unsafe-eval' www.google-analytics.com www.googletagmanager.com fonts.googleapis.com fonts.gstatic.com ajax.cloudflare.com static.cloudflareinsights.com",
          "style-src": "'self' blob: 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com",
          "img-src": "'self' www.google-analytics.com stats.g.doubleclick.net",
          "font-src": "'self' fonts.gstatic.com fonts.googleapis.com",
          "object-src": "'self' blob:",
          "manifest-src": "'self'",
          "prefetch-src": "'self' blob:",
          "connect-src": "'self' blob: data: wss://infosecdecompress.com www.google-analytics.com stats.g.doubleclick.net",
          "frame-src": "'self' www.youtube-nocookie.com"
          // you can add your directives or override defaults
        }
      }
    },
    {
      resolve: 'gatsby-plugin-security-txt',
      options: {
        contact: 'contact@infosecdecompress.com',
        canonical: 'https://infosecdecompress.com/.well-known/security.txt',
        languages: 'en, zh-Hant-TW'
      }
    }
  ]
};

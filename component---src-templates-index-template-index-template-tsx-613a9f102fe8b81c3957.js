!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2e944318-89a8-45d8-90ad-c23863294a41",e._sentryDebugIdIdentifier="sentry-dbid-2e944318-89a8-45d8-90ad-c23863294a41")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"494de81e75797c8f2f3b2f3d062d3889282bbd89"},(self.webpackChunkinfosecdecompress=self.webpackChunkinfosecdecompress||[]).push([[411],{1432:function(e,t,a){a.d(t,{J:function(){return o}});var n=a(6540),d=a(4794),l="Feed-module--link--6123b";var o=e=>{let{edges:t}=e;return n.createElement("div",{className:"Feed-module--feed--a6204"},t.map((e=>{var t,a;return n.createElement("div",{className:"Feed-module--item--c7a63",key:e.node.fields.slug},n.createElement("div",{className:"Feed-module--meta--250c2"},n.createElement("time",{className:"Feed-module--time--72864",dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),n.createElement("span",{className:"Feed-module--divider--81a18"}),n.createElement("span",{className:"Feed-module--category--59f58"},n.createElement(d.Link,{to:e.node.fields.categorySlug,className:l},e.node.frontmatter.category))),n.createElement("h2",{className:"Feed-module--title--f252f"},n.createElement(d.Link,{className:l,to:(null===(t=e.node.frontmatter)||void 0===t?void 0:t.slug)||e.node.fields.slug},e.node.frontmatter.title)),n.createElement("p",{className:"Feed-module--description--57348"},e.node.frontmatter.description),n.createElement(d.Link,{className:"Feed-module--more--51a4e",to:(null===(a=e.node.frontmatter)||void 0===a?void 0:a.slug)||e.node.fields.slug},"Read"))})))}},2204:function(e,t,a){a.d(t,{d:function(){return s}});var n=a(6540),d=a(6942),l=a.n(d),o=a(4794),r=a(9506),i="Pagination-module--disable--7e105";var s=e=>{let{prevPagePath:t,nextPagePath:a,hasNextPage:d,hasPrevPage:s}=e;const c=l()("Pagination-module--previousLink--5590d",{[i]:!s}),m=l()("Pagination-module--nextLink--532ff",{[i]:!d});return n.createElement("div",{className:"Pagination-module--pagination--d61cb"},n.createElement("div",{className:"Pagination-module--previous--4a76b"},n.createElement(o.Link,{rel:"prev",to:s?t:"/",className:c},r.B.PREV_PAGE)),n.createElement("div",{className:"Pagination-module--next--1cab8"},n.createElement(o.Link,{rel:"next",to:d?a:"/",className:m},r.B.NEXT_PAGE)))}},7571:function(e,t,a){a.r(t),a.d(t,{Head:function(){return m}});var n=a(6540),d=a(1432),l=a(6523),o=a(4476),r=a(2738),i=a(2204),s=a(371),c=a(7767);const m=e=>{let{pageContext:t}=e;const{title:a,subtitle:d}=(0,c.Q6)(),{pagination:{currentPage:l}}=t,r=l>0?`Posts - Page ${l} - ${a}`:a;return n.createElement(o.W,{title:r,description:d})};t.default=e=>{let{data:t,pageContext:a}=e;const{pagination:o}=a,{hasNextPage:c,hasPrevPage:m,prevPagePath:u,nextPagePath:g}=o,{edges:f}=t.allMarkdownRemark;return n.createElement(l.P,null,n.createElement(s.B,{isIndex:!0}),n.createElement(r.Y,null,n.createElement(d.J,{edges:f}),n.createElement(i.d,{prevPagePath:u,nextPagePath:g,hasPrevPage:m,hasNextPage:c})))}}}]);
//# sourceMappingURL=component---src-templates-index-template-index-template-tsx-613a9f102fe8b81c3957.js.map
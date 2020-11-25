const createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type SocialImage {
      publicURL: String
    }
    type Frontmatter {
      socialImage: SocialImage
    }
  `;

  createTypes(typeDefs);
};

module.exports = createSchemaCustomization;
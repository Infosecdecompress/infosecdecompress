import path from "path";

const templates = Object.freeze({
  categoriesTemplate: path.resolve("./src/templates/categories-template.tsx"),
  notFoundTemplate: path.resolve("./src/templates/not-found-template.tsx"),
  indexTemplate: path.resolve("./src/templates/index-template.tsx"),
  tagsTemplate: path.resolve("./src/templates/tags-template.tsx"),
  pageTemplate: path.resolve("./src/templates/page-template.tsx"),
  postTemplate: path.resolve("./src/templates/post-template.tsx"),
});

export default templates;

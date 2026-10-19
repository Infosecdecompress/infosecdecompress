import { GatsbyNode } from "gatsby";

import toKebabCase from "../../src/utils/to-kebab-case";
import * as constants from "./constants";
import * as queries from "./queries";

interface PaginatedPagesOptions {
  group?: string;
  template: string;
  basePath: string;
  totalItems: number;
  limit: number;
}

const getPaginationPath = (basePath: string, page: number): string =>
  [basePath === "/" ? "" : basePath, "page", page].join("/");

const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const createPaginatedPages = ({
    group,
    template,
    basePath,
    totalItems,
    limit,
  }: PaginatedPagesOptions) => {
    const totalPages = Math.ceil(totalItems / limit);

    for (let page = 0; page < totalPages; page += 1) {
      createPage({
        component: template,
        path: page === 0 ? basePath : getPaginationPath(basePath, page),
        context: {
          group,
          limit,
          offset: page * limit,
          pagination: {
            currentPage: page,
            prevPagePath:
              page <= 1 ? basePath : getPaginationPath(basePath, page - 1),
            nextPagePath: getPaginationPath(basePath, page + 1),
            hasNextPage: page !== totalPages - 1,
            hasPrevPage: page !== 0,
          },
        },
      });
    }
  };

  createPage({
    path: constants.routes.notFoundRoute,
    component: constants.templates.notFoundTemplate,
    context: {},
  });

  createPage({
    path: constants.routes.tagsListRoute,
    component: constants.templates.tagsTemplate,
    context: {},
  });

  createPage({
    path: constants.routes.categoriesListRoute,
    component: constants.templates.categoriesTemplate,
    context: {},
  });

  const pages = await queries.pagesQuery(graphql);

  pages.forEach(({ node }) => {
    const slug = node.fields?.slug;

    if (!slug) {
      return;
    }

    const templateByType: Record<string, string> = {
      page: constants.templates.pageTemplate,
      post: constants.templates.postTemplate,
    };
    const component = templateByType[node.frontmatter?.template ?? ""];

    if (component) {
      createPage({
        path: node.frontmatter?.slug || slug,
        component,
        context: { slug },
      });
    }
  });

  const metadata = await queries.metadataQuery(graphql);
  const limit = metadata.postsLimit ?? 1;

  const categories = await queries.categoriesQuery(graphql);

  categories.forEach((category) => {
    createPaginatedPages({
      group: category.fieldValue,
      template: constants.templates.categoryTemplate,
      basePath: `${constants.routes.categoryRoute}/${toKebabCase(category.fieldValue)}`,
      totalItems: category.totalCount,
      limit,
    });
  });

  const tags = await queries.tagsQuery(graphql);

  tags.forEach((tag) => {
    createPaginatedPages({
      group: tag.fieldValue,
      template: constants.templates.tagTemplate,
      basePath: `${constants.routes.tagRoute}/${toKebabCase(tag.fieldValue)}`,
      totalItems: tag.totalCount,
      limit,
    });
  });

  const posts = await queries.postsQuery(graphql);

  createPaginatedPages({
    template: constants.templates.indexTemplate,
    basePath: constants.routes.indexRoute,
    totalItems: posts.length,
    limit,
  });
};

export { createPages };

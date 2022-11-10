import React from "react";

import { Link } from "gatsby";

import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { useCategoriesList, useSiteMetadata, useTagsList } from "@/hooks";
import { toKebabCase } from "@/utils";

const CategoriesTemplate: React.FC = () => {
  const categories = useCategoriesList();
  const tags = useTagsList();

  return (
    <Layout>
      <Sidebar />
      <Page title="分類 標籤">
        <h2>分類</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/category/${toKebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
        <h2>標籤</h2>
        <ul>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${toKebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export const Head: React.FC = () => {
  const { title, subtitle } = useSiteMetadata();
  const pageTitle = `Categories - ${title}`;

  return <Meta title={pageTitle} description={subtitle} />;
};

export default CategoriesTemplate;

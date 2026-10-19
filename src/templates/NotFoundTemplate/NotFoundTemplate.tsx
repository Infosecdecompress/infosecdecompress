import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata } from "@/hooks";

const NotFoundTemplate = () => (
  <Layout>
    <Sidebar />
    <Page title="NOT FOUND">
      <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
    </Page>
  </Layout>
);

export const Head = () => {
  const { title, subtitle } = useSiteMetadata();

  return <Meta title={`Not Found - ${title}`} description={subtitle} />;
};

export default NotFoundTemplate;

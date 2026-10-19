import Fields from "./fields";
import Frontmatter from "./frontmatter";

interface MarkdownRemark {
  id: string;
  fields: Fields;
  frontmatter: Frontmatter;
  html: string;
}

export default MarkdownRemark;

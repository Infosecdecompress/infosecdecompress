import Edge from "./edge";
import Group from "./group";

interface AllMarkdownRemark {
  edges: Array<Edge>;
  group: Array<Group>;
}

export default AllMarkdownRemark;

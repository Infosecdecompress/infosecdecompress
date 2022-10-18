import { RenderBodyArgs } from "gatsby";

const onRenderBody = ({ setHtmlAttributes }: RenderBodyArgs) => {
  setHtmlAttributes({ lang: "en" });
};

export { onRenderBody };

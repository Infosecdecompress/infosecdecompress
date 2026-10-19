import toPlainText from "./to-plain-text";

describe("toPlainText", () => {
  test("returns an empty string for missing input", () => {
    expect(toPlainText()).toBe("");
  });

  test("strips headings, emphasis, links and line breaks", () => {
    expect(toPlainText("# Title\n\nSome **bold** [link](https://a.b)")).toBe(
      " Title Some bold link ",
    );
  });
});

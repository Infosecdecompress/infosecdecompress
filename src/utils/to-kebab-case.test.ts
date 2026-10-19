import toKebabCase from "./to-kebab-case";

describe("toKebabCase", () => {
  test("successful conversion to kebab case", () => {
    expect(toKebabCase()).toBe("");
    expect(toKebabCase("LOREM")).toBe("lorem");
    expect(toKebabCase("LOR-EM")).toBe("lorem");
    expect(toKebabCase("lorem-ipsum")).toBe("loremipsum");
    expect(toKebabCase("lorem ipsum")).toBe("lorem-ipsum");
    expect(toKebabCase("lorem_ipsum")).toBe("lorem-ipsum");
    expect(toKebabCase("lorem #ipsum")).toBe("lorem-ipsum");
    expect(toKebabCase("Lorem Ipsum Dolor")).toBe("lorem-ipsum-dolor");
  });

  test("matches the slugs generated for existing categories and tags", () => {
    expect(toKebabCase("NewsUpdates")).toBe("newsupdates");
    expect(toKebabCase("DEF CON")).toBe("def-con");
    expect(toKebabCase("E2EE")).toBe("e2ee");
    expect(toKebabCase("iOS")).toBe("ios");
    expect(toKebabCase("supply chain attack")).toBe("supply-chain-attack");
  });
});

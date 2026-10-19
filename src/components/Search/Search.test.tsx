import { fireEvent, render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import { Search } from "@/components/Search";

const mockSearchData = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          rawMarkdownBody: "This is about network security and firewalls.",
          frontmatter: {
            slug: "/posts/network-security",
            title: "Network Security Basics",
          },
        },
      },
      {
        node: {
          rawMarkdownBody: "Password managers help keep your accounts safe.",
          frontmatter: {
            slug: "/posts/password-managers",
            title: "Password Managers",
          },
        },
      },
      {
        node: {
          rawMarkdownBody: "VPN can protect your privacy online.",
          frontmatter: {
            slug: "/posts/vpn-guide",
            title: "VPN Guide",
          },
        },
      },
    ],
  },
};

const getInput = () => screen.getByPlaceholderText("搜尋文章");
const queryResults = () => screen.queryByRole("table");

describe("Search", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue(mockSearchData);
  });

  test("renders search input", () => {
    render(<Search />);
    expect(getInput()).toBeInTheDocument();
  });

  test("results are hidden by default", () => {
    render(<Search />);
    expect(queryResults()).not.toBeInTheDocument();
  });

  test("shows matching results when typing a query", () => {
    render(<Search />);

    fireEvent.change(getInput(), { target: { value: "Network" } });

    expect(queryResults()).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Network Security Basics" }),
    ).toHaveAttribute("href", "/posts/network-security");
    expect(screen.queryByText("VPN Guide")).not.toBeInTheDocument();
  });

  test("hides results when query is cleared", () => {
    render(<Search />);

    fireEvent.change(getInput(), { target: { value: "Network" } });
    fireEvent.change(getInput(), { target: { value: "" } });

    expect(queryResults()).not.toBeInTheDocument();
  });

  test("form submit does not reload the page", () => {
    render(<Search />);
    const form = screen.getByRole("search");
    const event = new Event("submit", { bubbles: true, cancelable: true });
    const prevented = !form.dispatchEvent(event);
    expect(prevented).toBe(true);
  });

  test("handles empty data gracefully", () => {
    (useStaticQuery as jest.Mock).mockReturnValue({
      allMarkdownRemark: { edges: [] },
    });

    render(<Search />);
    fireEvent.change(getInput(), { target: { value: "test" } });

    expect(queryResults()).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  test("handles null data gracefully", () => {
    (useStaticQuery as jest.Mock).mockReturnValue({});

    render(<Search />);
    expect(getInput()).toBeInTheDocument();
  });
});

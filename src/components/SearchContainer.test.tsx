import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import Search from "@/components/SearchContainer";

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

describe("SearchContainer", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue(mockSearchData);
  });

  test("renders search input", () => {
    render(<Search />);
    const input = screen.getByPlaceholderText("搜尋文章");
    expect(input).toBeInTheDocument();
  });

  test("results table is hidden by default", () => {
    render(<Search />);
    const table = document.getElementById("result");
    expect(table).toHaveStyle({ display: "none" });
  });

  test("shows results when typing a query", () => {
    render(<Search />);
    const input = screen.getByPlaceholderText("搜尋文章");

    fireEvent.change(input, { target: { value: "Network" } });

    const table = document.getElementById("result");
    expect(table).toHaveStyle({ display: "block" });
  });

  test("hides results when query is cleared", () => {
    render(<Search />);
    const input = screen.getByPlaceholderText("搜尋文章");

    fireEvent.change(input, { target: { value: "Network" } });
    fireEvent.change(input, { target: { value: "" } });

    const table = document.getElementById("result");
    expect(table).toHaveStyle({ display: "none" });
  });

  test("form submit does not reload the page", () => {
    render(<Search />);
    const form = document.querySelector("form")!;
    const event = new Event("submit", { bubbles: true, cancelable: true });
    const prevented = !form.dispatchEvent(event);
    expect(prevented).toBe(true);
  });

  test("handles empty data gracefully", () => {
    (useStaticQuery as jest.Mock).mockReturnValue({
      allMarkdownRemark: { edges: [] },
    });

    render(<Search />);
    const input = screen.getByPlaceholderText("搜尋文章");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "test" } });
    // Should not crash with empty data
  });

  test("handles null data gracefully", () => {
    (useStaticQuery as jest.Mock).mockReturnValue({});

    render(<Search />);
    const input = screen.getByPlaceholderText("搜尋文章");
    expect(input).toBeInTheDocument();
  });
});

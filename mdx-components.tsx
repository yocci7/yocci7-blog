import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <h1>{props.children}</h1>
    ),
    h2: (props) => (
      <h2>{props.children}</h2>
    ),
    h3: (props) => (
      <h3>{props.children}</h3>
    ),
    h4: (props) => (
      <h4>{props.children}</h4>
    ),
    table: (props) => (
      <table>{props.children}</table>
    ),
    th: (props) => (
      <th>
        {props.children}
      </th>
    ),
    td: (props) => (
      <td>
        {props.children}
      </td>
    ),
    ul: (props) => (
      <ul>
        {props.children}
      </ul>
    ),
    li: (props) => (
      <li>{props.children}</li>
    ),
    a: (props) => (
      <a
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {props.children}
      </a>
    ),
  };
}

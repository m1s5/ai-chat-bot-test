import { Remarkable } from "remarkable";

const md = new Remarkable({ html: true });

export function renderMarkdownToHTML(markdown: string) {
  const renderedHTML = md.render(markdown);
  return { __html: renderedHTML };
}

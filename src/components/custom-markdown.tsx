import * as React from "react";
import { getMarkdownProject } from "@/lib/markdown";

import Link from "next/link";
import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import { Suspense } from "react";

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props} target="_blank">
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
          target: "_blank",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
};

export async function CustomMarkdown({
  slug,
  ogDescription,
}: {
  slug: string;
  ogDescription: string;
}) {
  const project = getMarkdownProject(slug);
  if (!project) {
    return <div>{ogDescription}</div>;
  }
  const { content } = await compileMDX({
    source: project.content,
    components: components as any,
  });

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-white !text-white prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-strong:text-white prose-a:text-white prose-lead:text-white prose-p:text-white prose-blockquote:text-white prose-figure:text-white prose-figcaption:text-white prose-em:text-white prose-kbd:text-white prose-pre:text-white prose-ol:text-white prose-ul:text-white prose-li:text-white prose-table:text-white prose-thead:text-white prose-tr:text-white prose-th:text-white prose-td:text-white prose-img:text-white prose-video:text-white prose-hr:text-white prose-code:text-white">
        {content}
      </div>
    </Suspense>
  );
}

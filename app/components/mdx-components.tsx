"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote"

// Dynamically import the MermaidDiagram component with SSR disabled
const MermaidDiagram = dynamic(() => import('./mermaid-diagram'), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse bg-black/50 h-[200px] rounded flex items-center justify-center">
      <span className="text-green-400/50 text-sm">Loading diagram...</span>
    </div>
  )
})

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

// CustomLink component for handling internal vs external links
const CustomLink = ({ href, children, ...props }: CustomLinkProps) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

// Custom Image component with Next.js Image optimization - not wrapped in a div
const CustomImage = (props: any) => {
  return (
    <Image
      alt={props.alt || "Blog image"}
      width={props.width || 800}
      height={props.height || 450}
      className="w-full my-6 rounded overflow-hidden"
      {...props}
    />
  )
}

// Heading components with anchor links
const Heading = ({ level, children, ...props }: { level: 1 | 2 | 3 | 4 | 5 | 6; children: React.ReactNode }) => {
  const slug = children
    ? typeof children === "string"
      ? children.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")
      : ""
    : ""

  const Component = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Component id={slug} {...props} className="group relative flex scroll-mt-20">
      <a
        href={`#${slug}`}
        className="absolute -left-5 hidden pr-2 text-green-400/60 hover:text-green-400 group-hover:inline"
        aria-label={`Link to ${children}`}
      >
        #
      </a>
      <span>{children}</span>
    </Component>
  )
}

const H1 = (props: any) => <Heading level={1} {...props} />
const H2 = (props: any) => <Heading level={2} {...props} />
const H3 = (props: any) => <Heading level={3} {...props} />
const H4 = (props: any) => <Heading level={4} {...props} />
const H5 = (props: any) => <Heading level={5} {...props} />
const H6 = (props: any) => <Heading level={6} {...props} />

// Code block with syntax highlighting and Mermaid support
const CodeBlock = ({ className, children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
  // Check if this is a mermaid diagram
  const isMermaid = className?.includes("language-mermaid")
  
  if (isMermaid && typeof children === "string") {
    // Use the MermaidDiagram component for client-side rendering
    return <MermaidDiagram chart={children} className="my-6" />
  }
  
  const language = className ? className.replace("language-", "") : ""
  
  return (
    <div className="relative my-6 overflow-hidden rounded bg-black/50 border border-green-400/20">
      {language && (
        <div className="absolute right-0 top-0 px-2 py-1 text-xs font-mono text-green-400/60 bg-black/60">
          {language}
        </div>
      )}
      <pre className={`${className} p-4 overflow-x-auto`} {...props}>
        {children}
      </pre>
    </div>
  )
}

// Table component with styling
const Table = ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full border-collapse text-left" {...props}>
        {children}
      </table>
    </div>
  )
}

// Paragraph wrapper to prevent nesting issues
const Paragraph = (props: React.HTMLAttributes<HTMLParagraphElement>) => {
  // Check if the only child is an image
  const hasOnlyImageChild = 
    React.Children.count(props.children) === 1 &&
    React.isValidElement(props.children) &&
    (props.children.type === CustomImage || props.children.type === 'img');

  // If it's just an image, don't wrap it in a paragraph to avoid nesting issues
  if (hasOnlyImageChild) {
    return <>{props.children}</>;
  }

  return <p {...props} />;
};

// Custom components for MDX
export const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  a: CustomLink,
  img: CustomImage,
  pre: CodeBlock,
  table: Table,
  Image: CustomImage,
  Link: CustomLink,
  p: Paragraph
}

// Use this for next-mdx-remote
export function MDXRemoteClient({ source, ...props }: MDXRemoteProps) {
  return <MDXRemote {...props} components={mdxComponents} {...source} />
}

// For contentlayer
export function MDX({ code }: { code: string }) {
  const MDXContent = dynamic(() => import('next-contentlayer/hooks').then(mod => {
    const Component = mod.useMDXComponent(code)
    return () => <Component components={mdxComponents} />
  }))
  
  return <MDXContent />
}


"use client"

import Script from "next/script"
import { BlogPost } from "@/lib/blog"

interface BlogSchemaProps {
  post: BlogPost
  url: string
  imageUrl?: string
}

export function BlogSchema({ post, url, imageUrl }: BlogSchemaProps) {
  // Format date to ISO 8601
  const formattedDate = new Date(post.date).toISOString()
  
  // Build schema.org JSON-LD data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Disequi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://disequi.com/favicon.ico"
      }
    },
    "datePublished": formattedDate,
    "dateModified": formattedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }
  
  // Add image if available
  if (imageUrl) {
    schemaData["image"] = imageUrl
  }

  return (
    <Script id="blog-schema" type="application/ld+json">
      {JSON.stringify(schemaData)}
    </Script>
  )
}
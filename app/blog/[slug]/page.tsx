import { Suspense } from "react"
import { notFound } from "next/navigation"
import { getAllPostSlugs, getPostData, getSortedPostsData } from "@/lib/blog"
import BlogArticleContent from "./blog-article-content"
import type { Metadata, ResolvingMetadata } from "next"

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return paths
}

// Generate dynamic metadata
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const resolvedParams = await Promise.resolve(params)
    const slug = resolvedParams.slug
    const post = await getPostData(slug)
    
    // Get the parent metadata (from layout.tsx)
    const previousMetadata = await parent
    const previousOpenGraph = previousMetadata.openGraph || {}
    const previousTwitter = previousMetadata.twitter || {}
    
    // Create dynamic image URL (in production, you'd use a real image URL)
    // For now, we'll use a placeholder based on the thumbnailSeed
    const imageUrl = `https://disequi.com/api/thumbnail?seed=${post.thumbnailSeed}`
    
    return {
      title: `${post.title} | Disequi Blog`,
      description: post.excerpt,
      authors: [{ name: post.author }],
      keywords: ["business transformation", "innovation", post.title.toLowerCase()],
      openGraph: {
        ...previousOpenGraph,
        title: post.title,
        description: post.excerpt,
        type: "article",
        publishedTime: new Date(post.date).toISOString(),
        authors: [post.author],
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        ...previousTwitter,
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: [imageUrl],
        creator: "@disequi",
      },
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Blog Post | Disequi",
      description: "Read our latest insights on business transformation and innovation.",
    }
  }
}

export default async function BlogArticlePage({ params }: { params: { slug: string } }) {
  try {
    // Get post and related data
    const slug = params.slug
    const post = await getPostData(slug)
    const recentPosts = getSortedPostsData()
      .filter((p) => p.slug !== slug)
      .slice(0, 3)

    // Create canonical URL for this post
    const canonicalUrl = `https://disequi.com/blog/${slug}`
    
    // Create image URL for schema.org
    const imageUrl = `https://disequi.com/api/thumbnail?seed=${post.thumbnailSeed}`

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BlogArticleContent 
          post={post} 
          recentPosts={recentPosts} 
          canonicalUrl={canonicalUrl}
          imageUrl={imageUrl}
        />
      </Suspense>
    )
  } catch (error) {
    console.error("Error loading blog post:", error)
    notFound()
  }
}
}
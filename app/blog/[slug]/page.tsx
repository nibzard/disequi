"use client"

import { Suspense, useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { getAllPostSlugs, getPostData, getSortedPostsData } from "@/lib/blog"
import BlogArticleContent from "./blog-article-content"
import type { Metadata, ResolvingMetadata } from "next"

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return paths
}

// Client components don't support generateMetadata

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null)
  const [recentPosts, setRecentPosts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  useEffect(() => {
    async function loadData() {
      try {
        const slug = params.slug
        const postData = await getPostData(slug)
        const allRecentPosts = getSortedPostsData()
          .filter((p) => p.slug !== slug)
          .slice(0, 3)
          
        setPost(postData)
        setRecentPosts(allRecentPosts)
        setIsLoading(false)
        
        // Update page title
        document.title = `${postData.title} | Disequi Blog`
      } catch (err: any) {
        console.error("Error loading blog post:", err)
        setError(err)
        setIsLoading(false)
      }
    }
    
    loadData()
  }, [params.slug])
  
  if (isLoading) {
    return <div>Loading...</div>
  }
  
  if (error || !post) {
    return notFound()
  }
  
  // Create canonical URL for this post
  const canonicalUrl = `https://disequi.com/blog/${params.slug}`
  
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
}
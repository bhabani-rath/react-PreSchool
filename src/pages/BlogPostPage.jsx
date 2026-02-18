import { useParams, Navigate } from "react-router-dom";
import SEOHead, { getBlogPostSeo } from "@/config/seoConfig";
import PageTransition from "@/layouts/PageTransition";
import BlogPost from "@/components/blog/BlogPost";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import { blogData } from "@/data/blog";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const seo = getBlogPostSeo(post);

  return (
    <PageTransition>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        url={seo.url}
        image={seo.image}
        type={seo.type}
        author={seo.author}
        publishedDate={seo.publishedDate}
      />
      <BlogPost post={post} />
      <NewsletterSignup />
    </PageTransition>
  );
};

export default BlogPostPage;
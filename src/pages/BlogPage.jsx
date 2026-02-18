import { useState, useMemo } from "react";
import SEOHead, { seoConfig } from "@/config/seoConfig";
import PageTransition from "@/layouts/PageTransition";
import PageHero from "@/components/common/PageHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogGrid from "@/components/blog/BlogGrid";
import Pagination from "@/components/blog/Pagination";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import { blogData } from "@/data/blog";

const POSTS_PER_PAGE = 6;

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const seo = seoConfig.blog;

  const featuredPost = blogData.find((p) => p.featured);

  const filteredPosts = useMemo(() => {
    let posts = blogData.filter((p) => !p.featured);
    if (activeFilter !== "all") {
      posts = posts.filter((p) => p.category === activeFilter);
    }
    return posts;
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <PageTransition>
      <SEOHead title={seo.title} description={seo.description} keywords={seo.keywords} url={seo.url} />
      <PageHero
        title="Our Blog & News"
        subtitle="Tips, updates, and stories from our school family"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section-padding">
        <div className="container-main">
          {featuredPost && <FeaturedPost post={featuredPost} />}
          <BlogFilters activeFilter={activeFilter} onFilterChange={handleFilterChange} />
          <BlogGrid posts={paginatedPosts} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </section>

      <NewsletterSignup />
    </PageTransition>
  );
};

export default BlogPage;
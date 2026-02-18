import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, User } from "lucide-react";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { formatDate } from "@/utils/helpers";
import { fadeInUp } from "@/utils/animations";
import DOMPurify from "dompurify";

const BlogPost = ({ post }) => {
  const sanitizedContent = DOMPurify.sanitize(post.content?.replace(/\n/g, "<br/>") || "");

  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="container-narrow section-padding"
    >
      {/* Back Button */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2
                   text-sm mobile-large:text-base
                   text-text-secondary hover:text-primary
                   transition-colors mb-6 mobile-large:mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-6 mobile-large:mb-8 tablet:mb-10">
        <Badge variant="primary" className="mb-3 mobile-large:mb-4">
          {post.category}
        </Badge>

        <h1 className="font-heading text-2xl
                       mobile-large:text-3xl
                       phablet:text-4xl
                       tablet:text-[42px]
                       desktop:text-5xl
                       font-bold text-text-primary leading-tight">
          {post.title}
        </h1>

        <div className="mt-4 mobile-large:mt-5
                        flex flex-wrap items-center
                        gap-3 mobile-large:gap-4
                        text-xs mobile-large:text-sm text-text-secondary">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="aspect-video rounded-2xl mobile-large:rounded-3xl
                      bg-linear-to-br from-primary/10 to-secondary/10
                      flex items-center justify-center
                      mb-6 mobile-large:mb-8 tablet:mb-10
                      shadow-lg overflow-hidden">
        <span className="text-6xl mobile-large:text-7xl opacity-30">📰</span>
      </div>

      {/* Content */}
      <div className="prose prose-sm mobile-large:prose-base
                      tablet:prose-lg
                      max-w-none
                      prose-headings:font-heading
                      prose-headings:text-text-primary
                      prose-p:text-text-secondary
                      prose-a:text-primary
                      prose-strong:text-text-primary
                      prose-li:text-text-secondary">
        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      </div>

      {/* Share & Navigation */}
      <div className="mt-8 mobile-large:mt-10 tablet:mt-12
                      pt-6 mobile-large:pt-8
                      border-t border-black/10
                      flex flex-col mobile-large:flex-row
                      items-center justify-between
                      gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}
        >
          <Share2 className="h-4 w-4" />
          Share Article
        </Button>

        <Link to="/blog">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
            More Articles
          </Button>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogPost;
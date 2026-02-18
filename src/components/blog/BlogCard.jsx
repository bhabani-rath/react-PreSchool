import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Badge from "@/components/common/Badge";
import { formatDate } from "@/utils/helpers";

const BlogCard = ({ post }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group h-full rounded-xl mobile-large:rounded-2xl
                 overflow-hidden bg-surface
                 shadow-md ring-1 ring-black/5
                 transition-shadow hover:shadow-xl"
    >
      <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
        {/* Image */}
        <div className="aspect-video
                        bg-gradient-to-br from-primary/10 to-secondary/10
                        flex items-center justify-center
                        overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
          ) : null}
          <span
            className="text-4xl mobile-large:text-5xl opacity-30"
            style={{ display: post.image ? "none" : "block" }}
          >
            📝
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1
                        p-4 mobile-large:p-5 tablet:p-6">
          {/* Meta */}
          <div className="flex items-center gap-2 mb-2 mobile-large:mb-3">
            <Badge variant="primary" className="text-[9px] mobile-large:text-[10px]">
              {post.category}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="font-heading text-sm
                         mobile-large:text-base tablet:text-lg
                         font-bold text-text-primary
                         line-clamp-2
                         group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mt-2 mobile-large:mt-3
                        text-[10px] mobile-large:text-xs tablet:text-sm
                        text-text-secondary leading-relaxed
                        line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="mt-3 mobile-large:mt-4 pt-3
                          border-t border-black/5
                          flex items-center justify-between">
            <div className="flex items-center gap-2
                            text-[9px] mobile-large:text-[10px] tablet:text-xs
                            text-text-secondary">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(post.date)}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>

            <ArrowRight className="h-3.5 w-3.5 text-primary
                                   group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
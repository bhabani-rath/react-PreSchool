import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Badge from "@/components/common/Badge";
import { formatDate } from "@/utils/helpers";
import { fadeInUp } from "@/utils/animations";

const FeaturedPost = ({ post }) => {
  if (!post) return null;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8 mobile-large:mb-10 tablet:mb-12 desktop:mb-16"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block rounded-2xl mobile-large:rounded-3xl
                   overflow-hidden bg-surface
                   shadow-lg ring-1 ring-black/5
                   transition-shadow hover:shadow-xl"
      >
        <div className="grid grid-cols-1 tablet:grid-cols-2">
          {/* Image */}
          <div className="aspect-video tablet:aspect-auto tablet:min-h-[350px]
                          desktop:min-h-[400px]
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
              className="text-6xl mobile-large:text-7xl tablet:text-8xl opacity-40"
              style={{ display: post.image ? "none" : "block" }}
            >
              📰
            </span>
          </div>

          {/* Content */}
          <div className="p-5 mobile-large:p-6
                          tablet:p-8 desktop:p-10
                          flex flex-col justify-center">
            <div className="flex items-center gap-2 mobile-large:gap-3
                            mb-3 mobile-large:mb-4">
              <Badge variant="primary">{post.category}</Badge>
              <span className="flex items-center gap-1
                               text-[10px] mobile-large:text-xs
                               text-text-secondary">
                <Calendar className="h-3 w-3" />
                {formatDate(post.date)}
              </span>
            </div>

            <h2 className="font-heading text-xl
                           mobile-large:text-2xl
                           tablet:text-3xl
                           desktop:text-[34px]
                           font-bold text-text-primary
                           leading-tight
                           group-hover:text-primary transition-colors">
              {post.title}
            </h2>

            <p className="mt-3 mobile-large:mt-4
                          text-sm mobile-large:text-base
                          text-text-secondary leading-relaxed
                          line-clamp-3">
              {post.excerpt}
            </p>

            <div className="mt-4 mobile-large:mt-5 tablet:mt-6
                            flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs mobile-large:text-sm
                                 font-medium text-text-primary">
                  {post.author}
                </span>
                <span className="text-text-secondary">·</span>
                <span className="flex items-center gap-1
                                 text-xs mobile-large:text-sm
                                 text-text-secondary">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>

              <span className="flex items-center gap-1
                               text-xs mobile-large:text-sm
                               font-semibold text-primary
                               group-hover:gap-2 transition-all">
                Read More
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeaturedPost;
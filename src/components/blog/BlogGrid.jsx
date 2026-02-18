import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const BlogGrid = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16 mobile-large:py-20">
        <span className="text-5xl">📭</span>
        <p className="mt-4 text-base mobile-large:text-lg
                      text-text-secondary">
          No posts found in this category.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1
                 mobile-large:grid-cols-2
                 laptop:grid-cols-3
                 gap-4 mobile-large:gap-5 tablet:gap-6 desktop:gap-8"
    >
      {posts.map((post) => (
        <motion.div key={post.id} variants={fadeInUp}>
          <BlogCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlogGrid;
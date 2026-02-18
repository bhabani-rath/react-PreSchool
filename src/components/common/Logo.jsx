import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="flex h-9 w-9
                   mobile-large:h-10 mobile-large:w-10
                   tablet:h-11 tablet:w-11
                   items-center justify-center rounded-xl
                   bg-primary text-lg
                   mobile-large:text-xl
                   tablet:text-2xl font-bold"
      >
        🏫
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="font-heading text-lg
                   mobile-large:text-xl
                   tablet:text-2xl
                   font-bold text-text-primary"
      >
        {siteConfig.schoolName}
      </motion.span>
    </Link>
  );
};

export default Logo;
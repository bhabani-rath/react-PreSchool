import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { galleryData } from "@/data/gallery";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const GalleryPreview = () => {
  const previewImages = galleryData.slice(0, 8);
  const [loaded, setLoaded] = useState({});

  const handleImageLoad = useCallback((id, e) => {
    const { naturalWidth, naturalHeight } = e.target;
    setLoaded((prev) => ({
      ...prev,
      [id]: { ratio: naturalHeight / naturalWidth },
    }));
  }, []);

  /* Distribute into columns — shortest-first, like Pinterest */
  const getColumns = (colCount) => {
    const cols = Array.from({ length: colCount }, () => ({
      items: [],
      height: 0,
    }));

    previewImages.forEach((img, idx) => {
      let shortest = 0;
      for (let i = 1; i < cols.length; i++) {
        if (cols[i].height < cols[shortest].height) shortest = i;
      }

      const ratio =
        loaded[img.id]?.ratio ??
        (img.height && img.width ? img.height / img.width : 0.75);

      cols[shortest].items.push({ ...img, ratio, index: idx });
      cols[shortest].height += ratio;
    });

    return cols;
  };

  // Use 2 cols on mobile, 3 on phablet, 4 on tablet+
  // We render all 3 layouts but show/hide with CSS
  const twoCol = getColumns(2);
  const threeCol = getColumns(3);
  const fourCol = getColumns(4);

  const renderColumns = (cols) =>
    cols.map((col, colIdx) => (
      <div key={colIdx} className="flex-1 flex flex-col gap-3 mobile-large:gap-4">
        <AnimatePresence>
          {col.items.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative cursor-pointer
                         overflow-hidden
                         rounded-xl mobile-large:rounded-2xl
                         ring-1 ring-black/5
                         hover:ring-primary/30
                         shadow-sm hover:shadow-xl
                         transition-all duration-300"
            >
              <div
                className="relative w-full bg-surface"
                style={{ paddingBottom: `${img.ratio * 100}%` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover
                             transition-transform duration-700 ease-out
                             group-hover:scale-110"
                  onLoad={(e) => handleImageLoad(img.id, e)}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.innerHTML = `
                      <div class="absolute inset-0 bg-primary/5
                                  flex items-center justify-center">
                        <span class="text-3xl tablet:text-4xl opacity-40">📷</span>
                      </div>`;
                  }}
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0
                              bg-gradient-to-t from-black/50 via-black/5 to-transparent
                              opacity-0 group-hover:opacity-100
                              transition-opacity duration-300
                              pointer-events-none" />

              {/* Slide-up info on hover */}
              <div className="absolute bottom-0 left-0 right-0
                              p-2.5 mobile-large:p-3
                              translate-y-full group-hover:translate-y-0
                              transition-transform duration-300">
                <p className="text-[10px] mobile-large:text-xs
                              font-medium text-white
                              drop-shadow-md line-clamp-1">
                  {img.alt}
                </p>
                {img.category && (
                  <span className="mt-0.5 inline-block
                                   bg-white/20 backdrop-blur-sm
                                   text-white
                                   text-[8px] mobile-large:text-[9px]
                                   font-medium
                                   px-2 py-0.5 rounded-full capitalize">
                    {img.category}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    ));

  return (
    <section className="section-padding
                        bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-main">
        <SectionHeading
          title="Glimpses of Joy 📸"
          subtitle="Precious moments of learning, playing & growing"
        />

        {/* 2-col: mobile */}
        <div className="flex gap-3 mobile-large:gap-4 phablet:hidden">
          {renderColumns(twoCol)}
        </div>

        {/* 3-col: phablet to tablet */}
        <div className="hidden phablet:flex tablet:hidden gap-4">
          {renderColumns(threeCol)}
        </div>

        {/* 4-col: tablet+ */}
        <div className="hidden tablet:flex gap-4 desktop:gap-5">
          {renderColumns(fourCol)}
        </div>

        {/* View All Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 mobile-large:mt-10 tablet:mt-12
                     text-center"
        >
          <Link to="/gallery">
            <Button variant="outline" size="md">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
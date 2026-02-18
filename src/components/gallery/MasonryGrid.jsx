import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryLightbox from "./GalleryLightbox";

/**
 * Pinterest-style masonry grid with tight gaps, rounded cards,
 * hover zoom, and category badge overlay.
 */
const MasonryGrid = ({ images }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [columns, setColumns] = useState(4);
  const [loaded, setLoaded] = useState({});
  const containerRef = useRef(null);

  // ── Responsive column count ──────────────────────────
  useEffect(() => {
    const updateColumns = () => {
      const w = window.innerWidth;
      if (w < 480) setColumns(2);
      else if (w < 768) setColumns(3);
      else setColumns(4);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // ── Track when images finish loading ─────────────────
  const handleImageLoad = useCallback((id, e) => {
    const { naturalWidth, naturalHeight } = e.target;
    setLoaded((prev) => ({
      ...prev,
      [id]: { ratio: naturalHeight / naturalWidth },
    }));
  }, []);

  // ── Distribute images into columns (shortest-first) ──
  const getColumns = () => {
    const cols = Array.from({ length: columns }, () => ({
      items: [],
      height: 0,
    }));

    images.forEach((img, idx) => {
      // Find shortest column
      let shortest = 0;
      for (let i = 1; i < cols.length; i++) {
        if (cols[i].height < cols[shortest].height) shortest = i;
      }

      // Use actual ratio if loaded, otherwise fall back to data dimensions
      const ratio =
        loaded[img.id]?.ratio ??
        (img.height && img.width ? img.height / img.width : 0.75);

      cols[shortest].items.push({ ...img, ratio, index: idx });
      cols[shortest].height += ratio;
    });

    return cols;
  };

  const masonry = getColumns();

  return (
    <>
      <div
        ref={containerRef}
        className="flex gap-2 mobile-large:gap-3 tablet:gap-4"
      >
        {masonry.map((col, colIdx) => (
          <div
            key={colIdx}
            className="flex-1 flex flex-col gap-2 mobile-large:gap-3 tablet:gap-4"
          >
            <AnimatePresence>
              {col.items.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onClick={() => setLightboxIndex(img.index)}
                  className="group relative cursor-pointer
                             overflow-hidden
                             rounded-lg mobile-large:rounded-xl tablet:rounded-2xl
                             ring-1 ring-black/5
                             hover:ring-primary/30
                             shadow-sm hover:shadow-xl
                             transition-all duration-300"
                >
                  {/* Image – natural height based on ratio */}
                  <div
                    className="relative w-full bg-surface"
                    style={{ paddingBottom: `${img.ratio * 100}%` }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover
                                 transition-transform duration-500 ease-out
                                 group-hover:scale-110"
                      onLoad={(e) => handleImageLoad(img.id, e)}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.parentElement.innerHTML = `
                          <div class="absolute inset-0 bg-primary/5
                                      flex items-center justify-center">
                            <span class="text-3xl tablet:text-4xl opacity-50">📷</span>
                          </div>`;
                      }}
                    />
                  </div>

                  {/* Hover overlay with gradient */}
                  <div className="absolute inset-0
                                  bg-gradient-to-t from-black/60 via-black/10 to-transparent
                                  opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300
                                  pointer-events-none" />

                  {/* Image info on hover */}
                  <div className="absolute bottom-0 left-0 right-0
                                  p-2.5 mobile-large:p-3 tablet:p-4
                                  translate-y-full group-hover:translate-y-0
                                  transition-transform duration-300">
                    <p className="text-[10px] mobile-large:text-xs tablet:text-sm
                                  font-medium text-white
                                  drop-shadow-md
                                  line-clamp-2">
                      {img.alt}
                    </p>
                    {img.category && (
                      <span className="mt-1 inline-block
                                       bg-white/25 backdrop-blur-sm
                                       text-white
                                       text-[8px] mobile-large:text-[9px] tablet:text-[10px]
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
        ))}
      </div>

      {/* Lightbox */}
      <GalleryLightbox
        images={images}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(-1)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
};

export default MasonryGrid;
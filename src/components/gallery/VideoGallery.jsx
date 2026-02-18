import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import ReactPlayer from "react-player";
import Modal from "@/components/ui/Modal";
import SectionHeading from "@/components/common/SectionHeading";
import { videoGalleryData } from "@/data/gallery";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          title="Video Gallery 🎬"
          subtitle="Watch our school events and celebrations"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1
                     mobile-large:grid-cols-2
                     laptop:grid-cols-3
                     gap-4 mobile-large:gap-5 tablet:gap-6"
        >
          {videoGalleryData.map((video) => (
            <motion.div
              key={video.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              onClick={() => setActiveVideo(video)}
              className="group cursor-pointer
                         rounded-xl mobile-large:rounded-2xl
                         overflow-hidden shadow-md ring-1 ring-black/5
                         transition-shadow hover:shadow-xl"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video
                               bg-gradient-to-br from-primary/10 to-secondary/10
                               flex items-center justify-center
                               overflow-hidden">
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                ) : null}
                <span
                  className="text-4xl mobile-large:text-5xl opacity-30"
                  style={{ display: video.thumbnail ? "none" : "block" }}
                >
                  🎬
                </span>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center
                                bg-black/0 group-hover:bg-black/20
                                transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex h-12 w-12
                               mobile-large:h-14 mobile-large:w-14
                               items-center justify-center
                               rounded-full bg-primary/90 text-white
                               shadow-lg opacity-80 group-hover:opacity-100
                               transition-opacity"
                  >
                    <Play className="h-5 w-5 mobile-large:h-6 mobile-large:w-6 ml-0.5" />
                  </motion.div>
                </div>
              </div>

              {/* Title */}
              <div className="p-3 mobile-large:p-4 bg-surface">
                <h3 className="text-xs mobile-large:text-sm tablet:text-base
                               font-semibold text-text-primary
                               line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Modal */}
        <Modal
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          title={activeVideo?.title || "Video"}
        >
          {activeVideo && (
            <div className="aspect-video rounded-xl overflow-hidden">
              <ReactPlayer
                url={activeVideo.url}
                width="100%"
                height="100%"
                playing
                controls
              />
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default VideoGallery;
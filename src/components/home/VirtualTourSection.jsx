import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import ReactPlayer from "react-player";
import { fadeInUp } from "@/utils/animations";

const VirtualTourSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-padding
                        bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-main">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8 mobile-large:mb-10 tablet:mb-12"
        >
          <h2 className="font-heading text-2xl
                         mobile-large:text-3xl
                         phablet:text-4xl
                         tablet:text-[42px]
                         laptop:text-5xl
                         font-bold text-text-primary">
            Take a Virtual Tour 🎥
          </h2>
          <p className="mt-2 mobile-large:mt-3 tablet:mt-4
                        text-sm mobile-large:text-base tablet:text-lg
                        text-text-secondary">
            Experience our campus from the comfort of home
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto
                     max-w-4xl desktop:max-w-5xl
                     overflow-hidden
                     rounded-2xl mobile-large:rounded-3xl
                     shadow-2xl shadow-primary/10"
        >
          {!isPlaying ? (
            <div
              className="relative aspect-video cursor-pointer
                         bg-gradient-to-br from-primary/20 to-secondary/20
                         flex items-center justify-center"
              onClick={() => setIsPlaying(true)}
            >
              {/* Placeholder */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center
                             h-16 w-16
                             mobile-large:h-20 mobile-large:w-20
                             tablet:h-24 tablet:w-24
                             desktop:h-28 desktop:w-28
                             rounded-full bg-primary
                             shadow-lg shadow-primary/30
                             animate-pulse-glow
                             mx-auto"
                >
                  <Play className="h-6 w-6
                                   mobile-large:h-8 mobile-large:w-8
                                   tablet:h-10 tablet:w-10
                                   text-text-primary ml-1" />
                </motion.button>
                <p className="mt-4 mobile-large:mt-5
                              text-sm mobile-large:text-base
                              tablet:text-lg
                              font-semibold text-text-primary">
                  ▶ Click to Play Virtual Tour
                </p>
              </div>
            </div>
          ) : (
            <div className="aspect-video">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                width="100%"
                height="100%"
                playing={isPlaying}
                controls
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualTourSection;
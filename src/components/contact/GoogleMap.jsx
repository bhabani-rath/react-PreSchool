import { motion } from "framer-motion";
import { ExternalLink, Navigation } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { fadeInUp } from "@/utils/animations";
import Button from "@/components/common/Button";

const GoogleMap = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-2xl mobile-large:rounded-3xl
                 overflow-hidden shadow-md ring-1 ring-black/5"
    >
      {/* Map Embed */}
      <div className="relative aspect-[4/3] tablet:aspect-[16/9]
                      laptop:aspect-auto laptop:h-full laptop:min-h-[400px]
                      desktop:min-h-[500px]
                      bg-background">
        <iframe
          src={siteConfig.googleMapsEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="School Location"
          className="absolute inset-0 h-full w-full"
        />
      </div>

      {/* Address Bar Below Map */}
      <div className="bg-surface p-4 mobile-large:p-5 tablet:p-6
                      flex flex-col phablet:flex-row
                      items-start phablet:items-center
                      justify-between gap-3 mobile-large:gap-4">
        <div>
          <h4 className="text-sm mobile-large:text-base
                         font-semibold text-text-primary">
            📍 {siteConfig.schoolName} Pre-School
          </h4>
          <p className="text-xs mobile-large:text-sm
                        text-text-secondary mt-0.5">
            {siteConfig.address.fullAddress}
          </p>
        </div>

        <a
          href={siteConfig.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="sm">
            <Navigation className="h-3.5 w-3.5 mobile-large:h-4 mobile-large:w-4" />
            Get Directions
            <ExternalLink className="h-3 w-3" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default GoogleMap;
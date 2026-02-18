import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const cards = [
  {
    icon: MapPin,
    emoji: "📍",
    title: "Visit Us",
    lines: [
      siteConfig.address.line1,
      siteConfig.address.line2,
      `${siteConfig.address.city}, ${siteConfig.address.state}`,
      siteConfig.address.pincode,
    ],
  },
  {
    icon: Phone,
    emoji: "📞",
    title: "Call Us",
    lines: siteConfig.phone,
    href: `tel:${siteConfig.phone[0].replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    emoji: "✉️",
    title: "Email Us",
    lines: [siteConfig.email, siteConfig.adminEmail],
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    emoji: "🕐",
    title: "School Hours",
    lines: [
      `Mon-Fri: ${siteConfig.hours.weekdays}`,
      `Sat: ${siteConfig.hours.saturday}`,
      `Sun: ${siteConfig.hours.sunday}`,
    ],
  },
];

const ContactCards = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1
                 mobile-large:grid-cols-2
                 laptop:grid-cols-4
                 gap-4 mobile-large:gap-5 tablet:gap-6"
    >
      {cards.map((card, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          whileHover={{ y: -5 }}
          className="rounded-xl mobile-large:rounded-2xl
                     bg-surface p-5 mobile-large:p-6 tablet:p-7
                     shadow-md ring-1 ring-black/5
                     text-center transition-all hover:shadow-xl"
        >
          <div className="mx-auto mb-3 mobile-large:mb-4
                          flex h-12 w-12 mobile-large:h-14 mobile-large:w-14
                          items-center justify-center rounded-2xl
                          bg-primary/10
                          text-2xl mobile-large:text-3xl">
            {card.emoji}
          </div>
          <h3 className="font-heading text-base
                         mobile-large:text-lg tablet:text-xl
                         font-bold text-text-primary">
            {card.title}
          </h3>
          <div className="mt-2 mobile-large:mt-3 space-y-1">
            {card.lines.map((line, j) => (
              <p
                key={j}
                className="text-xs mobile-large:text-sm
                           text-text-secondary"
              >
                {card.href && j === 0 ? (
                  <a
                    href={card.href}
                    className="hover:text-primary transition-colors"
                  >
                    {line}
                  </a>
                ) : (
                  line
                )}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ContactCards;
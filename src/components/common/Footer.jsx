import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin, Phone, Mail, Clock,
  Facebook, Instagram, Youtube, Twitter,
  Send,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { navLinks } from "@/config/navigationConfig";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema } from "@/utils/validators";
import { toast } from "sonner";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const programs = [
  { label: "Play School", path: "/programs?tab=playschool" },
  { label: "Nursery", path: "/programs?tab=nursery" },
  { label: "LKG", path: "/programs?tab=lkg" },
  { label: "UKG", path: "/programs?tab=ukg" },
];

const socialLinks = [
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
];

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(newsletterSchema),
  });

  const onNewsletterSubmit = (data) => {

    toast.success("Subscribed successfully! 🎉");
    reset();
  };

  return (
    <footer className="bg-text-primary text-white/80">
      {/* Main Footer */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-main
                   py-10 mobile-large:py-12
                   tablet:py-14 laptop:py-16
                   desktop:py-20"
      >
        <div className="grid grid-cols-1
                        mobile-large:grid-cols-2
                        tablet:grid-cols-2
                        laptop:grid-cols-4
                        desktop:grid-cols-5
                        gap-8 mobile-large:gap-10
                        tablet:gap-8 laptop:gap-6
                        desktop:gap-8">
          {/* Column 1: About */}
          <motion.div
            variants={fadeInUp}
            className="mobile-large:col-span-2
                       tablet:col-span-2
                       laptop:col-span-1
                       desktop:col-span-2"
          >
            <Link to="/" className="flex items-center gap-2 mb-4 mobile-large:mb-5">
              <span className="flex h-9 w-9 mobile-large:h-10 mobile-large:w-10
                               items-center justify-center
                               rounded-xl bg-primary
                               text-lg mobile-large:text-xl">
                🏫
              </span>
              <span className="font-heading text-lg mobile-large:text-xl
                               tablet:text-2xl font-bold text-white">
                {siteConfig.schoolName}
              </span>
            </Link>
            <p className="text-sm mobile-large:text-base
                          leading-relaxed text-white/60
                          max-w-xs mobile-large:max-w-sm">
              Nurturing curious minds from Play School to UKG with love,
              creativity, and world-class education since 2008.
            </p>

            {/* Social Icons */}
            <div className="mt-5 mobile-large:mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 mobile-large:h-10 mobile-large:w-10
                             items-center justify-center
                             rounded-xl bg-white/10
                             transition-all hover:bg-primary hover:text-text-primary
                             hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 mobile-large:h-5 mobile-large:w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="mb-4 mobile-large:mb-5
                           text-sm mobile-large:text-base
                           font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 mobile-large:space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm mobile-large:text-base
                               hover:text-primary hover:translate-x-1
                               inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Programs */}
          <motion.div variants={fadeInUp}>
            <h4 className="mb-4 mobile-large:mb-5
                           text-sm mobile-large:text-base
                           font-bold uppercase tracking-wider text-white">
              Programs
            </h4>
            <ul className="space-y-2 mobile-large:space-y-3">
              {programs.map((program) => (
                <li key={program.label}>
                  <Link
                    to={program.path}
                    className="text-sm mobile-large:text-base
                               text-white/60 transition-colors
                               hover:text-primary"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact + Newsletter */}
          <motion.div
            variants={fadeInUp}
            className="mobile-large:col-span-2
                       tablet:col-span-2
                       laptop:col-span-1"
          >
            <h4 className="mb-4 mobile-large:mb-5
                           text-sm mobile-large:text-base
                           font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>

            <ul className="space-y-3 mobile-large:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mobile-large:h-5 mobile-large:w-5
                                   shrink-0 text-primary mt-0.5" />
                <span className="text-xs mobile-large:text-sm text-white/60">
                  {siteConfig.address.line1}, {siteConfig.address.line2},
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} -{" "}
                  {siteConfig.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 mobile-large:h-5 mobile-large:w-5
                                  shrink-0 text-primary" />
                <a
                  href={`tel:${siteConfig.phone[0]}`}
                  className="text-xs mobile-large:text-sm text-white/60
                             hover:text-primary transition-colors"
                >
                  {siteConfig.phone[0]}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 mobile-large:h-5 mobile-large:w-5
                                 shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs mobile-large:text-sm text-white/60
                             hover:text-primary transition-colors
                             break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 mobile-large:h-5 mobile-large:w-5
                                  shrink-0 text-primary" />
                <span className="text-xs mobile-large:text-sm text-white/60">
                  Mon-Fri: {siteConfig.hours.weekdays}
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-5 mobile-large:mt-6">
              <p className="mb-2 mobile-large:mb-3
                            text-xs mobile-large:text-sm font-semibold text-white">
                📬 Subscribe to Newsletter
              </p>
              <form
                onSubmit={handleSubmit(onNewsletterSubmit)}
                className="flex gap-2"
              >
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-xl bg-white/10
                             px-3 py-2 mobile-large:px-4 mobile-large:py-2.5
                             text-xs mobile-large:text-sm text-white
                             placeholder:text-white/40
                             outline-none ring-1 ring-white/10
                             focus:ring-primary transition-all
                             min-w-0"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center
                             h-9 w-9 mobile-large:h-10 mobile-large:w-10
                             rounded-xl bg-primary text-text-primary
                             transition-all hover:scale-105 active:scale-95
                             shrink-0"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              {errors.email && (
                <p className="mt-1 text-xs text-accent">
                  {errors.email.message}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main
                        flex flex-col mobile-large:flex-row
                        items-center justify-between
                        gap-3 mobile-large:gap-4
                        py-4 mobile-large:py-5 tablet:py-6">
          <p className="text-xs mobile-large:text-sm text-white/40 text-center mobile-large:text-left">
            © {new Date().getFullYear()} {siteConfig.schoolName} Pre-School. All
            rights reserved.
          </p>
          <div className="flex items-center gap-3 mobile-large:gap-4
                          text-xs mobile-large:text-sm text-white/40">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
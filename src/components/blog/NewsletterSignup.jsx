import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import Button from "@/components/common/Button";
import { newsletterSchema } from "@/utils/validators";
import { fadeInUp } from "@/utils/animations";

const NewsletterSignup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Subscribed successfully! 🎉");
    reset();
  };

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section-padding"
    >
      <div className="container-narrow">
        <div className="rounded-2xl mobile-large:rounded-3xl
                        bg-linear-to-r from-primary/10 via-secondary/5 to-accent/10
                        p-6 mobile-large:p-8
                        tablet:p-10 desktop:p-14
                        text-center">
          <Mail className="mx-auto mb-3 mobile-large:mb-4
                           h-10 w-10 mobile-large:h-12 mobile-large:w-12
                           text-primary" />

          <h2 className="font-heading text-xl
                         mobile-large:text-2xl tablet:text-3xl
                         font-bold text-text-primary">
            📬 Subscribe to Our Newsletter
          </h2>
          <p className="mt-2 mobile-large:mt-3
                        text-sm mobile-large:text-base
                        text-text-secondary max-w-md mx-auto">
            Get parenting tips, school updates, and activity ideas delivered
            to your inbox!
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-5 mobile-large:mt-6 tablet:mt-8
                       flex flex-col mobile-large:flex-row
                       items-stretch mobile-large:items-center
                       justify-center gap-3 mobile-large:gap-4
                       max-w-lg mx-auto"
          >
            <div className="flex-1">
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-xl mobile-large:rounded-2xl
                           bg-surface px-4 py-3
                           mobile-large:px-5 mobile-large:py-3.5
                           text-sm mobile-large:text-base
                           text-text-primary placeholder:text-text-secondary/50
                           outline-none ring-1 ring-black/10
                           focus:ring-2 focus:ring-primary
                           transition-all shadow-sm"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-accent text-left">
                  {errors.email.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="mobile-large:shrink-0"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="mt-3 text-[10px] mobile-large:text-xs
                        text-text-secondary/60">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsletterSignup;
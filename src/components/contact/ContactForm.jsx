import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Button from "@/components/common/Button";
import { contactSchema } from "@/utils/validators";
import { fadeInUp } from "@/utils/animations";
import { useState } from "react";

const subjectOptions = [
  { value: "", label: "Select Subject" },
  { value: "general", label: "General Inquiry" },
  { value: "admission", label: "Admission Related" },
  { value: "feedback", label: "Feedback" },
  { value: "complaint", label: "Complaint" },
  { value: "career", label: "Career Opportunities" },
  { value: "other", label: "Other" },
];

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Message sent successfully! We'll respond within 24 hours. 🎉");
      setIsSuccess(true);
      reset();

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center
                   rounded-2xl mobile-large:rounded-3xl
                   bg-surface p-8 mobile-large:p-10
                   tablet:p-12 desktop:p-16
                   shadow-md ring-1 ring-black/5 text-center
                   min-h-[400px]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="mb-4 mobile-large:mb-5
                     flex h-16 w-16 mobile-large:h-20 mobile-large:w-20
                     items-center justify-center rounded-full
                     bg-secondary/10"
        >
          <CheckCircle className="h-8 w-8 mobile-large:h-10 mobile-large:w-10
                                  text-secondary" />
        </motion.div>

        <h3 className="font-heading text-xl
                       mobile-large:text-2xl tablet:text-3xl
                       font-bold text-text-primary">
          Message Sent! 🎉
        </h3>
        <p className="mt-2 mobile-large:mt-3
                      text-sm mobile-large:text-base
                      text-text-secondary max-w-sm">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          size="md"
          className="mt-5 mobile-large:mt-6"
          onClick={() => setIsSuccess(false)}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="rounded-2xl mobile-large:rounded-3xl
                      bg-surface p-5 mobile-large:p-6
                      tablet:p-8 desktop:p-10
                      shadow-md ring-1 ring-black/5">
        <h3 className="font-heading text-lg
                       mobile-large:text-xl tablet:text-2xl
                       font-bold text-text-primary
                       mb-5 mobile-large:mb-6 tablet:mb-8">
          ✉️ Send Us a Message
        </h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 mobile-large:space-y-5"
        >
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 phablet:grid-cols-2
                          gap-4 mobile-large:gap-5">
            <Input
              label="Full Name *"
              placeholder="Enter your name"
              error={errors.name?.message}
              {...register("name")}
            />
            <Input
              label="Email Address *"
              type="email"
              placeholder="Enter your email"
              error={errors.email?.message}
              {...register("email")}
            />
          </div>

          {/* Row 2: Phone & Subject */}
          <div className="grid grid-cols-1 phablet:grid-cols-2
                          gap-4 mobile-large:gap-5">
            <Input
              label="Phone Number *"
              type="tel"
              placeholder="10-digit mobile number"
              error={errors.phone?.message}
              {...register("phone")}
            />
            <Select
              label="Subject *"
              options={subjectOptions}
              error={errors.subject?.message}
              {...register("subject")}
            />
          </div>

          {/* Row 3: Message */}
          <Textarea
            label="Message *"
            placeholder="Write your message here..."
            rows={5}
            error={errors.message?.message}
            {...register("message")}
          />

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full phablet:w-auto"
            >
              {isSubmitting ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block"
                  >
                    ⏳
                  </motion.span>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mobile-large:h-5 mobile-large:w-5" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
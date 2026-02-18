import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import SectionHeading from "@/components/common/SectionHeading";
import ProgressBar from "@/components/ui/ProgressBar";
import Button from "@/components/common/Button";
import FormStepChild from "./FormStepChild";
import FormStepParent from "./FormStepParent";
import FormStepAdditional from "./FormStepAdditional";
import FormStepDocuments from "./FormStepDocuments";
import FormStepReview from "./FormStepReview";
import ConfettiEffect from "@/components/animations/ConfettiEffect";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STEPS = [
  { id: 0, title: "Child Info", icon: "👶" },
  { id: 1, title: "Parent Info", icon: "👨‍👩‍👧" },
  { id: 2, title: "Additional", icon: "📋" },
  { id: 3, title: "Documents", icon: "📄" },
  { id: 4, title: "Review", icon: "✅" },
];

const AdmissionForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const updateFormData = (stepData) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };

  const goNext = (stepData) => {
    updateFormData(stepData);
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleFinalSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Application submitted successfully! 🎉");
      setIsSubmitted(true);
      setShowConfetti(true);
    } catch {
      toast.error("Failed to submit. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <section className="section-padding" id="form">
        <div className="container-narrow">
          <ConfettiEffect isActive={showConfetti} count={80} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl mobile-large:rounded-3xl
                       bg-surface p-8 mobile-large:p-10
                       tablet:p-14 desktop:p-16
                       shadow-xl ring-1 ring-black/5
                       text-center"
          >
            <span className="text-5xl mobile-large:text-6xl
                             tablet:text-7xl">
              🎉
            </span>
            <h2 className="mt-4 mobile-large:mt-5
                           font-heading text-2xl
                           mobile-large:text-3xl tablet:text-4xl
                           font-bold text-text-primary">
              Application Submitted!
            </h2>
            <p className="mt-3 mobile-large:mt-4
                          text-sm mobile-large:text-base tablet:text-lg
                          text-text-secondary max-w-lg mx-auto">
              Thank you for choosing Little Bloomers! We'll review your
              application and contact you within 3 business days.
            </p>
            <p className="mt-2 text-xs mobile-large:text-sm text-primary font-medium">
              Application Reference: LB-{Date.now().toString().slice(-8)}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding" id="form">
      <div className="container-narrow">
        <SectionHeading
          title="Admission Application Form 📝"
          subtitle="Fill out the form below to begin the admission process"
        />

        {/* Step Indicators */}
        <div className="mb-6 mobile-large:mb-8">
          <div className="flex items-center justify-center
                          gap-1 mobile-large:gap-2
                          mb-4 mobile-large:mb-5
                          overflow-x-auto scrollbar-none">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`flex items-center gap-1 mobile-large:gap-1.5
                            whitespace-nowrap
                            px-2 py-1 mobile-large:px-3 mobile-large:py-1.5
                            rounded-full text-[9px] mobile-large:text-[10px] tablet:text-xs
                            font-medium transition-all
                            ${i === currentStep
                              ? "bg-primary text-white"
                              : i < currentStep
                              ? "bg-secondary/20 text-secondary"
                              : "bg-background text-text-secondary"
                            }`}
              >
                <span>{step.icon}</span>
                <span className="hidden phablet:inline">{step.title}</span>
              </div>
            ))}
          </div>

          <ProgressBar currentStep={currentStep} totalSteps={STEPS.length} />
        </div>

        {/* Form Steps */}
        <div className="rounded-2xl mobile-large:rounded-3xl
                        bg-surface p-5 mobile-large:p-6
                        tablet:p-8 desktop:p-10
                        shadow-md ring-1 ring-black/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 0 && (
                <FormStepChild
                  data={formData}
                  onNext={goNext}
                />
              )}
              {currentStep === 1 && (
                <FormStepParent
                  data={formData}
                  onNext={goNext}
                  onPrev={goPrev}
                />
              )}
              {currentStep === 2 && (
                <FormStepAdditional
                  data={formData}
                  onNext={goNext}
                  onPrev={goPrev}
                />
              )}
              {currentStep === 3 && (
                <FormStepDocuments
                  data={formData}
                  onNext={goNext}
                  onPrev={goPrev}
                />
              )}
              {currentStep === 4 && (
                <FormStepReview
                  data={formData}
                  onPrev={goPrev}
                  onSubmit={handleFinalSubmit}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
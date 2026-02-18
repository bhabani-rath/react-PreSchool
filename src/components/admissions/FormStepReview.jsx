import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Send } from "lucide-react";
import Button from "@/components/common/Button";
import Checkbox from "@/components/ui/Checkbox";
import { toast } from "sonner";

const ReviewRow = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="flex flex-col phablet:flex-row
                    phablet:items-center gap-1 phablet:gap-4
                    py-2 mobile-large:py-2.5 tablet:py-3
                    border-b border-black/5 last:border-0">
      <span className="text-[10px] mobile-large:text-xs tablet:text-sm
                       font-semibold text-text-secondary uppercase
                       phablet:w-1/3">
        {label}
      </span>
      <span className="text-xs mobile-large:text-sm tablet:text-base
                       text-text-primary phablet:w-2/3">
        {value}
      </span>
    </div>
  );
};

const FormStepReview = ({ data, onPrev, onSubmit }) => {
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!agreed) {
      toast.warning("Please agree to the terms and conditions");
      return;
    }
    setIsSubmitting(true);
    await onSubmit();
    setIsSubmitting(false);
  };

  const programLabels = {
    playschool: "Play School",
    nursery: "Nursery",
    lkg: "LKG",
    ukg: "UKG",
  };

  return (
    <div>
      <h3 className="font-heading text-lg mobile-large:text-xl tablet:text-2xl
                     font-bold text-text-primary mb-5 mobile-large:mb-6">
        ✅ Review Your Application
      </h3>

      <div className="space-y-5 mobile-large:space-y-6">
        {/* Child Info */}
        <div className="rounded-xl mobile-large:rounded-2xl
                        bg-background p-4 mobile-large:p-5 tablet:p-6">
          <h4 className="text-sm mobile-large:text-base font-bold
                         text-primary mb-3 mobile-large:mb-4">
            👶 Child Information
          </h4>
          <ReviewRow label="Name" value={data.childName} />
          <ReviewRow label="Date of Birth" value={data.dateOfBirth} />
          <ReviewRow label="Gender" value={data.gender} />
          <ReviewRow
            label="Program"
            value={programLabels[data.programApplying] || data.programApplying}
          />
          <ReviewRow label="Blood Group" value={data.bloodGroup} />
        </div>

        {/* Parent Info */}
        <div className="rounded-xl mobile-large:rounded-2xl
                        bg-background p-4 mobile-large:p-5 tablet:p-6">
          <h4 className="text-sm mobile-large:text-base font-bold
                         text-primary mb-3 mobile-large:mb-4">
            👨‍👩‍👧 Parent Information
          </h4>
          <ReviewRow label="Father's Name" value={data.fatherName} />
          <ReviewRow label="Father's Phone" value={data.fatherPhone} />
          <ReviewRow label="Father's Email" value={data.fatherEmail} />
          <ReviewRow label="Mother's Name" value={data.motherName} />
          <ReviewRow label="Mother's Phone" value={data.motherPhone} />
          <ReviewRow label="Address" value={data.address} />
        </div>

        {/* Additional Info */}
        <div className="rounded-xl mobile-large:rounded-2xl
                        bg-background p-4 mobile-large:p-5 tablet:p-6">
          <h4 className="text-sm mobile-large:text-base font-bold
                         text-primary mb-3 mobile-large:mb-4">
            📋 Additional Information
          </h4>
          <ReviewRow label="Previous School" value={data.previousSchool} />
          <ReviewRow label="Medical Conditions" value={data.medicalConditions} />
          <ReviewRow label="Allergies" value={data.allergies} />
          <ReviewRow label="Heard From" value={data.heardFrom} />
          <ReviewRow label="Visit Date" value={data.preferredVisitDate} />
        </div>

        {/* Documents */}
        <div className="rounded-xl mobile-large:rounded-2xl
                        bg-background p-4 mobile-large:p-5 tablet:p-6">
          <h4 className="text-sm mobile-large:text-base font-bold
                         text-primary mb-3 mobile-large:mb-4">
            📄 Documents Uploaded
          </h4>
          <ReviewRow
            label="Birth Certificate"
            value={data.birthCertificate?.length > 0 ? "✅ Uploaded" : "❌ Not uploaded"}
          />
          <ReviewRow
            label="Child Photo"
            value={data.childPhoto?.length > 0 ? "✅ Uploaded" : "❌ Not uploaded"}
          />
          <ReviewRow
            label="Aadhaar Card"
            value={data.aadhaarCard?.length > 0 ? "✅ Uploaded" : "— Skipped"}
          />
        </div>

        {/* Terms & Conditions */}
        <Checkbox
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        >
          I confirm that all the information provided is accurate. I agree to
          the{" "}
          <a href="/terms" className="text-primary underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-primary underline">
            Privacy Policy
          </a>{" "}
          of Little Bloomers Pre-School.
        </Checkbox>
      </div>

      {/* Navigation */}
      <div className="mt-6 mobile-large:mt-8
                      flex flex-col-reverse mobile-large:flex-row
                      justify-between gap-3 mobile-large:gap-4">
        <Button
          type="button"
          variant="ghost"
          size="lg"
          onClick={onPrev}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={isSubmitting || !agreed}
          className={!agreed ? "opacity-50" : ""}
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
              Submitting...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Submit Application
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default FormStepReview;
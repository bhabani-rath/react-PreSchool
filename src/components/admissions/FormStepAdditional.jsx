import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Button from "@/components/common/Button";
import { additionalInfoSchema } from "@/utils/validators";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heardFromOptions = [
  { value: "", label: "Select an option" },
  { value: "social_media", label: "Social Media" },
  { value: "newspaper", label: "Newspaper" },
  { value: "friend", label: "Friend / Relative" },
  { value: "website", label: "Website / Google" },
  { value: "other", label: "Other" },
];

const FormStepAdditional = ({ data, onNext, onPrev }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(additionalInfoSchema),
    defaultValues: {
      previousSchool: data.previousSchool || "",
      medicalConditions: data.medicalConditions || "",
      allergies: data.allergies || "",
      heardFrom: data.heardFrom || "",
      preferredVisitDate: data.preferredVisitDate || "",
      specialRequirements: data.specialRequirements || "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <h3 className="font-heading text-lg mobile-large:text-xl tablet:text-2xl
                     font-bold text-text-primary mb-5 mobile-large:mb-6">
        📋 Additional Information
      </h3>

      <div className="space-y-4 mobile-large:space-y-5">
        <Input
          label="Previous School (if any)"
          placeholder="Enter previous school name"
          {...register("previousSchool")}
        />

        <div className="grid grid-cols-1 phablet:grid-cols-2
                        gap-4 mobile-large:gap-5">
          <Textarea
            label="Medical Conditions (if any)"
            placeholder="Any medical conditions we should know about"
            rows={3}
            {...register("medicalConditions")}
          />
          <Textarea
            label="Allergies (if any)"
            placeholder="Food allergies, drug allergies, etc."
            rows={3}
            {...register("allergies")}
          />
        </div>

        <div className="grid grid-cols-1 phablet:grid-cols-2
                        gap-4 mobile-large:gap-5">
          <Select
            label="How did you hear about us? *"
            options={heardFromOptions}
            error={errors.heardFrom?.message}
            {...register("heardFrom")}
          />
          <Input
            label="Preferred Campus Visit Date"
            type="date"
            {...register("preferredVisitDate")}
          />
        </div>

        <Textarea
          label="Any Special Requirements"
          placeholder="Special needs, dietary requirements, etc."
          rows={3}
          {...register("specialRequirements")}
        />
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
        <Button type="submit" size="lg">
          Next: Upload Documents
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default FormStepAdditional;
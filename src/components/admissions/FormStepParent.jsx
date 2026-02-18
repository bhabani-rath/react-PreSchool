import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/common/Button";
import { parentInfoSchema } from "@/utils/validators";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FormStepParent = ({ data, onNext, onPrev }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(parentInfoSchema),
    defaultValues: {
      fatherName: data.fatherName || "",
      fatherOccupation: data.fatherOccupation || "",
      fatherPhone: data.fatherPhone || "",
      fatherEmail: data.fatherEmail || "",
      motherName: data.motherName || "",
      motherOccupation: data.motherOccupation || "",
      motherPhone: data.motherPhone || "",
      address: data.address || "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <h3 className="font-heading text-lg mobile-large:text-xl tablet:text-2xl
                     font-bold text-text-primary mb-5 mobile-large:mb-6">
        👨‍👩‍👧 Parent / Guardian Information
      </h3>

      <div className="space-y-4 mobile-large:space-y-5">
        {/* Father's Details */}
        <p className="text-sm mobile-large:text-base font-semibold
                      text-text-primary border-b border-black/10 pb-2">
          Father's Details
        </p>

        <div className="grid grid-cols-1 phablet:grid-cols-2
                        gap-4 mobile-large:gap-5">
          <Input
            label="Father's Full Name *"
            placeholder="Enter father's name"
            error={errors.fatherName?.message}
            {...register("fatherName")}
          />
          <Input
            label="Occupation *"
            placeholder="Enter occupation"
            error={errors.fatherOccupation?.message}
            {...register("fatherOccupation")}
          />
        </div>

        <div className="grid grid-cols-1 phablet:grid-cols-2
                        gap-4 mobile-large:gap-5">
          <Input
            label="Phone Number *"
            type="tel"
            placeholder="10-digit mobile number"
            error={errors.fatherPhone?.message}
            {...register("fatherPhone")}
          />
          <Input
            label="Email Address *"
            type="email"
            placeholder="Enter email"
            error={errors.fatherEmail?.message}
            {...register("fatherEmail")}
          />
        </div>

        {/* Mother's Details */}
        <p className="text-sm mobile-large:text-base font-semibold
                      text-text-primary border-b border-black/10 pb-2 pt-2">
          Mother's Details
        </p>

        <div className="grid grid-cols-1 phablet:grid-cols-2
                        gap-4 mobile-large:gap-5">
          <Input
            label="Mother's Full Name *"
            placeholder="Enter mother's name"
            error={errors.motherName?.message}
            {...register("motherName")}
          />
          <Input
            label="Occupation *"
            placeholder="Enter occupation"
            error={errors.motherOccupation?.message}
            {...register("motherOccupation")}
          />
        </div>

        <Input
          label="Phone Number *"
          type="tel"
          placeholder="10-digit mobile number"
          error={errors.motherPhone?.message}
          {...register("motherPhone")}
        />

        {/* Address */}
        <Textarea
          label="Complete Address *"
          placeholder="House No, Street, Area, City, State, PIN Code"
          rows={3}
          error={errors.address?.message}
          {...register("address")}
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
          Next: Additional Info
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default FormStepParent;
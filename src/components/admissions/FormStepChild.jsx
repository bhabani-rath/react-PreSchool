import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import RadioGroup from "@/components/ui/RadioGroup";
import Button from "@/components/common/Button";
import { childInfoSchema } from "@/utils/validators";
import { ChevronRight } from "lucide-react";

const programOptions = [
  { value: "", label: "Select Program" },
  { value: "playschool", label: "Play School (2-3 yrs)" },
  { value: "nursery", label: "Nursery (3-4 yrs)" },
  { value: "lkg", label: "LKG (4-5 yrs)" },
  { value: "ukg", label: "UKG (5-6 yrs)" },
];

const bloodGroupOptions = [
  { value: "", label: "Select Blood Group" },
  { value: "A+", label: "A+" }, { value: "A-", label: "A-" },
  { value: "B+", label: "B+" }, { value: "B-", label: "B-" },
  { value: "O+", label: "O+" }, { value: "O-", label: "O-" },
  { value: "AB+", label: "AB+" }, { value: "AB-", label: "AB-" },
];

const FormStepChild = ({ data, onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(childInfoSchema),
    defaultValues: {
      childName: data.childName || "",
      dateOfBirth: data.dateOfBirth || "",
      gender: data.gender || "",
      programApplying: data.programApplying || "",
      bloodGroup: data.bloodGroup || "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <h3 className="font-heading text-lg mobile-large:text-xl tablet:text-2xl
                     font-bold text-text-primary mb-5 mobile-large:mb-6">
        👶 Child Information
      </h3>

      <div className="space-y-4 mobile-large:space-y-5">
        <Input
          label="Child's Full Name *"
          placeholder="Enter child's name"
          error={errors.childName?.message}
          {...register("childName")}
        />

        <div className="grid grid-cols-1 phablet:grid-cols-2 gap-4 mobile-large:gap-5">
          <Input
            label="Date of Birth *"
            type="date"
            error={errors.dateOfBirth?.message}
            {...register("dateOfBirth")}
          />
          <Select
            label="Program Applying For *"
            options={programOptions}
            error={errors.programApplying?.message}
            {...register("programApplying")}
          />
        </div>

        <RadioGroup
          label="Gender *"
          name="gender"
          direction="horizontal"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
          ]}
          error={errors.gender?.message}
          {...register("gender")}
        />

        <Select
          label="Blood Group (Optional)"
          options={bloodGroupOptions}
          {...register("bloodGroup")}
        />
      </div>

          <div className="mt-6 mobile-large:mt-8 flex justify-end">
        <Button type="submit" size="lg">
          Next: Parent Info
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default FormStepChild;
import { useState } from "react";
import Button from "@/components/common/Button";
import FileUpload from "@/components/ui/FileUpload";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const FormStepDocuments = ({ data, onNext, onPrev }) => {
  const [birthCert, setBirthCert] = useState(data.birthCertificate || []);
  const [childPhoto, setChildPhoto] = useState(data.childPhoto || []);
  const [aadhaar, setAadhaar] = useState(data.aadhaarCard || []);

  const handleNext = () => {
    if (birthCert.length === 0) {
      toast.error("Please upload the birth certificate");
      return;
    }
    if (childPhoto.length === 0) {
      toast.error("Please upload the child's photo");
      return;
    }

    onNext({
      birthCertificate: birthCert,
      childPhoto: childPhoto,
      aadhaarCard: aadhaar,
    });
  };

  return (
    <div>
      <h3 className="font-heading text-lg mobile-large:text-xl tablet:text-2xl
                     font-bold text-text-primary mb-5 mobile-large:mb-6">
        📄 Upload Documents
      </h3>

      <div className="space-y-5 mobile-large:space-y-6">
        <FileUpload
          label="Birth Certificate * (PDF, JPG, PNG — Max 5MB)"
          accept={{
            "image/*": [".jpeg", ".jpg", ".png"],
            "application/pdf": [".pdf"],
          }}
          maxSize={5 * 1024 * 1024}
          onFileChange={setBirthCert}
          error={birthCert.length === 0 ? "" : ""}
        />

        <FileUpload
          label="Child's Passport Size Photo * (JPG, PNG — Max 2MB)"
          accept={{
            "image/*": [".jpeg", ".jpg", ".png"],
          }}
          maxSize={2 * 1024 * 1024}
          onFileChange={setChildPhoto}
        />

        <FileUpload
          label="Aadhaar Card (Optional) (PDF, JPG, PNG — Max 5MB)"
          accept={{
            "image/*": [".jpeg", ".jpg", ".png"],
            "application/pdf": [".pdf"],
          }}
          maxSize={5 * 1024 * 1024}
          onFileChange={setAadhaar}
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
        <Button size="lg" onClick={handleNext}>
          Next: Review
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FormStepDocuments;
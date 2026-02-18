import { z } from "zod";

// ── Contact Form Schema ──
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message is too long"),
});

// ── Newsletter Schema ──
export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

// ── Admission Form: Step 1 - Child Info ──
export const childInfoSchema = z.object({
  childName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Please select gender" }),
  }),
  programApplying: z.enum(["playschool", "nursery", "lkg", "ukg"], {
    errorMap: () => ({ message: "Please select a program" }),
  }),
  bloodGroup: z.string().optional(),
});

// ── Admission Form: Step 2 - Parent Info ──
export const parentInfoSchema = z.object({
  fatherName: z.string().min(2, "Father's name is required"),
  fatherOccupation: z.string().min(2, "Occupation is required"),
  fatherPhone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Invalid phone number"),
  fatherEmail: z.string().email("Invalid email"),
  motherName: z.string().min(2, "Mother's name is required"),
  motherOccupation: z.string().min(2, "Occupation is required"),
  motherPhone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Invalid phone number"),
  address: z.string().min(10, "Please enter your full address"),
});

// ── Admission Form: Step 3 - Additional Info ──
export const additionalInfoSchema = z.object({
  previousSchool: z.string().optional(),
  medicalConditions: z.string().optional(),
  allergies: z.string().optional(),
  heardFrom: z.string().min(1, "Please select an option"),
  preferredVisitDate: z.string().optional(),
  specialRequirements: z.string().optional(),
});

// ── Admission Form: Step 4 - Documents ──
export const documentSchema = z.object({
  birthCertificate: z
    .any()
    .refine((files) => files?.length > 0, "Birth certificate is required"),
  childPhoto: z
    .any()
    .refine((files) => files?.length > 0, "Child photo is required"),
  aadhaarCard: z.any().optional(),
});
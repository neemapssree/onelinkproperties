"use server";

import connectDB from "@/lib/mongodb";
import LeadNew from "@/models/LeadNew";
import {
  FormInputType,
  FormSchema,
} from "@/app/schemas/formSchema";

export async function submitFormAction(data: FormInputType) {
  const validation = FormSchema.safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      message: "Please check the form fields.",
    };
  }

  try {
    await connectDB();

    const lead = await LeadNew.create(validation.data);

    return {
      success: true,
      message: "Thank you! Your enquiry has been submitted.",
      leadId: lead._id.toString(),
    };
  } catch (error) {
    console.error("Lead submission error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  FormInputType,
  FormSchema,
} from "@/app/schemas/formSchema";

import { submitFormAction } from "@/app/formAction";

import {
  ChevronRight,
  MailIcon,
  MessageCircle,
  PhoneCall,
  UserIcon,
} from "lucide-react";

export default function ContactForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInputType>({
    resolver: zodResolver(FormSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormInputType) => {
    setSuccessMessage("");
    setServerError("");

    const result = await submitFormAction(data);

    if (result.success) {
        setSuccessMessage(result.message);
        reset();
    } else {
        setServerError(result.message);
    }
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-4 py-4"
    >
      <div className="w-full space-y-5">

        {/* Name */}
        <div>
          <div className="relative w-full">
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              autoComplete="name"
              {...register("name")}
              className="w-full border-b p-2 outline-none"
              placeholder="Enter Full Name"
              aria-invalid={!!errors.name}
            />

            <UserIcon
              size={18}
              className="absolute right-0 top-3 text-[#828282]"
              aria-hidden="true"
            />
          </div>

          {errors.name && (
            <p className="mt-1 text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <div className="relative w-full">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              className="w-full border-b p-2 outline-none"
              placeholder="Enter Email Address"
              aria-invalid={!!errors.email}
            />

            <MailIcon
              size={18}
              className="absolute right-0 top-3 text-[#828282]"
              aria-hidden="true"
            />
          </div>

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <div className="relative w-full">
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              {...register("phone")}
              className="w-full border-b p-2 outline-none"
              placeholder="Enter Phone Number"
              aria-invalid={!!errors.phone}
            />

            <PhoneCall
              size={18}
              className="absolute right-0 top-3 text-[#828282]"
              aria-hidden="true"
            />
          </div>

          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <div className="relative w-full">
            <label htmlFor="message" className="sr-only">
              Message
            </label>

            <textarea
              id="message"
              {...register("message")}
              className="w-full border-b p-2 outline-none"
              placeholder="Message"
              rows={3}
              aria-invalid={!!errors.message}
            />

            <MessageCircle
              size={18}
              className="absolute right-0 top-3 text-[#828282]"
              aria-hidden="true"
            />
          </div>

          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Server error */}
        {serverError && (
          <p className="text-sm text-red-500" role="alert">
            {serverError}
          </p>
        )}

        {/* Success */}
        {successMessage && (
          <p className="text-sm text-green-600" role="status">
            {successMessage}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex gap-3 rounded-xl bg-black px-5 py-2 text-white disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Submit"}

          {!isSubmitting && <ChevronRight size={20} />}
        </button>
      </div>
    </form>
  );
}
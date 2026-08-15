'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInputType, FormSchema, submitFormAction } from "@/app/formAction";
import { ChevronRight, MailIcon, MessageCircle, PhoneCall, UserIcon } from "lucide-react";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting},
        reset
    } = useForm<FormInputType>({
        resolver: zodResolver(FormSchema),
        defaultValues: {name: '', email: '', phone: '', message:''}
    });

    const onSubmit = async (data: FormInputType) => {
        const result = await submitFormAction(data)
        
        if (result.success) {
        alert(result.message)
        reset() // Clear the form fields upon success
        } else {
        alert("Submission failed on the server.")
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4 w-full">
        <div className="space-y-5 w-full">
            <div className="relative w-full">
                <input 
                {...register('name')}
                className="border-b p-2 w-full"
                placeholder="Enter Full Name"
                />  
                <UserIcon size={18} color="#828282" className="absolute right-0 top-3" />              
            </div>
            

            {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}

            <div className="relative w-full">
                <input 
                {...register('email')}
                className="border-b p-2 w-full"
                placeholder="Enter Email Address"
                />
                <MailIcon size={18}  color="#828282" className="absolute right-0 top-3" /> 
            </div>
            {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
            <div className="relative w-full">
                <input 
                {...register('phone')}
                className="border-b p-2 w-full"
                placeholder="Enter Phone Number"
                />
                <PhoneCall size={18}  color="#828282" className="absolute right-0 top-3" /> 
            </div>
            {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}

            <div className="relative w-full">
                <textarea 
                {...register('message')}
                className="border-b p-2 w-full"
                placeholder="message"
                />
                <MessageCircle size={18} color="#828282" className="absolute right-0 top-3" /> 
            </div>
            {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="flex gap-3 bg-black text-white px-5 py-2 rounded-xl disabled:bg-gray-400"
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
                <ChevronRight />
            </button>
        </div>
    </form>
  )
}
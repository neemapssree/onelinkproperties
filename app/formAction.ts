

import { z } from "zod" // Fixed: Cleaned up invalid named imports
import { isValidPhoneNumber } from "libphonenumber-js"

export const FormSchema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 letters' }),
    email: z.string().email({ message: "Please enter a valid email address." }), // Fixed: Changed from z.email to z.string().email
    phone: z.string()
        .min(1, { message: "Phone number is required" })
        .refine((val) => isValidPhoneNumber(val), {
            message: "Please enter a valid international phone number"
        }),
    message: z.string()
});

export type FormInputType = z.infer<typeof FormSchema>

export async function submitFormAction(data: FormInputType) {
    const validatedFields = FormSchema.safeParse(data);

    if (!validatedFields.success) {
        return { success: false, errors: validatedFields.error.flatten().fieldErrors }
    } 

    console.log("Server received validated data:", validatedFields.data);
    return { success: true, message: "Form submitted successfully!" }
}

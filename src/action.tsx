"use server";
import { type CreateEmailResponseSuccess, Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendEmailAction = async (
  formData: ContactFormData
): Promise<{ data: CreateEmailResponseSuccess | string; error: string }> => {
  const { name, email, message } = formData;
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["shivneeraj2004@gmail.com"],
      subject: `New message from ${name}`,
      react: <EmailTemplate name={name} email={email} message={message} />,
    });

    if (error) {
      return { data: "", error: error.message };
    }
    return { data: data || "Success", error: "" };
  } catch (err) {
    return { data: "", error: (err as Error).message };
  }
};

"use server";
import { type CreateEmailResponseSuccess, ErrorResponse, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailAction = async (
  body: string
): Promise<{ data: CreateEmailResponseSuccess | string; error: string }> => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["shivneeraj2004@gmail.com"],
    subject: "hello world",
    html: body,
  });
  if (error) {
    return { data: "", error: error.message };
  }
  return { data, error: "" };
};

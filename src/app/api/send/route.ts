import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["shivneeraj2004@gmail.com"],
      subject: `New message from ${name}`,
      reply_to: email,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Catch error:", error);
    return Response.json({ error: "An unknown error occurred." }, { status: 500 });
  }
}

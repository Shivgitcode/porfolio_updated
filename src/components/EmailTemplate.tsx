import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: "sans-serif", padding: "20px", color: "#333" }}>
    <h2>New Contact Form Submission</h2>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <hr />
    <p>
      <strong>Message:</strong>
    </p>
    <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
  </div>
);

export default EmailTemplate;
import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  resume: any;
  phone: string;
  coverLetter: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  phone,
  resume,
  coverLetter,
}) => (
  <div>
    <p>
      New Application from <span className="font-bold">{fullName}</span>!
    </p>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>Download Resume:</p>
    <>{resume}</>
    <p>Cover Letter: {coverLetter}</p>
  </div>
);

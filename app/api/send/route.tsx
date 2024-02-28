// import { createTransport } from "nodemailer";

// import { NextResponse } from "next/server";

// export async function POST(req: Request, res: Response) {
//   try {
//     const { fullName, email, phone, coverLetter } = await req.json();

//     const transporter = createTransport({
//       host: "smtp-mail.outlook.com",
//       port: 587,
//       secure: false,

//       auth: {
//         user: "sabdulrehman67@gmail.com",
//         pass: "mynameissameer",
//       },
//     });

//     console.log("Response Object:");

//     const mailOptions = {
//       from: "sabdulrehman67@gmail.com",
//       to: "msameer.x9@gmail.com",
//       subject: "New Job Application",
//       text: `
//                 Full Name: ${fullName}
//                 Email: ${email}
//                 Phone Number: ${phone}
//                 Cover Letter: ${coverLetter}
//   `,
//     };

//     await new Promise((resolve, reject) => {
//       transporter.sendMail(mailOptions, (err: any, response) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(response);
//         }
//       });
//     });

//     return NextResponse.json({
//       message: "Email sent successfully",
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Email sending error:", error);
//   }
// }

import { EmailTemplate } from "../../sharedComponents/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend("re_DJ7gyoUR_KND5NHc3wkXx7C5hXY6oUtou");
export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Job Applicant <onboarding@resend.dev>",
      to: ["sabdulrehman67@gmail.com"],
      subject: "Hello world",
      text: "Hello world",
      react: EmailTemplate({
        fullName: $fullName,
        email: $email,
        phone: $phone,
        resume: $resume,
        coverLetter: $coverLetter,
      }),
    });
    console.log(data);
    // return Response.json(data);
  } catch (error) {
    console.log(error);
    // return Response.json({ error });
  }
}

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message, phoneNumber, businessName } = body;

  try {
    await resend.emails.send({
      from: `${process.env.WEBSITE_EMAIL!}`,
      to: `${process.env.MY_EMAIL!}`,
      subject: "New Website Inquiry",
      html: `
        <h2>New Lead</h2>
        <p>Name: ${name}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Email: ${email}</p>
        <p>Business Name: ${businessName}</p>
        <p>Message: ${message}</p>
      `,
    });

    await resend.emails.send({
      from: `Mario Granados <${process.env.AUTO_EMAIL}>`,
      to: email,
      subject: "Thanks for contacting me",
      html: `<h2>Thanks for reaching out, ${name}!</h2>

<p>I’ve received your message and will review it as soon as possible.</p>

<p>I typically respond within 1–2 business days.</p>

<p>
Thanks for your interest in my web development services — I appreciate it.
</p>

<hr />

<p><strong>Please do not reply to this email.</strong></p>

<p>Mario Granados<br/>Web Developer & Technical Support</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

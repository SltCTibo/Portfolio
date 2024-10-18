import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
            host: "smtp-relay.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })

        try {
            await transporter.sendMail({
                from: email,
                to: "thibault.barbe1069@gmail.com",
                subject: subject,
                text: message
            })

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (e) {
            console.error("Error sending email: ", e);
            res.status(500).json({ message: "Method not allowed" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
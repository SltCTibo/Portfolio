import Mailjet from "node-mailjet";

export async function POST(req) {
    const { name, email, subject, message } = await req.json();

    const mailjet = new Mailjet({
        apiKey: process.env.API_KEY_MAILJET,
        apiSecret: process.env.SECRET_KEY_MAILJET
    });

    try {
        const result = await mailjet
        .post('send', {version: "v3.1"})
        .request({
            Messages: [
                {
                    From: {
                        Email: "thibault.barbe1069@gmail.com",
                        Name: name
                    },
                    To: [
                        {
                            Email: "thibault.barbe1069@gmail.com",
                            Name: "Thibault BARBE"
                        }
                    ],
                    Subject: subject,
                    TextPart: message,
                    HTMLPart: `<p>${message}</p><p>${email}</p>`
                }
            ]
        });

        console.log("result: ", result.body);
        return Response.json({ message: 'Email sent successfully' });
    } catch (e) {
        console.error("Error sending email: ", e);
        return Response.json({ message: "Method not allowed" });
    }
}
const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    try {
        let transporter = await nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'breana.dietrich78@ethereal.email',
                pass: '4PSAMzKtxp27ZsAhNA'
    } 
});
        let info = await transporter.sendMail({
            from: '"Paco" <terry.feeney@ethereal.email>', 
            to: "Prachi@gmail.com",
            subject: "Hello",
            text: "Hello, your order is placed!",
            html: "<b>Hello, your order is placed!</b>",
        });

        console.log("Message sent: %s", info.messageId);
        res.json(info);
    } catch (error) {
        console.error("Error sending mail:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = sendMail;
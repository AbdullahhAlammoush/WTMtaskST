///////////////////////////////////////////////////////////
const nodemailer = require("nodemailer");

const send = async (req, res) => {
  const email = req.body.email;
  console.log(email);
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "abd123hussein456@gmail.com",
      pass: "AH123456",
    },
  });

  const msg = {
    from: "Abdullah8in8@gmail.com",
    to: `${email}`,
    subject: "Sup",
    text: "Long time no see",
  };
  const info = await transporter.sendMail(msg);

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.send("Email Sent!");
};
module.exports = { send };

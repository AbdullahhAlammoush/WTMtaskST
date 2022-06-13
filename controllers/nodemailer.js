///////////////////////////////////////////////////////////
const nodemailer = require("nodemailer");

const send = async (req, res) => {
  const email = req.body.email;
  console.log(email);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "abd123hussein456@gmail.com", // ethereal user
      pass: "AH123456", // ethereal password
    },
  });

  const msg = {
    from: "Abdullah8in8@gmail.com", // sender address
    to: `${email}`, // list of receivers
    subject: "Sup", // Subject line
    text: "Long time no see", // plain text body
  };
  // send mail with defined transport object
  const info = await transporter.sendMail(msg);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.send("Email Sent!");
};
module.exports = { send };

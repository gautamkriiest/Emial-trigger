import {bind, /* inject, */ BindingScope} from '@loopback/core';
import {SentMessageInfo} from 'nodemailer';
import Mail = require('nodemailer/lib/mailer');
const nodemailer = require("nodemailer");
@bind({scope: BindingScope.TRANSIENT})
export class MailerService {
  async sendMail(mailOptions: Mail.Options): Promise<SentMessageInfo> {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: 'YourGmailId',
        pass: 'yourGmailPass'
      }
    });
    return await transporter.sendMail(mailOptions);
  }
}

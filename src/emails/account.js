const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    to: 'mearpita.7@gmail.com',
    from: 'mearpita.7@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you'
});


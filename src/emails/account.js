const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SEND_GRID_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'anson1014@hotmail.com',
        subject: 'Welcome to the app!',
        text: `Dear ${name}, Thanks for joining the app!`,
    });
};

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'anson1014@hotmail.com',
        subject: "We're sorry to see you go",
        text: `OK ${name}, We\'ve deleted you account.`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail,
};

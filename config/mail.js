const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const sendMail = (name, email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'steven.wepburo@gmail.com',
            pass: process.env.EMAIL_PASS
        }
    })

    const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve('./mail/'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./mail/'),
    }

    transporter.use('compile', hbs(handlebarOptions))
    
    const mailOptions = {
        from: '"Wepburo" <steven@wepburo.nl>',
        to: email,
        subject: 'Welcome!',
        template: 'email',
        context: {
            name: name, // replace {{name}} in template file
        }
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response)
    })
}

module.exports = {
    sendEmail: sendMail
}
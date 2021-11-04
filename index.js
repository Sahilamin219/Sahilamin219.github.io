// var nodemailer = require('nodemailer');
var x = document.getElementById("myEmail"); 
var y = document.getElementById("mySub"); 
var z = document.getElementById("myMsg");
var a = document.getElementById("myName");


function sendEmail() {
    Email.send({
    Host: "smtp.gmail.com",
    Username : x,
    Password : "Tempsahil@890",
    To : "sahilamin219@gmail.com",
    From : x,
    Subject : y,
    Body : z,
    }).then(
        message => alert("mail sent successfully")
    );
}

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'sahilamin219@gmail.com',
//     pass: '#'
//   }
// });

// var mailOptions = {
//   from: 'sahilamin219@gmail.com',
//   to: 'sahilamin219@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// }); 
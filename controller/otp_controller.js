var add_otp = require('../model/otp_model');
var nodemailer = require('nodemailer');
const storage = require('node-persist');
storage.init( /* options ... */ );


exports.insert = async (req,res) => {

var otp=Math.floor(100000 + Math.random() * 900000);
await storage.setItem('OTP',otp)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'janjarukiyad@gmail.com',
          pass: 'amoh bsil ujav avpg'
        }
      });
      
      var mailOptions = {
        from: 'janjarukiyad@gmail.com',
        to: req.body.email,
        subject:'Sending Email using Node.js',
        text: 'your otp is '+otp
      };
      
      transporter.sendMail(mailOptions, async function(error, info){
        if (error) {
          console.log(error);
        } else {
            var data = await add_otp.create(req.body);
            res.status(200).json({
                status:"data insert",
                data
            })
        }
      });
}

exports.verifyotp = async (req,res)=>{

    var otp = req.body.otp;

        var old_otp = await storage.getItem('OTP');

        if(old_otp!=0)
        {
            if(otp==old_otp)
            {
                    await storage.setItem('OTP',0);

                res.status(200).json({
                    status:"OTP Verifiy"
                })
            }else{
                res.status(200).json({
                    status:"Enter Right OTP"
                })
            }
        }else{
            res.status(200).json({
                status:"OTP is Not valide"
            })
        }

}
   


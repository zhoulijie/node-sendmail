var nodemailer = require('nodemailer');
//配置邮件
var transporter = nodemailer.createTransport('SMTP',{
    host: "smtp.163.com",
    secureConnection: true,
    port:465,
    auth: {
        user: 'xxxxx@163.com',
        pass: 'xxxxx',
    }
});
//发送邮件
var sendmail = function(html){
    var option = {
        from:"xxxxx@163.com",
        to:"xxxxx@qq.com,xxxxx@163.com"
    }
    option.subject = '你好iVan'
    option.html= html;
    transporter.sendMail(option, function(error, response){
        if(error){
            console.log("fail: " + error);
        }else{
            console.log("success: " + response.message);
        }
    });
}
//调用发送邮件
sendmail("邮件内容：<br/>这是来自nodemailer发送的邮件！iVan");
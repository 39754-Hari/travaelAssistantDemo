var nodemailer 	= require('nodemailer');
var fs 			= require('fs');
var path		= require('path');	
var mailer = {
mailPackageDetails:function(){
	return new Promise(function(resolve, reject){
		var mailContent='';
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'hexatestmailer@gmail.com',
				pass: 'Hexaware@987'
			}
		});
		readModuleFile('./mail.html').then((words)=> {
			//console.log(words);
			mailContent =words;			
			var mailOptions = {
			from: 'hexatestmailer@gmail.com',
			//to:'wilfredf@hexaware.com,saisub@hexaware.com,omprakashr@hexaware.com,harikrishnanv@hexaware.com',
			to:'harikrishnanv@hexaware.com,shrutivi@hexaware.com,ArunkT@hexaware.com,shrutivi.hexaware@gmail.com',
			subject: 'Package details',
			//html: "<div>Hi,</div><div style='margin-left:10px;margin-bottom:5px'>Greetings from TTC!!!</div><center>Package info- <i>WONDERS OF ITALY *NEW* - 11 DAYS, 9 CITIES</i></center><div style='margin-top:15px;'><b>ABOUT THIS TRIP</b></div><div>Pay tribute to the extraordinary masterpieces of Italy's greats - the captivating arias of Puccini and splendour of da Vinci, Michelangelo and Botticelli's talents in their full glory throughout this enduring exploration of Italy's alluring art, architecture and old-world charm. See the city of one hundred churches, the imposing towers of picturesque San Gimignano and the seas of pastel pinks, yellows and blues that cling dramatically to the Cinque Terre's Ligurian cliffs.</div><ul><li>10 NIGHTS - accommodation</li><li>15 MEALS - 10 hot buffet breakfasts,1 lunch (Be My Guest),4 dinners with local wine</li><li>ON-TRIP TRANSPORT - All transport shown.</li></ul><div>Regards,</div><div>TTC Team</div>"
			html:""+mailContent+"",
		  };
		  console.log('mailoptin',mailOptions);
		  transporter.sendMail(mailOptions, function(error, info){
			if (error) {
				console.log(error);
				reject(error);
			} else {
				console.log(info.response);
				resolve(info);
			}
		});
		});
		
		
	});
}

}
function readModuleFile(path) {
	return new Promise(function(resolve, reject){
    try {
        var filename = require.resolve(path);
		var mail = fs.readFileSync(filename, 'utf8');
		console.log('in function',mail);
		resolve(mail);
    } catch (e) {
        reject(e);
	}
});
}



module.exports = mailer;


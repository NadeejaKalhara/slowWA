const wbm = require(__dirname+'/nadee');

const TeleBot = require('telebot');
wbm.start().then(async () => {
    const phones = ['+94717723341'];
    const message = 'Server Started';
    await wbm.send(phones, message);
}).catch(err => console.log(err));
//aa
const bot = new TeleBot("5353629531:AAFxt8atCemi9FTIh8ovErmCeuPt7euxkt0");

bot.start();


async function doSomething1(phone,message) {
    // ...
    try {
        if  (phone == undefined || message == undefined) {
            bot.sendMessage(-1001755288889, "please enter valid phone and message")
        } else {
          
                const phones = ["+"+phone];
                await wbm.send(phones, message).then((response) => {
            bot.sendMessage(-1001755288889, "Message Sent")

                });
                
            
        }
      // ...
    } catch (err) {
      // ... handle it locally
      bot.sendMessage(-1001755288889, "Error Occured")
    }
    // ...
  };

bot.on('text', (msg) => {

    if (msg.text.includes("||||")){
    const phone = msg.text.split("||||")[0] 
    const message = msg.text.split("||||")[1] 
    doSomething1(phone,message)
    } else {
      bot.sendMessage(-1001755288889, "Unsupported Format")

    }
})




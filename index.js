const wbm = require('wbm');
const TeleBot = require('telebot');
wbm.start().then(async () => {
    const phones = ['+94718083058'];
    const message = 'Good Morning.';
    await wbm.send(phones, message);
}).catch(err => console.log(err));
//aa
const bot = new TeleBot("5353629531:AAFxt8atCemi9FTIh8ovErmCeuPt7euxkt0");

bot.start();

bot.on('text', (msg) => {msg.reply.text(msg.text)
    const phones = ['+94718083058'];
    const message = msg.text;
     wbm.send(phones, message);
}
);




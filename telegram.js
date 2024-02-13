import TelegramBot from 'node-telegram-bot-api';
const token = '6932076004:AAGp-3gtolNUoUgOOM30DGVP9tDOI1bjnmo';
const bot = new TelegramBot(token, {polling: true});

export default function sendMessageToTelegram(numberOfDownloads){
bot.sendMessage('648244119', `Hi you have a new resume download, total downloads:${numberOfDownloads}`);
}

bot.on('message', (msg) => {

    console.log("received emssage ", msg)
  
  });
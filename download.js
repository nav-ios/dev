import mongoose from "mongoose";
import sendMessageToTelegram from "./telegram.js";

mongoose.connect('mongodb://127.0.0.1:27017/resume', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("connection open")
});

const resume = new mongoose.Schema({
    downloads: {
        type: Number,
        default: 0
      } 
})

const Resume = mongoose.model('Resume', resume)


export default async function registerDownload(){

const newDownload = await Resume.findOne({})
newDownload.downloads++;
await newDownload.save();
console.log(`download registered new downloads are: ${newDownload.downloads}`)
sendMessageToTelegram(newDownload.downloads)
}
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = client => {
  setInterval(function() {}, 8000);
  var msgArray = [
    "Monster Bot <3",
    "JiGsAw Bot Kurucusu",
    "Her Daim!",
    "MonsterBot"
  ];

  setInterval(() => {
    var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
    client.user.setActivity(`${msgArray[rastgeleOyun]}`, {
      type: "PLAYING",
      url: ""
    });
  }, 5000);
  console.log(`JiGsAw başarıyla giriş yaptı.`);
};

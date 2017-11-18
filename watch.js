const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
        LOka.user.setActivity("you",{type: 'WATCHING'});

});

client.login('Token-Is-Here');             

const Discord = require("discord.js"); 
const client = new Discord.Client(); 
client.commands = new Discord.Collection(); 
const env = require("./env.json"); 
const db = require("./database.js"); 
const fs = require("fs"); 

fs.readdir("./eventos/", (err, files) => { 
if (err) return console.error("[ERRO] " + err); 
files.forEach(file => { 
  let eventFunction = require(`./eventos/${file}`); 
  let eventName = file.split(".")[0]; 
  client.on(eventName, (...args) => 
  eventFunction.run(client, ...args
      )); 
   }); 
});

client.aliases = new Discord.Collection()
fs.readdir("./comandos/", (err, files) => { 
  if(err) return console.error("[ERRO] " + err); 
  files.forEach(file => { 
    let eventFun = require(`./comandos/${file}`); 
    let eventName = file.split(".")[0]; 
    client.commands.set(eventName, eventFun); 
    if (eventFun.aliases && eventFun.aliases.length > 0) {
        eventFun.aliases.forEach(aliase => client.aliases.set(aliase, eventName))
    }
  }); 
});
 
 client.login(process.env.atapo).catch(err => { 
console.log(`Algo aconteceu: ${err}`);
 })

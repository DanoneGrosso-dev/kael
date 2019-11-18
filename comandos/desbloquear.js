let db = require("../database.js");
const Discord = require("discord.js");

exports.run = (client, message, suffix) => {
    
message.delete();
  
  db.Guilds.findOne({
    "_id": message.guild.id }, 
    function(erra, server) {
     
var embed = new Discord.RichEmbed()
.setAuthor('Ajuda | Desbloquear',client.user.avatarURL)
.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/512774172343140355/Desbloquear_Kael.png')
.addField(`${server.prefixo}desbloquear canal`, `Para desbloquear o canal em que o comando foi utilizado.`,false)
.addField(`${server.prefixo}desbloquear tudo`,`Para desbloquear todos os canais do servidor.`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');
if(!suffix[0])
return message.channel.send({embed}).then(sentMsg => sentMsg.delete(30000));  


 switch (suffix[0]){
    case 'canal': {  
     
     if (!message.member.hasPermission("MANAGE_MESSAGES")) 
 return message.channel.send(`<:Aviso:512725117865033748> **|** Poing-oing... ${message.author}, você precisa possuir o gerenciamento de mensagens para que eu bloqueie esse canal para você.`).then(sentMsg => sentMsg.delete(10000));  
 
 if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) 
 return message.reply(`:Servidor: **|** Poing-oing ${message.author}, eu não tenho permissão dentro desse servidor para fazer isso.`).then(sentMsg => sentMsg.delete(10000));  
     
   
     
   message.channel.overwritePermissions(message.guild.id, {
        
              SEND_MESSAGES: true,
              ADD_REACTIONS: true
              
              
          
   });
    

    message.channel.send(`<:Desbloquear:512748900789125131> **|** ${message.author}, esse canal foi desbloqueado.`).then(sentMsg => sentMsg.delete(10000));  
    return;
    }

    case 'tudo': {  
     
     if (!message.member.hasPermission("ADMINISTRATOR")) 
 return message.channel.send(`<:Aviso:512725117865033748> **|** Poing-oing... ${message.author}, você precisa ser administrador para que eu desbloqueie todos os canais do servidor para você.`).then(sentMsg => sentMsg.delete(10000)); 
 
 if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) 
 return message.reply(`:Servidor: **|** Poing-oing ${message.author}, eu não tenho permissão dentro desse servidor para fazer isso.`).then(sentMsg => sentMsg.delete(10000));  
     
   
     
     
     let cargo = message.guild.roles.find('name', '@everyone')
   message.guild.channels.forEach(channel => {
          channel.overwritePermissions(cargo, {
              SEND_MESSAGES: true,
              ADD_REACTIONS: true,
              SPEAK: true
              
              
          });
   });
   
        message.channel.send(`<:Desbloquear:512748900789125131> **|** ${message.author}, todos os canais do servidor foram desbloqueados.`).then(sentMsg => sentMsg.delete(10000));  
return;
     
    }
 }
    });
};

exports.aliases = ['unlock'];

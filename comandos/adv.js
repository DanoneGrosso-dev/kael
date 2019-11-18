const Discord = require('discord.js')
const db = require('../database.js')
const moment = require('moment');
    	moment.locale('pt-BR');

exports.run = (client, message, args) => {
 

let id = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;

  db.Guilds.findOne({
      "_id": message.guild.id}, 
      function(erro, server) {


const embed = new Discord.RichEmbed()
.setAuthor('Ajuda | Advertências',client.user.avatarURL)
.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/510232657871896576/507454317016645642.png')
.setDescription(`Adicione advertências e vincule a usuários infratores de regras, assim, permitindo uma maior organização evitando o banimento de membros ativos.`)
.addField(`${server.prefixo}adv adc <@menção> <motivo>`,`Aplique advertências com seus respectivos motivos.`,false)
.addField(`${server.prefixo}adv lista <@menção>`,`Confira as advertências de um determinado usuário.`,false)
.addField(`${server.prefixo}adv resetar <@menção>`,`Resete todas as advertências de um determinado usuário.`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');
if (!args[0]) return message.channel.send({embed}).then(sentMsg => sentMsg.delete(30000));
   
  
    
 switch(args[0]) {
     case 'adc': {
message.delete();

if(!['244489368717230090','314966364873818112'].includes(message.author.id) && !message.member.hasPermissions(["BAN_MEMBERS"])) 
return message.channel.send(`<:Adv:507454317016645642> **|** Poing-oing... ${message.author} parece que você não possui permissão para advertir!`).then(sentMsg => sentMsg.delete(10000));

var azu = message.guild.channels.find(search => search.id === server.logg_adv)
if(!azu)
return message.channel.send(`<:Adv:507454317016645642> **|** Poing-oing... ${message.author}, é necessário definir um canal de advertências nos informes para utilizar esse comando! Use **${server.prefixo}informes** para mais informações.`).then(sentMsg => sentMsg.delete(10000));
  
    
if (message.mentions.users.size < 1) 
return message.channel.send(`<:Adv:507454317016645642> **|** Poing-oing... ${message.author}, faltou mencionar o infrator em sua advertência.`).then(sentMsg => sentMsg.delete(10000));
        
if (message.mentions.users.first().bot) 
return message.channel.send(`<:Adv:507454317016645642> **|** Poing-oing... ${message.author}, você não pode advertir um robot, bobinho(a).`).then(sentMsg => sentMsg.delete(10000));
    
let atapo = message.mentions.members.first();   
const bannable = message.guild.member(atapo)
if (bannable.highestRole.position >= message.member.highestRole.position) 
return message.channel.send(`<:Adv:507454317016645642> **|** Poing-oing... ${message.author}, parece que você não possui permissão para advertir esse usuário.`).then(sentMsg => sentMsg.delete(10000));
    
     
let reason = args.slice(2).join(' ');
if (reason.length < 2) return message.channel.send(`<:Adv:507454317016645642> **|** Poing-oing... ${message.author}, faltou dar um motivo para sua advertência.`).then(sentMsg => sentMsg.delete(10000));


db.Users.findOne({
    "_id": message.mentions.users.first().id}, 
    function(erro, doc) {
  if (doc) {
                   
  
    doc.adv += 1;
    doc.adv_motivos.push(`• ${reason}\n\`(${moment().format('LLL')})\``);
    doc.save();
    message.channel.send(`<:Adv:507454317016645642> **|** ${message.author}, o usuário mencionado recebeu sua advertência!`);
    var embed = new Discord.RichEmbed()
    .setAuthor(`Informes | Advertências`,message.guild.iconURL)
    .setThumbnail(message.mentions.users.first().avatarURL)
    .addField(`Usuário:`,`${message.mentions.users.first().username}`,false)
    .addField(`ID:`,`${message.mentions.users.first().id}`,false)
    .addField(`Motivo:`,`${reason}`,false)
    .addField(`Responsável:`,`${message.author}`,false)
    .setColor('#f3052f');
    client.guilds.get(message.guild.id).channels.get(server.logg_adv).send({embed});
    
  
  } else {
      var atapo = new db.Users({
        _id: message.mentions.users.first().id,
        names: [],
        lock: false,
        adv: 0,
        adv_motivos: []
    });
    atapo.save();
    message.channel.send(`<:Adv:507454317016645642> **|** Opa... ${message.author}, criei um histórico para esse usuário, por favor utilize o comando novamente.`).then(sentMsg => sentMsg.delete(10000));
    
    
  }
        
    })
    return;
         
}
     case 'lista': {
     message.delete();
     
 if(!['244489368717230090','314966364873818112'].includes(message.author.id) && !message.member.hasPermissions(["BAN_MEMBERS"])) 
return message.channel.send(`<:Adv:507454317016645642> **|** Poing-oing... ${message.author} parece que você não possui permissão para usar este comando!`).then(sentMsg => sentMsg.delete(10000));
     
if (message.mentions.users.size < 1) 
return message.channel.send(`<:Adv:507454317016645642> **|** Poing-oing... ${message.author}, faltou mencionar o infrator.`).then(sentMsg => sentMsg.delete(10000));
            
    
   db.Users.findOne({
    "_id": message.mentions.users.first().id}, 
    function(erro, doc) {
  if (doc) {
                       
         
    var notas = doc.adv_motivos.slice(doc.adv_motivos.length - 15).join('\n\n')     
         
    const embed0 = new Discord.RichEmbed()
    .setAuthor('Advertências de: ' + message.mentions.users.first().username+"#"+message.mentions.users.first().discriminator,message.mentions.users.first().avatarURL)
    .setTitle(`Total: (${doc.adv})`)
    .addField(`Advertências:`,`${notas ? notas : "Esse usuário não possui advertências."}`,false)
    .setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
    .setColor('#f3052f'); 
    message.channel.send({embed: embed0}).then(sentMsg => sentMsg.delete(30000));
 } else {
      var atapo = new db.Users({
        _id: message.mentions.users.first().id,
        names: [],
        lock: false,
        adv: 0,
        adv_motivos: []
    });
    atapo.save();
    message.channel.send(`<:Adv:507454317016645642> **|** Opa... ${message.author}, criei um histórico para esse usuário, por favor utilize o comando novamente.`).then(sentMsg => sentMsg.delete(10000));
    
    
  }
    });
       return;
     }   
     
  case 'resetar': {
  message.delete();
var azu = message.guild.channels.find(search => search.id === server.logg_adv)
if(!azu)
return message.channel.send(`<:Adv:507454317016645642> **|** Poing-oing... ${message.author}, é necessário definir um canal de advertências nos informes para utilizar esse comando! Use **${server.prefixo}ajuda informes** para mais informações.`).then(sentMsg => sentMsg.delete(10000));

if(!message.member.hasPermissions(["ADMINISTRATOR"])) 
return message.channel.send(`<:Adv:507454317016645642> **|** Poing-oing... ${message.author}, parece que você não possui permissão para resetar as advertências de um usuário.`).then(sentMsg => sentMsg.delete(10000));
    
if (message.mentions.users.size < 1) 
return message.channel.send(`<:Adv:507454317016645642> **|** Poing-oing... ${message.author} , faltou mencionar um usuário.`).then(sentMsg => sentMsg.delete(10000));
        
if (message.mentions.users.first().bot) 
return message.channel.send(`<:Adv:507454317016645642> **|** Poing-oing... ${message.author}, você não pode advertir um robot, bobinho(a).`).then(sentMsg => sentMsg.delete(10000));
     
db.Users.findOne({
    "_id": message.mentions.users.first().id}, 
    function(erro, doc) {
  if (doc) {
                   
  
    doc.adv = 0;
    doc.adv_motivos = []
    doc.save();
    message.channel.send(`<:Adv:507454317016645642> **|** ${message.author}, todas advertências do usuário mencionado foram resetadas.`).then(sentMsg => sentMsg.delete(10000));
    
  } else {
      var atapo = new db.Users({
        _id: message.mentions.users.first().id,
        names: [],
        lock: false,
        adv: 0,
        adv_motivos: []
    });
    atapo.save();
    message.channel.send(`<:Adv:507454317016645642> **|** Opa... ${message.author}, criei um histórico para esse usuário, por favor utilize o comando novamente.`).then(sentMsg => sentMsg.delete(10000));
    
    
  }
    })
         
         return;
}

 
 }
      });
};

exports.aliases = ['Adv','ADV','advertencia','advêrtencia','Advêrtencia','Advertencia','ADVÊRTENCIA','ADVERTENCIA','warn','WARN','Warn']

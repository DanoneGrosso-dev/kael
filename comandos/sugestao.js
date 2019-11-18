const db = require("../database.js")
const Discord = require('discord.js')

exports.run = function (client, message, suffix) {
    
db.Guilds.findOne({
    "_id": message.guild.id}, function(erra, sysop) {


if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, você precisa possuir poder administrativo para utilizar esse comando.`);
    

const Discord = require("discord.js")
const embed = new Discord.RichEmbed()
.setAuthor('Ajuda | Sugestões',client.user.avatarURL)
.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/513449439151521799/sugestaoK.png')
.addField(`${sysop.prefixo}sugestoes on <#canal>`,`Ative e defina o canal de sugestões no seu servidor.`,false)
.addField(`${sysop.prefixo}sugestoes desativar`,`Desative as sugestões do seu servidor.`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');

 if(!suffix[0]) return  message.channel.send({embed}) 

    if (sysop) {
switch (suffix[0]){
	
case 'on': {
    if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, você precisa possuir poder administrativo para utilizar esse comando.`);
  if (!message.mentions.channels.first()) {
   if (sysop && sysop.sugest)                 
                return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, agora as mensagens serão reagidas em: <#{sysop.sugest}>`);
            else
            return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, me diga qual canal você quer que eu coloque como sugestões!`);
        } else { 
            if (!sysop) 
                sysop = {};
            sysop.sugest = message.mentions.channels.first().id;
            sysop.save();
            return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, o canal de sugestões foi definido!!`);
        }}

        case 'desativar': {
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você precisa possuir poder administrativo para utilizar esse comando.`);
    
sysop.sugest = "";
sysop.save();
message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, o canal de sugestões foi desativado.`);
        
 }}} else { 
	var server = new db.Guilds({
            _id: message.guild.id,
             convites: false,
             sugest: '',
        });
        server.save();
        message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, use o comando novamente!`);
}});    
 
    
    
    
    
};

exports.aliases = ['sugestão','sugestoes','sugestões','suggestion','hint'];

const Discord = require("discord.js")
const db = require("../database.js")

exports.run = function (client, oldMessage, newMessage) {
  
  
   if (oldMessage.author.bot) return;
  
  db.Guilds.findOne({
    "_id": oldMessage.guild.id}, 
    function(erra, servidor) {
        
        if(!servidor) return;
        if(!servidor.logg_MUP) return;
        
        if (servidor) {

  
 const embed = new Discord.RichEmbed() 
 .setAuthor('Informes | Mensagem Editada',client.user.avatarURL)
 .setThumbnail(oldMessage.author.avatarURL)
 .addField('<:Usuario1:513889526268297236> | Usuário:',`${newMessage.author}`,true)
 .addField('<:CanalK:513889525966045214> | Canal:',`${newMessage.channel}`,true)
 .addField('<:MensagemK:513889526473818122> | Antiga:',`${oldMessage.content}`,false)
 .addField('<:EditadasK:513429684571078657> | Editada:',`${newMessage.content}`,false)
 .addBlankField(true)
 .setFooter('Estou de olho em tudo enquanto como um sushi! 😎🍣')
 .setTimestamp()
 .setColor('#f3052f');
 client.guilds.get(newMessage.guild.id).channels.get(servidor.logg_MUP).send({embed}) 
    
        }
    })
    
	
if (newMessage.guild) {
db.Guilds.findOne({
    "_id": oldMessage.guild.id}, function(erro, sysop) {
if (sysop) {
if (sysop && !newMessage.member.hasPermission('ADMINISTRATOR') && !newMessage.member.roles.has(sysop.imune) && sysop.exlinks && newMessage.content.search('https://') > -1) {
newMessage.delete();
return newMessage.channel.send(`<:Kael:512721559887151104> **|** ${newMessage.author}, você não pode compartilhar links externos dentro desse servidor.`).then(sentMsg => sentMsg.delete(60000)) 
  }
if (sysop && !newMessage.member.hasPermission('ADMINISTRATOR') && !newMessage.member.roles.has(sysop.imune) && sysop.convites && newMessage.content.search('discord.gg') > -1) {
newMessage.delete();
return newMessage.channel.send(`<:Kael:512721559887151104> **|** ${newMessage.author}, você não pode compartilhar convites dentro desse servidor.`).then(sentMsg => sentMsg.delete(50000))  
  }    
    
}
});
}


if(newMessage.guild) {
  db.Guilds.findOne({
    "_id": oldMessage.guild.id}, 
    function(erra, servidor) {

if (servidor) {
if (servidor  && !newMessage.member.hasPermission('ADMINISTRATOR') && !newMessage.member.roles.has(servidor.imune) && servidor.filterWords) {
			servidor.filterWords.every(e => {
				if (newMessage.content.search(new RegExp(`\\b${e}\\b`, 'gi')) > -1) {
					newMessage.delete();
					newMessage.channel.startTyping();
					var embed0 = new Discord.RichEmbed()
					.setAuthor(newMessage.author.tag, newMessage.author.avatarURL)
					.setTitle(`<:SabaoK:513816458304946177> — Alerta de boca suja!`)
					.setColor('#f3052f');
					newMessage.channel.send({embed: embed0}).then(sentMsg => sentMsg.delete(7000));
					newMessage.channel.stopTyping()
					var informes = new Discord.RichEmbed()
					.setAuthor('Informes | Vocabulário',client.user.avatarURL)
					.setThumbnail(`${newMessage.author.avatarURL}`)
					.addField('<:Usuario1:513889526268297236> | Usuário:',`${message.author.tag}`,true)
					.addField('<:1234K:513473078685335554> | ID do Usuário:',`${message.author.id}`,true)
					.addField('<:MensagemK:513889526473818122> | Mensagem:',`${message.content}`,false)
					.setTimestamp()
					.setFooter('Olha esse(a) boca suja, temos que comprar mais sabão.')
					.setColor('#f3052f')
					client.guilds.get(newMessage.guild.id).channels.get(servidor.logg_wordsAction).send({embed: informes});
				} else return true;
				
			});
   }
		}
    })
}  


};

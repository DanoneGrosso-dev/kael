const Discord = require("discord.js")
const db = require("../database.js")

exports.run = async (client, message) => {
  
 const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
 
   db.Guilds.findOne({
    "_id": message.guild.id}, 
    async function(erro, servidor) {
        
        if(!servidor) return;
        if(!servidor.logg_MD) return;
        if (servidor) {
 
       if(message.author.bot) return;  

  let user = ""
    if (entry.target.id === message.author.id
      && (entry.createdTimestamp > (Date.now() - 5000))
      && (entry.extra.count >= 1)) {
    user = entry.executor
  } else { 
    user = message.author
  }  
  
 const embed = new Discord.RichEmbed() 
 .setAuthor('Informes | Mensagem Deletada',client.user.avatarURL)
 .setThumbnail(message.author.avatarURL)
 .addField('<:Usuario1:513889526268297236> | Feita por:',`${message.author}`,true)
 .addField('<:Usuario2:513889526456778758>  | Deletada por:',`${user}`,true)
 .addField('<:CanalK:513889525966045214> | Canal:',`<#${message.channel.id}>`,true)
 .addField('<:MensagemK:513889526473818122> | Mensagem:',`${message.content}`,false)
 .addBlankField(true)
 .setFooter('Estou de olho em tudo enquanto como um sushi! 😎🍣')
 .setTimestamp()
 .setColor('#f3052f');
 client.guilds.get(message.guild.id).channels.get(servidor.logg_MD).send({embed}) 
        }
    })
   
};

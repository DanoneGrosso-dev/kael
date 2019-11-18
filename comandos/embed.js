String.prototype.replaceAll = function(de, para){
  var str = this;
   var pos = str.indexOf(de);
   while (pos > -1){
    str = str.replace(de, para);
     pos = str.indexOf(de);
  }
   return (str);
}

exports.run = async function (client, message, args) {
 
  if(!['244489368717230090','314966364873818112'].includes(message.author.id)) return;
  
 const Discord = require("discord.js")
 var ajuda = new Discord.RichEmbed()
 .setAuthor(message.author.tag,client.user.avatarURL)
 .setTitle(`Defina algo para eu transformar em embed.\n\n__Exemplo:__`)
 .setDescription(`\`\`\`Js\n{ 
"embed": { 
"color": "0xFF0000", 
"author": { "name": "{author-name}", 
"icon_url": "{author-icon}" 
  }, 
"description": "Transformei em embed", 
"image": "{guild-icon}" 
   } 
}\`\`\``)
.addField(`Placeholder's`,`**author-icon** - Para dar o avatar do autor.\n**guild-icon** - Para dar o avatar do servidor.\n**author-name** - Para dar o nickname do autor.`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');
 if(!args.join('')) return message.channel.send({embed: ajuda})
 
  try {
    let a = JSON.parse(args.join(' ').replaceAll("{author-icon}", message.author.displayAvatarURL).replaceAll("{guild-icon}", message.guild.iconURL).replace("{author-name}", message.member.nickname ? message.member.nickname : message.author.username))
    if (a.embed.color) a.embed.color = parseInt(a.embed.color)
    message.channel.send({ embed: a.embed }) 
    .catch(e => console.log(e))
  } catch (e) {
    message.channel.send(args.join(''))  
    .catch(e => console.log(e))
  }
}

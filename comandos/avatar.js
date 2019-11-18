const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    
function getUser (str, msg) {
  if (msg.mentions.users.first()) return msg.mentions.users.first()
  if (client.users.find(g => g.username == str)) return client.users.find(g => g.username == str)
  if (msg.guild.members.filter(g => g.nickname == str).first()) return msg.guild.members.filter(g => g.nickname == str).first()
  if (client.users.get(str)) return client.users.get(str)
  else return msg.author
}    
    
let user = getUser(args.join(" "), message)
if (user) {
   const embed = new Discord.RichEmbed()
    .setDescription(`<:Avatar:510464198837534852> **|** Avatar de **${user}**`)
    .setImage(`${user.displayAvatarURL}`)
    .setColor('#f3052f')
    message.reply({embed})
} else {
    message.channel.send(`Poing-oing... ${message.author}, não encontrei nenhum usuário.`)
}
};

exports.aliases = ['foto','pic','photo','selfie'];

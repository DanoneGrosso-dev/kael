var db = require('../database.js')
var Discord = require("discord.js")

exports.run = (client, guild) => {
    
    db.Guilds.deleteOne({
        '_id': guild.id
      });
      
      console.log(`Bot removido de ${guild.name}/${guild.id} com ${guild.memberCount}`);

let serverID = '441766085809799198';
let canalID = '500825672655044618';
const embed = new Discord.RichEmbed()
.setTitle(`O servidor ${guild.name} me removeu!`)
.setThumbnail(guild.iconURl)
.addField('Proprietário:',`<@${guild.ownerID}>/${guild.ownerID}`,true)
.addField(`N° de Usuários:`, Number(guild.members.size).toLocaleString(), true)
.addField('N° de Servidores:', client.guilds.size, false)
.setColor('#f3052f');
client.guilds.get(serverID).channels.get(canalID).send({embed});
      
}

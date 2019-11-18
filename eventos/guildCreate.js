const Discord = require("discord.js");
const db = require("../database.js");



async function newDocDB (doc, res) {
        if(doc === "guilds") {
      var guilda = new db.Guilds({
          _id: res.id,
          autorole: '',
          welcome: '',
          numero: '',
          welcomeChannel: '',
          bye: '',
          byeChannel: '',
          dm: '',
          prefixo: '-',
          lang: 'pt-BR',
          slow: 0,
          texto: '',
          bkchannel: [],
          convites: false,
          convitesES: false,
          invs: false,
          td: false,
           logg_MD: '',
            logg_MUP: '',
            logg_mGA: '',
            logg_mGR: '',
            logg_mGB: '',
            logg_banAction: '',
            girl: '',
                man: '',
                staffer: ''
      });
      guilda.save();
        }
}


exports.run = (client, guild) => {
    
db.Guilds.findOne({
        '_id': guild.id }).then(servidor => {
        if(!servidor) {
          var doc = "guilds";
          var res = guild;
          newDocDB(doc, res);
        }
      });
    
console.log(`Bot adicionado em ${guild.name}/${guild.id} com ${guild.memberCount} membros.`);
let serverID = '441766085809799198';
let canalID = '500825672655044618';
const embed = new Discord.RichEmbed()
.setTitle(`O servidor ${guild.name} me escolheu!`)
.setThumbnail(guild.iconURl)
.addField('Proprietário:',`<@${guild.ownerID}>/${guild.ownerID}`,true)
.addField(`N° de Usuários:`, Number(guild.members.size).toLocaleString(), true)
.addField('N° de Servidores:', client.guilds.size, false)
.setColor('#f3052f');
client.guilds.get(serverID).channels.get(canalID).send({embed});
    
    
};

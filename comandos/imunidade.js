const db = require("../database.js");
const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
message.delete();
    
db.Guilds.findOne({
     "_id": message.guild.id},
     function (erro, dbg) {
         
        if (dbg) {
            

var embed = new Discord.RichEmbed()
.setAuthor('Ajuda | Imunidade',client.user.avatarURL)
.setDescription(`Olá amiguinho(a), você confia alguém? Então me diga qual cargo eu devo por como imune, para essas pessoas não serem barradas pelo meu sistema de defesa!`)
.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/511667989695954945/imunidade.png')
.addField(`${dbg.prefixo}imunidade ativar <@cargo>`,`Para ativar e definir o cargo de imunidade do seu servidor.`,false)
.addField(`${dbg.prefixo}imunidade desativar`,`Para desativar e resetar o cargo de imunidade do seu servidor.`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');
if(!args[0]) message.channel.send({embed}).then(azu => azu.delete(60000));

switch(args[0]) {
   case 'ativar': {
      
      if (!message.mentions.roles.first()) {
     if (dbg && dbg.imune)   
     return message.channel.send(`<:Defesa:511061395832438784> **|** ${message.author}, o <@&${dbg.imune}> está definido como cargo de imunidade.`).then(azu => azu.delete(8000));
     else
     return message.channel.send(`<:Defesa:511061395832438784> **|** ${message.author}, defina o cargo de imunidade do servidor.`).then(azu => azu.delete(8000));
     } else { 
     if (!dbg) dbg = {};   
     dbg.imune = message.mentions.roles.first().id;
     dbg.save();
     return message.channel.send(`<:Defesa:511061395832438784> **|** ${message.author}, você definiu <@&${message.mentions.roles.first().id}> como cargo de imunidade do servidor!`).then(azu => azu.delete(8000));

     }
   }
   case 'desativar': {
   
dbg.imune = '';
dbg.save();
message.channel.send(`<:Defesa:511061395832438784> **|** Poing-oing... ${message.author}, você desativou o cargo de imunidade de seu servidor.`).then(azu => azu.delete(8000));
    return;   
   }
}
} else {
     let pessoa = new db.Guilds({
                    _id: message.guild.id,
                    imune: ''
                });

                pessoa.save();
                return pessoa;
    
}
});
};

exports.aliases = ['immune','imune','immunity','cargomod','modcargo']
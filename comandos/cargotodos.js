const db = require('../database.js');
const { RichEmbed } = require('discord.js')

exports.run = async function (client, message, args) {
message.delete();

if (!message.member.hasPermission("ADMINISTRATOR")) 
return message.channel.send(`<:CargoK:513162802408456192> **|** Poing-oing... ${message.author}, você precisa possuir poder administrativo para utilizar esse comando.`).then(azu => azu.delete(10000));
 
let role = message.mentions.roles.first()
if (!role) 
return message.channel.send(`<:CargoK:513162802408456192> **|** ${message.author},  mencione o cargo a ser distribuído.`).then(azu => azu.delete(10000));

var msg = await message.channel.send(new RichEmbed()
.setAuthor('Kael | Confirmação',client.user.avatarURL)
.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/513162667750326274/CargoK.png')
.setDescription(`Você está prestes a adicionar o cargo **${role}** a todos os usuários do servidor.`)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f'))
    
    await msg.react('513164962789720066') //sucesso
    await msg.react('513164962768879626') //cancelar
  
const collected = await msg.awaitReactions((r, u) => r.me && u.id === message.author.id, { max: 1, time: 60000, errors: ['time'] }).catch(msg => 
msg.channel.send(`<:CargoK:513162802408456192> **|** ${message.author}, o seu tempo de **1 minuto** terminou. Solicitação de distribuição de cargo cancelada.`));
     

if (collected) {
    let r = collected.first()
if (r.emoji.id === '513164962789720066') {
        
 if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) {
 msg.delete();
 return message.channel.send(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, eu não possuo poder administrativo para executar esse comando para você`).then(azu => azu.delete(10000));
}

msg.delete();
message.guild.members.forEach(m => m.addRole(role.id));
message.channel.send(`<:CargoK:513162802408456192> **|** ${message.author}, estou adicionando o cargo ${role} a todos os membros do seu servidor.`)
}
    
    if(r.emoji.id === "513164962768879626") {
      msg.delete();
        
    }
}                    

  }
  
  exports.aliases = ['roleall','allrole','todoscargo']
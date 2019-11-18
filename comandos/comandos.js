var db = require('../database.js')
var env = require("../env.json");

exports.run = (client, message, args) => {
  
      if (!message.member.hasPermission(['MANAGE_GUILD']))
      return message.channel.send(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, só sigo ordens para bloquear ou desbloquear o chat de quem pode gerenciar mensagens nesse servidor.`)
      
        db.Guilds.findOne({
          '_id': message.guild.id
        }, function (erro, servidor) {
          if (servidor) {
 
 
            
            var canal =  message.mentions.channels.first() || message.channel
            
          //  if(!canal) return message.channel.send(`${message.author} mencione o canal no qual você deseja bloquear/desbloquear que meus comandos sejam executados. Canais bloqueados atualmente: ${canais}`)
            var desativar = !!servidor.bkchannel.includes(canal.id)
            if (desativar) {
              servidor.bkchannel.splice(servidor.bkchannel.indexOf(canal.id), 1)
            } else {
              servidor.bkchannel.unshift(canal.id)
            }
            servidor.save();
            const Discord = require('discord.js')
            var embed = new Discord.RichEmbed()
            .setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/512750174829805591/security-system.png')
            .setAuthor('Kael | Comandos',client.user.avatarURL)
            .setDescription(`${!desativar ? '**Meus comandos não poderão mais ser executados**' : '**Meus comandos poderão ser executados novamente**'} **no canal:** \`\`\`${canal.name}\`\`\``)
            .addField(`Canais:`,`${(servidor.bkchannel.map(id => `<#${id}>`).join(', ')) ? (servidor.bkchannel.map(id => `<#${id}>`).join(', ')) : "Nenhuma canal adiconado."}`,false)
            .setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
            .setColor('#ff3535');
            message.channel.send({embed}).then(sentMsg => sentMsg.delete(30000));
          } else {
            message.channel.send(`<:Aviso:512725117865033748> **|** ${message.author}, ocorreu um erro ao executar esse comando!`).then(sentMsg => sentMsg.delete(10000));
          }
        })
     
  
}

exports.aliases = ['bloquearcomandos','bkch'];
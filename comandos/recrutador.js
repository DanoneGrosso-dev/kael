const Discord = require('discord.js');

exports.run = async (client, message, args) => {

 let invites = await message.guild.fetchInvites().catch(error => { 
        return message.channel.send(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, eu não tenho acesso aos convites desse servidor.`);
    });


  let oi = message.mentions.users.first() 
  ? message.mentions.users.first().id 
  : message.author.id ,
  
  img = message.mentions.users.first() 
  ? message.mentions.users.first().tag 
  : message.author.tag,
  
  imagemm = message.mentions.users.first() 
  ? message.mentions.users.first().avatarURL 
  : message.author.avatarURL;
  
  message.guild.fetchInvites().then(invs => {
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    let convitesAtivos = personalInvites.reduce((a, { code, uses }) => a + `https://discord.gg/${code} -  **${uses} novato(s)**\n`, '')
  

let possibleInvites = [['Total','Convites']];
possibleInvites.push([inviteCount, convitesAtivos]);

const embed = new Discord.RichEmbed()
.setAuthor('Kael | Recrutador',client.user.avatarURL)
.addField(`Recrutador ${img}`,  `Convidou um total de **${Number(inviteCount)}** novato(s). `,true)
.addField('Convites:',`${convitesAtivos  ? convitesAtivos : `**${img}** não possui convites no servidor.`}`,false)
.setThumbnail(imagemm)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');
message.channel.send({ embed });

  });
};
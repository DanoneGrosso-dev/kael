const db = require("../database.js")
const { RichEmbed } = require('discord.js')
exports.run = async function (client, message, args) {
message.delete();

db.Guilds.findOne({ "_id": message.guild.id}, async function(erro, servidor) {

    if(!servidor.logg_banAction) return;    

if (!message.member.hasPermission('ADMINISTRATOR') && !message.member.hasPermission('BAN_MEMBERS'))
return message.channel.send(`<:Falha:511151506574016515> **|** ${message.author}, você precisa possuir permissão de banir para utilizar esse comando.`)
       
let banPerms = message.guild.member(client.user).hasPermission('BAN_MEMBERS')
if (!banPerms)  return message.channel.send(`<:Ban:511151506574016515> **|** ${message.author}, não tenho permissão para banir usuários nesse servidor.`).then(sentMsg => sentMsg.delete(15000));


            let kael =  args.slice(1).join(' ') 
            ? args.slice(1).join(' ')
            :  `Desbanido por ${message.author.username}#${message.author.discriminator} — Não relatou um motivo.`;


let id = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
if (!id) return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você precisa especificar uma ID.`).then(sentMsg => sentMsg.delete(15000));

let banido = client.users.has(id) ? client.users.get(id) : null;
if (!banido) return message.channel.send(`<:Alvo:507455947388747778> **|** Poing-oing ${message.author}, não encontrei nenhum usuário.`).then(sentMsg => sentMsg.delete(15000));

const filtro = ['discord.io','discord.gg','https://','filho da puta', 'fdp', 'cú', 'filho da mãe', 'baka', 'idiota', 'tnc', 'puta', 'puto', 'piranha', 'anta', 'bosta', 'merda','baka','prostituta','vaca','bostejando',]
if(filtro.some(p => message.content.includes(p))){
  message.channel.send(`<:Defesa:511061395832438784> **|** ${message.author}, você não pode usar minhas funções para ofender alguém.`).then(sentMsg => sentMsg.delete(15000));
  return;
} 


    let msg = await message.channel.send(new RichEmbed()
        .setAuthor('Kael | Desbanimento',client.user.avatarURL)
        .setThumbnail(banido.avatarURL)
        .addField('Usuário:', banido.tag, true)
        .addField('Responsável:', message.author.tag, true)
        .addField('Motivo:', `${kael}`, false)
        .setColor('#f3052f')
        .setFooter('Clique na reação para confirmar o desbanimento.'))

    await msg.react('515591126733029379')

    try {
        await msg.awaitReactions((r, u) => r.me && u.id === message.author.id, { max: 1, time: 60000, errors: ['time'] })
    } catch (e) {
        msg.delete();
        return message.channel.send(`<:Falha:511151506574016515> **|** ${message.author}, o seu tempo de **1 minuto** terminou. Solicitação de desbanimento expirada.`).then(sentMsg => sentMsg.delete(15000));
    }


if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
msg.delete()
return message.channel.send(`<:Seringa:512872651304206357> **|** Poing-oing... ${message.author}, não tenho permissão para desbanir usuários nesse servidor.`)
} 

message.guild.fetchBans().then(bans => {
msg.delete()    
let users = bans.filter(r => r === banido);
if (!users.first()) 
return message.channel.send(`<:Banido:511161389914521610> **|** ${message.author} este usuário não encontra-se banido neste servidor.`).then(sentMsg => sentMsg.delete(15000));

   msg.delete()
   message.guild.unban(banido,`Desbanido por ${message.author.username}#${message.author.discriminator} — Motivo: ` + kael)
   message.channel.send(`<:ColeteCancel:515591126733029379> **|** ${message.author}, você desbaniu **${banido}**.`)

    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
    .setAuthor(`Informes | Punições`)
    .addField(`<:Usuario1:513889526268297236> | Usuário:`, banido.tag,true)
    .addField(`<:1234K:513473078685335554> | ID do Usuário:`, banido.id,true)
    .addField(`<:Kael:512721559887151104> | Responsável:`, message.author,true)
    .addField(`<:MensagemK:513889526473818122> | Motivo:`, `${kael}`,false)
    .setThumbnail(banido.avatarURL)
    .setColor('#f3052f')
    client.guilds.get(message.guild.id).channels.get(servidor.logg_banAction).send({embed})

     const privado = new Discord.RichEmbed()
    .setAuthor(`Kael | Desbanimento`,client.user.avatarURL)
    .addDescription(`Você foi desbanido(a) no servidor ${message.guild.name}.`)
    .addField(`<:Usuario1:513889526268297236> | Usuário:`, banido,true)
    .addField(`<:Kael:512721559887151104> | Responsável:`, message.author,true)
    .addField(`<:MensagemK:513889526473818122> | Motivo:`, `${kael}`,false)
    .setThumbnail(banido.avatarURL)
    .setTimestamp()
    .setFooter('Agora podemos comer sushi la juntos novamente! 😝🍣',message.guild.iconURL)
    .setColor('#f3052f')
    banido.user.send({embed: privado})

})
})

}

exports.aliases = ['unban', 'UNBAN', 'DESBAN', 'DESBANIR','desbanir']


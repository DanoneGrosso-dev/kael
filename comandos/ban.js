const db = require("../database.js")
const Discord = require("discord.js")
const { RichEmbed } = require('discord.js')
exports.run = async function (client, message, args) {
message.delete();

if (!message.member.hasPermission('BAN_MEMBERS'))
return message.channel.send(`<:Falha:511151506574016515> **|** ${message.author}, você precisa possuir permissão de banir para utilizar esse comando.`)
               
let banPerms = message.guild.member(client.user).hasPermission('BAN_MEMBERS')
if (!banPerms)  return message.channel.send(`<:Ban:511151506574016515> **|** ${message.author}, não tenho permissão para banir usuários nesse servidor.`).then(sentMsg => sentMsg.delete(15000));


let banido = message.mentions.members.first() || message.guild.member(args[0]) || null

if (!banido) 
return message.channel.send(`<:Alvo:507455947388747778> **|** ${message.author}, mencione um usuário ou especifique um ID.`).then(sentMsg => sentMsg.delete(15000));

            var args = args
            let kael =  args.slice(1).join(' ')
            ? args.slice(1).join(' ')
            :  `Banido por ${message.author.username}#${message.author.discriminator} — Não relatou um motivo.`;

const filtro = ['discord.io','discord.gg','https://','filho da puta', 'fdp', 'cú', 'filho da mãe', 'baka', 'idiota', 'tnc', 'puta', 'puto', 'piranha', 'anta', 'bosta', 'merda','baka','prostituta','vaca','bostejando',]
if(filtro.some(p => message.content.includes(p))){
  message.channel.send(`<:Defesa:511061395832438784> **|** ${message.author}, você não pode usar minhas funções para ofender alguém.`);
  return;
} 

        let msg = await message.channel.send(new RichEmbed()
        .setAuthor('Kael | Banimento',client.user.avatarURL)
        .setThumbnail(banido.user.avatarURL)
        .addField('Arsenal:','<:FacaBan:515591127299260436> <:GranadaBan:515591127269900317> <:RevolverBan:515592301465174016> <:FlechaBan:515591126888218625> <:RifleBan:515591127148265542>',true)
        .addField('Cancelar:','<:ColeteCancel:515591126733029379>',true)
        .addField('Responsável:', message.author.tag, true)
        .addField('Usuário:', banido.user.tag, true)
        .addField('Motivo:', `${kael}`, false)
        .setColor('#f3052f')
        .setFooter('Selecione como você quer banir o usuário clicando nas reações!'))

await msg.react('515591127299260436') //faca
await msg.react('515591127269900317') //granada
await msg.react('515592301465174016') //revolver
await msg.react('515591126888218625') //flecha
await msg.react('515591127148265542') //rifle
await msg.react('515591126733029379') //cancelar

const collected = await msg.awaitReactions((r, u) => r.me && u.id === message.author.id, { max: 1, time: 60000, errors: ['time'] })	

var createAccountG = id => {
    var server = new db.Guilds({
        _id: message.guild.id,
        autorole: '',
                sugestao: '',
                filterInvites: false,
                filterPrintscreen: '',
                filterWords: [],
                welcome: '',
                welcomeChannel: '',
                bye: '',
                byeChannel: '',
                setprefix: 'sy!',
                dm: '',
                girl: '',
                man: '',
                staffer: '',
    })
    server.save()
    return server;
    
}

db.Guilds.findOne({ 
       "_id": message.guild.id}, 
       async function (erro, server) {
 if(!server) {
     server = createAccountG(message.guild.id)
 }

	
if (collected) {
    let r = collected.first()
    if (r.emoji.id === '515591127148265542') { //rifle
message.guild.fetchBans().then(bans => {
msg.delete()     
let users = bans.filter(r => r === banido);
if (users.first()) 
return message.channel.send(`<:Banido:511161389914521610> **|** ${message.author} este usuário já se encontra banido.`).then(sentMsg => sentMsg.delete(15000));


let bannable = message.guild.member(banido)
if (bannable) {  
msg.delete()    
if (bannable.highestRole.position >= message.member.highestRole.position) return message.channel.send(`<:Colete:511153842247696384> **|** ${message.author}, você não pode banir esse usuário!`).then(sentMsg => sentMsg.delete(15000));
    
if (!message.guild.member(banido).bannable) {
msg.delete()
return message.channel.send(`<:Colete:511153842247696384> **|** ${message.author}, eu não posso banir esse usuário.`).then(sentMsg => sentMsg.delete(15000));
}

if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
msg.delete()
return message.channel.send(`<:Seringa:512872651304206357> **|** Poing-oing... ${message.author}, não tenho permissão para banir usuários nesse servidor.`)
} 

 msg.delete()
 banido.ban(`Banido por ${message.author.username}#${message.author.discriminator} — Motivo: ` + kael)
 message.channel.send(`<:RifleBan:515591127148265542> **|** ${message.author}, você deu um "headshot" em **${banido.user}**.`)

const privado = new Discord.RichEmbed()
.setAuthor('Kael | Banimento',client.user.avatarURL)
.setThumbnail(`${banido.user.avatarURL}`)
.setDescription(`Você foi banido(a) no servidor ${message.guild.name}.`)
.addField('Usuário:',`${banido.user.tag}`,true)
.addField('Responsável:',`${message.author.tag}`,true)
.addField('Motivo:',`${kael}`,false)
.setTimestamp()
.setFooter('Em caso de engano entrar em contato com os responsáveis.',message.guild.iconURL)
.setColor('#f3052f')
banido.user.send({embed: privado});

const informes = new Discord.RichEmbed()
.setAuthor('Informes | Banidos',client.user.avatarURL)
.setThumbnail(`${banido.user.avatarURL}`)
.addField('Usuário:',`${banido.user.tag}`,true)
.addField('ID do Usuário:',`${banido.user.id}`,true)
.addField('Responsável:',`${message.author.tag}`,true)
.addField('ID do Responsável:',`${message.author.id}`,true)
.addField('Motivo:',`${kael}`,false)
.setTimestamp()
.setColor('#f3052f')
client.guilds.get(message.guild.id).channels.get(server.logg_banAction).send({embed: informes});
}
})
 }
    
    if (r.emoji.id === '515592301465174016') { //revolver
message.guild.fetchBans().then(bans => {
msg.delete()       
let users = bans.filter(r => r === banido);
if (users.first()) 
return message.channel.send(`<:Banido:511161389914521610> **|** ${message.author} este usuário já se encontra banido.`).then(sentMsg => sentMsg.delete(15000));


let bannable = message.guild.member(banido)
if (bannable) {  
msg.delete()    
if (bannable.highestRole.position >= message.member.highestRole.position) return message.channel.send(`<:Colete:511153842247696384> **|** ${message.author}, você não pode banir esse usuário!`).then(sentMsg => sentMsg.delete(15000));
    
if (!message.guild.member(banido).bannable) {
msg.delete()
return message.channel.send(`<:Colete:511153842247696384> **|** ${message.author}, eu não posso banir esse usuário.`).then(sentMsg => sentMsg.delete(15000));
}

if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
msg.delete()
return message.channel.send(`<:Seringa:512872651304206357> **|** Poing-oing... ${message.author}, não tenho permissão para banir usuários nesse servidor.`)
} 

 msg.delete()
 banido.ban(`Banido por ${message.author.username}#${message.author.discriminator} — Motivo: ` + kael)
  message.channel.send(`<:RevolverBan:515592301465174016> **|** ${message.author}, você atirou diversas vezes no torax de **${banido.user}**.`)


const privado = new Discord.RichEmbed()
.setAuthor('Kael | Banimento',client.user.avatarURL)
.setThumbnail(`${banido.user.avatarURL}`)
.setDescription(`Você foi banido(a) no servidor ${message.guild.name}.`)
.addField('Usuário:',`${banido.user.tag}`,true)
.addField('Responsável:',`${message.author.tag}`,true)
.addField('Motivo:',`${kael}`,false)
.setTimestamp()
.setFooter('Em caso de engano entrar em contato com os responsáveis.',message.guild.iconURL)
.setColor('#f3052f')
banido.user.send({embed: privado});

const informes = new Discord.RichEmbed()
.setAuthor('Informes | Banidos',client.user.avatarURL)
.setThumbnail(`${banido.user.avatarURL}`)
.addField('Usuário:',`${banido.user.tag}`,true)
.addField('ID do Usuário:',`${banido.user.id}`,true)
.addField('Responsável:',`${message.author.tag}`,true)
.addField('ID do Responsável:',`${message.author.id}`,true)
.addField('Motivo:',`${kael}`,false)
.setTimestamp()
.setColor('#f3052f')
client.guilds.get(message.guild.id).channels.get(server.logg_banAction).send({embed: informes});
}
})
  }
    
    if (r.emoji.id === '515591127269900317') { //granada
message.guild.fetchBans().then(bans => {
msg.delete()       
let users = bans.filter(r => r === banido);
if (users.first()) 
return message.channel.send(`<:Banido:511161389914521610> **|** ${message.author} este usuário já se encontra banido.`).then(sentMsg => sentMsg.delete(15000));


let bannable = message.guild.member(banido)
if (bannable) {  
msg.delete()    
if (bannable.highestRole.position >= message.member.highestRole.position) return message.channel.send(`<:Colete:511153842247696384> **|** ${message.author}, você não pode banir esse usuário!`).then(sentMsg => sentMsg.delete(15000));
    
if (!message.guild.member(banido).bannable) {
msg.delete()
return message.channel.send(`<:Colete:511153842247696384> **|** ${message.author}, eu não posso banir esse usuário.`).then(sentMsg => sentMsg.delete(15000));
}

if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
msg.delete()
return message.channel.send(`<:Seringa:512872651304206357> **|** Poing-oing... ${message.author}, não tenho permissão para banir usuários nesse servidor.`)
} 

 msg.delete()
 banido.ban(`Banido por ${message.author.username}#${message.author.discriminator} — Motivo: ` + kael)
  message.channel.send(`<:GranadaBan:515591127269900317> **|** ${message.author}, você explodiu **${banido.user}**.`)


const privado = new Discord.RichEmbed()
.setAuthor('Kael | Banimento',client.user.avatarURL)
.setThumbnail(`${banido.user.avatarURL}`)
.setDescription(`Você foi banido(a) no servidor ${message.guild.name}.`)
.addField('Usuário:',`${banido.user.tag}`,true)
.addField('Responsável:',`${message.author.tag}`,true)
.addField('Motivo:',`${kael}`,false)
.setTimestamp()
.setFooter('Em caso de engano entrar em contato com os responsáveis.',message.guild.iconURL)
.setColor('#f3052f')
banido.user.send({embed: privado});

const informes = new Discord.RichEmbed()
.setAuthor('Informes | Banidos',client.user.avatarURL)
.setThumbnail(`${banido.user.avatarURL}`)
.addField('Usuário:',`${banido.user.tag}`,true)
.addField('ID do Usuário:',`${banido.user.id}`,true)
.addField('Responsável:',`${message.author.tag}`,true)
.addField('ID do Responsável:',`${message.author.id}`,true)
.addField('Motivo:',`${kael}`,false)
.setTimestamp()
.setColor('#f3052f')
client.guilds.get(message.guild.id).channels.get(server.logg_banAction).send({embed: informes});
}
})
  }
    
    if (r.emoji.id === '515591126888218625') { //flecha
message.guild.fetchBans().then(bans => {
msg.delete()       
let users = bans.filter(r => r === banido);
if (users.first()) 
return message.channel.send(`<:Banido:511161389914521610> **|** ${message.author} este usuário já se encontra banido.`).then(sentMsg => sentMsg.delete(15000));


let bannable = message.guild.member(banido)
if (bannable) {  
msg.delete()    
if (bannable.highestRole.position >= message.member.highestRole.position) return message.channel.send(`<:Colete:511153842247696384> **|** ${message.author}, você não pode banir esse usuário!`).then(sentMsg => sentMsg.delete(15000));
    
if (!message.guild.member(banido).bannable) {
msg.delete()
return message.channel.send(`<:Colete:511153842247696384> **|** ${message.author}, eu não posso banir esse usuário.`).then(sentMsg => sentMsg.delete(15000));
}

if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
msg.delete()
return message.channel.send(`<:Seringa:512872651304206357> **|** Poing-oing... ${message.author}, não tenho permissão para banir usuários nesse servidor.`)
} 

 msg.delete()
 banido.ban(`Banido por ${message.author.username}#${message.author.discriminator} — Motivo: ` + kael)
 message.channel.send(`<:FlechaBan:515591126888218625> **|** ${message.author}, você acertou o olho de **${banido.user}** com uma flecha.`)

const privado = new Discord.RichEmbed()
.setAuthor('Kael | Banimento',client.user.avatarURL)
.setThumbnail(`${banido.user.avatarURL}`)
.setDescription(`Você foi banido(a) no servidor ${message.guild.name}.`)
.addField('Usuário:',`${banido.user.tag}`,true)
.addField('Responsável:',`${message.author.tag}`,true)
.addField('Motivo:',`${kael}`,false)
.setTimestamp()
.setColor('#f3052f')
.setFooter('Em caso de engano entrar em contato com os responsáveis.',message.guild.iconURL)
banido.user.send({embed: privado});

const informes = new Discord.RichEmbed()
.setAuthor('Informes | Banidos',client.user.avatarURL)
.setThumbnail(`${banido.user.avatarURL}`)
.addField('Usuário:',`${banido.user.tag}`,true)
.addField('ID do Usuário:',`${banido.user.id}`,true)
.addField('Responsável:',`${message.author.tag}`,true)
.addField('ID do Responsável:',`${message.author.id}`,true)
.addField('Motivo:',`${kael}`,false)
.setTimestamp()
.setColor('#f3052f')
client.guilds.get(message.guild.id).channels.get(server.logg_banAction).send({embed: informes});
}
})
  }
    
    if (r.emoji.id === '515591127299260436') { //faca
message.guild.fetchBans().then(bans => {
msg.delete()       
let users = bans.filter(r => r === banido);
if (users.first()) 
return message.channel.send(`<:Banido:511161389914521610> **|** ${message.author} este usuário já se encontra banido.`).then(sentMsg => sentMsg.delete(15000));


let bannable = message.guild.member(banido)
if (bannable) {  
msg.delete()    
if (bannable.highestRole.position >= message.member.highestRole.position) return message.channel.send(`<:Colete:511153842247696384> **|** ${message.author}, você não pode banir esse usuário!`).then(sentMsg => sentMsg.delete(15000));
    
if (!message.guild.member(banido).bannable) {
msg.delete()
return message.channel.send(`<:Colete:511153842247696384> **|** ${message.author}, eu não posso banir esse usuário.`).then(sentMsg => sentMsg.delete(15000));
}

if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
msg.delete()
return message.channel.send(`<:Seringa:512872651304206357> **|** Poing-oing... ${message.author}, não tenho permissão para banir usuários nesse servidor.`)
} 

 msg.delete()
 banido.ban(`Banido por ${message.author.username}#${message.author.discriminator} — Motivo:` + kael)
 message.channel.send(`<:FacaBan:515591127299260436> **|**  ${message.author}, você deu uma facada nas costelas de **${banido.user}**.`)

const privado = new Discord.RichEmbed()
.setAuthor('Kael | Banimento',client.user.avatarURL)
.setThumbnail(`${banido.user.avatarURL}`)
.setDescription(`Você foi banido(a) no servidor ${message.guild.name}.`)
.addField('Usuário:',`${banido.user.tag}`,true)
.addField('Responsável:',`${message.author.tag}`,true)
.addField('Motivo:',`${kael}`,false)
.setTimestamp()
.setFooter('Em caso de engano entrar em contato com os responsáveis.',message.guild.iconURL)
.setColor('#f3052f')
banido.user.send({embed: privado});

const informes = new Discord.RichEmbed()
.setAuthor('Informes | Banidos',client.user.avatarURL)
.setThumbnail(`${banido.user.avatarURL}`)
.addField('Usuário:',`${banido.user.tag}`,true)
.addField('ID do Usuário:',`${banido.user.id}`,true)
.addField('Responsável:',`${message.author.tag}`,true)
.addField('ID do Responsável:',`${message.author.id}`,true)
.addField('Motivo:',`${kael}`,false)
.setTimestamp()
.setColor('#f3052f')
client.guilds.get(message.guild.id).channels.get(server.logg_banAction).send({embed: informes});
}
})
  }
    
    
    if (r.emoji.id === '515591126733029379') { //cancelar
    msg.delete();
     message.channel.send(`<:ColeteCancel:515591126733029379> **|** ${message.author}, você cancelou a solicitação de banimento.`).then(azu => azu.delete(3000))
    }
}    
	
       });
};

exports.alises = ['BAN', 'hackban', 'BANIR'];

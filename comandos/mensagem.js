const Discord = require("discord.js");
const db = require('../database.js');

exports.run = function (client, message, suffix) {
    
message.delete();
    
var mensagem = suffix.slice(1).join(' ');
var newOne = suffix.slice(3).join(' ')
var newTwo = suffix.slice(4).join(' ')
var newFive = suffix.slice(5).join(' ')
 
 
 var createAccount = id => {
     var guild = new db.Guilds({
         _id: id,
         autorole: '',
            welcome: '',
            welcomeChannel: '',
            bye: '',
            byeChannel: '',
            dm: '',
            prefixo: '-',
            slow: 0,
            sloww: 0,
            lang: 'pt-BR',
            bkchannel: [],
            convites: false,
            convitesES: false,
            invs: false,
            texto: '',
            txt: '',
            numero: '',
            logg_MD: '',
            logg_MUP: '',
            logg_mGA: '',
            logg_mGR: '',
            logg_mGB: '',
            logg_banAction: '',
            td: false,
            girl: '',
            man: '',
            staffer: '',
     })
     guild.save();
     return guild
 }
    
    db.Guilds.findOne({
    "_id": message.guild.id }, 
    function(erra, documento) {
        
    if(!documento) { 
    
        documento = createAccount(message.guild.id)
    }    
  
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, você precisa ter poder administrativo para ter acesso as mensagens do servidor.`).then(azu => azu.delete(8000));
 

 const embed = new Discord.RichEmbed()
.setAuthor('Ajuda | Mensagem',client.user.avatarURL)
.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/513196616262352908/mensagensK.png')
.setDescription('Utilize os comandos a baixo para estabelecer suas mensagens!')
.addField(`${documento.prefixo}mensagem entrada`,`Defina uma mensagem de boas-vindas em seu servidor.`,false)
.addField(`${documento.prefixo}mensagem privado`,`Defina uma mensagem privada de boas-vindas em seu servidor.`,false)
.addField(`${documento.prefixo}mensagem saída`,`Defina uma mensagem de saída em seu servidor.\n\n**Parâmetros:**\n⠀⠀⠀`,false)
.addField('{MENTION}',`Para mencionar o usuário.`,false)
.addField('{SERVER}', `Para dizer o nome do server.`,false)
.addField('{USER}',`Dizer o nome do usuário.`,false)
.addField('{USER_ICONURL}',`Dá o url da imagem de perfil do usuário que entrou.`,false)
.addField('{USER_ID}',`Dá o ID o usuário que entrou.\n⠀`,false)
.addField(`${documento.prefixo}mensagem <entrada/privado/saída> desativar`,`Para desativar algum parâmetro de mensagem`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');
if(!suffix[0]) return message.channel.send({embed}).then(azu => azu.delete(30000));
  

switch (suffix[0]){
case 'entrada': {

if (!message.guild.owner && !message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, você precisa ter poder administrativo para ter acesso as mensagens do servidor.`).then(azu => azu.delete(8000));

  if (!mensagem) {
    if (!documento.welcome)
   return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, seu servidor ainda não tem uma mensagem de entrada definida! Digite **${documento.prefixo}mensagem** para mais informações!`).then(azu => azu.delete(8000));
   else 
   return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, a mensagem de entrada atual é: **${documento.welcome}**`).then(azu => azu.delete(15000));

    } else {
        if (mensagem !== 'desativar') {
            documento.welcome = mensagem;
            documento.welcomeChannel = message.channel.id;
            documento.save();
            return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você definiu uma mensagem de entrada!`).then(azu => azu.delete(8000));
        } else {
            documento.welcomeChannel = '';
            documento.welcome = '',
            documento.save();
            return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, mensagem de entrada desabilitada!`).then(azu => azu.delete(8000));
        }
    
        
    }
}
 

case 'privado': {
 
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, você precisa ter poder administrativo para ter acesso as mensagens do servidor.`).then(azu => azu.delete(8000));

  if (!mensagem) {
    if (!documento.dm)
   return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, seu servidor ainda não tem uma mensagem de entrada privada definida! Digite **${documento.prefixo}mensagem** para mais informações!`).then(azu => azu.delete(8000));
   else 
   return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, a mensagem de entrada privada atual é: **${documento.welcome}**`).then(azu => azu.delete(15000));

    } else {
        if (mensagem !== 'desativar') {
            documento.dm = mensagem;
            documento.save();
            return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você definiu uma mensagem de entrada privada!`).then(azu => azu.delete(8000));
        } else {
            documento.dm = '',
            documento.save();
            return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, mensagem de entrada privada desabilitada!`).then(azu => azu.delete(8000));
        }
    
        
    }

   }
 

case 'saída': {
 
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, você precisa ter poder administrativo para ter acesso as mensagens do servidor.`).then(azu => azu.delete(8000));
  
if (!mensagem) {
    if (!documento.bye)
   return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, seu servidor ainda não tem uma mensagem de saída definida! Digite **${documento.prefixo}mensagem** para mais informações!`).then(azu => azu.delete(8000));
   else 
   return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, a mensagem de saída atual é: **${documento.welcome}**`).then(azu => azu.delete(15000));

    } else {
        if (mensagem !== 'desativar') {
            documento.bye = mensagem
            documento.byeChannel = message.channel.id;
            documento.save();
            return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você definiu uma mensagem de saída!`).then(azu => azu.delete(8000));
        } else {
            documento.byeChannel = '';
            documento.bye = '',
            documento.save();
            return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, mensagem de saída desabilitada!`).then(azu => azu.delete(8000));
        }
    
    }
 
    }
}
   });
};

exports.aliases = ['mensagens','message'];
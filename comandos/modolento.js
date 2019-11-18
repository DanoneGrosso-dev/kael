const db = require("../database.js")
const Discord = require("discord.js")

exports.run = async function (client, message, suffix) {

let createAccount = id => {
  let pessoa = new db.Guilds({
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
            numero: '',
            logg_MD: '',
            logg_MUP: '',
            logg_mGA: '',
            logg_mGR: '',
            logg_mGB: '',
            logg_banAction: '',
            td: false
                   });
                pessoa.save();
                return pessoa;
            };


let sy = message.content.split(' ');
let amount = isNaN(Number(sy[1])) ? Number(sy[2]) : Number(sy[1]);
let mensagem =  suffix[0]

db.Guilds.findOne({
     "_id": message.guild.id}, 
         function(erro, servidor) {


if(!servidor) {
    servidor = createAccount(message.guild.id);
}


if (!message.member.hasPermission("MANAGE_MESSAGES")) 
 return message.channel.send(`xxxxxxxxxxx | Opa ${message.author}!  Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Gerenciamento de Mensagens a você.`);
 
 if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) 
 return message.channel.send(`xxxxxxxxxxxxx | Opa ${message.author}! Desculpe, não posso fazer isso. É necessario que eu tenha permissão de Gerenciamento de mensagens.`)
   

var embed = new Discord.RichEmbed()
.setAuthor('Ajuda | Modo lento',client.user.avatarURL)
.addField(`${servidor.prefixo}modolento servidor <número>`, `Ative o modo lento do chat em todo o servidor.`,false)
.addField(`${servidor.prefixo}modolento desativar`,`Desative o modolento tanto para canal quanto servidor.`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f'); 

if (!mensagem) {
     if (!servidor.sloww)
   return message.channel.send({embed})
   else
   return message.channel.send(`O modo lento deste servidor está ativado num tempo de: ${servidor.sloww} milisegundos.`);
    
    
} else {
    
    if (mensagem !== 'desativar') { 
    servidor.sloww = amount * 1000
    servidor.save();
    return message.channel.send(`Ok ${message.author}! Você definiu o slowmode com um tempo de ${amount} segundos.`);

    } else {
            servidor.sloww = 0;
            servidor.save();
            return message.reply('OK! Slowmode **Desativado!**');
        }
    

}

     })

};

exports.aliases = ['slowmode']

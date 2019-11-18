var database = require("../database.js");
const Discord = require("discord.js");
var dayCol = []


exports.run = (client, message, args) => {
message.delete()

  database.Guilds.findOne({"_id":message.guild.id},function(erro,documento){
    
        if (documento) {       


if(!message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.find("id", documento.staffer)) 
return message.channel.send(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, você tem que ser um registrador para poder utilizar esse comando, bobinho(a).`);

    let user = message.mentions.users.first();
 
    let qq =  message.mentions.users.first() ? message.guild.id+message.mentions.users.first().id : message.guild.id+message.author.id;
  

    if(!dayCol.includes(message.author.id)) {
        
    database.Registrador.findOne({ "_id": qq }, function(erro, documento) {

        if (documento) {


let user =  message.mentions.users.first() ? message.mentions.users.first() : message.author;
                

const embed = new Discord.RichEmbed()
embed.setAuthor('Kael | Registro', client.user.avatarURL)
embed.setTitle(`Registrador(a): ${user.username}`)
embed.setThumbnail(message.author.avatarURL)//S
embed.addField(`<:MeninoK:512721560063311881> | Meninos:`, `Registrou **${Number(documento.hm).toLocaleString()}** menino(s)!`,false)
embed.addField(`<:MeninaK:512721560356913153> | Meninas:`, `Registrou  **${Number(documento.mh).toLocaleString()}** menina(s)!`,false)
embed.addField(`<:IntersexK:514682703619293196> | Não-binários:`, `Registrou  **${Number(documento.nbinario).toLocaleString()}** não-binário(s)!`,false)
embed.addField(`<:UsuriosK:513477804944392204> |  Ambos:`, `Registrou um total de **${Number(documento.hm+documento.mh+documento.nbinario).toLocaleString()}** novatos!`,false)
embed.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
embed.setColor('#f3052f');
message.channel.send({embed});

        } else {


            var pessoa = new database.Registrador({
                _id: qq,
                mh: 0,
                hm: 0,
             
            });
            pessoa.save();
            message.channel.send(` ${message.author} Você não possui uma histórico! Use o comando novamente.`);

        }
        
    }).catch(e => console.log(e));
    
    } else {
    message.reply("Você esta usando o comando rápido de mais, vai com calma.").then((value) => {
        setTimeout(() => {
          value.delete();
          message.delete();
        }, 1000 * 30 );
    });
}
    } else {
        var pessoa = new database.Guilds({
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
                dm: '',
                girl: '',
                man: '',
                staffer: '',
        });
        pessoa.save();
        message.channel.send(`${message.author}, Servidor não registrado, use o comando novamente.`);

}
              })

     };

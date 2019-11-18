const database = require("../database.js");

exports.run = async (client, message, suffix) => {
  
if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(`<:Autocargo:510459474792677377> **|** ${message.author}, Poing-oing... Eu preciso poder gerenciar cargos para desempenhar essa função, bobinho(a).`);
    
      
let args = suffix
let mensagem = suffix;
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;

const db = require("../database.js")
db.Guilds.findOne({
    "_id": message.guild.id }, 
          async function(erra, sysop) {


const Discord = require("discord.js")
const embed = new Discord.RichEmbed()
.setAuthor('Ajuda | Autocargo',client.user.avatarURL)
.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/513043226429620224/Espadas_K.png')
.addField(`${sysop.prefixo}autocargo <@cargo>`,`Determine o cargo que será dado automaticamente para os novatos.`,false)
.addField(`${sysop.prefixo}autocargo resetar`,`Desativa e reseta o sistema autocargo.`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');

 if(!args[0]) return message.channel.send({embed})

try {

database.Guilds.findOne({ 
    "_id": message.guild.id}, 
    async function(erro, documento) {
    
    if (documento) {
        if (!mensagem) {
            
    if (!documento.autorole)
   return message.channel.send(`<:Autocargo:510459474792677377> **|** ${message.author}, esse servidor ainda não possui distribuição automática de cargos. Utilize **${sysop.prefixo}autocargo** para receber as instruções.`);
   else 
   return message.channel.send(`<:Autocargo:510459474792677377> **|** ${message.author}, estou colocando os seguintes cargos em quem entrar no seu servidor: <@&${documento.autorole}>.`);

    } else {
        
        
        if (mensagem !== 'resetar') {
            documento.autorole = message.mentions.roles.first().id
            documento.save();
            return message.channel.send(`<:Autocargo:510459474792677377> **|** ${message.author}, você definiu o cargo que irei dar aos novatos.`);
        } else {
            documento.autorole = '';
            documento.save();
            return message.channel.send(`<:Autocargo:510459474792677377> **|** ${message.author}, desativei a posição automática de cargos nos novatos.`);
        }
        
    }
            
        } else {
            var server = new database.Guilds({
            _id: message.guild.id,
             convites: false,
             sugestao: '',
             welcome: '',
             words: [],
             autorole: '',
             welcomeChannel: '',
             byeChannel: '',
             dm: '',
        });
        server.save();
        message.channel.send(`<:Autocargo:510459474792677377> **|** Certinho ${message.author}, eu criei um histórico para você!`);

        }
}); 

 } catch (e) {
       console.log(e) 
    }    
    
  });
};

exports.aliases = ['autorole'];

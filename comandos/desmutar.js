const db = require("../database.js");

exports.run = (client, message, args) => {
    
 db.Guilds.findOne({
    "_id": message.guild.id}, 
    function(erro, servidor) {  
    
const Sysop = 'Kael Mute'
let role = message.guild.roles.find('name', Sysop)
let sysop =  args.slice(1).join(' ')
 
 ? args.slice(1).join(' ')
 :  "Não especificado.";


if (!message.member.hasPermission("MUTE_MEMBERS")) 
return message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, você não possui permissão para mutar, bobinho(a)!`);

let id = message.mentions.users.first()
    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
if (!id) return message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, você precisa mencionar ou especificar um ID.`);

let user = client.users.has(id) ? client.users.get(id) : null;
if (user) {
if (message.guild.member(user).roles.has(role)) 
return message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, eu estou sem as permissões necessárias para efetuar essa ação.`);

message.guild.member(user).removeRole(role);
message.channel.send(`<:MutadoK:513139718981156877> **|** ${user} foi desmutado por ${message.author}. **Motivo:** ${sysop}`);
  
} else {
    
return message.channel.send(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, não obtive nenhum resultado em sua procura.`);

    }
    })
};

exports.aliases = ['unmute']

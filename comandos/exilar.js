const Discord = require("discord.js");
const database = require("../database.js");

exports.run = (client, message, args) => {
  
  if (!['314966364873818112','244489368717230090'].includes(message.author.id)) 
  return;
  
        let block = message.mentions.users.first()
        
            ? message.mentions.users.first().id 
     
            : args.slice(0).join(' ')
            ? args.slice(0).join(' ')
            : null;

if (!block) return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, mencione um usuário ou especifique um ID!`);
let user = client.users.has(block) ? client.users.get(block) : null;
if (user) {
    database.Bloqueio.findOne({"_id":user.id},function(erro,documento){
        
    if (documento) {
        
        documento.block = user.id
        message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você adicionou ${message.mention} ao exílio!`)
        documento.save();
    } else {
        var pessoa = new database.Bloqueio({
            _id: user.id,
            name: user.username, 
            block: user.id
          
        })
        pessoa.save()
message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você adicionou <@${user.id}> ao exílio!`)
    }

})

} else {
    message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, não consegui encontrar esse usuário!`);
}
};

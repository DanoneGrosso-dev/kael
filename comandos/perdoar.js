const Discord = require("discord.js");
const database = require("../database.js");

exports.run = (client, message, args) => {
  
  if (!['244489368717230090','314966364873818112'].includes(message.author.id)) 
  return;
    
        let block = message.mentions.users.first()
        
            ? message.mentions.users.first().id 
     
            : args.slice(0).join(' ')
            ? args.slice(0).join(' ')
            : null;
            

if (!block) return message.reply(`<:Kael:512721559887151104> **|** ${message.author}, mencione um usuário ou especifique um ID!`);
let user = client.users.has(block) ? client.users.get(block) : null;
if (user) {
    database.Bloqueio.findOne({"_id":user.id},function(erro,documento){
        
    if (documento) {
        
        documento.block = "pudim"
        message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você perdoou  <@${user.id}>  e o retirou do exílio`)
        documento.save();
    } else {
        var pessoa = new database.Bloqueio({
            _id: user.id,
            name: user.username, 
            block: "pudim"
          
        })
        pessoa.save()
message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você perdoou <@${user.id}> e o retirou do exílio`)
    }

})

} else {
    message.reply(`<:Kael:512721559887151104> **|** ${message.author}, não consegui encontrar esse usuário!`);
}
};

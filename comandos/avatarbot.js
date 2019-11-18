
exports.run = (client, message, args) => {

if(!['244489368717230090', '314966364873818112'].includes(message.author.id))
return;

if(!args[0])
return message.channel.send(`<:AmorK:513141606254247936> **|** ${message.author}, faltou o link papai lesado!`);

client.user.setAvatar(args[0])
message.channel.send(`<:Kael_Olhando:514290078277828646> **|** ${message.author} minha nova foto estilosa ficou demais, papai!`)
}

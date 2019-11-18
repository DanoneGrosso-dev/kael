exports.run = (client, message, args) => {

if(!['244489368717230090','314966364873818112'].includes(message.author.id)) return;

message.guild.fetchBans().then(c => c.forEach(u => message.unban(u)))
message.channel.send(`Ok papai ${message.author}, estou desbanindo um por um deste servidor!`);
}

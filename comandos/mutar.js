const Discord = require("discord.js");
const db = require("../database.js");
exports.run = async (client, message, args) => {
message.delete(); 
    
 if (!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_MESSAGES")) 
 return message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, você não pode mutar outro usuário, pois precisa ter gerenciamento de mensagens.`)


            var args = args
            let kael =  args.slice(1).join(' ')
            ? args.slice(1).join(' ')
            :  `Mutado por ${message.author.username}#${message.author.discriminator} — Não relatou um motivo.`;


    let muteUser = message.mentions.members.first() || message.guild.member(args[0]) || null


    if (!muteUser) return message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, mencione um usuário ou especifique um ID.`);
    if (muteUser.id === message.author.id) return message.reply.send(`<:MutadoK:513139718981156877> **|** ${message.author} você não pode se mutar, boninho(a).`);
    if (muteUser.id === client.user.id) return message.reply.send(`<:MutadoK:513139718981156877> **|** ${message.author}, minha voz jamais será silenciada.`);
    if (!kael) return message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, especifique um motivo para o silenciamento.`);    
    
    if (!message.member.hasPermission('ADMINISTRATOR') && muteUser.hasPermission("MANAGE_MESSAGES")) 
    return message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, você não pode mutar esse usuário.`);

        let role = message.guild.roles.find(r => r.name === "kael Mute");
        if (!role) {
         let role = await message.guild.roles.find(r => r.name === 'Kael Mute') || 
            message.guild.createRole({
                name: 'Kael Mute',
                color: "#ff3535",
                permissions: 0
            }).then(rola => {
              role = rola

        message.guild.channels.forEach(c => c.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK: false
        }))
            })
        if (muteUser.roles.has(role.id)) 
        return message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, essa pessoa já está mutada.`);

        let informes = new Discord.RichEmbed()
        .setAuthor(`Informes | Punições`,client.user.avatarURL)
        .setThumbnail(muteUser.user.avatarURL)
        .addField("<:MutadoK:513139718981156877> | Usuário:", `${muteUser}`,true)
        .addField("<:1234K:513473078685335554> | Usuário ID", `${muteUser.id}`,true)
        .addField("<:Kael:512721559887151104> | Responsável:", `${message.author}`,true)
        .addField("<:HashtagK:513486336012058665> | Canal:", `${message.channel}`,true)
        .addField("<:MensagemK:513889526473818122> | Motivo:", kael,false) 
        .setTimestamp()
        .setFooter('O jeito foi forçar a ficar quieto!')
        .setColor('#f3052f')
        
    
      await muteUser.addRole(role,`Mutado por ${message.author.username}#${message.author.discriminator} — Motivo: ` + kael);
      db.Guilds.findOne({
        "_id": message.guild.id
    }, function (_erro, guilda) {

          if(!guilda.logg_banAction) return;
          
     client.guilds.get(message.guild.id).channels.get(guilda.logg_banAction).send({embed: informes });  
     message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, esse usuário foi mutado!`)

})
 }
}
exports.aliases = ['mute','mutar','mutado']

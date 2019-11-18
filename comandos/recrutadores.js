const Discord = require('discord.js');

exports.run = (client, message, args) => {   
	    
        message.channel.guild.fetchInvites().then(invites => {
            if (!invites) return message.reply(`<:Kael:512721559887151104> **|** ${message.author}, esse servidor não possui convites!`);
    
               
            var rank    = invites.array().sort((a, b) => b.uses - a.uses).slice(0, 5);
            var primeiro  = rank[0];
            var segundo   = rank[1];
            var terceiro  = rank[2];
            var quarto    = rank[3];
            var quinto    = rank[4];
            if (!primeiro) return message.reply(`<:Kael:512721559887151104> **|** ${message.author}, esse servidor precisa possuir 5 convites para ter um "ranking"!`);
            if (!segundo) return message.reply(`<:Kael:512721559887151104> **|** ${message.author}, esse servidor precisa possuir 5 convites para ter um "ranking"!`);
            if (!terceiro) return message.reply(`<:Kael:512721559887151104> **|** ${message.author}, esse servidor precisa possuir 5 convites para ter um "ranking"!`);
            if (!quarto) return message.reply(`<:Kael:512721559887151104> **|** ${message.author}, esse servidor precisa possuir 5 convites para ter um "ranking"!`);
            if (!quinto) return message.reply(`<:Kael:512721559887151104> **|** ${message.author}, esse servidor precisa possuir 5 convites para ter um "ranking"!`);
        
            let total = primeiro.uses + segundo.uses + terceiro.uses + quarto.uses + quinto.uses;
          
          
          
          var embed = new Discord.RichEmbed()
          .setAuthor(`Recrutadores | ${message.guild.name}`,client.user.avatarURL)
          .setDescription('Esse é meu "ranking" e apenas os melhores no recrutamento se encontram nele!')
          .setThumbnail(message.guild.iconURL)
          .addField(`⠀⠀⠀⠀`,`<:lugar1:511625234944753674> **1º** ${primeiro.inviter.username} \`\`\`Convidados: ${primeiro.uses}\`\`\``,false)
          .addField(`⠀⠀⠀⠀`,`<:lugar2:511625235129303042> **2º** ${segundo.inviter.username} \`\`\`Convidados: ${segundo.uses}\`\`\``,false)
          .addField(`⠀⠀⠀⠀`,`<:lugar3:511625235481755676> **3º** ${terceiro.inviter.username} \`\`\`Convidados: ${terceiro.uses}\`\`\``,false)
          .addField(`⠀⠀⠀⠀`,`<:lugar4:511625234940559393> **4º** ${quarto.inviter.username} \`\`\`Convidados: ${quarto.uses}\`\`\``,false)
          .addField(`⠀⠀⠀⠀`,`<:lugar5:511625235208994817> **5º** ${quinto.inviter.username} \`\`\`Convidados: ${quinto.uses}\`\`\`\n⠀⠀`,false)
          .addField('Total/Recrutados',`<:Servidor:511663295946555403> ~ ${total}`,true)
          .addField('Total/Convites',`<:Convite:511663295606816799> ~ ${invites.size}`,true)
          .setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
          .setColor('#f3052f');
          message.channel.send({embed})
          
        
        });
 };
const db = require("../database.js")
const Discord = require("discord.js")
var moment = require('moment');
    	moment.locale('pt-BR');

exports.run = function (client, message, suffix) {
    
   db.Guilds.findOne({"_id": message.guild.id }, function(erro, documento) {
	if (!documento) return;
   
   
   var embed = new Discord.RichEmbed()
   .setAuthor('Ajuda | Servidor',client.user.avatarURL)
   .setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/513470504498364455/ServidorK.png')
   .addField(`${documento.prefixo}servidor info`,`Receba informações do servidor.`,false)
   .addField(`${documento.prefixo}servidor avatar`,`Mostra o avatar do servidor.`,false)
   .setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
   .setColor('#f3052f');
   if(!suffix[0]) return message.channel.send({embed}) 
    
    switch (suffix[0]){
    case 'info': {
        
        let verifLevels = ["Nenhum", "Baixo", "Médio", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];

         let region = {
          "brazil": ":flag_br: Brasil",
          "eu-central": "Central Europe",
          "singapore": "Singapore",
          "us-central": "U.S. Central",
          "sydney": "Sydney",
          "us-east": "U.S. East",
          "us-south": "U.S. South",
          "us-west": "U.S. West",
          "eu-west": "Western Europe",
          "vip-us-east": "VIP U.S. East",
          "london": "London",
          "amsterdam": "Amsterdam",
          "hongkong": "Hong Kong"
      };
         
        
        var server = message.guild;
        let id = message.guild.id;
        let acc = server.joinedAt.toDateString();
        let accServer = server.createdAt.toDateString();
		const embed = new Discord.RichEmbed()
			.setThumbnail(server.iconURL)
			.setAuthor(`Kael | ${server.name}`,client.user.avatarURL)
			.addField('<:1234K:513473078685335554> | ID:', `${server.id}`, true)
			.addField('<:MapK:513473834842849281> | Região:', region[server.region], true)
			.addField('<:DataServidorK:513474999600807951> | Criação:', moment(accServer).format('LL'), true)
			.addField('<:DataBotK:513474999554801676> | Entrada do Kael:', moment(acc).format('LL'), true)
			.addField('<:CoroaK:513475935492636682> | Proprietário:', server.owner.user.tag, true)
			.addField('<:1234K:513473078685335554> | ID do Proprietário:', `${server.owner.user.id}`, true)
			.addField('<:UsuriosK:513477804944392204> | Total de Usuários:', `${server.memberCount} usuários`, true)
			.addField('<:MembrosK:513477804881477656> | N° de membros:', `${server.members.filter(member => !member.user.bot).size} membros`, true)
			.addField('<:RobotsK:513478974685315094> | Robots:', `${server.members.filter(member => member.user.bot).size} robots`, true)
			.addField('<:CargoK:513162802408456192> | N° de Cargos:', `${server.roles.size} cargos`, true)
			.addField('Status dos Membros:', `<:On:507433797244026895> **| Online:** ${server.members.filter(member => member.presence.status == 'online').size}
<:Off:507433796690509835> **| Offline:** ${server.members.filter(member => member.presence.status === 'offline').size}
<:Ocup:507433796681859072> **| Ocupados:** ${server.members.filter(member => member.presence.status == 'dnd').size}
<:Aus:507433797147688960> **| Ausentes:** ${server.members.filter(member => member.presence.status == 'idle').size}`,false)
			.addField(`<:HashtagK:513486336012058665> | Canais de Texto:`, `${server.channels.filter(m => m.type === 'text').size} canais`, true)
			.addField('<:VoiceK:513486375367081984> | Canais de Voz:', `${server.channels.filter(m => m.type === 'voice').size} canais`, true)
		    //.addField('Top 10 Principles Roles', `${client.guilds.get(id).roles.map(r => r).slice(0, 10).join(" - ")}) `)
		    .setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
			.setColor('#f3052f');
    
		message.channel.send({embed});
		return;
    }
    case 'avatar': {
          
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed();
    embed.setDescription(`<:Avatar:510464198837534852> | Avatar do servidor: ${message.guild.name}!`)
    embed.setImage(message.guild.iconURL+'?size=2048')
    embed.setColor('#f3052f');
    
    message.channel.send({embed});
    return;
    }
    }
   });
    
}

exports.aliases = ['guildinfo','guild-info', 'guilda']

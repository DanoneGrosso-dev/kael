const db = require('../database.js');
const Discord = require("discord.js")
exports.run = async function (client, message, args) {
message.delete();

db.Guilds.findOne({
        "_id": message.guild.id }, function(erro, documento) {
	if (!documento) return;
			
 let a;
 let b;
 let c;
 let d;
 let e;
 let i;
 let j;
 
 
 if(!documento.logg_MD) a = '<:CancelarK:513164962768879626> | Desativado';
 else a = `<:ConfirmarK:513164962789720066> | Ativado em <#${documento.logg_MD}>`;
 
 if(!documento.logg_MUP) b = '<:CancelarK:513164962768879626> |  Desativado';
 else b = `<:ConfirmarK:513164962789720066> | Ativado em <#${documento.logg_MUP}>`;

if(!documento.logg_mGA) c = '<:CancelarK:513164962768879626> | Desativado';
 else c = `<:ConfirmarK:513164962789720066> | Ativado em <#${documento.logg_mGA}>`;

if(!documento.logg_mGR) d = '<:CancelarK:513164962768879626> | Desativado';
 else d  = `<:ConfirmarK:513164962789720066> | Ativado em <#${documento.logg_mGR}>`;

if(!documento.logg_banAction) e = '<:CancelarK:513164962768879626> |  Desativado';
 else e = `<:ConfirmarK:513164962789720066> | Ativado em <#${documento.logg_banAction}>`;
 
 if(!documento.logg_userinfoAction) i = '<:CancelarK:513164962768879626> | Desativado';
 else i = `<:ConfirmarK:513164962789720066> | Ativado em <#${documento.logg_userinfoAction}>`;

if(!documento.logg_adv) j = '<:CancelarK:513164962768879626> | Desativado';
 else j = `<:ConfirmarK:513164962789720066> | Ativado em <#${documento.logg_adv}>`;
 


		let welcomeChannel;
			let bye;
			let byeChannel;
	        let direct
			let autorole;
			let convites;
			let links;
			let sugestao;
			let hm;
			let mod;
			let attack;
			let words;
			let ml;
			let td;
			let bot;
		 
	            
			

			if (!documento.welcomeChannel) welcomeChannel = '<:CancelarK:513164962768879626> | Desativado';
			else welcomeChannel = `<:ConfirmarK:513164962789720066> | Ativado em <#${documento.welcomeChannel}>`
			
			if (!documento.bye) bye = '<:CancelarK:513164962768879626> | Desativado';
			else bye = `<:ConfirmarK:513164962789720066> | Ativado`
			
			if (!documento.dm) direct = '<:CancelarK:513164962768879626> | Desativado';
			else direct = `<:ConfirmarK:513164962789720066> | Ativado`
			
			if (!documento.byeChannel) byeChannel = '<:CancelarK:513164962768879626> | Desativado ';
			else byeChannel = `<:ConfirmarK:513164962789720066> | Ativado em <#${documento.byeChannel}>`
			
			if (!documento.byeChannel) hm = '<:CancelarK:513164962768879626> | Desativado';
			else hm = `<:ConfirmarK:513164962789720066> | Ativado em <#${documento.byeChannel}>`
			
			if (!documento.autorole) autorole = '<:CancelarK:513164962768879626> | Desativado';
			else autorole = `<:ConfirmarK:513164962789720066> | Ativado em <@&${documento.autorole}>`
			
			if (!documento.imune) mod = '<:CancelarK:513164962768879626> | Desativado';
			else mod = `<:ConfirmarK:513164962789720066> | Ativado em <@&${documento.imune}>`
			
			if (!documento.convites) convites = '<:CancelarK:513164962768879626> | Desativado';
			else convites = `<:ConfirmarK:513164962789720066> | Ativado`
			
			if (!documento.exlinks) links = '<:CancelarK:513164962768879626> | Desativado';
			else links = `<:ConfirmarK:513164962789720066> | Ativado`
			
			if (!documento.sugest) sugestao = '<:CancelarK:513164962768879626> | Desativado';
			else sugestao = `<:ConfirmarK:513164962789720066> | Ativado em <#${documento.sugest}>`
			
				if (!documento.td) attack = '<:CancelarK:513164962768879626> | Desativado';
		 	else attack = `<:ConfirmarK:513164962789720066> | Ativado`
			
			if (!documento.logg_wordsAction) words = '<:CancelarK:513164962768879626> | Desativado';
			else words = `<:ConfirmarK:513164962789720066> | Ativado em <#${documento.logg_wordsAction}>`
			
			if (!documento.td) td = '<:CancelarK:513164962768879626> | Desativado';
		 	else td = `<:ConfirmarK:513164962789720066> | Ativado`
			
			if (!documento.ml) ml = '<:CancelarK:513164962768879626> | Desativado';
		 	else ml = `<:ConfirmarK:513164962789720066> | Ativado`
			
			if (!documento.bot) bot = '<:CancelarK:513164962768879626> | Desativado';
		 	else bot = `<:ConfirmarK:513164962789720066> | Ativado`
			
 
let rol1;
let rol2;
let rol3;
let rol4; 
let rol5;
        

 if (!documento.man) rol1 = '<:CancelarK:513164962768879626>  | Desativado.';
 else rol1 = `<:ConfirmarK:513164962789720066> | Ativado em  <@&${documento.man}>`
 if (!documento.girl) rol2 = '<:CancelarK:513164962768879626>  | Desativado.';
 else rol2 = `<:ConfirmarK:513164962789720066> | Ativado em  <@&${documento.girl}>`
 if (!documento.nb) rol3 = '<:CancelarK:513164962768879626>  | Desativado.';
 else rol3 = `<:ConfirmarK:513164962789720066> | Ativado em <@&${documento.nb}>`
 if (!documento.staffer) rol4 = '<:CancelarK:513164962768879626>  | Desativado.';
 else rol4 = `<:ConfirmarK:513164962789720066> | Ativado em  <@&${documento.staffer}>`
 if (!documento.autorole) rol5 = '<:CancelarK:513164962768879626>  | Desativado.';
 else rol5 = `<:ConfirmarK:513164962789720066> | Ativado em  <@&${documento.autorole}>`
    
var embed = new Discord.RichEmbed()   
.setAuthor("Kael | Painel",client.user.avatarURL)
.setDescription(`Use o comando **${documento.prefixo}painel <parâmetro>** para selecionar qual painel desejar visualizar.\n\n**Parâmetros:**`)
.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/515758956962906113/PainelK.png')
.addField('servidor','Para visualizar o painel das configurações gerais de seu servidor.')
.addField('defesa','Para visualizar o painel das configurações de suas defesa.')
.addField('registro','Para visualizar o painel das configurações de seus registros.')
.addField('informes','Para visualizar o painel das configurações de seus informes.')
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');
if(!args[0]) return message.channel.send({embed}) 
        
switch(args[0]) {
    case 'defesa': {
const embed = new Discord.RichEmbed()
embed.setAuthor("Painel | Defesa",client.user.avatarURL);
embed.setDescription('Painel de informações referentes as defesas do servidor.')
embed.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/515289818016514058/Defesa.png')
embed.addField('Defesa/Convites:',`${convites}`,false)
embed.addField('Defesa/Links:',`${links}`,false)
embed.addField('Defesa/Modo Lento:',`${ml}`,false)
embed.addField('Defesa/Texto Duplicado:',`${td}`,false)
embed.addField('Defesa/Robots:',`${bot}`,false)
embed.addField('Cargo/Imunidade:',`${mod}`,false)
embed.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
embed.setColor('#f3052f');
message.channel.send({embed})
return;
}

case 'informes': {
const embed = new Discord.RichEmbed()
embed.setAuthor("Painel | Informes",client.user.avatarURL);
embed.setDescription('Painel de informações referentes aos informes do servidor.')
embed.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/515289814346760231/Informes.png')
embed.addField('Entrada de Membros:',`${c}`,false)
embed.addField('Saída de Membros:',`${d}`,false)
embed.addField('Punições:',`${e}`,false)
embed.addField('Advertências:',`${j}`,false)
embed.addField('Mensagens Deletadas:',`${a}`,false)
embed.addField('Mensagens Editadas:',`${b}`,false)
embed.addField('Vocabulário',`${words}`,false)
embed.addField('<:PremiumK:515735556429316100> | Informações em Entrada:',`${i}`,false)
embed.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
embed.setColor('#f3052f');
message.channel.send({embed})
return;
}
  
case 'servidor': {
const embed = new Discord.RichEmbed()
embed.setAuthor("Painel | Servidor",client.user.avatarURL);
embed.setDescription('Painel de informações do servidor.')
embed.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/515291378239012865/Servidor.png')
embed.addField('Mensagem/Entrada:', `${welcomeChannel}`,false)
embed.addField('Mensagem/Saída:', `${byeChannel}`,false)
embed.addField('Mensagem/Privada:', `${direct}`,false)
embed.addField('Canal/Sugestões:',`${sugestao}`,false)
embed.addField('Cargo/Automático:',`${autorole}`,false)
embed.addField('Prefixo:',`Meu prefixo atual é **${documento.prefixo}**`, false)
embed.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
embed.setColor('#f3052f');
message.channel.send({embed})
return;
}

case 'registro': {
	var selfrole = new Discord.RichEmbed();
   selfrole.setAuthor(`Painel | Registro`,client.user.avatarURL)
   selfrole.setDescription('Painel de informações referentes ao registro do servidor.')
   selfrole.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/515732781398097933/RegistroPainel.png')
   selfrole.addField('Registrador:',rol4, false);
   selfrole.addField('Novato:', rol5, false);
   selfrole.addField('Masculino:', rol1, false);
   selfrole.addField('Feminino:', rol2, false);
   selfrole.addField('Não-binário:', rol3, false);
   selfrole.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
   selfrole.setColor('#f3052f');
   message.channel.send({embed: selfrole});
return;
}
}
 
})   
}
  exports.aliases = ['config', 'configurações', 'PAINEL', 'CONFIG', 'configuration', 'CONFIGURAÇÕES','CONFIGURATION'];

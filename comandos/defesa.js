const db = require("../database.js");
const Discord = require("discord.js");

exports.run = (client, message, args) => {

//https://cdn.discordapp.com/attachments/501417815165632525/505444578753773569/unknown.png
//https://cdn.discordapp.com/attachments/501417815165632525/505444748983533579/unknown.png


var newSeven = args.slice(7).join(' ')
var azu  = args.slice(3).join(' ')



var modo = ['https://cdn.discordapp.com/attachments/505508393935568921/505563146149429267/defesa_2.png'];
var tempo = modo[Math.floor(Math.random() * modo.length)];


db.Guilds.findOne({"_id": message.guild.id }, function(erra, docu) {
if (docu) {

var embed = new Discord.RichEmbed()
.setAuthor('Kael | Defesa',client.user.avatarURL)
.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/511041595072577566/castle_1.png')
.addField(`Olá, você quer saber como funciona meu sistema de defesa?`,`É bem simples! Especifique quais de minhas defesas você quer funcionando através de um:`,false)
.addField(`${docu.prefixo}defesa parâmetro`,'**Parâmetros:**',false)
.addField(`${docu.prefixo}defesa convites `,'Bloqueador de convites de outros servidores.',false)
.addField(`${docu.prefixo}defesa links `,'Bloqueador de ameaças externas.',false)
.addField(`${docu.prefixo}defesa td`,'Bloqueador de textos duplicados.',false)
.addField(`${docu.prefixo}defesa ml`,'Bloqueador de mensagens rápidas(modo lento).',false)
.addField(`${docu.prefixo}defesa bot`,'Bloqueador de robots.',false)
.addField(`${docu.prefixo}defesa vocabulário`,`Receba informações sobre o corretor de vocabulário.`,false)
.setImage(tempo)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');


var aquaman = new Discord.RichEmbed()
 .setAuthor('Defesa | Vocabulário',client.user.avatarURL)
 .setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/515800217535250443/SabaoK.png')
 .addField(`${docu.prefixo}defesa vocabulário <palavra>`,`Adicione ou Remova palavras do meu vocabulário.`,false)
 .addField(`Exemplo:`,`**-defesa vocabulário boboca**\n**-defesa vocabulário pamonha**\n**-defesa vocabulário chatonildo**`,false)
 .addField(`${docu.prefixo}defesa resetar vocabulário`,`Limpa todo o corretor de vocabulário.`,false)
// .addField(`Palavras no vocabulário`,`${docu.filterWords.join(', ') ? docu.filterWords.join(', ')  : "Não existem palavras filtradas."}`,false)
 .setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
 .setColor('#f3052f'); 

let nha;
let nhe;
let nhi;
let nho;
let nhu;
let ha;

if (!docu.convites) nha = `Ativada <:Ativado:511067755370381325>`;
else nha = `Desativada <:Desativado:511067755269849089>`;

if (!docu.exlinks) nhe = "Ativada <:Ativado:511067755370381325>";
else nhe = "Desativada <:Desativado:511067755269849089>";

if(!docu.raid) nhi = "Ativada <:Ativado:511067755370381325>";
else nhi = "Desativada <:Desativado:511067755269849089>";

if(!docu.td) nho = "Ativada <:Ativado:511067755370381325>";
else nho = "Desativada <:Desativado:511067755269849089>";

if(!docu.md) nhu = "Ativada <:Ativado:511067755370381325>";
else nhu = "Desativada <:Desativado:511067755269849089>";

if(!docu.bot) ha = "Ativada <:Ativado:511067755370381325>";
else ha = "Desativada <:Desativado:511067755269849089>";


if (!args[0]) 
return message.channel.send({embed});	
//return message.reply(`<:sysalerta:469789950938841088> Você deve especificar um filtro. Filtros disponíveis:\n\n\`convites\` - Para filtrar links de convites.\n\`exlinks\` - Para filtrar links externos.\n\`anti-raid\` - Para filtrar possíveis raids(spamm) em seu servidor.\n\`palavras\` - Para filtrar palavras dentro do servidor.`);

	
switch (args[0]){
	
case 'convites': {

if (!message.member.hasPermission('ADMINISTRATOR'))
 return message.reply(`<:Defesa:511061395832438784> **|** Poing-oing... ${message.author}, este comando está disponível apenas para usuários administrativos do servidor.`);
    		
    		    if (!docu) 
    			docu = {};
    			if (!!docu.convites)
    			docu.convites = !docu.convites;
    			else 
    			docu.convites = true;
    			
    			docu.save();
    			message.channel.send(`<:Defesa:511061395832438784> **|** Pronto ${message.author}, defesa contra convites: **${nha}**`);
    			

return;    
} 
 case 'links': {

if (!message.member.hasPermission('ADMINISTRATOR'))
 return message.reply(`<:Defesa:511061395832438784> **|** Poing-oing... ${message.author}, este comando só está disponível para usuários administrativos do servidor.`);
    		
    		 if (!docu) 
    			docu = {};
    			if (!!docu.exlinks)
    			docu.exlinks = !docu.exlinks;
    			else 
    			docu.exlinks = true;
    			
    			docu.save();
    			message.channel.send(`<:Defesa:511061395832438784> **|** Pronto ${message.author}, defesa contra links externos: **${nhe}**`);
   
   
  return;  			
}     
   
        
 case 'vocabulário': {
  
if (!message.member.hasPermission('ADMINISTRATOR'))
 return message.reply(`<:Defesa:511061395832438784> **|** Poing-oing... ${message.author}, este comando só está disponível para usuários administrativos do servidor.`);
  
var words =  args[1]

if(!words) return message.channel.send({embed: aquaman})
var remover = !!docu.filterWords.includes(words)

if(remover) {
docu.filterWords.splice(docu.filterWords.indexOf(words), 1)
 
} else {
      docu.filterWords.push(words)
  }
   
   docu.save();
   
            const Discord = require('discord.js')
            var embed1 = new Discord.RichEmbed() 
            .setAuthor('Defesa | Vocabulário',client.user.avatarURL)
            .setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/515800217535250443/SabaoK.png')
            .setDescription(`${!remover ?  'Pronto, está palavra foi adicionada as defesas de vocábulario:' : 'Pronto, está palavra foi removida das defesas de vocábulario:'} \`\`\`${words}\`\`\``)
            //.addField(`Palavras filtradas`, `${docu.filterWords ? docu.filterWords : "Nenhuma palavra adicionada."}`,false)
	    .addBlankField(true)
	    .setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
            .setColor('#f3052f');
            message.channel.send({embed: embed1})
       
     
   
  return;  			
}     
            
 case 'td': {
     
if (!message.member.hasPermission('ADMINISTRATOR'))
 return message.reply(`<:Defesa:511061395832438784> **|** Poing-oing... ${message.author}, este comando só está disponível para usuários administrativos do servidor.`);
    		
    		 if (!docu) 
    			docu = {};
    			if (!!docu.td)
    			docu.td = !docu.td;
    			else 
    			docu.td = true;
    			
    			docu.save();
    			message.channel.send(`<:Defesa:511061395832438784> **|** Pronto ${message.author}, defesa contra textos duplicados: **${nho}**`);
   
   
  return;  			
}      
    
case 'ml': {
     

if (!message.member.hasPermission('ADMINISTRATOR'))
 return message.reply(`<:Defesa:511061395832438784> **|** Poing-oing... ${message.author}, este comando só está disponível para usuários administrativos do servidor.`);
    		
    		    if (!docu) 
    			docu = {};
    			if (!!docu.md)
    			docu.md = !docu.md;
    			else 
    			docu.md = true;
    			
    			docu.save();
    			message.channel.send(`<:Defesa:511061395832438784> **|** Pronto ${message.author}, defesa contra ataques: **${nhu}**`);
   
   
  return;  			
}   

case 'bot': {
     

if (!message.guild.owner)
 return message.channel.send(`<:Defesa:511061395832438784> **|** Poing-oing... ${message.author}, apenas o proprietário do servidor pode usar este comando.`);
    		
    		    if (!docu) 
    			docu = {};
    			if (!!docu.bot)
    			docu.bot = !docu.bot;
    			else 
    			docu.bot = true;
    			
    			docu.save();
    			message.channel.send(`<:Defesa:511061395832438784> **|** Pronto ${message.author}, defesa contra bots: **${ha}**`);
   
   
  return;  			
}   


}} else { 
	var server = new db.Guilds({
            _id: message.guild.id,
             convites: false,
             exlinks: false,
             sugestao: '',
             welcome: '',
             words: [],
             autorole: '',
        });
        server.save();
        message.reply("💥 Use o comando novamente");
    
}

});

db.Guilds.findOne({
    "_id": message.guild.id}, 
    function(erra, servidor) {
        if (servidor) {


if (!newSeven.length < 7) {     
if (message.content.startsWith(servidor.prefixo + 'defesa resetar vocabulário')) {
 
 if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(`<:Defesa:511061395832438784> **|** Poing-oing... ${message.author}, este comando só está disponível para usuários administrativos do servidor.`);

 
servidor.filterWords = [];
servidor.save();
message.channel.send(`<:Kael:512721559887151104> **|** Pronto ${message.author}, removi todas as palavras das defesas de vocabulário.`);
}
    
}

}
     
    });




};

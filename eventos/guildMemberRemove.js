const db = require("../database.js");

exports.run = (client, member) => {
    
    
     db.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
	
if(!sysop) return;
if(!sysop.contadorE) return;
if(!sysop.texto) return;
if(!client.guilds.get(member.guild.id).channels.get(sysop.contadorE)) return;

if (sysop) {	
let membros = `${client.guilds.get(member.guild.id).memberCount.toString()}`
let discord = membros.split('').map(i => ['<:00:486163080037007361> ', '<:11:486163136307658752>', '<:22:486163135993217035>', '<:33:486163136127303683>', '<:44:486163136874020864>', '<:55:486163135909068812>', '<:66:486163136873758740>', '<:77:486163136815169540>', '<:88:486163135938560013>', '<:99:486163157790883851>'][i]).join('');
client.guilds.get(member.guild.id).channels.get(sysop.contadorE).edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${discord} ${sysop.texto}` })
	}})	  
  
    
    db.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
    if(!sysop) return;
    if(!sysop.byeChannel) return;
    if(!sysop.bye) return;
    if(!client.guilds.get(member.guild.id).channels.get(sysop.byeChannel)) return;
  if (sysop) {
    let mensagem = sysop.bye.replace(/\{USER\}/gi, member.user.username).replace(/\{SERVER\}/gi, member.guild.name).replace(/\{MENTION\}/gi, `${member.user}`).replace(/\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\{USER_ID\}/gi, member.user.id);

    client.guilds.get(member.guild.id).channels.get(sysop.byeChannel).send(mensagem)
  }
    })
    

db.Guilds.findOne({
   "_id": member.guild.id}, function(erro, doc) {

    if(!doc) return;
     if(!doc.logg_mGR) return;

 	if(doc) {

let total = client.guilds.get(member.guild.id).memberCount.toString()

const Discord = require("discord.js")
const embed = new Discord.RichEmbed()
.setTitle(`Informes | Saída`,client.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setDescription(`Quem nunca disse um tchau querendo ficar um pouco mais?`)
.addField('Usuário:',`${member}`)
.setTimestamp()
.setFooter(`ID do Usuário: ${member.id}`)
.setColor('#f3052f');
client.guilds.get(member.guild.id).channels.get(doc.logg_mGR).send({embed});
}
})

if (member.guild) {    
 db.Guilds.findOne({
    "_id": member.guild.id}, 
        function(erra, sysop) {

    if(!sysop) return;
    if(!sysop.numero) return;
    if(!sysop.txt) return;
    if(!client.guilds.get(member.guild.id).channels.get(sysop.numero)) return;	
if (sysop) {	

let membross =  client.guilds.get(member.guild.id).memberCount.toString();
let preto = membross.split('').map(i =>['<:zero6:509041031199588377>','<:um6:509041030784614401>','<:dois6:509041027777036288>','<:tres6:509041030692077568>','<:quatro6:509041028607770644>','<:cinco6:509041027567321119>','<:seis6:509041028674879488>','<:sete6:509041030738477074>','<:oito6:509041028154785815>','<:nove9:509041028146135050>'][i]).join('');
let branco = membross.split('').map(i =>['<:zero7:509041031183073320>','<:um7:509041030822363136>','<:dois7:509041027793944586>','<:tres7:509041030822100993>','<:quatro7:509041028419026946>','<:cinco7:509041027794075689>','<:seis7:509041030587351040>','<:sete7:509041030709116953>','<:oito7:509041028653645840>','<:nove7:509041027965911040>'][i]).join('');
let cinza = membross.split('').map(i =>['<:zero5:509041030985809980>','<:um5:509041030788546598>','<:dois5:509041027747938305>','<:tres5:509041030721699851>','<:quatro5:509041028586799134>','<:cinco5:509041027672178709>','<:seis5:509041028947378206>','<:sete5:509041030553796608>','<:oito5:509041027798138881>','<:nove5:509041027907190785>'][i]).join('');
let azul = membross.split('').map(i =>['<:zero0:509036054247112724>','<:um:509036053672361984>','<:dois:509036049423532044>','<:tres:509036053043347458>','<:quatro:509036052128727042>','<:cinco:509036049779916811>','<:seis:509036052426653722>','<:sete:509036052665860107>','<:oito:509036049952145409>','<:nove:509036050094489616>'][i]).join('');
let verde = membross.split('').map(i =>['<:zero3:509036054246981632>','<:um3:509036053881946118>','<:dois3:509036049507418123>','<:tres3:509036053491875854>','<:quatro3:509036052061880321>','<:cinco3:509036049847025674>','<:seis3:509036052573454336>','<:sete3:509036052950810624>','<:oito3:509036050157404170>','<:nove3:509036049901551627>'][i]).join('');
let vermelho = membross.split('').map(i =>['<:zero1:509036054653960192>','<:um1:509036053508653058>','<:dois1:509036049360748545>','<:tres1:509036053244542987>','<:quatro1:509036052170801172>','<:cinco1:509036049557618706>','<:seis1:509036052837695503>','<:sete1:509036052967849985>','<:oito1:509036050274975744>','<:nove1:509036050132500490>'][i]).join('');
let roxo = membross.split('').map(i =>['<:zero4:509036054242656256>','<:um4:509036053907374090>','<:dois4:509036049817796628>','<:tres4:509036053555052544>','<:quatro4:509036052309213204>','<:cinco4:509036049536778250>','<:seis4:509036052724580372>','<:sete4:509036052980170762>','<:oito4:509036049838899231>','<:nove4:509036049792499716>'][i]).join('');
let rosa = membross.split('').map(i =>['<:zero2:509036054276341771>','<:um2:509036053974482946>','<:dois2:509036049633247242>','<:tres2:509036053047541771>','<:quatro2:509036052347092993>','<:cinco2:509036049801150474>','<:seis2:509036052573585408>','<:sete2:509036052535836703>','<:oito2:509036050241290260>','<:nove2:509036051030081557>'][i]).join('');
let carmesim = membross.split('').map(i =>['<:kael0:512818665142353920>','<:Kael1:512818665217851392>','<:Kael2:512818665150873603>','<:Kael3:512818665364652032>','<:Kael4:512818665968762881>','<:Kael5:512818666476273664>','<:Kael6:512818665448669192>','<:Kael7:512818665633087517>','<:Kael8:512818665758916609>','<:Kael9:512818665411051522>'][i]).join('');



let mensagem = sysop.txt.replace(/\{vermelho\}/gi, vermelho).replace(/\{VERMELHO\}/gi, vermelho)
.replace(/\{roxo\}/gi, roxo).replace(/\{ROXO\}/gi, roxo)
.replace(/\{rosa\}/gi, rosa).replace(/\{ROSA\}/gi, rosa)
.replace(/\{verde\}/gi, verde).replace(/\{VERDE\}/gi, verde)
.replace(/\{preto\}/gi, preto).replace(/\{PRETO\}/gi, preto)
.replace(/\{branco\}/gi, branco).replace(/\{BRANCO\}/gi, branco)
.replace(/\{cinza\}/gi, cinza).replace(/\{CINZA\}/gi, cinza)
.replace(/\{azul\}/gi, azul).replace(/\{AZUL\}/gi, azul)
.replace(/\{kael\}/gi, carmesim).replace(/\{KAEL\}/gi, carmesim).replace(/\{Kael\}/gi, carmesim);
client.guilds.get(member.guild.id).channels.get(sysop.numero).edit({ topic: `${mensagem}`});
  }
})

}

}

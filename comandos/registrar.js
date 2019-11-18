const db = require('../database.js');
const { RichEmbed } = require('discord.js')

exports.run = async function (client, message, args) {
message.delete();

var createAccount = id => {
    var registrado = new db.Registrador({
        _id: message.guild.id+mention.user.id,
        mh: 0,
        hm: 0,
        registrado: '',
        nbinario: 0
    })
    registrado.save()
    return registrado;
    
}

var createAccountS = id => {
    var registrador = new db.Registrador({
        _id: message.guild.id+mention.user.id,
        mh: 0,
        hm: 0,
        registrado: '',
        nbinario: 0
    })
    registrador.save()
    return registrador;
    
}

var createAccountG = id => {
    var server = new db.Guilds({
        _id: message.guild.id,
        autorole: '',
                sugestao: '',
                filterInvites: false,
                filterPrintscreen: '',
                filterWords: [],
                welcome: '',
                welcomeChannel: '',
                bye: '',
                byeChannel: '',
                dm: '',
                girl: '',
                man: '',
                staffer: '',
    })
    server.save()
    return server;
    
}



var mention =  message.mentions.members.first() || message.guild.member(args[0]) || null
if(!mention) 
return message.channel.send(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, faltou você mencionar o usuário a ser registrado ou inserir uma ID válida.`).then(sentMsg => sentMsg.delete(10000));   
 
if (message.mentions.users.first().id == message.author.id)
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author} você não pode registrar a si mesmo, bobinho(a).`).then(sentMsg => sentMsg.delete(10000));
     
var registrar = await message.channel.send(new RichEmbed()
.setAuthor('Kael | Registro',client.user.avatarURL)
.setThumbnail(mention.user.avatarURL)
.setTitle(`Confirmação de registro:\n⠀⠀⠀`)
.setDescription(`<:MeninoK:512721560063311881> **|** Masculino\n\n<:MeninaK:512721560356913153> **|** Feminino\n\n<:IntersexK:514682703619293196> **|** Não-binário\n\n<:Cancelar:512814889128034305> **|** Cancelar\n⠀⠀⠀`)
.addField(`Novato:`,`${mention.user.tag}`,true)
.addField(`Registrador:`,`${message.author.tag}`,true)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f'))
    
    await registrar.react('512721560063311881') //menino
    await registrar.react('512721560356913153') //menina
    await registrar.react('514682703619293196') //intersexK
    await registrar.react('512814889128034305') //cancelar
  
const collected = await registrar.awaitReactions((r, u) => r.me && u.id === message.author.id, { max: 1, time: 60000, errors: ['time'] }).catch(msg => 
msg.send(`<:Falha:511151506574016515> **|** ${message.author}, o seu tempo de **1 minuto** terminou. Solicitação de banimento expirada.`));
     
 db.Registrador.findOne({ 
       "_id": message.guild.id+message.author.id}, 
       function (erro, rgStaff) {
 if(!rgStaff) {
     rgStaff = createAccount(message.guild.id+message.author.id)
 }

db.Registrador.findOne({ 
       "_id": message.guild.id+mention.user.id}, 
       function (erro, rgMention) {
 if(!rgMention) {
     rgMention = createAccountS(message.guild.id+mention.user.id)
 }

db.Guilds.findOne({ 
       "_id": message.guild.id}, 
       function (erro, server) {
 if(!server) {
     server = createAccountG(message.guild.id)
 }

   

                    
if (collected) {
    let r = collected.first()
    if (r.emoji.id === '512721560063311881') {
        
   var mas = message.guild.roles.find(un => un.id === server.man) 
    if (mas == null) { 
    registrar.delete();    
    return message.channel.send(`<:MeninoK:512721560063311881> **|** ${message.author}, o cargo \`masculino\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
    
    var mass = message.guild.roles.find(un => un.id === server.girl);
    if (mass == null) {
    registrar.delete();
    return message.channel.send(`**<:MeninaK:512721560356913153>** | ${message.author}, o cargo \`feminino\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
    
    var atapo = message.guild.roles.find(un => un.id === server.nb);
    if (atapo == null) {
    registrar.delete();
    return message.channel.send(`**<:IntersexK:514682703619293196>** | ${message.author}, o cargo \`não-binário\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
    
    var no = message.guild.roles.find(un => un.id === server.staffer);
    if (no == null) {
    registrar.delete();
    return message.channel.send(`**<:Kael:512721559887151104>** | ${message.author}, o cargo \`registrador\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
   
    var noo = message.guild.roles.find(un => un.id === server.autorole);
    registrar.delete();
    if (noo  == null) {
    return message.channel.send(`**<:NovatoK:512724054415900682>** | ${message.author}, o cargo \`membro\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
    
    if(!message.member.hasPermission('ADMINISTRATOR') && !message.guild.members.get(message.author.id).roles.find(un => un.id === server.staffer)) {
    registrar.delete();    
    return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você não é um dos registradores desse servidor, bobinho(a)`);
    }
    
    if (!rgMention.registrado == "") {
    registrar.delete(); 
    return message.channel.send(`<:Registrando:512829347049242634> **|** ${message.member}, esse usuário já foi registrado por <@${rgMention.registrado}>!`);     
    }       
    
    if(!message.guild.members.get(mention.user.id).roles.find(un => un.id === server.autorole)) {
    registrar.delete();
    return message.channel.send(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, o usuário mencionado não possui o cargo de novato.`);
    }    
          
    
      
            
  registrar.delete();
  mention.removeRole(server.girl);      
  mention.addRole(server.man);
  mention.removeRole(server.autorole)
  rgStaff.hm += 1;
  rgStaff.save();
  rgMention.registrado = message.author.id
  rgMention.save();
   
   
   const Discord = require('discord.js');
   const embed = new Discord.RichEmbed()
                    .setAuthor('Kael | Registro',client.user.avatarURL)
                    .setThumbnail(mention.user.avatarURL)
                    .setDescription(`**Parabéns**, você acaba de efetuar o registro!`)
                    .addField(`<:Kael:512721559887151104> Registrador:`,`${message.author.tag}`)
                    .addField(`<:MeninoK:512721560063311881> Novato:`, `${mention.user.tag}`)
                    .setTimestamp()
                    .setFooter(message.guild.name)
                    .setColor('#f3052f');
                    message.channel.send({embed})
                    
                    
    const privado = new Discord.RichEmbed()
                    .setAuthor(`${message.guild.name} | Notificação`,message.guild.iconURL)
                    .setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/512842552307875850/Kael_Registro.png')
                    .setDescription(`Seu registro em nosso servidor foi efetuado com sucesso!`)
                    .addField(`<:Registrando:512829347049242634> Registrador:`,`${message.author.tag}`,false)
                    .addField('<:Kael:512721559887151104> Precisa de ajuda?','[Clique aqui](https://discord.gg/Sh8rGW4) e venha conhecer meus criadores!',false)
                    .setTimestamp()
                    .setFooter('Hoje um sushi iria bem! 😋🍣',client.user.avatarURL)
                    .setColor('#f3052f');
                    mention.user.send({embed: privado})                
                    
    }


    if (r.emoji.id === '512721560356913153') {

   var mas = message.guild.roles.find(un => un.id === server.man) 
    if (mas == null) { 
    registrar.delete();    
    return message.channel.send(`<:MeninoK:512721560063311881> **|** ${message.author}, o cargo \`masculino\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
    
    var mass = message.guild.roles.find(un => un.id === server.girl);
    if (mass == null) {
    registrar.delete();
    return message.channel.send(`**<:MeninaK:512721560356913153>** | ${message.author}, o cargo \`feminino\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
    
    var atapo = message.guild.roles.find(un => un.id === server.nb);
    if (atapo == null) {
    registrar.delete();
    return message.channel.send(`**<:IntersexK:514682703619293196>** | ${message.author}, o cargo \`não-binário\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
    
    var no = message.guild.roles.find(un => un.id === server.staffer);
    if (no == null) {
    registrar.delete();
    return message.channel.send(`**<:Kael:512721559887151104>** | ${message.author}, o cargo \`registrador\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
   
    var noo = message.guild.roles.find(un => un.id === server.autorole);
    registrar.delete();
    if (noo  == null) {
    return message.channel.send(`**<:NovatoK:512724054415900682>** | ${message.author}, o cargo \`membro\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
    
    if(!message.member.hasPermission('ADMINISTRATOR') && !message.guild.members.get(message.author.id).roles.find(un => un.id === server.staffer)) {
    registrar.delete();    
    return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você não é um dos registradores desse servidor, bobinho(a)`);
    }
    
    if (!rgMention.registrado == "") {
    registrar.delete(); 
    return message.channel.send(`<:Registrando:512829347049242634> **|** ${message.member}, esse usuário já foi registrado por <@${rgMention.registrado}>!`);     
    }       
    
    if(!message.guild.members.get(mention.user.id).roles.find(un => un.id === server.autorole)) {
    registrar.delete();
    return message.channel.send(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, o usuário mencionado não possui o cargo de novato.`);
    }    


  registrar.delete(); 
  mention.removeRole(server.man);      
  mention.addRole(server.girl);
  mention.removeRole(server.autorole)
  rgStaff.mh += 1;
  rgStaff.save();
  rgMention.registrado = message.author.id
  rgMention.save();
   
   
   const Discord = require('discord.js');
   const embed = new Discord.RichEmbed()
                    .setAuthor('Kael | Registro',client.user.avatarURL)
                    .setThumbnail(mention.user.avatarURL)
                    .setDescription(`**Parabéns**, você acaba de efetuar o registro!`)
                    .addField(`<:Kael:512721559887151104> Registrador:`,`${message.author.tag}`)
                    .addField(`<:MeninaK:512721560356913153> Novata:`, `${mention.user.tag}`)
                    .setTimestamp()
                    .setFooter(message.guild.name)
                    .setColor('#f3052f');
                    message.channel.send({embed})

    
    
    const privado = new Discord.RichEmbed()
                    .setAuthor(`${message.guild.name} | Notificação`,message.guild.iconURL)
                    .setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/512842552307875850/Kael_Registro.png')
                    .setDescription(`Seu registro em nosso servidor foi efetuado com sucesso!`)
                    .addField(`<:Registrando:512829347049242634> Registrador:`,`${message.author.tag}`,false)
                    .addField('<:Kael:512721559887151104> Precisa de ajuda?','[Clique aqui](https://discord.gg/Sh8rGW4) e venha conhecer meus criadores!',false)
                    .setTimestamp()
                    .setFooter('Hoje um sushi iria bem! 😋🍣',client.user.avatarURL)
                    .setColor('#f3052f');
                    mention.user.send({embed: privado})                
                    
    }
    
    if(r.emoji.id === "514682703619293196") {
     var mas = message.guild.roles.find(un => un.id === server.man) 
    if (mas == null) { 
    registrar.delete();    
    return message.channel.send(`<:MeninoK:512721560063311881> **|** ${message.author}, o cargo \`masculino\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
    
    var mass = message.guild.roles.find(un => un.id === server.girl);
    if (mass == null) {
    registrar.delete();
    return message.channel.send(`**<:MeninaK:512721560356913153>** | ${message.author}, o cargo \`feminino\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
    
    var atapo = message.guild.roles.find(un => un.id === server.nb);
    if (atapo == null) {
    registrar.delete();
    return message.channel.send(`**<:IntersexK:514682703619293196>** | ${message.author}, o cargo \`não-binário\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
    
    var no = message.guild.roles.find(un => un.id === server.staffer);
    if (no == null) {
    registrar.delete();
    return message.channel.send(`**<:Kael:512721559887151104>** | ${message.author}, o cargo \`registrador\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
   
    var noo = message.guild.roles.find(un => un.id === server.autorole);
    registrar.delete();
    if (noo  == null) {
    return message.channel.send(`**<:NovatoK:512724054415900682>** | ${message.author}, o cargo \`membro\` não foi definido neste servidor. **Use:** ${server.prefixo}registro para mais informações.`);
    }
    
    if(!message.member.hasPermission('ADMINISTRATOR') && !message.guild.members.get(message.author.id).roles.find(un => un.id === server.staffer)) {
    registrar.delete();    
    return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você não é um dos registradores desse servidor, bobinho(a)`);
    }
    
    if (!rgMention.registrado == "") {
    registrar.delete(); 
    return message.channel.send(`<:Registrando:512829347049242634> **|** ${message.member}, esse usuário já foi registrado por <@${rgMention.registrado}>!`);     
    }       
    
    if(!message.guild.members.get(mention.user.id).roles.find(un => un.id === server.autorole)) {
    registrar.delete();
    return message.channel.send(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, o usuário mencionado não possui o cargo de novato.`);
    }    
       
       
  registrar.delete(); 
  mention.removeRole(server.man);
  mention.removeRole(server.girl);
  mention.removeRole(server.autorole)
  mention.addRole(server.nb);
  rgStaff.nbinario += 1;
  rgStaff.save();
  rgMention.registrado = message.author.id
  rgMention.save();    

 const Discord = require('discord.js');
   const embed = new Discord.RichEmbed()
                    .setAuthor('Kael | Registro',client.user.avatarURL)
                    .setThumbnail(mention.user.avatarURL)
                    .setDescription(`**Parabéns**, você acaba de efetuar o registro!`)
                    .addField(`<:Kael:512721559887151104> Registrador(a):`,`${message.author.tag}`)
                    .addField(`<:IntersexK:514682703619293196> Novato(a):`, `${mention.user.tag}`)
                    .setTimestamp()
                    .setFooter(message.guild.name)
                    .setColor('#f3052f');
                    message.channel.send({embed})

    
    
    const privado = new Discord.RichEmbed()
                    .setAuthor(`${message.guild.name} | Notificação`,message.guild.iconURL)
                    .setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/512842552307875850/Kael_Registro.png')
                    .setDescription(`Seu registro em nosso servidor foi efetuado com sucesso!`)
                    .addField(`<:Registrando:512829347049242634> Registrador:`,`${message.author.tag}`,false)
                    .addField('<:Kael:512721559887151104> Precisa de ajuda?','[Clique aqui](https://discord.gg/Sh8rGW4) e venha conhecer meus criadores!',false)
                    .setTimestamp()
                    .setFooter('Hoje um sushi iria bem! 😋🍣',client.user.avatarURL)
                    .setColor('#f3052f');
                    mention.user.send({embed: privado})                
               

    }
    
    if(r.emoji.id === "512814889128034305") {
      registrar.delete();
        
    }
}                    
                    
                    
               })
           })
       })
  }
  
  exports.aliases = ['rg', 'RG', 'REGISTRAR']

const Discord = require("discord.js")
const db = require("../database.js");

exports.run = (client, message, args) => {
 
var um = args.slice(1).join(' ')
var dois = args.slice(2).join(' ')
var tres = args.slice(3).join(' ')
var quatro = args.slice(4).join(' ')
var cinco = args.slice(5).join(' ')

 var createAccount = id => {
      var servidor = new db.Guilds({
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
                nb: ''
            });
            servidor.save();
            return servidor;
 }
    
 if(!message.member.hasPermission("ADMINISTRATOR"))
 return message.channel.send(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, você precisa ter poder administrativo para utilizar esse comando.`)
 
 db.Guilds.findOne({
     "_id": message.guild.id },
     function (erro, sysop) {
         
        if(!sysop) {
            sysop = createAccount(message.guild.id)
        }
      
 
  const embed = new Discord.RichEmbed()        
  .setAuthor(`Ajuda | Registro`,client.user.avatarURL)
 .setDescription(`Então amiguinho(a), você deve configurar os cargos para ter acesso ao meu sistema de registro.\n⠀⠀\n<:MeninoK:512721560063311881> **|** **Cargo masculino:**`)
 .addField(`${sysop.prefixo}registro masculino <@cargo>`,`Defina o cargo masculino do servidor.`,false)
 .addField(`${sysop.prefixo}registro desativar masculino`, `Desativará e resetará o cargo masculino do servidor\n⠀⠀\n<:MeninaK:512721560356913153> **|** **Cargo feminino:**`,false)
 .addField(`${sysop.prefixo}registro feminino <@cargo>`,`Defina o cargo feminino do servidor.`,false)
 .addField(`${sysop.prefixo}registro desativar feminino`, `Desativará e resetará o cargo feminino do servidor\n⠀⠀\n<:IntersexK:514682703619293196> **|** **Cargo não-binário:**`,false)
  .addField(`${sysop.prefixo}registro nb <@cargo>`,`Defina o cargo não-binário do servidor.`,false)
 .addField(`${sysop.prefixo}registro desativar nb`, `Desativará e resetará o cargo não-binário do servidor\n⠀⠀\n<:Kael:512721559887151104> **|** **Cargo registrador:**`,false)
 .addField(`${sysop.prefixo}registro registrador <@cargo>`,`Defina o cargo para registradores no qual apenas usuários com o mesmo poderão registrar em seu servidor.`,false)
 .addField(`${sysop.prefixo}registro desativar registrador`,`Desativará e resetará o cargo registrador do servidor.\n⠀⠀\n<:NovatoK:512724054415900682> **|** **Cargo novato:**`,false)
 .addField(`${sysop.prefixo}registro novato <@cargo>`,`Defina o cargo para novatos no qual será necessário para relizar os registros, essa função também ativa o autocargo do servidor.`,false)
 .addField(`${sysop.prefixo}registro desativar novato`,`Desativará e resetará o cargo novato do servidor.\n⠀⠀⠀⠀⠀⠀\n<:Aviso:512725117865033748>  **|**  **Amiguinho(a)** você deve tomar cuidado ao desativar o cargo novato do registro, pois o auto-cargo do servidor também será desativado no processo.`,false)
 .setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
 .setColor('#f3052f');
 if(!args[0]) return message.channel.send({embed}).then(sentMsg => sentMsg.delete(60000));

       
  switch (args[0]) {
	case 'masculino' : {
        
     if (!message.mentions.roles.first()) {
     if (sysop && sysop.man)   
     return message.channel.send(`<:MeninoK:512721560063311881> **|** ${message.author}, cargo masculino definido como: <@&${sysop.autorole}>`);
     else
     return message.channel.send(`<:MeninoK:512721560063311881> **|** ${message.author}, defina o cargo masculino do servidor!`);
     } else { 
     if (!sysop) sysop = {};   
     sysop.man = message.mentions.roles.first().id;
     sysop.save();
     return message.channel.send(`<:MeninoK:512721560063311881> **|** ${message.author}, você definiu <@&${message.mentions.roles.first().id}> como cargo masculino do servidor!`);


          }
	}
          
case 'feminino' : {
        
     if (!message.mentions.roles.first()) {
     if (sysop && sysop.girl)   
     return message.channel.send(`<:MeninaK:512721560356913153> **|** ${message.author}, cargo feminino definido como: <@&${sysop.autorole}>`);
     else
     return message.channel.send(`<:MeninaK:512721560356913153> **|** ${message.author}, defina o cargo feminino do servidor!`);
     } else { 
     if (!sysop) sysop = {};   
     sysop.girl = message.mentions.roles.first().id;
     sysop.save();
     return message.channel.send(`<:MeninaK:512721560356913153> **|** ${message.author}, você definiu <@&${message.mentions.roles.first().id}> como cargo feminino do servidor!`);


          }
	    
	}   
	
	case 'nb' : {
        
     if (!message.mentions.roles.first()) {
     if (sysop && sysop.nb)   
     return message.channel.send(`<:IntersexK:514682703619293196> **|** ${message.author}, cargo não-binário definido como: <@&${sysop.autorole}>`);
     else
     return message.channel.send(`<:IntersexK:514682703619293196> **|** ${message.author}, defina o cargo não-binário do servidor!`);
     } else { 
     if (!sysop) sysop = {};   
     sysop.nb = message.mentions.roles.first().id;
     sysop.save();
     return message.channel.send(`<:IntersexK:514682703619293196> **|** ${message.author}, você definiu <@&${message.mentions.roles.first().id}> como cargo não-binário do servidor!`);


          }
	    
	}   
	
	
	case 'registrador' : {
        
     if (!message.mentions.roles.first()) {
     if (sysop && sysop.staffer)   
     return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, cargo registrador definido como: <@&${sysop.autorole}>`);
     else
     return message.channel.send(`<:Kael:512721559887151104> | ${message.author} defina o cargo registrador do servidor.`);
     } else { 
     if (!sysop) sysop = {};   
     sysop.staffer = message.mentions.roles.first().id;
     sysop.save();
     return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você definiu <@&${message.mentions.roles.first().id}> como cargo registrador do servidor!`);


          }
	    
	}  
	
	case 'novato' : {
        
     if (!message.mentions.roles.first()) {
     if (sysop && sysop.autorole)   
     return message.channel.send(`<:NovatoK:512724054415900682> **|** ${message.author}, cargo novato definido como: <@&${sysop.autorole}>`);
     else
     return message.channel.send(`<:NovatoK:512724054415900682> **|** ${message.author}, defina o cargo novato do servidor!`);
     } else { 
     if (!sysop) sysop = {};   
     sysop.autorole = message.mentions.roles.first().id;
     sysop.save();
     return message.channel.send(`<:NovatoK:512724054415900682> **|** ${message.author}, você definiu <@&${message.mentions.roles.first().id}> como cargo novato/autocargo do servidor!`);


          }
	    
	}  
	

  }
  
  
  
if (!um.length < 1) {     
if (message.content.startsWith(sysop.prefixo + 'registrador desativar masculino')) {
 
sysop.man = '';
sysop.save();
message.channel.send(`<:MeninoK:512721560063311881> **|** ${message.author}, você resetou o cargo masculino do servidor.`)
}
   
  }
  
 if (!dois.length < 2) {     
if (message.content.startsWith(sysop.prefixo + 'registrador desativar feminino')) {
 
sysop.girl = '';
sysop.save();
message.channel.send(`<:MeninaK:512721560356913153> **|** ${message.author},  você resetou o cargo feminino do servidor.`)
}
   
  } 
  
  if (!tres.length < 3) {     
if (message.content.startsWith(sysop.prefixo + 'registrador desativar registrador')) {
 
sysop.staffer = '';
sysop.save();
message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você resetou o cargo registrador do servidor.`)
}
   
  }
  
  if (!quatro.length < 4) {     
if (message.content.startsWith(sysop.prefixo + 'registrador desativar membro')) {
 
sysop.autorole = '';
sysop.save();
message.channel.send(`<:NovatoK:512724054415900682> **|** ${message.author}, você resetou o cargo novato do servidor.`)
}
   
  }
  
   if (!cinco.length < 4) {     
if (message.content.startsWith(sysop.prefixo + 'registrador desativar nb')) {
 
sysop.nb = '';
sysop.save();
message.channel.send(`<:IntersexK:514682703619293196> **|** ${message.author}, você resetou o cargo não-binário do servidor.`)
}
   
  }
  
        
        
        
     });
 
};

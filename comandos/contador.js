const db = require("../database.js");
const Discord = require("discord.js");

exports.run = (client, message, args) => {
message.delete()
   
if ( !['244489368717230090','314966364873818112'].includes(message.author.id) && !message.member.hasPermission('MANAGE_CHANNELS'))
return message.channel.send(`<:Contador:514097546298261505> **|** ${message.author}, você precisa possuir permissão de gerenciamento de canais para ter acesso ao contador desse servidor.`)
   
   var mensagem = args.slice(1).join(' ');
   
   var createAccount = id => {
       var guilda = new db.Guilds({
           _id: id,
           numero: '',
           texto: '',
           txt: ''
       });
       guilda.save();
       return guilda;
   }
   
   db.Guilds.findOne({
       "_id": message.guild.id},
       function (erro, dbContador) {
    
       if(!dbContador) {
           dbContador = createAccount(message.guild.id)
       }
 
 const embed = new Discord.RichEmbed()
 .setAuthor('Ajuda | Contador',client.user.avatarURL)
 .setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/511037697087766528/Contador.png')
 .addField(`${dbContador.prefixo}contador texto <texto>`, `• Ative meu contador e tenha acesso ao número de membros do servidor em tempo real.\n• Utilize {parametro} para inserir a numeração em seu texto.`)
 .addField(`Exemplo:`,`${dbContador.prefixo}contador texto Sejam bem-vindos | Número total de membros: {azul}.`,false)
 .addField(`${dbContador.prefixo}contador desativar`,`Para desativar meu contador.`,false)
 .addField(`__Parâmetros__`,'<:kael0:512818665142353920> | {kael} - Para contador de cor carmesim. \n<:zero0:509036054247112724> **|** {azul} - Para contador de cor azul.\n<:zero1:509036054653960192> **|** {vermelho} - Para contador de cor vermelha\n<:zero3:509036054246981632> **|** {verde} - Para contador de cor verde\n<:zero4:509036054242656256> **|** {roxo} - Para contador de cor roxa\n<:zero2:509036054276341771> **|** {rosa} - Para contador de cor rosa\n<:zero6:509041031199588377> **|** {preto} - Para contador de cor preta\n<:zero7:509041031183073320> **|** {branco} - Para contador de cor branca\n<:zero5:509041030985809980> **|** {cinza} - Para contador de cor cinza',false)
 .setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
 .setColor('#f3052f');
  if(!args[0]) return message.channel.send({embed}).then(sentMsg => sentMsg.delete(30000));    

switch (args[0]) {
case 'texto':{
 if (!['244489368717230090','314966364873818112'].includes(message.author.id) && !message.member.hasPermission('MANAGE_CHANNELS'))
return message.channel.send(`<:Contador:514097546298261505> **|** ${message.author}, você precisa possuir permissão de gerenciamento de canais para ter acesso ao contador desse servidor.`) 
    
    if (!mensagem) {
    if (!dbContador.txt)
   return message.channel.send(`<:Contador:514097546298261505> **|** ${message.author}, este servidor não possui o contador ativo. Use ${dbContador.prefixo}contador para mais infos.`).then(sentMsg => sentMsg.delete(10000));  
   else 
   return message.channel.send(`<:Contador:514097546298261505> **|** ${message.author}, texto do contador definido como: \`\`\`https\n${dbContador.txt}\`\`\``).then(sentMsg => sentMsg.delete(20000));  

    } else {
            dbContador.txt = mensagem;
            dbContador.numero = message.channel.id;
            dbContador.save();
            return message.channel.send(`<:Contador:514097546298261505> **|** ${message.author}, você definiu o contador como: **${mensagem}**`).then(sentMsg => sentMsg.delete(20000));  

    }
    
    

}
case 'desativar': {
 if ( !['244489368717230090','314966364873818112'].includes(message.author.id) && !message.member.hasPermission('MANAGE_CHANNELS'))
return message.channel.send(`<:Contador:514097546298261505> **|** ${message.author}, você precisa possuir permissão de gerenciamento de canais para ter acesso ao contador desse servidor.`)
      
    dbContador.numero = '';
    dbContador.txt = '',
    dbContador.save();
    return message.channel.send(`<:Contador:514097546298261505> **|** ${message.author}, o contador foi desativado!`).then(sentMsg => sentMsg.delete(10000));  
        
    
}


    }
           
      
           
     })
       
};


exports.aliases = ['memberCount','CONTADOR','count'];

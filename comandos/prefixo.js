const database =  require('../database.js');

exports.run = (client, message, args) => {
  

   if (!['244489368717230090'].includes(message.author.id) && !message.member.hasPermission('ADMINISTRATOR')) 
   return message.channel.send(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, você precisa possuir poder administrativo para utilizar esse comando.`); // Tell them if they don't have the proper permissions.
   
   database.Guilds.findOne({
      "_id": message.guild.id
    }, function(erro, documento) {

      if (documento) {
  
   
    if (!args[0]) 
    return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, defina um novo prefixo! **${documento.prefixo}prefixo <novo prefix>**`); // Tell them if they didn't supply any arguments.
    
    if (args.join(' ').length > 2) return message.channel.send(`<:Kael:512721559887151104> **|** Poing-oing... ${message.author}, eu possuo um limite máximo de 2 caracteres em meu prefixo, tente novamente amiguinho(a).`)

        documento.prefixo = args.join(' ')
        documento.save()

        message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, meu prefixo foi alterado para **${documento.prefixo}**`);
      } else {
          var servidor = new database.Guilds({
                _id: message.guild.id,
                lvl: true,
                prefixo: 'k+',
             
            });
            servidor.save();
      }
      }) 
      
      

};

exports.aliases = ['prefix','setprefix','setprefixo'];
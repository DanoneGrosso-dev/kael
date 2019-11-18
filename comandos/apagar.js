 const Discord = require("discord.js")


exports.run = (client, message) => {
 
   var args = message.content.split(' '),
            user   = message.mentions.users.size > 0 ? message.mentions.users.first() : null,
            amount = isNaN(Number(args[1])) ? Number(args[2]) : Number(args[1]);
  
        if (!amount) 
        return message.channel.send(`<:Limpeza:507408323306323970> **|** Poing-oing... ${message.author}, tens que me dizer quantas mensagens quer que eu apague, bobinho(a)!`).then(azu => azu.delete(8000));
        
        
        /*if (!user) 
        
        //| Você deve espeficificar um usuário mais a quantidade de mensagens a serem apagadas ou utilizar o comando apagar mais a quantidade de mensagens.
           
       return message.channel.send({embed: { 
            color: 0xe30934, 
            author: { 
            name: message.author.tag, 
            icon_url: message.author.avatarURL 
            
        },
        description: "<:Limpeza:507408323306323970> | Você deve espeficificar um usuário mais a quantidade de mensagens a serem apagadas ou utilizar o comando apagar mais a quantidade de mensagens."
              }
        }).then(azu => azu.delete(8000));*/
        
        if (amount < 2 || amount > 100) 
        return message.channel.send(`<:Limpeza:507408323306323970> **|** Poing-oing... ${message.author}, eu só posso limpar de 2 á 100 mensagens de uma vez!`).then(azu => azu.delete(8000));
        
        if (!message.member.hasPermission('MANAGE_MESSAGES')) 
         return message.channel.send(`<:Limpeza:507408323306323970> **|** Poing-oing... ${message.author}, só sigo ordens para apagar de quem pode gerenciar mensagens nesse servidor.`).then(azu => azu.delete(8000));

        message.channel.fetchMessages({
            limit: amount,
        }).then(messages => {
            
       let deleted = messages.filter(m => user ? m.author.id === user.id : m).array().slice(0, amount);
            
    if (deleted.length < 2) 
    return message.channel.send(`<:Limpeza:507408323306323970> **|** Poing-oing... ${message.author}, não localizei nenhuma mensagem!`).then(azu => azu.delete(8000));
            
        message.channel.bulkDelete(deleted).then(num => {
        return message.channel.send(`<:Limpeza:507408323306323970> **|** ${message.author}, eliminei ${num.size} mensagens do sistema!`).then(azu => azu.delete(8000));
        
          });            
        }).catch(error => console.log(error.stack));
    
    };
    
    exports.aliases = ['deletar','excluir','clear','clean','remover','limpar'];
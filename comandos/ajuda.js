//apagar = borrar
//ban = ban

const Discord = require("discord.js");
const db = require("../database.js");

exports.run = (client, message, suffix) => {

message.delete();

db.Guilds.findOne({
    "_id": message.guild.id }, 
    function(erra, server) {


const embed = new Discord.RichEmbed()
.setAuthor('Ajuda | Kael',client.user.avatarURL)
.setThumbnail(`https://cdn.discordapp.com/attachments/507373669413027852/514727423024037898/AjudaKael.png`)
//.setDescription(`**${server.prefixo}ajuda admin** - Para ver meus comandos de Administração\n**${server.prefixo}ajuda mod** - Para ver meus comandos de Moderação.\n**${server.prefixo}ajuda social** - Para ver meus comandos Sociais.\n**${server.prefixo}ajuda registros** - Para ver meus comandos de Registro\n**${server.prefixo}ajuda economia** - Para ver meus comandos de Economia\n**${server.prefixo}ajuda musica** - Para ver meus comandos de Música.`)
.addField(`Central de Informações`,`Utilize um dos meus comandos de ajuda para receber os informativos.`, false)
.addField(`${server.prefixo}ajuda admin`,`Para receber meus comandos administrativos.`,false)
.addField(`${server.prefixo}ajuda staff`,`Para receber meus comandos de equipe.`,false)
//.addField(`${server.prefixo}ajuda social`,`Para receber meus comandos sociais.`,false)
//.addField(`${server.prefixo}ajuda economia`,`Para receber meus comandos econômicos.`,false)
//.addField(`${server.prefixo}ajuda registro`,`Para receber meus comandos de registro de membros.`,false)
//.addField(`${server.prefixo}ajuda informes`,`Para receber meus comandos de registro de auditoria`,false)
.addField(`${server.prefixo}ajuda sup`,`Para receber acesso ao meu suporte.`,false)
//.addField(`${server.prefixo}ajuda música`,`Para receber meus comandos musicais.`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');
if (!suffix[0]) return message.channel.send({embed}).then(sentMsg => sentMsg.delete(50000));

switch (suffix[0]){
    case 'staff': {
        message.delete();
        var embed0 = new Discord.RichEmbed()
        .setAuthor(message.author.tag,message.author.avatarURL)
        .setDescription(`<:Mod:507389051372830720> **|** Meus comandos da equipe foram enviados para o seu privado!`)
        .setColor('#f3052f')
        message.channel.send({embed: embed0}).then(sentMsg => sentMsg.delete(5000));
        
       // message.channel.send(`OK ${message.author}! lhe enviei meus comandos de Moderação em seu privado.`);
        const embed = new Discord.RichEmbed()
        .setAuthor('Ajuda | STAFF',client.user.avatarURL)
        //.setTitle(`Comandos de Moderação`)
       // .setDescription(`**Prefixo:** ${server.prefixo}`)
       .setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/510670298245234704/police-station.png')
.addField(`${server.prefixo}adv`,`Receba minhas informações referentes a advertências.`,false)
.addField(`${server.prefixo}avatar`,`Veja o seu avatar ou de algum outro amiguinho(a).`,false)
.addField(`${server.prefixo}apagar <número>`, `Apague um número específico de mensagens do canal.`,false)
.addField(`${server.prefixo}apagar <@menção> <número>`,`Apague um número específico de mensagens de um determinado usuário.`,false)
//.addField(`${server.prefixo}apagar <@menção> <número>`,`Para apagar um número específico de mensagens de um determinado usuário.`,false)
.addField(`${server.prefixo}bloquear`, `Receba minhas informações referentes a bloqueio de canais.`,false)
.addField(`${server.prefixo}desbloquear`, `Receba minhas informações referentes a desbloqueio de canais.`,false)
.addField(`${server.prefixo}ban <@menção> ou ID`, `Aplique banimento em um determinado usuário.`,false)
.addField(`${server.prefixo}desban <@menção> ou ID`, `Aplique desbanimento em um determinado usuário.`,false)
.addField(`${server.prefixo}mutar <@menção> ou ID`, `Retire o privilégio de fala de um determinado usuário.`,false)
.addField(`${server.prefixo}desmutar <@menção> ou ID`, `Devolva o privilégio de fala de um determinado usuário.`,false)
.addField(`${server.prefixo}recrutador <@menção>`, `Veja quantos membros você ou outro indíviduo recrutaram para o servidor.`,false)
.addField(`${server.prefixo}recrutadores`, `Tenha acesso a lista de melhores recrutadores do servidor.`,false)
.addField(`${server.prefixo}registrou <@menção>`, `Veja quantos novatos você ou outro indíviduo registraram no servidor.`,false)
.addField(`${server.prefixo}registrar <@menção>`, `Registre um novato.`,false)
.addField(`${server.prefixo}info <@menção> ou ID`, `Receba informações pertinentes de um determinado usuário.`,false)
.addField(`${server.prefixo}servidor ID`,`Receba informações pertinentes do seu servidor atual ou de algum determinado servidor.`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
        .setColor('#f3052f');
        message.author.send({embed}).then(sentMsg => sentMsg.delete(130000));
        return;
    }
     case 'admin': {
         message.delete();
        
        var embed0 = new Discord.RichEmbed()
        .setAuthor(message.author.tag,message.author.avatarURL)
        .setDescription(`<:Admin:507389051247132672> **|** Meus comandos de administração foram enviados para o seu privado!`)
        .setColor('#f3052f')
        message.channel.send({embed: embed0}).then(sentMsg => sentMsg.delete(5000));
        
        
        //message.channel.send(`OK ${message.author}! lhe enviei meus comandos de Administração em seu privado.`);
        const embed = new Discord.RichEmbed()
        .setAuthor('Ajuda | Administração',client.user.avatarURL)
       .setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/510984836740153344/gears_1.png')
.addField(`${server.prefixo}autocargo <@cargo>`,`Determine cargos que serão dados automaticamente para novos membros.`,false)
.addField(`${server.prefixo}cargotodos <@cargo>`,`Adicione um cargo em todos membros do servidor.`,false)
.addField(`${server.prefixo}comandos`,`Para desativar ou ativar meus comandos em algum canal específico.`,false)
//.addField(`${server.prefixo}contador canal <canal>`,`Determine em qual canal você deseja ter o contador.`,false)
.addField(`${server.prefixo}contador`,`Receba no canal todas informações de como utilizar meu contador.`,false)
//.addField(`${server.prefixo}contador cor <cor>`,`Defina o contador e a cor do mesmo.`,false)
.addField(`${server.prefixo}defesa`, `Receba informações sobre como defender seu servidor.`,false)
//.addField(`${server.prefixo}nível`,`Ative o sistema de níveis em seu servidor.`,false)
//.addField(`${server.prefixo}idioma`, `Mude o idioma do bot em seu servidor.`,false)
.addField(`${server.prefixo}imunidade`,`Estabeleça um cargo imune as defesas do seu servidor.`,false)
.addField(`${server.prefixo}informes`,'Receba informações de como estabelecer seus informes em seu servidor.',false)
.addField(`${server.prefixo}mensagem`,`Receba minhas informações para configurar as mensagens de entrada, saída e privada.`,false)
.addField(`${server.prefixo}painel`,`Receba informações de como acessar seus paineis.`,false)
.addField(`${server.prefixo}prefixo`, `Mude o prefixo do bot a escolha no seu servidor.`,false)
.addField(`${server.prefixo}registro`, `Receba minhas informações de como configurar o registro.`,false)
.addField(`${server.prefixo}sugestão`,`Estabeleça um canal para sugestões em seu servidor, aonde o bot irá automaticamente reagir com emojis de aprovação e reprovação.`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
        .setColor('#f3052f');
        message.author.send({embed}).then(sentMsg => sentMsg.delete(130000));
        return;
    }
    /* case 'economia': {
        message.delete();
        var embed0 = new Discord.RichEmbed()
        .setAuthor(message.author.tag,message.author.avatarURL)
        .setDescription(`<:Economia:506676766149181451> **|** Meus comandos de economia foram enviados para o seu privado!`)
        .setColor('#f3052f')
        message.channel.send({embed: embed0}).then(sentMsg => sentMsg.delete(130000));
        
        
        //message.channel.send(`OK ${message.author}! lhe enviei meus comandos de Administração em seu privado.`);
        const embed = new Discord.RichEmbed()
        .setAuthor('Ajuda | Economia',client.user.avatarURL)
        //.setTitle(`Comandos de Moderação`)
       // .setDescription(`**Prefixo:** ${server.prefixo}`)
       .setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/510672142417788928/pay.png')
.addField(`${server.prefixo}saldo <@menção ou ID>`,`Visualize seus saldos ou de um determinado usuário.`,false)
.addField(`${server.prefixo}loja`,`Visualize a loja Kryptoniana. `,false)
.addField(`${server.prefixo}trab`,`Trabalhe e receba remuneração. `,false)
.addField(`${server.prefixo}pegar`,`Pegue um container perdido de minha espaçonave e ganhe prêmios raros.`,false)
.addField(`${server.prefixo}abrir container`,`Abra um container.`,false)
.addField(`${server.prefixo}doar créditos <@menção> <número>`,`Transfira créditos para outro usuário.`,false)
.addField(`${server.prefixo}doar kryptonita <@menção> <número>`,`Transfira kryptonitas para outro usuário.`,false)
.addField(`${server.prefixo}roubar <@menção>`,`Roube outro usuário e obtenha créditos.`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
        .setColor('#f3052f');
        message.author.send({embed}).then(sentMsg => sentMsg.delete(130000));
        return;
    }
    
      /*case 'social': {
        message.delete();
        var embed0 = new Discord.RichEmbed()
        .setAuthor(message.author.tag,message.author.avatarURL)
        .setDescription(`<:Social:506676768149602304> **|** Meus comandos sociais foram enviados para o seu privado!`)
        .setColor('#f3052f')
        message.channel.send({embed: embed0}).then(sentMsg => sentMsg.delete(5000));
        
        
        //message.channel.send(`OK ${message.author}! lhe enviei meus comandos de Administração em seu privado.`);
        const embed = new Discord.RichEmbed()
        .setAuthor('Ajuda | Social',client.user.avatarURL)
        //.setTitle(`Comandos de Moderação`)
       // .setDescription(`**Prefixo:** ${server.prefixo}`)
       .setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/510670282407673856/cafe.png')
.addField(`${server.prefixo}avatar <@menção> ou ID`, `Visualize o avatar de um determinado usuário.`,false)
.addField(`${server.prefixo}perfil <@menção> ou ID`,`Visualize o seu perfil ou de um determinado usuário.`,false)
.addField(`${server.prefixo}sobremim <texto>`,`Publique algo sobre você para seus amigos olharem em seu perfil.`,false)
.addField(`${server.prefixo}rep <@menção>`, `Presenteie algum outro usuário com um ponto de reputação.`,false)
.addField(`${server.prefixo}int <@menção>`, `Presenteie algum outro usuário com um ponto de inteligência.`,false)
.addField(`${server.prefixo}perf <@menção>`,`Presenteie algum outro usuário com um ponto de perfeição.`,false)
.addField(`${server.prefixo}car <@menção>`, `Presenteie algum outro usuário com um ponto de carisma.`,false)
.addField(`${server.prefixo}casar <@menção>`,`Eu irei declarar vocês marido e esposa, ou marido e marido... ou... esposa e esposa! O amor é o que interessa!`,false)
.addField(`${server.prefixo}divorciar`,`O que um não quer, dois não fazem, foi bom enquanto durou, use esse comando e eu irei separa-lós.`,false)
.addField(`${server.prefixo}recrutador <@menção> ou ID`, `Visualize os convites e quantas pessoas você ou outro usuário recrutaram para o servidor.`,false)
.addField(`${server.prefixo}recrutadores`,`Visualize os usuários que mais recrutaram no servidor.`,false)  
.addField(`${server.prefixo}tag <números da tag>`,`Receba todos os usuários do servidor com determinada tag.`,false)  
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
        .setColor('#f3052f');
        message.author.send({embed}).then(sentMsg => sentMsg.delete(130000));
        return;
    }*/
    
    case 'sup': {
        message.delete();
        
        
        var bolsonaro = new Discord.RichEmbed()
        .setAuthor(message.author.tag,message.author.avatarURL)
        .setDescription(`<:Suporte:507389050970177562> **|** Minhas informações de suporte foram enviadas para o seu privado!`)
        .setColor('#f3052f');
        message.channel.send({embed: bolsonaro}).then(sentMsg => sentMsg.delete(130000));
        
        
      const embed = new Discord.RichEmbed()
.setAuthor('Ajuda | Suporte',client.user.avatarURL)
.setDescription(`Eai, meu nome é Kael e tenho menos de um ano de idade! Eu sou muito bom em matemática e passo a maior parte do tempo no meu colégio estudando pra me tornar um bot melhor! Talvez você possa me ajudar lá, tem uma morena que sou apaixonadão, fala bem de mim pra ela! <:AmorK:513141606254247936>`)
.setImage('https://cdn.discordapp.com/attachments/507373669413027852/514126283664261151/ColegioKael.png')
.addField('Quero lhe conhecer melhor!', `[Clique aqui](https://discordbots.org/bot/412593783696261121) para me ter como amigo em seu servidor!`,true)
.addField('Sugestões, dúvidas ou denúncias?', `Venha conversar com meus suportes em nosso [Colégio](https://discord.gg/Sh8rGW4) (PT-BR).` ,true)
.setColor('#f3052f');
message.author.send({embed}).then(sentMsg => sentMsg.delete(130000));
        return;
    }
     /*case 'informes': {
        message.delete();
        
        var embed0 = new Discord.RichEmbed()
        .setAuthor(message.author.tag,message.author.avatarURL)
        .setDescription(`<:Informes:507389051209383966> **|** Meus comandos informes foram enviados para o seu privado!`)
        .setColor('#f3052f')
        message.channel.send({embed: embed0}).then(sentMsg => sentMsg.delete(5000));
        
const embed = new Discord.RichEmbed()
.setAuthor('Ajuda | Informes',client.user.avatarURL)
.setDescription(`O meu sistema de informes funciona como se fosse um registro de auditoria, assim você pode definir eventos em canais de sua escolha. Para ter acesso ao painel de visualização dos informes utilize o comando:`)
.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/510675797153939456/smartphone.png')
.addField(`${server.prefixo}informes painel`,`\n__Eventos Disponíveis:__\n`,false)
.addField(`${server.prefixo}informes deletadas <#canal>`,`Criará um registro de mensagens deletadas.`,false)
.addField(`${server.prefixo}informes desativar deletadas`,`Desativará o registro de mensagens deletadas.`,false)
.addField(`${server.prefixo}informes editadas <#canal>`,`Criará um registro de mensagens editadas.`,false)
.addField(`${server.prefixo}informes desativar editadas`,`Desativará o registro de mensagens editadas.`,false)
.addField(`${server.prefixo}informes entradas <#canal>`,`Criará um registro de mensagens editadas.`,false)
.addField(`${server.prefixo}informes desativar entradas`,`Criará um registro de entradas.`,false)
.addField(`${server.prefixo}informes saídas <#canal>`,`Criará um registro de saídas.`,false)
.addField(`${server.prefixo}informes desativar saídas`,`Desativará o registro de saídas.`,false)
.addField(`${server.prefixo}informes banidos <#canal>`,`Criará um registro de banidos.`,false)
.addField(`${server.prefixo}informes desativar banidos`,`Desativará o registro de banidos.`,false)
.addField(`${server.prefixo}informes filtradas <#canal>`,`Criará um registro de mensagens filtradas pelo corretor de vocabulário. `,false)
.addField(`${server.prefixo}informes desativar filtradas`,`Desativará o registro de mensagens filtradas pelo corretor de vocabulário.`,false)
.addField(`${server.prefixo}informes userinfo <#canal>`, `Criará um registro de informações do usuário que entrar no servidor.`,false)
.addField(`${server.prefixo}informes desativar userinfo`,`Desativará o registro de informações do usuário que entrar no servidor.`,false)
.addField(`${server.prefixo}informes adv <#canal>`,`Criará um registro de advertências para um determinado usuário.`,false)
.addField(`${server.prefixo}informes desativar advertências`,`Desativará o registro de advertências.`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');
message.author.send({embed}).then(sentMsg => sentMsg.delete(130000));
        return;
    }*/
    
    /*case 'registro': {
        
  var embed0 = new Discord.RichEmbed()
        .setAuthor(message.author.tag,message.author.avatarURL)
        .setDescription(`<:Registro:512434182912344064> **|** Meus comandos de registro foram enviados para o seu privado!`)
        .setColor('#f3052f')
        message.channel.send({embed: embed0}).then(sentMsg => sentMsg.delete(5000));
        
   const embed = new Discord.RichEmbed()        
  .setAuthor(`Ajuda | Registro`,client.user.avatarURL)
 .setDescription(`Então amiguinho(a), você deve configurar os cargos para ter acesso ao meu sistema de registro.\n⠀⠀\n<:MeninoK:512721560063311881> **|** **Cargo masculino:**`)
 .addField(`${server.prefixo}registro masculino <@cargo>`,`Defina o cargo masculino do servidor.`,false)
 .addField(`${server.prefixo}registro desativar masculino`, `Desativará e resetará o cargo masculino do servidor\n⠀⠀\n<:MeninaK:512721560356913153> **|** **Cargo feminino:**`,false)
 .addField(`${server.prefixo}registro feminino <@cargo>`,`Defina o cargo feminino do servidor.`,false)
 .addField(`${server.prefixo}registro desativar feminino`, `Desativará e resetará o cargo feminino do servidor\n⠀⠀\n<:Kael:512721559887151104> **|** **Cargo registrador:**`,false)
 .addField(`${server.prefixo}registro registrador <@cargo>`,`Defina o cargo para registradores no qual apenas usuários com o mesmo poderão registrar em seu servidor.`,false)
 .addField(`${server.prefixo}registro desativar registrador`,`Desativará e resetará o cargo registrador do servidor.\n⠀⠀\n<:NovatoK:512724054415900682> **|** **Cargo novato:**`,false)
 .addField(`${server.prefixo}registro novato <@cargo>`,`Defina o cargo para novatos no qual será necessário para relizar os registros, essa função também ativa o autocargo do servidor.`,false)
 .addField(`${server.prefixo}registro desativar novato`,`Desativará e resetará o cargo novato do servidor.\n⠀⠀⠀⠀⠀⠀\n<:Aviso:512725117865033748>  **|**  **Amiguinho(a)** você deve tomar cuidado ao desativar o cargo novato do registro, pois o auto-cargo do servidor também será desativado no processo.\n⠀⠀`,false)
 .addField(`${server.prefixo}registro painel`,`Mostrará o painel de configurações de cargo do sistema de registro.`,false)
 .setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
 .setColor('#f3052f');
message.author.send({embed}).then(sentMsg => sentMsg.delete(130000));
    }*/
}
   });
};

exports.aliases = ['ajuda','help'];

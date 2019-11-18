const Discord = require("discord.js");
const db = require("../database.js");
var slowCol = new Set();
let textos = new Discord.Collection(); 
let atapo = new Discord.Collection();

exports.run = async (client, message) => {
   
if (message.author.bot || message.channel.type === "dm") return;
	
var createAccount = id => {
    var server = new db.Guilds({
        _id: message.guild.id,
         autorole: '',
            welcome: '',
            welcomeChannel: '',
            bye: '',
            byeChannel: '',
            dm: '',
            prefixo: '-',
            slow: 0,
            sloww: 0,
            lang: 'pt-BR',
            bkchannel: [],
            convites: false,
            convitesES: false,
            invs: false,
            texto: '',
            txt: '',
            numero: '',
            logg_MD: '',
            logg_MUP: '',
            logg_mGA: '',
            logg_mGR: '',
            logg_mGB: '',
            logg_banAction: '',
	    logg_wordsAction: '',
            td: false,
	    md: false,
	    bot: false,
            girl: '',
            man: '',
            staffer: '',
	    nb: ''
    })
    server.save()
    return server;
}   	
		
	
    db.Guilds.findOne({
        "_id": message.guild.id
    }, function (_erro, guilda) {
        
	    if(!guilda) {
            guilda = createAccount(message.guild.id)
	  } 
        
        if (message.content.startsWith(guilda.prefixo)) {
            db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (_erro, block) {
                if (block) {
                    if ([block.block].includes(message.author.id) && !['244489368717230090','314966364873818112'].includes(message.author.id))
                        return message.channel.send(`<:Kael:512721559887151104> | Poing-oing... ${message.author}, você foi exilado pelos meus criadores e não pode utilizar nenhum de meus comandos, bobinho(a).`);
                }

                let commandName = message.content.split(" ")[0];
               commandName = commandName.slice(guilda.prefixo.length);

                console.log(commandName)
                if (!guilda.bkchannel.includes(message.channel.id) || commandName === 'bkchannel') {
                let args = message.content.split(" ").slice(1);

                let command = client.commands.get(commandName)
                     
                            if (!command) {
                            command = client.aliases.get(commandName)
                            if (!command) return
                            else command = client.commands.get(command)
        }
                            command.run(client, message, args);
  }
  
  
  const config = require("../env.json"),    
logger  = new (require('../utils/Logger.js'))(config.logTimestamp);

let comando = message.content.replace(guilda.prefixo, '').split(/ |\n/)[0]

logger.logCommand(message.guild === undefined ? null : message.guild.name, message.author.username, guilda.prefixo 
+ comando, message.cleanContent.replace(guilda.prefixo + comando, '').trim());
var server = message.guild;
		const embed = new Discord.RichEmbed()
		.setThumbnail(server.iconURL)
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField(`Usuário:`, `\`${message.author.tag}\``, true)
        .addField(`ID:`, `\`${message.author.id}\``, true)
        .addField(`Comando:`, `\`\`\`https\n${message.content}\`\`\``,false)
        .addField(`Servidor:`,`\`\`\`https\n${message.guild.name}\`\`\``,false)
        .addField(`Canal:`,`\`${message.channel.name}\``,true)
     	.addField(`N° de usuários:`, `\`${server.memberCount}\``, true)	
        .setFooter('Kael | Informações | Criadores')
        .setColor('#f3052f');
        client.guilds.get('441766085809799198').channels.get('473283163863384080').send({ embed });  
           
  
        })

        } else {
            if (message.content.includes(`<@${client.user.id}>`) || message.content.includes(`<@!${client.user.id}>`)) {
                message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, use **${guilda.prefixo}ajuda** para ter mais informações **amiguinho(a)**!`);
            }
        }
    });
    

 

	
if (message.guild) {
db.Guilds.findOne({	
    "_id": message.guild.id}, function(erro, sysop) {

if(!sysop) return;
if(!sysop.imune) return;
if(!sysop.links) return;
if(!sysop.convites) return;	
	
if (sysop) {
if (sysop && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.has(sysop.imune) && sysop.exlinks && message.content.search('https://') > -1) {
message.delete();
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você não pode compartilhar links externos dentro desse servidor.`).then(sentMsg => sentMsg.delete(60000)) 
  }
if (sysop && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.has(sysop.imune) && sysop.convites && message.content.search('discord.gg') > -1) {
message.delete();
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, você não pode compartilhar convites dentro desse servidor.`).then(sentMsg => sentMsg.delete(50000)) 
  }    
    
}
});
}
  


if(message.guild) {
  db.Guilds.findOne({
    "_id": message.guild.id}, 
    function(erro, servidor) {

if(!servidor) return;
if(!servidor.logg_wordsAction) return;
if(!servidor.imune) return;	  

if (servidor) {
if (servidor  && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.has(servidor.imune) && servidor.filterWords) {
			servidor.filterWords.every(e => {
				if (message.content.search(new RegExp(`\\b${e}\\b`, 'gi')) > -1) {
					message.delete();
					message.channel.startTyping();
					var embed0 = new Discord.RichEmbed()
					.setAuthor(message.author.tag, message.author.avatarURL)
					.setTitle(`<:SabaoK:513816458304946177> — Alerta de boca suja!`)
					.setColor('#f3052f')
					message.channel.send({embed: embed0}).then(sentMsg => sentMsg.delete(7000));
                	message.channel.stopTyping()
					var informes = new Discord.RichEmbed()
					.setAuthor('Informes | Vocabulário',client.user.avatarURL)
					.setThumbnail(`${message.author.avatarURL}`)
					.addField('<:Usuario1:513889526268297236> | Usuário:',`${message.author.tag}`,true)
					.addField('<:1234K:513473078685335554> | ID do Usuário:',`${message.author.id}`,true)
					.addField('<:MensagemK:513889526473818122> | Mensagem:',`${message.content}`,false)
					.setTimestamp()
					.setFooter('Olha esse(a) boca suja, temos que comprar mais sabão.')
					.setColor('#f3052f')
					client.guilds.get(message.guild.id).channels.get(servidor.logg_wordsAction).send({embed: informes});
				} else return true;
			});
   }
		}
    })
}  


/*----------------------/
/       LEVEL UP!       /
/----------------------*/


/*var xpCol = new Set()
let xpRDM = Math.round(Math.random() * 35)
//Random de xp toda vez que o usuário fala no chat
let coinsRDM = Math.round(Math.random() * 45)
   
    
    if(message.author.bot) return;
    if(message.channel.type == "dm") return
    db.Guilds.findOne({ "_id": message.guild.id }, function (serverro, sysop) {
        if(sysop) {
            if(sysop.upar) {//Habilitar ou desabilitar sistema de level no server
                if(xpCol.has(message.author.id)) return;
                db.Users.findOne({
                    "_id": message.author.id
                }, function (erro, documento) {
                    if(documento) {
                        if(documento.ban) {} else {
                            var unbug = 1000 * documento.lvll + 1
                            //var unbug = 700 quantidade de exp para upar
                            if(documento.eexp > unbug) {
                                documento.eexp += xpRDM
                                documento.coins += coinsRDM
                                documento.lvll += 1
                                var level = new Discord.RichEmbed()
                                .setAuthor('Kael | Level UP!', client.user.avatarURL)
                                .setThumbnail(message.author.avatarURL)
                                .setDescription(`${message.author.tag}, você atingiu o nível ${documento.lvll} amiguinho(a)!`)
                                .setFooter('Vamos comemorar comendo um sushi? 😋🍣', )
                                .setColor('#f3052f')
				message.author.send({embed: level})
                                documento.eexp = 0
                                documento.save()
                                xpCol.add(message.author.id)
                                setTimeout(function () {
                                    xpCol.delete(message.author.id)
                                }, 30 * 1000)
                            } else {
                                documento.eexp += xpRDM
                                documento.coins += coinsRDM
                                documento.save()
                                xpCol.add(message.author.id)
                                setTimeout(function () {
                                    xpCol.delete(message.author.id)
                                }, 30 * 1000)
                            }
                        }
                    } else {
                        var pessoa = new db.Users({
                            _id: message.author.id,
                            level: 0,
                    xp: 0,
                    lvll: 0,
                    eexp: 0,
                    coins: 0,
                    rubys: 0,
                    containers: 0,
                    goldbox: 0,
                    emerald: 0,
                    profile_background: 'https://cdn.discordapp.com/attachments/413155538755649538/433355322208419840/New_Logo_Sysop.png',
                    bio: "Eai amiguinho(a), digite -sobremim e redefina sua biografia em seu perfil!",
                        })
                        pessoa.save()
                    }
                });
            } else {}
        } else {
            var servidor = new db.Guilds({
                _id: message.guild.id,
                welcome: "",
                welcomeChannel: "",
                bye: "",
                byechannel: "",
                dm: "",
                autorole: "",
                sugest: '',
                nvlll: true,
                
                
            })
            servidor.save()
        }
    });*/

    
/*----------------------/
/        SUGESTÃO       /
/----------------------*/
    
    
if (message.guild) {
db.Guilds.findOne({
     "_id": message.guild.id}, async function(erra, sysop) {
if (sysop) {
if (sysop && sysop.sugest && message.channel.id == sysop.sugest)
message.react('513830398791254016').then(message.react('513830398862557184')).then(message.react('513141606254247936'))
}
});
}

/*----------------------------/
/    TESTE DEFESA ATAQUES    /
/---------------------------*/


//modolento

    db.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, sysop) {
	    	    
        if (!sysop) return 
        if (!sysop.md) return 
	if(!sysop.imune) return;
        if (sysop && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.has(sysop.imune) && sysop.md) {
            if(message.author.bot) return;
            
            if (sysop.sloww === 1) return 
            if (!slowCol.has(message.author.id)) {
                slowCol.add(message.author.id);
                setTimeout(() => {
                    slowCol.delete(message.author.id)
                }, 3 * 1000);
            } else {
                message.delete(), message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, você está escrevendo rápido demais, bobinho(a)!`).then(sg => sg.delete(5000))

            }
        } else {
            if (!sysop) return 
            console.log("erro");
        }
    });

 

db.Guilds.findOne({
    "_id": message.guild.id}, 
    async function(erro, sysop) {

if(!sysop) return;
if(!sysop.td) return;
if (sysop && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.has(sysop.imune) && sysop.td) {
    if (textos.has(message.author.id) && textos.get(message.author.id)[0] === message.content && textos.get(message.author.id)[1] >= 3) {
        let role = await message.guild.roles.find(r => r.name === 'Kael Mute') || 
            message.guild.createRole({
                name: 'Kael Mute',
                color: "#ff3535",
                permissions: 0
            })

        message.guild.channels.forEach(c => c.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
        }))

        message.member.addRole(role)

       message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, você foi mutado por 10 minutos, estou desapontado.`).then(sg => sg.delete(10000))

        setTimeout(message.member.removeRole.bind(message.member, role), 600 * 1000)
    } else {
        if (textos.has(message.author.id) && textos.get(message.author.id)[0] !== message.content)
            textos.set(message.author.id, [message.content, 1])
        else if (textos.has(message.author.id)) {
            let [texto, number] = textos.get(message.author.id)
            textos.set(message.author.id, [texto, number + 1])
            message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, cuidado com as mensagens duplicadas, bobinho(a)!`).then(sg => sg.delete(8000))
        } else
            textos.set(message.author.id, [message.content, 1])
             setTimeout(() => { 
              if (!textos.has(message.author.id)) return;
              if (textos.get(message.author.id)[1] == 1) return textos.delete(message.author.id)
              else textos.set(message.author.id, [textos.get(message.author.id)[0], textos.get(message.author.id)[1] - 1])
       }, 1000)
     }
    }
})
};

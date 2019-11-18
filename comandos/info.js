const Discord = require('discord.js');
const db = require("../database.js");

exports.run = (client, message, args) => {
    	
    	var moment = require('moment');
    	moment.locale('pt-BR');
    	
    	
let createAccount = id => {
  let pessoa = new db.Genre({
                    _id: id,
                    genero: ''
                });

                pessoa.save();
                return pessoa;
            };
    	
    	
if (message.author.bot && message.mentions.users.first().bot) return;
  	
    	
  let user = message.mentions.users.first() || message.author 
 db.Users.findOne({"_id": user.id}, function(erro, doc) {

 db.Genre.findOne({"_id": user.id}, function(erro, docG) {


if (!docG) {
            docG = createAccount(message.author.id);
          }


    	let estados = {
      "online": "<:On:507433797244026895> Online",
      "idle": "<:Aus:507433797147688960> Ausente",
      "dnd": "<:Ocup:507433796681859072> Ocupado",
      "offline": "<:Off:507433796690509835> Offline",
      "Stream": "<:Trans:507433796631658506> Transmitindo"
};
    	let color = {
      "online": "#2eff6e",
      "idle": "#ffa92e",
      "dnd": "#ff2e2e",
      "offline": "#b4b4b4",
      "stream": "#923eff"
      
};
    	let member = message.guild.member(user);
        let dentrar = message.author.createdAt;
        let millisJoined = new Date().getTime() - member.joinedAt.getTime();
        let entrou = member.joinedAt
        //let usernames = doc.names.slice(doc.names.length - 15).join('\n')
        let gênero = docG.genero;
        let roles = member.roles.map(roles => `${roles}`).join(' ');
        let acc = user.createdAt

        const embed = new Discord.RichEmbed()
			.setThumbnail(user.displayAvatarURL)
			.setAuthor(user.tag, user.avatarURL)
			//.setTitle(`Também conhecido(a) como:`)
		////  .setDescription(`${usernames ? usernames : 'Este usuário não possui nomes antigos.'}`)
      .addField('<:StatusK:513499068597665803> | Status:', '**'+estados[user.presence.status]+'**', true)
			.addField('<:GameK:513491249815093259> |️ Jogando:',` \`\`\`Markdown\n# ${user.presence.game != null ? user.presence.game.name : "Nada"}\`\`\``, false)
			.addField('<:MembrosK:513477804881477656> | Nome do usuário:',`${user.username}`, true)
			.addField('<:1234K:513473078685335554> | ID do usuário:', `${user.id}`, true)
		 // .addField('Gênero', `${doc.lockgenre ? gênero : 'Esse usuário prefere não expor está informação.'}`, true)
			.addField('<:DataServidorK:513474999600807951> | Conta criada em:', `${moment(acc).format('LL')} `, true)
			.addField('<:DataBotK:513474999554801676> | Entrou no servidor:', `${moment(entrou).format('LL')}`, true)
			.addField('🔖 Apelido dentro do servidor:',`${member.nickname != null ? member.nickname : "Sem apelido"}`, true)
			.addField('🌎 | Servidores compartilhados:', `${client.guilds.filter(a => a.members.get(user.id)).map(a => a.name).join(', ')}`, false)
			.addField('<:CargoK:513162802408456192> | Cargos dentro do servidor:', roles, false)
			.setColor(color[user.presence.status]);
      message.channel.send({embed});
    })
 })
 };
 
 exports.aliases = ['userinfo'];

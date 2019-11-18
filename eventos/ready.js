
exports.run = (client) => {
 
console.log(`OK! Kael foi iniciado com ${client.users.size} usuários, ${client.channels.size} canais e ${client.guilds.size} servidores.`);

let serverID = '441766085809799198'; let canalID = '500824977784963084';
client.guilds.get(serverID).channels.get(canalID).send(`Kael foi reiniciado com: **${client.users.size}** usuários, **${client.channels.size}** canais e **${client.guilds.size}** servidores.`)  

  function setActivity() {
    
    
 let status = [{name: `defesa a todos! 💥⚔️`, type: 'STREAMING', url: `https://www.twitch.tv/expextreadriano`},
              {name: `em ${client.guilds.size} servidores! 🌍🙇`, type: 'PLAYING'},
              {name: `com ${Number(client.users.size).toLocaleString()} amiguinhos(as)!`, type: 'PLAYING'},
              {name: `beijos para a Loritta! 💁💙`, type: 'PLAYING'}];
    
    let escolher = status[Math.floor(Math.random() * status.length)];
    

    client.user.setPresence({game: escolher});
  }
  
  
  
  setActivity();
  setInterval(() => setActivity(), 11000);
    
    
}

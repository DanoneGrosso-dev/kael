const cooldown = new Set();

function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

exports.run = (client, message, args) => {
 message.delete(); 
 if (cooldown.has(message.author.id)) {
 return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, tenha um pouco de calma!`).then(sentMsg => sentMsg.delete(5000));
 } else {

    if (!args[0]) 
    return message.channel.send(`<:AmorK:513141606254247936> **|** ${message.author}, você precisa dizer o que quer que eu fale, tipo o quanto sushi é gostoso! <:Sushi:513134556618948609>`).then(sentMsg => sentMsg.delete(15000));
    args = args.join(" ");
    message.channel.send(clean(args)).then(message.delete([1000]));
cooldown.add(message.author.id);
setTimeout(() => {
  cooldown.delete(message.author.id);
}, 8000);
}
 }

exports.aliases = ['say','fala','fale'];
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODcxMDcyMTY0NDUzOTY5OTgw.YQV_Kw.0I_avzpUyPAHmQMjwohO_j5w-3A');

client.on('ready', ready);

function ready(){
console.log('Connected');
}

const r = ["Hi there mate!",
"Nah Sorry, don't have time for you",
"Visit my website at https://trostrum.com",
"How's your minecraft doing?",
"2+2=4",
"I Love ya"
]

client.on('message',gotMessage);

async function gotMessage(msg){
	console.log(msg.content);
	if(msg.content === 'hi'){
	const index = Math.floor(Math.random() * r.length);
	channel = client.channels.cache.get('860233172649902081');
	channel.send('broadcast '+ r[index]);
}
}

const Discord = require("discord.js");
const ms = require("ms");
const fs = require('fs');
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');
const r1 = require('snekfetch');
const jimp = require('jimp')
const math = require('math-expression-evaluator'); 
const child_process = require("child_process");
const Canvas = require('canvas');
var prefix = "/"
const client = new Discord.Client();
const agree = "✅";
const disagree = "❌";

const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {


                    client.guilds.get('522130637373833276').members.forEach(m => {
                        m.send(`
1 Invites = 3$
3 Invites = 5$
5 Invites = 15$
10 Invites = 25$
25 Invites = 75$
https://discord.gg/4szcQXC`);
      
                        
	    });


});


client.login(process.env.BOT_TOKEN);

const config = require("./config.json")
const token = config.token
const discord = require("v11-discord.js")
const superagent = require("superagent")
const prefix = config.prefix
const client = new discord.Client()
require("colors")
client.login(token).catch(err => console.log("Invalid Token".red))
client.on('ready', function () {
    console.clear()
    console.log(`                68656E746169 7370616D6D6572                             `.magenta)
         	                                                                                                     
console.log(`                       
                                    Made by Hairo#1000                                                                                
                                    Welcome ${client.user.tag}                                                        
                                                                         
                                                                                    `.cyan)
});
client.on("message", message => {
        if (message.content.startsWith(`call911`)) {
            message.delete()
        var urls = [ "https://waifu.pics/api/nsfw/waifu",
                     "https://waifu.pics/api/nsfw/neko",
                     "https://waifu.pics/api/nsfw/blowjob",
                     "https://waifu.pics/api/nsfw/waifu",
                     "https://waifu.pics/api/nsfw/neko", 
                     "https://waifu.pics/api/nsfw/blowjob",
                     "https://waifu.pics/api/nsfw/waifu",
                     "https://waifu.pics/api/nsfw/neko",
                     "https://waifu.pics/api/nsfw/blowjob"
                    ]
        urls.forEach(f => superagent.get(f).then(r => {
            message.channel.send(r.body.url).catch(err => {console.log(err)})
        }))
    }
})

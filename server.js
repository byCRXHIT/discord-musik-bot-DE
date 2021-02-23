const dbd = require("dbd.js")
const config = require("./config.json")

const bot = new dbd.Bot({
	token: config.token,
	prefix: "!"
})

bot.musicStartCommand({
    channel: "$channelID",
    code: `$title[Spiele Song]
    $description[Spiele nun: **$songInfo[title]**
Länge: **$songInfo[duration] Minuten**
Hochgeladen von: **$songInfo[publisher]**]
    $color[GREEN]
    $thumbnail[$songInfo[thumbnail]]
    $clear[1]`
})

bot.onMessage()

bot.command({
    name: "play",
	aliases: ["p"],
    code: `$playSong[$message;:x: Songe konnte nicht abgespielt werden!]`
})

bot.command({
    name:"skip",
	aliases: ["s", "sk"],
    code:`$skipSong`
})

bot.command({
    name: "stop",
    code: `$title[Stoppe Song!]
    $description[Song wurde gestoppt: $songInfo[title]]
    $color[RED]
    $stopSong`
})

bot.command({
    name: "ping",
    code: `$ping ms`
})

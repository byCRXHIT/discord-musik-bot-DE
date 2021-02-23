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
$footer[Gemacht von byCRXHIT]
    $color[GREEN]
    $thumbnail[$songInfo[thumbnail]]
    $clear[1]`
})

bot.onMessage()

bot.command({
    name: "play",
	aliases: ["p"],
    code: `$playSong[$message;:x: Songe konnte nicht abgespielt werden!]
	$argsCheck[>1;Benutze: !play <song name>]`
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
	name: "volume",
	aliases: ["v"],
	code: `Die lautstärke wurde zu $message[1] gestellt!
	$argsCheck[1;Benutze: !volume <nummer>]
	$volume[$message]`
})

bot.command({
    name: "ping",
    code: `$ping ms`
})

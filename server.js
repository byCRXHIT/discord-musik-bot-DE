const dbd = require("dbd.js")
const config = require("./config.json")

const bot = new dbd.Bot({
	token: config.token,
	prefix: "!"
})

bot.musicEndCommand({ //command
    channel: "$channelID",
    code: `$title[Stoppe Song]
$description[Die Musik liste ist zu ende. Verlassen den channel!]
$color[RED]`
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

/*
	Bei Problemen oder fragen
	einfach mich anschreiben: byCRXHIT#0001
	Oder ein Issue aufmachen.
*/

bot.onMessage()

bot.command({
    name: "play",
	aliases: ["p"],
    code: `$playSong[$message;:x: Songe konnte nicht abgespielt werden.]
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
	code: `$if[$message>100]
	Die lautstärke kann nicht über 100% werden!
	$elseIf[$message<1]
	Die lautstärke darf nicht bei weniger als 0% liegen!
	$endelseIf
	$else
	Die lautstärke wurde zu $message[1]% gestellt.
	$volume[$message]
	$endif
	$argsCheck[1;Benutze: !volume <nummer>]`
})

bot.command({
    name: "ping",
    code: `$ping ms`
})

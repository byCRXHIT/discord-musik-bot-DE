const dbd = require("dbd.js")
const config = require("./config.json")

const bot = new dbd.Bot({
token: config.token,
prefix: "!" 
})

bot.status({
      text: "gemacht von: byCRXHTI",
      type: "PLAYING"
})

/*
	Dieser Bot wurde gemacht von: byCRXHIT
	Hier benutze ich  das "DBD.JS" npm package
	füg deinen token in der config.json ein.
	Credits müssen nicht angegeben werden währe aber net (^^)
*/

bot.onMessage()

bot.command({
        name: "play",
    	aliases: ["p"],
        code: `
$color[5AC0DE]
$author[Song;https://images.squarespace-cdn.com/content/v1/58eac4d88419c2d993e74f57/1491954929572-MII6RYJO4QRPZHRFNYAM/ke17ZwdGBToddI8pDm48kOyctPanBqSdf7WQMpY1FsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyD4IQ_uEhoqbBUjTJFcqKvko9JlUzuVmtjr1UPhOA5qkTLSJODyitRxw8OQt1oetw/ITunes_12_logo.png]
$description[Ich spiele gerade: **$songInfo[title]**, die länge ist: **$songInfo[duration]** seconds]
$footer[Position in Warteschlange: $queueLength]
$playSong[$message;Ein Fehler ist aufgetreteten. Bitte versuche es später nocheinmal]
$onlyIf[$message!=;Schreib einen song dahinter!]
$onlyIf[$voiceID!=;Du bist nicht in einem Sprach-Channel!]`
})

bot.command({
        name: "queue",
    	aliases: ["q"],
        code: `
$color[5AC0DE]
$author[Song zur Warteschlange hinzugefügt!;https://images.squarespace-cdn.com/content/v1/58eac4d88419c2d993e74f57/1491954929572-MII6RYJO4QRPZHRFNYAM/ke17ZwdGBToddI8pDm48kOyctPanBqSdf7WQMpY1FsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyD4IQ_uEhoqbBUjTJFcqKvko9JlUzuVmtjr1UPhOA5qkTLSJODyitRxw8OQt1oetw/ITunes_12_logo.png]
$description[Song: **$message**
Ich spiele gerade: **$songInfo[title]**]
$footer[Position in der Warteschlange: $queueLength]
$playSong[$message;Ein Fehler ist aufgetreteten. Bitte versuche es später nocheinmal]
$onlyIf[$message!=;Schreib einen song dahinter!]
$onlyIf[$voiceID!=;Du bist nicht in einem Sprach-Channel!]`
})

bot.command({
        name: "volume",
    	aliases: ["v"],
        code: `
$color[5AC0DE]
$author[Volume Changed!;https://images.squarespace-cdn.com/content/v1/58eac4d88419c2d993e74f57/1491954929572-MII6RYJO4QRPZHRFNYAM/ke17ZwdGBToddI8pDm48kOyctPanBqSdf7WQMpY1FsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyD4IQ_uEhoqbBUjTJFcqKvko9JlUzuVmtjr1UPhOA5qkTLSJODyitRxw8OQt1oetw/ITunes_12_logo.png]
$description[The volume got changed to: $message dezibel]
$volume[$message[1]]
$onlyIf[$message!=;Bitte schreib eine nummer dahinter zwischen 100 - 300!]
$onlyIf[$voiceID!=;Du bist nicht in einem Sprach-Channel]`
})
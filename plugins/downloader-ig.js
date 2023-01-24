let { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `!Input URL`
try {
const results = await instagramdl(args[0])
.catch(async _ => await instagramdlv2(args[0]))
.catch(async _ => await instagramdlv3(args[0]))
.catch(async _ => await instagramdlv4(args[0]))
for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', ``, m)
} catch (e) {
m.reply(`Tidak bisa download postingan tersebut!`)
}
}
handler.help = ['igdl']
handler.tags = ['downloader']
handler.command = /^(instagram|ig(dl)?)$/i
handler.exp = 3
handler.limit = true
module.exports = handler

let fs = require('fs');

let handler = async(m, { conn, usedPrefix, command}) => {
    let ytta = JSON.parse(fs.readFileSync(`./api/wallpaper/${command}.json`))
    let yws = ytta[Math.floor(Math.random() * ytta.length)]
    yws2 = yws.url
    await m.reply(wait)
    conn.sendButtonImg(m.chat, yws2, `Success ✓`, wm, `➡️ NEXT`, `${usedPrefix + command}`, m)
}

handler.command = /^(aesthetik|anime|cyber|nature|teknologi)$/i
handler.tags = ['randomimg']
handler.help = ['aesthetik','anime','cyber','nature','teknologi']
handler.limit = true

module.exports = handler
let { lyrics, lyricsv2 } = require('@bochilteam/scraper')
let { getBuffer } = require('../lib/functions')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Use example ${usedPrefix}${command} hallo`
    try {
    await m.reply(wait)
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    conn.sendMessageModify(m.chat, `
Lyrics *${result.title}*
Author ${result.author}


${result.lyrics}


Url ${result.link}
`.trim(), m, { ads: false, largeThumb: true, title: `Lyrics Music Searching`, body: wm, thumbnail: await getBuffer('https://telegra.ph/file/71edd7b6446ebe3dcd226.jpg') })
} catch (e) {
throw `Lirik tidak ditemukan`
}
}

handler.help = ['lirik']
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.limit = true

module.exports = handler
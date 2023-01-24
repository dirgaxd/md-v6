let fetch = require('node-fetch')
let { sticker } = require('../lib/sticker.js')
let uploadFile = require('../lib/uploadFile.js')
let uploadImage = require('../lib/uploadImage.js')
let { webp2png } = require('../lib/webp2mp4.js')
let { Sticker, StickerTypes } = require('wa-sticker-formatter')

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let stiker = false
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar/stiker dengan perintah\n\n${usedPrefix + command}`
    let img = await q.download()
    let stek = new Sticker(img, { pack: packname, author: author, type: StickerTypes.FULL })
    let buffer = await stek.toBuffer()
    let out
    await m.reply('Sticker sedang di buat . . .')
      try {
        if (/webp/g.test(mime)) out = await webp2png(img)
        else if (/image/g.test(mime)) out = await uploadImage(img)
        else if (/video/g.test(mime)) out = await uploadFile(img)
        else if (/viewOnce/g.test(mime)) out = await uploadFile(img)
        if (typeof out !== 'string') out = await uploadImage(img)
        else if (/gif/g.test(mime)) out = stek
      } catch (e) {
        console.error(e)
      } finally {
    let meme = `https://some-random-api.ml/canvas/${command}?avatar=${out}`
    conn.sendStimg(m.chat, meme, m, { packname: packname, author: author })
    // else m.reply(`Reply Media dengan perintah\n\n${usedPrefix + command}`)
    }
}

handler.help = ["lolice", "triggered", "horny", "simpcard", "comrade", "jail", "wasted", "passed"]
handler.tags = ['sticker']
handler.command = /^(lolice|triggered|horny|simpcard|comrade|jail|wasted|passed)$/i
handler.limit = true
//Creator : M.Jamil
module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
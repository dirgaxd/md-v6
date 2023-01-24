// Jangan Di Hapus
// Created By VamsesOfficial
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command, text }) => {
//if (db.data.users[m.sender].premiumTime < 1) return m.reply('KHUSUS PREMIUM USER') 
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Reply Gambar nya'
let media = await q.download()
let url = await uploadImage(media)
//m.reply(wait)
await conn.reply(m.chat, `Pastikan wajahmu keliatan ya...`, 0, {
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        mediaUrl: '',
        mediaType: 2,
        description: sgc,
        title: global.wm,
        body: 'Pastikan wajahmu keliatan ya...', //`${fileSizeH}`,
        sourceUrl: snh,
        thumbnail: fs.readFileSync('./thumbnail.jpg')
        }
       }
     })
await conn.sendFile(m.chat, await (await fetch(`https://restapi.frteam.xyz/toanime?img=${url}&apikey=lobuck`)).buffer(), 'anime.jpg', 'ScrLxrd-MD', m)
}
handler.limit = 2
handler.help = ['jadianime']
handler.tags = ['maker']
handler.command = /^(to|jadi)anime$/i

export default handler
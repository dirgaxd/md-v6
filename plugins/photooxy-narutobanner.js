let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(narutobanner)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['narutobanner']

module.exports = handler

//wm K1mimaru
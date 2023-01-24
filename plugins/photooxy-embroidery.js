let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(embroidery)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['embroidery']

module.exports = handler

//wm K1mimaru
let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(sweetandy)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['sweetandy']

module.exports = handler

//wm K1mimaru
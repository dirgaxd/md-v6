let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(woodenboards)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['woodenboards']

module.exports = handler

//wm K1mimaru
let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(flaming)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['flaming']

module.exports = handler

//wm K1mimaru
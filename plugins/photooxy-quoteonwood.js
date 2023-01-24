let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(quoteonwood)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['quoteonwood']

module.exports = handler

//wm K1mimaru
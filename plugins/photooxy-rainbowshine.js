let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(rainbowshine)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['rainbowshine']

module.exports = handler

//wm K1mimaru
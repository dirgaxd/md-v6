let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(glowrainbow)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['glowrainbow']

module.exports = handler

//wm K1mimaru
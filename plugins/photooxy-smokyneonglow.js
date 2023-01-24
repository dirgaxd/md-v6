let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(smokyneonglow)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['smokyneonglow']

module.exports = handler

//wm K1mimaru
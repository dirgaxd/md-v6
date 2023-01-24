let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/gradient-avatar-text-effect-207.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(gradientavatar)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['gradientavatar']

module.exports = handler

//wm K1mimaru
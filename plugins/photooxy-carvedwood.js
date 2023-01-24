let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(carvedwood)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['carvedwood']

module.exports = handler

//wm K1mimaru
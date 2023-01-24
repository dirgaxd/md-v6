let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/smoke-typography-text-effect-170.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(smoketypo)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['smoketypo']

module.exports = handler

//wm K1mimaru
let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(nature3d)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['nature3d']

module.exports = handler

//wm K1mimaru
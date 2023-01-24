let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(illuminated)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['illuminated']

module.exports = handler

//wm K1mimaru
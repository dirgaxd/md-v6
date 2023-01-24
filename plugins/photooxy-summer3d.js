let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(summer3d)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['summer3d']

module.exports = handler

//wm K1mimaru
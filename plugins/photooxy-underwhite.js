let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(underwhite)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['underwhite']

module.exports = handler

//wm K1mimaru
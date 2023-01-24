let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(shadowonsky)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['shadowonsky']

module.exports = handler

//wm K1mimaru
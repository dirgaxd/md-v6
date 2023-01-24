let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(fallleaves)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['fallleaves']

module.exports = handler

//wm K1mimaru
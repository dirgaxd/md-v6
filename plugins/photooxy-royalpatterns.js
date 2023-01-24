let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/bevel-text-between-royal-patterns-166.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(royalpatterns)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['royalpatterns']

module.exports = handler

//wm K1mimaru
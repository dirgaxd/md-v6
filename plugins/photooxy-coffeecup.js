let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(coffeecup)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['coffeecup']

module.exports = handler

//wm K1mimaru
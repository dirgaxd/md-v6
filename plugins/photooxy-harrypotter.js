let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(harrypotter)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['harrypotter']

module.exports = handler

//wm K1mimaru
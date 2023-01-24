let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/fur-text-effect-generator-198.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(furgenerator)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['furgenerator']

module.exports = handler

//wm K1mimaru
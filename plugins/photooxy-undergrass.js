let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(undergrass)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['undergrass']

module.exports = handler

//wm K1mimaru
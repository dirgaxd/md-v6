let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(burnpaper)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['burnpaper']

module.exports = handler

//wm K1mimaru
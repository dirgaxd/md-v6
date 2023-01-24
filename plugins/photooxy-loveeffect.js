let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/love-text-effect-372.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(loveeffect)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['loveeffect']

module.exports = handler

//wm K1mimaru
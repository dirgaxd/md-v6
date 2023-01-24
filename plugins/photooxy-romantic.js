let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(romantic)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['romantic']

module.exports = handler

//wm K1mimaru
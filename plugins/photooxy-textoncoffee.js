let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(textoncoffee)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['textoncoffee']

module.exports = handler

//wm K1mimaru
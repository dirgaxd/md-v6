let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/simple-text-on-the-silk-167.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(simplesilk)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['simplesilk']

module.exports = handler

//wm K1mimaru
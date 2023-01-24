let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/banner-cover/graffiti-text-cover-222.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(graffiticover)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['graffiticover']

module.exports = handler

//wm K1mimaru
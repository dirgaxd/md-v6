let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(yellowroses)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['yellowroses']

module.exports = handler

//wm K1mimaru
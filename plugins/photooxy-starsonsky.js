let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(starsonsky)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['starsonsky']

module.exports = handler

//wm K1mimaru
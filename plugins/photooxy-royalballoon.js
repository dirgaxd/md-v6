let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(royalballoon)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['royalballoon']

module.exports = handler

//wm K1mimaru
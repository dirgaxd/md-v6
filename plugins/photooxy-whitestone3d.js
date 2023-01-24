let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(whitestone3d)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['whitestone3d']

module.exports = handler

//wm K1mimaru
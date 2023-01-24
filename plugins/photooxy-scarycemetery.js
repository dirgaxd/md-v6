let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(scarycemetery)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['scarycemetery']

module.exports = handler

//wm K1mimaru
let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(putonthecup)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['putonthecup']

module.exports = handler

//wm K1mimaru
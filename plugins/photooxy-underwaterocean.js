let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(underwaterocean)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['underwaterocean']

module.exports = handler

//wm K1mimaru
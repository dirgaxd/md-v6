let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(easysmoke)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['easysmoke']

module.exports = handler

//wm K1mimaru
let photooxy = require('../lib/photooxy')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await photooxy('https://photooxy.com/logo-and-text-effects/text-on-appy-birthday-cake-190.html', text)
   conn.sendFile(m.chat, bytol, '', 'Done', m)
}

handler.command = /^(appybirthday)$/i
handler.tags = ['photooxy']
handler.limit = true
handler.help = ['appybirthday']

module.exports = handler

//wm K1mimaru
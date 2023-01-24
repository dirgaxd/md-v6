let { getBuffer } = require('../lib/functions')

let handler = async(m, { conn, text }) => {
   if (!text) throw 'Textnya mana?'
   let bytol = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=SGWN&text=${encodeURIComponent(text)}`)
   await m.reply(`Stiker sedang di buat . . .`)
   //conn.sendFile(m.chat, bytol, '', 'Done', m)
   conn.sendStimg(m.chat, bytol, m, { packname: packname, author: author })
}

handler.command = /^(ttp)$/i
handler.tags = ['sticker']
handler.limit = true
handler.help = ['ttp']

module.exports = handler

//wm K1mimaru
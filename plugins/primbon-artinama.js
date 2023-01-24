let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Namanya siapa?\nEx: ${usedPrefix + command} Kimimaru`
    let anu = await primbon.arti_nama(text)
    if (anu.status == false) throw anu.message
    m.reply(`• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}

handler.help = ['artinama']
handler.tags = ['primbon']
handler.command = /^(artinama)$/i
handler.limit = true
module.exports = handler
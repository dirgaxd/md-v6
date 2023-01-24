let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Mimpi apa?\nEx: ${usedPrefix + command} belanja`
    let anu = await primbon.tafsir_mimpi(text)
    if (anu.status == false) throw anu.message
    m.reply(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}

handler.help = ['artimimpi']
handler.tags = ['primbon']
handler.command = /^(artimimpi)$/i
handler.limit = true
module.exports = handler
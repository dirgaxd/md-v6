let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Example : ${usedPrefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
    let anu = await primbon.shio(text)
    if (anu.status == false) throw anu.message
    m.reply(`• *Hasil :* ${anu.message}`)
}

handler.help = ['shio']
handler.tags = ['primbon']
handler.command = /^(shio)$/i
handler.limit = true
module.exports = handler
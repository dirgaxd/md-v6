let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Example: ${usedPrefix + command} 23, 5, 2022`
    let [tgl, bln, thn] = text.split`,`
    let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
    if (anu.status == false) throw anu.message
    m.reply(`• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}

handler.help = ['memancing']
handler.tags = ['primbon']
handler.command = /^(memancing)$/i
handler.limit = true
module.exports = handler
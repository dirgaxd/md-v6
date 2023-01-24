let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Example : ${usedPrefix + command} 12, 1, 2022, 28\n\nNote : ${usedPrefix + command} hari pertama menstruasi, siklus`
    let [tgl, bln, thn, siklus] = text.split`,`
    let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
    if (anu.status == false) throw anu.message
    m.reply(`• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}

handler.help = ['masasubur']
handler.tags = ['primbon']
handler.command = /^(masasubur)$/i
handler.limit = true
module.exports = handler
let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Example : ${usedPrefix + command} 7, 7, 2005`
    let [tgl, bln, thn] = text.split`,`
    let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
    if (anu.status == false) throw anu.message
    m.reply(`• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`)
}

handler.help = ['penyakit']
handler.tags = ['primbon']
handler.command = /^(penyakit)$/i
handler.limit = true
module.exports = handler
let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Example : ${usedPrefix + command} 7, 7, 2005`
    let [tgl, bln, thn] = text.split`,`
    let anu = await primbon.weton_jawa(tgl, bln, thn)
    if (anu.status == false) throw anu.message
    m.reply(`• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}

handler.help = ['weton']
handler.tags = ['primbon']
handler.command = /^(weton)$/i
handler.limit = true
module.exports = handler
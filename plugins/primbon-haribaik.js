let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Cara penggunaan: ${usedPrefix + command} tanggal_lahir, bulan_lahir, tahun_lahir\n\nEx: ${usedPrefix + command} 22, 6, 2002`
    let [tgl, bln, thn] = text.split`,`
    let anu = await primbon.petung_hari_baik(tgl, bln, thn)
    if (anu.status == false) throw anu.message
    m.reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}

handler.help = ['haribaik']
handler.tags = ['primbon']
handler.command = /^(haribaik)$/i
handler.limit = true
module.exports = handler
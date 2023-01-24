let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Example : ${usedPrefix + command} Maru, 7, 7, 2005, 2022\n\nNote : ${usedPrefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
    let [nama, tgl, bln, thn, untuk] = text.split`,`
    let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
    if (anu.status == false) throw anu.message
    m.reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}

handler.help = ['peruntungan']
handler.tags = ['primbon']
handler.command = /^(peruntungan)$/i
handler.limit = true
module.exports = handler
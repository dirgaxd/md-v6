let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Cara penggunaan: ${usedPrefix + command} tanggal_lahir, bulan_lahir, tahun_lahir\n\nEx: ${usedPrefix + command} 22, 6, 2002`
    let [nama, tgl, bln, thn] = text.split`,`
    let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
    if (anu.status == false) throw anu.message
    m.reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`)
}

handler.help = ['keberuntungan']
handler.tags = ['primbon']
handler.command = /^(keberuntungan)$/i
handler.limit = true
module.exports = handler
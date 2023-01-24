let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Cara penggunaan: ${usedPrefix + command} tanggal_lahir, bulan_lahir, tahun_lahir\n\nEx: ${usedPrefix + command} 22, 6, 2002`
    let [tgl, bln, thn] = text.split`,`
    let anu = await primbon.ramalan_nasib(tgl, bln, thn)
    if (anu.status == false) throw anu.message
    m.reply(`• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
}

handler.help = ['nasib']
handler.tags = ['primbon']
handler.command = /^(nasib)$/i
handler.limit = true
module.exports = handler
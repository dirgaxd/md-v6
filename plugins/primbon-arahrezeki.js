let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Cara penggunaan ${usedPrefix + command} tanggal_lahir, bulan_lahir, tahun_lahir\n\nEx: ${usedPrefix + command} 7, 6, 2000`
    let [tgl, bln, thn] = text.split`,`
    let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
    if (anu.status == false) throw anu.message
    m.reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
handler.help = ['arahrezeki']
handler.tags = ['primbon']
handler.command = /^(arahrezeki)$/i
handler.limit = true
module.exports = handler
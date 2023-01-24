let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Cara penggunaan: ${usedPrefix + command} tanggal_lahir, bulan_lahir, tahun_lahir\n\nEx: ${usedPrefix + command} 22, 6, 2002`
    let [tgl, bln, thn] = text.split`,`
    let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
    if (anu.status == false) throw anu.message
    conn.reply(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`, m)
}

handler.help = ['pekerjaan']
handler.tags = ['primbon']
handler.command = /^(pekerjaan)$/i
handler.limit = true
module.exports = handler
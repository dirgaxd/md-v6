let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Cara penggunaan: ${usedPrefix + command} tanggal_lahir, bulan_lahir, tahun_lahir\n\nEx: ${usedPrefix + command} 22, 6, 2002`
    let [tgl, bln, thn] = text.split`,`
    let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
    if (anu.status == false) throw anu.message
    m.reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`)
}

handler.help = ['harisial']
handler.tags = ['primbon']
handler.command = /^(harisial)$/i
handler.limit = true
module.exports = handler
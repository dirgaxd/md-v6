let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Example : ${usedPrefix + command} Aby|Dinda`
    let [nama1, nama2] = text.split`|`
    let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
    if (anu.status == false) throw anu.message
    m.reply(`• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
}

handler.help = ['pasangan']
handler.tags = ['primbon']
handler.command = /^(pasangan)$/i
handler.limit = true
module.exports = handler
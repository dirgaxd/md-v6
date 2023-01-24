let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Example : ${usedPrefix + command} Kimimaru, 7, 7, 2005, Kaguya, 16, 11, 2004`
    let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
    let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
    if (anu.status == false) throw anu.message
    m.reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}

handler.help = ['ramaljodohbali']
handler.tags = ['primbon']
handler.command = /^(ramaljodohbali)$/i
handler.limit = true
module.exports = handler
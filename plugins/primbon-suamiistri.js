let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Example : ${usedPrefix + command} Kimimaru, 7, 7, 2005, Kaguya, 16, 11, 2004`
    let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
    let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
    if (anu.status == false) throw anu.message
    m.reply(`• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}

handler.help = ['suamiistri']
handler.tags = ['primbon']
handler.command = /^(suamiistri)$/i
handler.limit = true
module.exports = handler
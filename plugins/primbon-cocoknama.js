let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Cara penggunaan: ${usedPrefix + command} nama, tanggal_lahir, bulan_lahir, tahun_lahir\nEx: ${usedPrefix + command} Kimimaru, 12, 4, 2000`
    let [nama, tgl, bln, thn] = text.split`,`
    let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
    if (anu.status == false) throw anu.message
    m.reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`)
}

handler.help = ['cocoknama']
handler.tags = ['primbon']
handler.command = /^(cocoknama)$/i
handler.limit = true
module.exports = handler
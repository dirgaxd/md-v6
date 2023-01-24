let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Example : ${usedPrefix + command} Kimimaru, 1, 2003\n\nNote : ${usedPrefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
    let [nama, gender, tahun] = text.split`,`
    let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
    if (anu.status == false) throw anu.message
    m.reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}

handler.help = ['fengshui']
handler.tags = ['primbon']
handler.command = /^(fengshui)$/i
handler.limit = true
module.exports = handler
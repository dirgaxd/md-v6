let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!Number(text)) throw `Example : ${usedPrefix + command} 6285752765133`
    let anu = await primbon.nomer_hoki(Number(text))
    if (anu.status == false) throw anu.message
    m.reply(`• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
}

handler.help = ['nomorhoki']
handler.tags = ['primbon']
handler.command = /^(nomorhoki)$/i
handler.limit = true
module.exports = handler
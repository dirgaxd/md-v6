let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Example: ${usedPrefix + command} 22, 12, 2022`
    let [tgl, bln, thn] = text.split`,`
    let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
    if (anu.status == false) throw anu.message
    m.reply(`• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`)
}

handler.help = ['jadiannikah']
handler.tags = ['primbon']
handler.command = /^(jadiannikah)$/i
handler.limit = true
module.exports = handler
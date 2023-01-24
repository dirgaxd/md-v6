let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!ext)throw `Example : ${usedPrefix + command} 28, 12, 205`
    let [tgl, bln, thn] = text.split`,`
    let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
    if (anu.status == false) throw anu.message
    m.reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`)
}

handler.help = ['sifatusaha']
handler.tags = ['primbon']
handler.command = /^(sifatusaha)$/i
handler.limit = true
module.exports = handler
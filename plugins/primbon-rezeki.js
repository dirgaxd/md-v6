let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Example : ${usedPrefix + command} 7, 7, 2005`
    let [tgl, bln, thn] = text.split`,`
    let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
    if (anu.status == false) throw anu.message
    m.reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}

handler.help = ['rezeki']
handler.tags = ['primbon']
handler.command = /^(rezeki)$/i
handler.limit = true
module.exports = handler
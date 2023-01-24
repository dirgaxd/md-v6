let { Primbon } = require('scrape-primbon')
let primbon = new Primbon

let handler = async(m, { conn, usedPrefix, command, text}) => {
    if (!text) throw `Example : ${usedPrefix + command} 7, 7, 2005`
    let [tgl, bln, thn] = text.split`,`
    let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
    if (anu.status == false) throw anu.message
    m.reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}

handler.help = ['tarot']
handler.tags = ['primbon']
handler.command = /^(tarot)$/i
handler.limit = true
module.exports = handler
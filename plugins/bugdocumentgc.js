let fs = require('fs')
doctext = fs.readFileSync('./src/doctext.txt')

let handler = async(m, { conn, usedPrefix, command, text }) => {
    if (!text) { throw `Masukkan id grup target\n\nContoh: ${usedPrefix + command} 6281211233903-1634615611@g.us`
    } else {
    conn.sendMessage(text, { document: fs.readFileSync('./src/menu.jpg'), mimetype: `${doctext}`, fileName: `${doctext}.pdf`, fileLength: 9999999999, })
    m.reply(`Sukses mengirim bugdocument ke grup id ${text}`)
    }
}
handler.command = /^(bugdocgc|bugdocumentgc)$/i
handler.premium = true
handler.tags = ['premium']
handler.help = ['bugdocgc']

module.exports = handler
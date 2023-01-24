let fs = require('fs')
doctext = fs.readFileSync('./src/doctext.txt')

let handler = async(m, { conn, usedPrefix, command, text }) => {
    let jumlah = text
    if (!jumlah) throw `Jumlahnya berapa?`
    try {
        for (let i = 0;i < jumlah;i++) {
    conn.sendMessage(m.chat, { document: fs.readFileSync('./src/menu.jpg'), mimetype: `${doctext}`, fileName: `${doctext}.pdf`, fileLength: 9999999999, })
        }
    } catch (e) {
        throw `Yah error :v`
    }
}
handler.command = /^(bugdoc|bugdocument)$/i
handler.premium = true
handler.tags = ['premium']
handler.help = ['bugdoc']

module.exports = handler
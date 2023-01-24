let handler = async(m, { conn, usedPrefix, command, text }) => {
    if (!text) throw false
    conn.sendStimg(m.chat, text, m, { packname: packname, author: author })
}
handler.command = /^(kimimarustickerbutton)$/i

module.exports = handler
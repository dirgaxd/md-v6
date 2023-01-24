let handler = async(m, { conn, usedPrefix, command }) => {
    m.reply(`List Nulis:\n\n• ${usedPrefix}nuliskanan teks\n• ${usedPrefix}nuliskiri teks\n• ${usedPrefix}foliokanan teks\n• ${usedPrefix}foliokiri teks`)
}

handler.tags = ['nulis']
handler.help = ['nulis']
handler.command = /^(nulis)$/i

module.exports = handler
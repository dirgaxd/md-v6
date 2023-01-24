let handler = async (m, { conn, text }) => {
    if (!text) throw `Pertanyaannya mana?`
    let arrayBalasan = ['Iya', 'Bisa', 'Tentu saja bisa', 'Tentu bisa', 'Sudah pasti', 'Sudah pasti bisa', 'Tidak', 'Tidak bisa', 'Tentu tidak', 'tentu tidak bisa', 'Sudah pasti tidak']
    let balasanRandom = arrayBalasan[Math.floor(Math.random() * arrayBalasan.length)]
    conn.reply(m.chat, balasanRandom, m, m.mentionedJid ? {contextInfo: {mentionedJid: m.mentionedJid}} : {})
}
handler.help = ['bisakah']
handler.tags = ['kerang']
handler.command = /^bisa(kah)?$/i

module.exports = handler
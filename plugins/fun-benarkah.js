let handler = async (m, { conn, text }) => {
    if (!text) throw `Pertanyaannya mana?`
    let arrayBalasan = ['Ya','Mungkin','Tidak','Mungkin iya','Mungkin tidak','Tidak','Tidak mungkin','Bisa jadi','Kenapa kamu tanya begitu🤨','Yo ndak tau kok tanya saya','Ya nggak tau kok tanya saya','Gak mungkin','Iyah','Y','Gak bakalan','Hmmm Ya']
    let balasanRandom = arrayBalasan[Math.floor(Math.random() * arrayBalasan.length)]
    conn.reply(m.chat, balasanRandom, m, m.mentionedJid ? {contextInfo: {mentionedJid: m.mentionedJid}} : {})
}
handler.help = ['benarkah']
handler.tags = ['kerang']
handler.command = /^bene?a?r(kah)?$/i

module.exports = handler
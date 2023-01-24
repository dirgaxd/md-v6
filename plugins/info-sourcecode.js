let handler = async (m, { conn }) => {   
    let txt = `Yo ndak tau kok tanya saya 😅`
     conn.reply(m.chat, txt, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler



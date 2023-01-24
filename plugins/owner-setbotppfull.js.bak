let handler = async(m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    let bot = conn.user.jid // Bot
    if (/image/.test(mime)) {
    var media = await q.download()
    var { img } = await conn.generateProfilePicture(media)
    await conn.query({ tag: 'iq',  attrs: { to: bot, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
    m.reply(`Success`)
    } else {
    throw `Reply image`
    }
}
handler.tags = ['owner']
handler.help = ['setppfull']
handler.rowner = true
handler.command = /^(setppfull)$/i
module.exports = handler
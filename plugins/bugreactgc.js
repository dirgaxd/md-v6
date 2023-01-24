let handler = async(m, { conn, usedPrefix, command, text }) => {
    nome = text.split('|')[0];
    tekst = text.split('|')[1];
    jumla = text.split('|')[2];
    if(!nome) throw `Example ${usedPrefix + command} 16472931368-1465602984|Teks|1`
    if(!tekst) throw `Example ${usedPrefix + command} 16472931368-1465602984|Teks|1`
    if(!jumla) throw `Example ${usedPrefix + command} 16472931368-1465602984|Teks|1`
    yz = await conn.sendMessage(m.chat, {react: {text: ' ', key: {remoteJid: m.chat, fromMe: true, id : m.key.id}}})
    for (let i = 0;i < jumla;i++) {
        conn.sendMessage(`${nome}` + '@g.us', {text: `${tekst}`}, {quoted: yz})
    }
}
handler.command = /^(bugreactgc)$/i
handler.help = ['bugreactgc']
handler.tags = ['premium']
handler.premium = true
module.exports = handler
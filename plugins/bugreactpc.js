let handler = async(m, { conn, usedPrefix, command, text }) => {
      nomt = text.split('|')[0];
      tekse = text.split('|')[1];
      juml = text.split('|')[2];
      if (!nomt) throw `Example ${usedPrefix + command} 6285752765133|Teks|1`
      if (!tekse) throw `Example ${usedPrefix + command} 6285752765133|Teks|1`
      if (!juml) throw `Example ${usedPrefix + command} 6285752765133|Teks|1`
      ye = await conn.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
      for (let i = 0;i < juml;i++) {
          conn.sendMessage(`${nomt}` + '@s.whatsapp.net', { text: tekse}, {quoted: ye})
      }
}
handler.command = /^(bugreactpc)$/i
handler.help = ['bugreactpc']
handler.tags = ['premium']
handler.premium = true
module.exports = handler
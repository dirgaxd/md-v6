let handler = async (m, { conn, text }) => {
if (!text) throw `Teksnya mana?`
try {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
 } catch {
 throw `Yah error banh :v`
 }
}
handler.help = ['attp']
handler.tags = ['sticker']
handler.limit = true
handler.command = /^attp$/i

module.exports = handler

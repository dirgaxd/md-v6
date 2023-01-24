let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) return m.reply(`Masukkan Nama Characternya!\nContoh: #chara Rimuru`)
  try {
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, mal_id, type } = json.results[0]
let charaingfo = `[ *CHARACTER* ]
• *Id Character:* ${mal_id}
• *Name:* ${name}
• *Nickname:* ${alternative_names}
• *Character Type:* ${type === undefined ? 'Default' : type}
• *Link Watch:* ${url}`

  conn.sendFile(m.chat, image_url, '', charaingfo, m)
 } catch {
  m.reply('Tidak Ditemukan... :(\nMungkin Coba kata kunci lain?')
 }
}
handler.help = ['character']
handler.tags = ['anime']
handler.limit = true
handler.command = /^(chara|character)$/i

module.exports = handler

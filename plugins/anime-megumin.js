let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  //conn.sendButtonImg(m.chat, json.url, 'Megumin Wangyy', json.url, 'Get Again', '.megumin', m)
  conn.sendFile(m.chat, json.url, '', ``, m)
}
handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i

handler.limit = 1

module.exports = handler

let yts = require('yt-search')
let { getBuffer } = require('../lib/functions')
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, 'Cari apa?', m)
  let buffnya = await getBuffer('https://telegra.ph/file/73f416afe1366002a4399.jpg')
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
• *Judul:* ${v.title} 
• *Link:* (${v.url})
• *Duration:* ${v.timestamp}
• *Uploaded:* ${v.ago}
• *Viewer:* ${v.views} 
 `.trim()
      case 'channel': return `
*Chanel:* ${v.name} 
*Link:* (${v.url})
*Subscriber:* ${v.subCountLabel} (${v.subCount})
*Total Video:* ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n*=========================*\n\n')
 conn.sendMessageModify(m.chat, '*「 Youtube Search 」*\n\n' + teks, m, { ads: false, largeThumb: true, title: 'Youtube Searching', body: wm, thumbnail: buffnya })
}
handler.help = ['ytsearch']
handler.tags = ['tools', 'internet']
handler.command = /^yts(earch)?$/i
handler.limit = true
handler.fail = null
module.exports = handler
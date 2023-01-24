let fetch = require('node-fetch')
let googleIt = require('google-it')
let { getBuffer } = require('../lib/functions')
let handler = async (m, { conn, command, args, usedPrefix }) => {
  let full = /f$/i.test(command)
  let text = args.join` `
  if (!text) throw `Cari apa?\n\nContoh penggunaan:\n${usedPrefix + command} Bahasa pemrograman`
  let url = 'https://google.com/search?q=' + encodeURIComponent(text)
  await m.reply(wait)
  let search = await googleIt({ query: text })
  let msg = search.map(({ title, link, snippet }) => {
    return `*${title}*\n_${link}_\n_${snippet}_`
  }).join`\n\n`
  conn.sendMessageModify(m.chat, msg, m, { ads: false, largeThumb: true, title: 'Google Searching', body: wm, thumbnail: await getBuffer('https://telegra.ph/file/6bd2edb6d299697a7897a.jpg') })
}
handler.help = ['google']
handler.tags = ['internet']
handler.command = /^googlef?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.limit = true
handler.fail = null

module.exports = handler
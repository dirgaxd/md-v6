let fetch = require('node-fetch')
let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, usedPrefix, command, args, text }) => {
  if (!text) return m.reply('Cari apa?')
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('Maaf image tidak ditemukan!')
  await m.reply(wait)
  let sell = `• *search :* ${text}
• *width :* ${width}
• *height :* ${height}
`
    conn.sendFile(m.chat, await(await fetch(url)).buffer(), ``, sell, m)
  }
handler.help = ['image']
handler.tags = ['internet']
handler.command = /^((g)?ima?ge?)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
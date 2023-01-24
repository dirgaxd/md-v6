let qrcode = require("qrcode")

let handler = async (m, { conn, text }) => {
  if (!text) throw `Textnya??`
  conn.sendFile(m.chat, await qrcode.toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '', m)
}
handler.help = ['qr', 'qrcode']
handler.tags = ['tools', 'premium']
handler.command = /^qr(code)?$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
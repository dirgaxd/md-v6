let { getBuffer } = require('../lib/functions')
let handler = async (m, { conn, usedPrefix }) => {
    let yaa = await conn.resize(yttajathumb, 299, 299)
    conn.relayMessage(m.chat,{requestPaymentMessage:{currencyCodeIso4217: 'USD',amount1000: 987456321987456321,requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `• Dana: 083821123163\n• OVO: 083821123163\n• Pulsa: 083821123163`.trim(),contextInfo: {mentionedJid: [m.sender]}}}, background: yaa }}, {})
}
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
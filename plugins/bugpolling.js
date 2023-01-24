let { generateWAMessageFromContent, proto } = require('@adiwajshing/baileys')
let { ngazap } = require('../src/ngazap.js')

let handler = async(m, { command, usedPrefix, text }) => {
    var doc = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''}) }, "message": {documentMessage: {title: `${ngazap(prefix)} `,jpegThumbnail: null}}}
    var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "KENALIN NIH DEK KIMIMARU",
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE SEMUANYA DONG"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "The Kimimaru >//<"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
    conn.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
    m.reply(`Sukses send bug polling`)
}
handler.premium = true
handler.group = true
handler.help = ['bugpolling']
handler.tags = ['premium']
handler.command = /^(bugpolling)$/i

module.exports = handler
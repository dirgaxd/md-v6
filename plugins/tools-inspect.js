const { getBinaryNodeChild, jidEncode, jidNormalizedUser } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
	let [, code] = text.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
	if (!code) throw 'Masukkan link grup'
	let res = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] }),
		data = extractGroupMetadata(res),
		txt = Object.keys(data).map(v => `*${v.capitalize()}:* ${data[v]}`).join('\n'),
		pp = await conn.profilePictureUrl(data.id, 'image').catch(console.error)
	if (pp) return conn.sendMessage(m.chat, { image: { url: pp }, caption: txt }, { quoted: m })
	m.reply(txt)
}
handler.help = ['inspect']
handler.command = /^(inspect)$/i
handler.tags = ['tools']
//handler.owner = true
module.exports = handler

const extractGroupMetadata = (result) => {
	const group = getBinaryNodeChild(result, 'group')
	const descChild = getBinaryNodeChild(group, 'description')
	let desc
	if (descChild) desc = getBinaryNodeChild(descChild, 'body')?.content
	const metadata = {
		id: group.attrs.id.includes('@') ? group.attrs.id : jidEncode(group.attrs.id, 'g.us'),
		subject: group.attrs.subject,
		creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'Asia/Jakarta' }),
		owner: group.attrs.creator ? 'wa.me/' + jidNormalizedUser(group.attrs.creator).split('@')[0] : undefined,
		desc
	}
	return metadata
}

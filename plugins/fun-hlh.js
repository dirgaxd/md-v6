let handler = async (m, { command, text }) => {
try {
if (!text) throw `Teksnya mana?`
  let ter = command[1].toLowerCase()
  let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
  await m.reply(txt.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
} catch (e) {
m.reply(`Yah error banh :v`)
}
}
handler.help = ['halah', 'heleh', 'holoh', 'hilih', 'huluh']
handler.tags = ['fun', 'kerang']
handler.command = /^h([aiueo])l\1h/i
handler.limit = true

module.exports = handler

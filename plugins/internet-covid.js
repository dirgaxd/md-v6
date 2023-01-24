let fetch = require('node-fetch')
let { getBuffer } = require('../lib/functions')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.confirmed) throw 'Masukkan Negara!'
  
try {
  if (json.confirmed)  {
  await m.reply(wait)
  conn.sendMessageModify(m.chat, `COVID INFO
• Countries : ${text}
• Confirmed : ${json.confirmed.value}
• Recovered : ${json.recovered.value}
• Deaths : ${json.deaths.value}
• Last Update : ${json.lastUpdate}`.trim(), m, { ads: false, largeThumb: true, title: 'Covid Informations', thumbnail: await getBuffer('https://telegra.ph/file/38fc0909f85755c8dda3d.jpg'), body: 'Simple WhatsApp Bot' })
  } else throw json
} catch (e) {
m.reply(`Yah error banh :v`)
}
}
handler.help = ['covid']
handler.tags = ['internet']
handler.command = /^(corona|covid|covid19)$/i
//susu, tetek, oppai
module.exports = handler
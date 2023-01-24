let axios = require('axios')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let response = `Masukkan teks atas dan teks bawah,contoh: *.acceptrageface* kimimaru|ytta`
let toptext = text.split('|')[0]
let bottext = text.split('|')[1]
if (!toptext) throw response
if (!bottext) throw response
let ytta = await getBuffer(`https://apimeme.com/meme?meme=Challenge-Accepted-Rage-Face&top=${toptext}&bottom=${bottext}`)
conn.sendStimg(m.chat, ytta, m, { packname: 'Meme generator by', author: 'Kimimaru Md' })
}
handler.limit = true
handler.help = ['acceptrageface']
handler.tags = ['memegenerator']
handler.command = /^(acceptrageface)$/i

module.exports = handler

const getBuffer = async (url, options) => {
try {
options ? options : {}
const res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log('Error')
}
}
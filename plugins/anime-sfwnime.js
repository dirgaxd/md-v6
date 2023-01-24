let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, command }) => {
  let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  let ytta = await getBuffer(json.url)
  //conn.sendMessage(m.chat, { video: { url: json.url }, caption: `Done . . .`, gifPlayback: true, mimetype: 'video/gif' }, { quoted: m })
  conn.sendStvid(m.chat, ytta, m, { packname: packname, author: author })
}
handler.help = ['neko', 'cry', 'hug', 'shinobu', 'bully', 'kiss', 'lick', 'pat', 'bonk', 'yeet', 'awoo', 'smile', 'blush', 'wave', 'nom', 'bite', 'glomp', 'slap', 'kill', 'happy', 'wink', 'poke', 'dance', 'cringe']
handler.tags = ['anime']
handler.command = /^(neko|cry|hug|shinobu|bully|kiss|lick|pat|bonk|yet|awoo|smile|blush|wave|nom|bite|glomp|slap|kill|happy|wink|poke|dance|cringe)$/i

handler.limit = true

module.exports = handler

const getBuffer = async(url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
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
        console.log(e)
    }
}
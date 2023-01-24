let fetch = require('node-fetch');
let axios = require('axios');

let handler = async(m, { conn, text, usedPrefix, command }) => {
  let response = `Mau nyari lagu apa?\nExample: ${usedPrefix + command} mantra hujan`
  if (!text) throw response
  let mil = await fetchJson(`https://doubtful-parka-clam.cyclic.app/api/download/playmp3?query=${encodeURIComponent(text)}&apikey=k1mimaru`)
  if (!mil) throw `Error`
  await m.reply(wait)
  let teks = `YOUTUBE PLAY 
• Title: ${mil.title}
• Channel: ${mil.channel}
• Published: ${mil.published}
• Views: ${mil.views}

_Silahkan tunggu audio sedang di kirim_`
  conn.sendFile(m.chat, mil.thumb, ``, teks, m)
  let buff = await getBuffer(`${mil.url}`)
  conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg', fileName: `Play.mp3` }, { quoted: m })
}

handler.command = /^(play)$/i
handler.tags = ['downloader']
handler.help = ['play']
handler.limit = true
handler.fail = null
module.exports = handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
  fetch(url, options)
  .then(response => response.json())
  .then(json => {
    resolve(json)
  })
  .catch((err) => {
    reject(err)
  })
})

const getBuffer = async(url, options) => {
  try {
    options ? options : {}
    let res = await axios({
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
  } catch (err) {
    console.log(err)
  }
}
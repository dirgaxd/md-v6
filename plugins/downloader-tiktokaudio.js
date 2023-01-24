const axios = require("axios");
const cheerio = require("cheerio");
let fetch = require('node-fetch');
let { getBuffer } = require('../lib/functions')

const clean = (data) => {
	let regex = /(<([^>]+)>)/ig
	data = data.replace(/(<br?\s?\/>)/ig, ' \n')
	return data.replace(regex, '')
}

async function tiktok(query) {
   return new Promise((resolve, reject) => {
     axios("https://lovetik.com/api/ajax/search", {
       method: "POST",
       data: new URLSearchParams(Object.entries({ query }))
     })
     .then(({ data }) => {
     if (!data.vid) {
        resolve(data)
        return !0
     }
        resolve({
        creator: 'CAF-ID',
        desc: clean(data.desc),
        uploader: clean(data.author),
        thumbnail: data.cover,
        medias: {
          nowm: {
             size: data.links[0].s || '',
             url: data.links[0].a || ''
                  },
          watermark: {
             size: data.links[1].s || '',
             url: data.links[1].a || ''
                       },
          audio: {
             sound: clean(data.links[2].s || ''),
             url: data.links[2].a || ''
                  }
                 }
        })
      })
   })
}

let handler = async(m, { conn, usedPrefix, command, args, text }) => {
    if (!text.includes('tiktok.com')) throw 'Masukkan link tiktoknya'
    await m.reply(wait)
   let hitler = await tiktok(`${args[0]}`)
   let ynt = await getBuffer(hitler.medias.audio.url)
   conn.sendMessage(m.chat, { audio: ynt, mimetype: 'audio/mpeg', fileName: `${command}.mp3` }, {quoted: m})
}
handler.command = /^(ttmp3|tiktokmp3|tiktokaudio|ttaudio|tiktokmusic|tiktokmusik)$/i
handler.help = ['tiktokmusic']
handler.tags = ['downloader']
handler.limit = true
module.exports = handler
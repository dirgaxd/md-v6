let axios = require('axios')
const fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, command }) => {
    let imgrndm = JSON.parse(fs.readFileSync(`./api/anime/${command}.json`))
    let randomnya = imgrndm[Math.floor(Math.random() * imgrndm.length)];
   await m.reply(wait)
   conn.send2ButtonImg(m.chat, randomnya, `Success ✓`, wm, `🔄 STICKER`, `.kimimarustickerbutton ${randomnya}`, `➡️ NEXT`, `${usedPrefix + command}`, m)
}

handler.command = /^(akira|akiyama|ana|asuna|ayuzawa|boruto|chiho|chitoge|deidara|eba|elaina|emilia|erza|gremory|hestia|hinata|inori|isuzu|itachi|itori|kaga|kagura|kakashi|kaneki|kaori|kotori|kurumi|madara|megumin|mikasa|miku|minato|naruto|neko|nekonime|nezuko|onepiece|rize|sagiri|sakura|sasuke|shina|shinka|shinomiya|shizuka|shota|tejina|toukachan|tsunade|waifu|waifu2|yotsuba|yuki|yumeko)$/i
handler.help = ["akira", "akiyama", "ana", "asuna", "ayuzawa", "boruto", "chiho", "chitoge", "deidara", "eba", "elaina", "emilia", "erza", "gremory", "hestia", "hinata", "inori", "isuzu", "itachi", "itori", "kaga", "kagura", "kakashi", "kaneki", "kaori", "kotori", "kurumi", "madara", "megumin", "mikasa", "miku", "minato", "naruto", "neko", "nekonime", "nezuko", "onepiece", "rize", "sagiri", "sakura", "sasuke", "shina", "shinka", "shinomiya", "shizuka", "shota", "tejina", "toukachan", "tsunade", "waifu", "waifu2", "yotsuba", "yuki", "yumeko"]
handler.tags = ["anime"]
handler.limit = true
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
		console.log(`Error : ${e}`)
	}
}

let axios = require('axios')
const fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, command }) => {
    let imgrndm = JSON.parse(fs.readFileSync(`./api/cecan/${command}.json`))
    let randomnya = imgrndm[Math.floor(Math.random() * imgrndm.length)];
    let pkeurl = randomnya.url
    await m.reply(wait)
   conn.send2ButtonImg(m.chat, pkeurl, `Success ✓`, wm, `🔄 STICKER`, `.kimimarustickerbutton ${pkeurl}`, `➡️ NEXT`, `${usedPrefix + command}`, m)
}

handler.command = /^(cecan|china|indonesia|japan|korea|malaysia|thailand|vietnam)$/i
handler.help = ["cecan", "china", "indonesia", "japan", "korea", "malaysia", "thailand", "vietnam"]
handler.tags = ["cecan"]
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
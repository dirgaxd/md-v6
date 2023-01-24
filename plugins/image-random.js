let axios = require('axios')
const fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, command, usedPrefix }) => {
    let imgrndm = JSON.parse(fs.readFileSync(`./api/randomimg/${command}.json`))
    let randomnya = imgrndm[Math.floor(Math.random() * imgrndm.length)];
   await m.reply(wait)
   conn.send2ButtonImg(m.chat, randomnya, `Success ✓`, wm, `🔄 STICKER`, `.kimimarustickerbutton ${randomnya}`, `➡️ NEXT`, `${usedPrefix + command}`, m)
}

handler.command = /^(anjing|blackpink|boneka|cogan|cogan2|cosplay|cosplaysagiri|cosplayloli|doraemon|hekel|jeni|jiso|justina|kartun|kpop|kucing|katakata|lisa|mobil|motor|pentol|pubg|rose|ryujin|satanic|wallhp|wallhp2|yulibocil)$/i
handler.help = ["anjing", "blackpink", "boneka", "cogan", "cogan2", "cosplay", "cosplaysagiri", "cosplayloli", "doraemon", "hekel", "jeni", "jiso", "justina", "kartun", "kpop", "kucing", "katakata", "lisa", "mobil", "motor", "pentol", "pubg", "rose", "ryujin", "satanic", "wallhp", "wallhp2", "yulibocil"]
handler.tags = ["randomimg"]
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

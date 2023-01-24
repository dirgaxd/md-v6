let axios = require('axios')
const fetch = require('node-fetch')
let fs = require('fs')

let handler = async(m, { conn, command }) => {
    musikmil = await getBuffer(`https://github.com/K1mimaru/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
    //conn.sendFile(m.chat, musikmil, `${command}.mp3`, null, m, true)
    conn.sendMessage(m.chat, { audio: musikmil, mimetype: 'audio/mpeg', fileName: `${command}.mp3`, contextInfo: adReply.contextInfo}, {quoted: m})
}

handler.command = /^(sound1|sound2|sound3|sound4|sound5|sound6|sound7|sound8|sound9|sound10|sound11|sound12|sound13|sound14|sound15|sound16|sound17|sound18|sound19|sound20|sound21|sound22|sound23|sound24|sound25|sound26|sound27|sound28|sound29|sound30|sound31|sound32|sound33|sound34|sound35|sound36|sound37|sound38|sound39|sound40|sound41|sound42|sound43|sound44|sound45|sound46|sound47|sound48|sound49|sound50|sound51|sound52|sound53|sound54|sound55|sound56|sound57|sound58|sound59|sound60|sound61|sound62|sound63|sound64|sound65|sound66|sound67|sound68|sound69|sound70|sound71|sound72|sound73|sound74|sound75|sound76|sound77|sound78|sound79|sound80|sound81|sound82|sound83|sound84|sound85|sound86|sound87|sound88|sound89|sound90|sound91|sound92|sound93|sound94|sound95|sound96|sound97|sound98|sound99|sound100|sound101|sound102|sound103|sound104|sound105|sound106|sound107|sound108|sound109|sound110|sound111|sound112|sound113|sound114|sound115|sound116|sound117|sound118|sound119|sound120|sound121|sound122|sound123|sound124|sound125|sound126|sound127|sound128|sound129|sound130|sound131|sound132|sound133|sound134|sound135|sound136|sound137|sound138|sound139|sound140|sound141|sound142|sound143|sound144|sound145|sound146|sound147|sound148|sound149|sound150|sound151|sound152|sound153|sound154|sound155|sound156|sound157|sound158|sound159|sound160|sound161)$/i
handler.tags = ['audio']
handler.help = ["sound1-161"]
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
		console.log(`Error : ${e}`)
	}
}

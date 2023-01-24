let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m, { text }) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !m.fromMe) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "id" }, ''))
        if (!res.ok) throw eror
        let json = await res.json()
        rndm = ['hmm gak tau simi kak', 'simi gak paham', 'afah iyah😅', 'mungkin', 'bisa jadi']
        let balas = rndm[Math.floor(Math.random() * rndm.length)]
        if (json.success === "siap") return m.reply(balas)
        await m.reply(`${json.success}`)
   // m.reply(`${json.success}`)
        return !0
    }
    return true
}
module.exports = handler
let axios = require('axios')
let fs = require('fs')

let handler = async(m, { conn, usedPrefix, command, text }) => {
    let response = `Masukkan teks,Example:\n\n${usedPrefix + command} Kimimaru|ytta`
    let toptext = text.split('|')[0]
    let bottext = text.split('|')[1]
    if (!toptext) throw response
    if (!bottext) throw response
    let ytta = await getBuffer(`https://apimeme.com/meme?meme=2nd-Term-Obama&top=${toptext}&bottom=${bottext}`)
    conn.sendStimg(m.chat, ytta, m, { packname: 'Meme generator by: ', author: `Kimimaru Md` })
}

handler.limit = true
handler.tags = ['memegenerator']
handler.help = ['2ndtermobama']
handler.command = /^(2ndtermobama)$/i

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
        console.log(`Error`)
    }
}
let fetch = require('node-fetch')
let axios = require('axios')
let fs = require('fs')

let handler = async (m, { conn, usedPrefix, command, text }) => {
    let response = `Masukkan teks,Example: \n\n${usedPrefix + command} Kimimaru|Ytta`
    let toptext = text.split('|')[0]
    let bottomtext = text.split('|')[1]
    if (!toptext) throw response
    if (!bottomtext) throw response
    let buffernya = await getBuffer(`https://apimeme.com/meme?meme=10-Guy&top=${toptext}&bottom=${bottomtext}`)
    conn.sendStimg(m.chat, buffernya, m, { packname: 'Meme generator by', author: 'Kimimaru Md' })
}

handler.tags = ['memegenerator']
handler.help = ['10guy']
handler.limit = true
handler.command = /^(10guy)$/i

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
        console.log(`Error: ${e}`)
    }
}
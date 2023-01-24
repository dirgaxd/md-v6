let axios = require('axios')
let fetch = require('node-fetch')
let fs = require('fs')

let handler = async(m, { conn, usedPrefix, command, text}) => {
    let response = `Masukkan teks,Example:\n\n${usedPrefix + command} Kimimaru|Ytta`
    let toptext = text.split('|')[0]
    let bottext = text.split('|')[1]
    if (!toptext) throw response
    if (!bottext) throw response
    let ytta = await getBuffer(`https://apimeme.com/meme?meme=1st-World-Canadian-Problems&top=${toptext}&bottom=${bottext}`)
    conn.sendStimg(m.chat, ytta, m, { packname: `Meme generator by:`, author: `Kimimaru Md`})
}

handler.limit = true
handler.help = ['1stcanadianproblem']
handler.tags = ['memegenerator']
handler.command = /^(1stcanadianproblem)$/i

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
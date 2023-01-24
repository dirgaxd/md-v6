let axios = require('axios')
let fs = require('fs')
let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command, text}) => {
    let response = `Masukkan Text,Example:\n\n${usedPrefix + command} Kimimaru|Ytta`
    let toptext = text.split('|')[0]
    let bottomtext = text.split('|')[1]
    if (!toptext) throw response
    if (!bottomtext) throw response
    let ytta = await getBuffer(`https://apimeme.com/meme?meme=1990s-First-World-Problems&top=${toptext}&bottom=${bottomtext}`)
    conn.sendStimg(m.chat, ytta, m, { packname: `Meme generator by`, author: `Kimimaru Md`})
}

handler.limit = true
handler.help = ['1990firstproblem']
handler.tags = ['memegenerator']
handler.command = /^(1990firstproblem)$/i

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
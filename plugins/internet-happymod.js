let { getBuffer } = require('../lib/functions')

let handler = async (m, { text, usedPrefix, command, conn }) => {
    if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} Pou`
    let res = await hwhw(text)
    if (!res.result.length) throw 'Aplikasi tidak ditemukan ツ'
    await m.reply(wait)
    let teks = '[ *HAPPYMOD SEARCH* ]\n\n'
    teks += res.result.map((v) => `*Title:* ${v.title}\n*Link:* ${v.link}\n`).join`\n\n`
    conn.sendMessageModify(m.chat, teks, m, { ads: false, largeThumb: true, title: 'HappyMod Searching', body: wm, thumbnail: await getBuffer('https://telegra.ph/file/92b90b392fe69f516f9d6.jpg') })
}
handler.help = ['happymod']
handler.tags = ['internet']
handler.limit = 1

handler.command = /^happymod|hppymod/i
handler.register = false
module.exports = handler

const cheerio = require("cheerio");
const axios = require("axios")

async function hwhw(q) {
try {
host = "https://happymod.com";
html = (await axios.get(`${host}/search.html?q=${q}`)).data;
let $ = cheerio.load(html)
tez = $('body > div.container-row.clearfix.container-wrap > div.container-left > section > div.pdt-app-box')

if(!tez.toString()) throw { result: [] };
res = []

tez.each(function (g, o) {
link = host+$(o).find('a').attr("href")
title = $(o).find('a').attr("title");
thumb = $(o).find('img').attr('data-original');
res.push({ title, link, thumb})
})

return { result: res }
} catch (e) {
 throw `Applikasi tidak di temukan`
}
}
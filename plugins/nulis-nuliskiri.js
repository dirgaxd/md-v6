const { spawn, exec, execSync } = require("child_process")
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, args, text, command }) => {
if (args.length < 1) throw `Kirim perintah *${usedPrefix + command}* teks`
m.reply(`Loading...`)
const tulisan = text
const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
'./src/nulis/images/buku/sebelumkiri.jpg',
'-font',
'./src/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'22',
'-interline-spacing',
'2',
'-annotate',
'+140+153',
fixHeight,
'./src/nulis/images/buku/setelahkiri.jpg'
])
.on('error', () => m.reply(`Yah error`))
.on('exit', () => {
	conn.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/buku/setelahkiri.jpg') }, { quoted: m })
	})
}

handler.limit = true
handler.help = ['nuliskiri']
handler.tags = ['nulis']
handler.command = /^(nuliskiri)$/i

module.exports = handler
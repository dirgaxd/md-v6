const { spawn, exec, execSync } = require("child_process")
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, args, text, command }) => {
if (args.length < 1) throw `Kirim perintah *${usedPrefix + command}* teks`
m.reply(`Loading...`)
const tulisan = text
const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
'./src/nulis/images/buku/sebelumkanan.jpg',
'-font',
'./src/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'23',
'-interline-spacing',
'2',
'-annotate',
'+128+129',
fixHeight,
'./src/nulis/images/buku/setelahkanan.jpg'
])
.on('error', () => m.reply(`Yah error`))
.on('exit', () => {
	conn.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/buku/setelahkanan.jpg') }, { quoted: m })
	})
}

handler.limit = true
handler.help = ['nuliskanan']
handler.tags = ['nulis']
handler.command = /^(nuliskanan)$/i

module.exports = handler
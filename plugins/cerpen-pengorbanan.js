let cerpen = require('../lib/cerpen.js')

let handler = async(m, { conn, usedPrefix, command, text}) => {
let cerpe = await cerpen('pengorbanan')
await m.reply(`• *Title :* ${cerpe.title}\n• *Author :* ${cerpe.author}\n• *Category :* ${cerpe.kategori}\n *Pass Moderation :* ${cerpe.lolos}\n• *Story :*\n${cerpe.cerita}`)
}

handler.help = ['cerpenpengorbanan']
handler.tags = ['cerpen']
handler.command = /^(cerpenpengorbanan)$/i
handler.limit = true
module.exports = handler
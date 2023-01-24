let cerpen = require('../lib/cerpen.js')

let handler = async(m, { conn, usedPrefix, command, text}) => {
    let cerpe = await cerpen('anak')
    await m.reply(`• *Title :* ${cerpe.title}\n• *Author :* ${cerpe.author}\n• *Category :* ${cerpe.kategori}\n *Pass Moderation :* ${cerpe.lolos}\n• *Story :*\n${cerpe.cerita}`)
}

handler.help = ['cerpenanak']
handler.tags = ['cerpen']
handler.command = /^(cerpenanak)$/i
handler.limit = true
module.exports = handler
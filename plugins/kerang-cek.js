let handler = async (m, { conn, usedPrefix, command, text }) => {
    let balasan =`Tingkat ${command.replace('cek', '')} kamu adalah ${Math.floor(Math.random() * 101)}%`
    m.reply(balasan)
}
handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy'].map(v => v + 'cek')
handler.tags = ['kerang']
handler.command = /^(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy)cek/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
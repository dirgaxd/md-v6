let handler = async (m, { conn, usedPrefix }) => {
    let tqto = `*BIG THANKS TO*

• Allah swt.
• My parents
• Nurutomo 
• Istikmal 
• Ariffb 
• Aguz Familia
• Amelia Lisa
• Aniq12
• Ilman 
• Amirul 
• Irwan
• Rasel
• Zeeone
• Kimimaru
• and bot users`
m.reply(`${tqto}`)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler

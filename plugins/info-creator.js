const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
    conn.sendContact(m.chat, `+62 857 5276 5133`, `K1mimaru`, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
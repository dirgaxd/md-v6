let handler = async(m, { conn, usedPrefix, command, text }) => {
   // let nomorterlarang = ['6285752765133', '6285752765133']
    let yws = '```'
    const nomornya = text.replace(/[^0-9]/g, '')
    if (!text) { throw `Masukkan nomor yg mau di serang,contoh: ${usedPrefix + command} 628xxxx`
        } else if (nomornya.includes('6283821123163')) {
        throw `ITU NOMOR OWNER BANH😅`
    } else {
    let judul = `Pilih Durasi Penyerangan`.trim()
      const sections = [
      {
        title: 'List Durasi Santed',
        rows: [
          { title: 'Santed Selama 1 menit', rowId: `${usedPrefix}santed1menit ${nomornya}` },
          { title: 'Santed Selama 10 menit', rowId: `${usedPrefix}santed10menit ${nomornya}` },
          { title: 'Santed Selama 30 menit', rowId: `${usedPrefix}santed30menit ${nomornya}` },
          { title: 'Santed Selama 1 jam', rowId: `${usedPrefix}santed1jam ${nomornya}` },
          { title: 'Santed Selama 5 jam', rowId: `${usedPrefix}santed5jam ${nomornya}` },
          { title: 'Santed Selama 10 jam', rowId: `${usedPrefix}santed10jam ${nomornya}` },
          { title: 'Santed Selama 1 hari', rowId: `${usedPrefix}santed1hari ${nomornya}` }
        ]
      }
    ]
    const listMessage = {
      text: judul,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: '',
      buttonText: "Klik Disini",
      sections
    }
    conn.sendMessage(m.chat, listMessage, { quoted: m })
    }
}
handler.premium = true
handler.tags = ['premium']
handler.help = ['atk', 'santed', 'serang']
handler.command = /^(atk|santed|serang)$/i

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
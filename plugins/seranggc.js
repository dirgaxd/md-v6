let handler = async(m, { conn, usedPrefix, command, text }) => {
    let yws = '```'
    if (!text) { throw `Masukkan Id grup yg mau di serang & Pastikan bot ada di dalam grup tersebut\n\nContoh: ${usedPrefix + command} 6281211233903-1634615611@g.us`
    } else {
    let judul = `Pilih Durasi Penyerangan`.trim()
      const sections = [
      {
        title: 'List Durasi Santedgc',
        rows: [
          { title: 'Santedgc Selama 1 menit', rowId: `${usedPrefix}santedgc1menit ${text}` },
          { title: 'Santedgc Selama 10 menit', rowId: `${usedPrefix}santedgc10menit ${text}` },
          { title: 'Santedgc Selama 30 menit', rowId: `${usedPrefix}santedgc30menit ${text}` },
          { title: 'Santedgc Selama 1 jam', rowId: `${usedPrefix}santedgc1jam ${text}` },
          { title: 'Santedgc Selama 5 jam', rowId: `${usedPrefix}santedgc5jam ${text}` },
          { title: 'Santedgc Selama 10 jam', rowId: `${usedPrefix}santedgc10jam ${text}` },
          { title: 'Santedgc Selama 1 hari', rowId: `${usedPrefix}santedgc1hari ${text}` }
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
handler.help = ['atkgc', 'santedgc', 'seranggc']
handler.command = /^(atkgc|santedgc|seranggc)$/i

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let handler = async(m, { text }) => {
    if (!text) throw `Pertanyaannya apa?`
    let nomorRandom = `${Math.floor(Math.random() * 100)}`;
    let arrayWaktu = ["detik","menit","jam","hari","minggu","bulan","tahun","windu","lustrum","dekade","abad","milenium"];
    let waktuRandom = arrayWaktu[Math.floor(Math.random() * arrayWaktu.length)];
    let balasan = `${nomorRandom} ${waktuRandom} lagi`
    m.reply(balasan)
}
handler.help = ['kapankah']
handler.tags = ['kerang']
handler.command = /^kapan(kah)?$/i

module.exports = handler
let handler = async(m, { conn, usedPrefix, command }) => {
    let ytta = await conn.resize('https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=800&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23ffffff&fillColor2Color=%23ffffff&fillColor3Color=%23ffffff&fillColor4Color=%23ffffff&fillColor5Color=%23ffffff&fillColor6Color=%23ffffff&fillColor7Color=%23ffffff&fillColor8Color=%23ffffff&fillColor9Color=%23ffffff&fillColor10Color=%23ffffff&fillOutlineColor=%23ffffff&fillOutline2Color=%23ffffff&backgroundColor=%23101820&text=yang+tawu+tawu+aja', 299, 299)
    conn.send5TemplateButtonLoc(m.chat, ytta, `Yang tuwa tuwa aja 😅`, wm, `Coba pencet bang 🤓`, "https://www.whatsapp.com/otp/copy/rill+crash+browh", `Awokawok 😅`, "https://www.whatsapp.com/otp/copy/rill+crash+browh", null, null, null, null, null, null, m)
}

handler.tags = ['premium']
handler.premium = true
handler.help = ['bugytta']
handler.command = /^(bugytta)$/i

module.exports = handler
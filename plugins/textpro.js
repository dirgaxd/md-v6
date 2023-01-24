const fetch = require('node-fetch')
let axios = require('axios')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text) throw `Masukkan teks,contoh ${usedPrefix + command} Maru`
    m.reply(wait)
    let res = await fetchJson(`https://doubtful-parka-clam.cyclic.app/api/textpro/${command}?apikey=k1mimaru&text=${text}`)
    pepek = await getBuffer(res.url)
    conn.sendFile(m.chat, pepek, '', ``, m)
  // conn.sendMedia(m.chat, res, m)
}
handler.help = ["1917style", "artistictypography", "arcanetvseries", "artpapercut", "advancedglow", "americanflag3d", "abstragold", "blackpinklogo", "businesssign", "batmanlogo", "bluegem", "blackmetal", "blueglitter", "bronzeglitter", "bluemetal", "bluejewelry", "biscuitstyle", "bagelstyle", "box3dstyle", "bokehstyle", "breadeffect", "breakwall", "blueglass", "bluefoilballoon", "bluesparkling", "bloodfrostedglass", "blackpinklogo2", "blackwhitebear", "brokenglass", "berryeffect", "bluecircuit", "carvedstone", "christmastree", "christmascandy", "christmas3d", "carboneffect", "cyanjewelry", "chrome3d", "christmasgift", "chocolatecake", "cyansparkling", "captainamerica", "cyanglass", "cyanfoilballoon", "cloudeffect", "christmasholiday", "cloudonsky", "decorativeglass", "dropwater", "denimstyle", "decorategreen", "decorativepurple", "deepseametal", "deluxesilver", "deluxegold", "embossedcracked", "elegantwhitegold", "erodedmetal", "fireworksparkle", "fruitjuice", "futuristicneon", "fabricstyle", "goldsparkling", "goldglitter3d", "gradientneonlight", "golden3d", "giraffetext3d", "glowingneonlight", "goldenancient", "greenglitter", "goldglitter", "glowingmetal3d", "greenjewelry", "greenneon", "greensparkling", "greenglass", "goldfoilballoon", "greenfoilballoon", "glossybluemetal", "glossycarbon", "gluerealistic3d", "gradient3d", "glossymetal3d", "gradient3d", "greenhorror", "horrorgift", "holographic3d", "happynewyear", "hallowenfire", "hallowenskeleton", "horrorblood", "honeystyle", "hotmetal", "hexagolden", "impressiveglitch", "icecold", "koifish", "luxurygold3d", "logojoker", "lavastyle", "luxurymetallic3d", "lightglowsliced", "leddisplayscreen", "metalrainbow", "marblestyle", "marbleslabs", "matrixstyle", "minion3d", "metalpurpledual", "metaldarkgold", "magmahot", "multicolorpapercut", "metalliceffect", "neonstyle", "neonlight3d", "neondevilwings", "neonlightgalaxy", "neonlight", "neonstyle2", "naturalleaves", "neonlightblackpink", "neonlightglitch", "neonlightbrickwall", "orangejuice3d", "orangeglass", "orangejewelry", "pottery3d", "pinkcandy", "pinkglitter", "purpleglitter", "purplejewelry", "purplegem", "plasticbagdrug", "purpleshiny", "pinksparkling", "purpleglass", "purplesparkling", "purpleglass2", "peridotstone", "purplefoilballoon", "pinkfoilballoon", "rustedmetal", "realisticgolden", "rustymetal", "redsparkling", "redjewelry", "roadwarning", "rockstyle", "redfoilballoon", "rainbowcallighraphy", "redglass", "robotr2d2", "rainbowequalizer", "summerwpalm", "sparklingdiamonds", "summerneonlight", "stone3d", "styleglass3d", "erodedmetal", "silverglitter", "silverjewelry", "shinymetal", "scifistyle", "steelstyle", "sandsummer", "sandengraved", "sandwriting", "summerysand", "skeleteton", "sketcheffect", "spaceeffect", "sciencefiction", "sparkleschristmas", "scifieffect", "snowwinter", "stonecracked", "strawberry", "thunder", "thunderstyle", "toxiceffect", "transformer", "uderwater", "ultragloss", "wonderfulgraffiti", "woodstyle", "watercolor", "waterpipe", "wickerstyle", "xmascards3d", "yellowglass", "yellowjewelry"]
handler.tags = ['textpro']
handler.command = /^(1917style|artistictypography|arcanetvseries|artpapercut|advancedglow|americanflag3d|abstragold|blackpinklogo|businesssign|batmanlogo|bluegem|blackmetal|blueglitter|bronzeglitter|bluemetal|bluejewelry|biscuitstyle|bagelstyle|box3dstyle|bokehstyle|breadeffect|breakwall|blueglass|bluefoilballoon|bluesparkling|bloodfrostedglass|blackpinklogo2|blackwhitebear|brokenglass|berryeffect|bluecircuit|carvedstone|christmastree|christmascandy|christmas3d|carboneffect|cyanjewelry|chrome3d|christmasgift|chocolatecake|cyansparkling|captainamerica|cyanglass|cyanfoilballoon|cloudeffect|christmasholiday|cloudonsky|decorativeglass|dropwater|denimstyle|decorategreen|decorativepurple|deepseametal|deluxesilver|deluxegold|embossedcracked|elegantwhitegold|erodedmetal|fireworksparkle|fruitjuice|futuristicneon|fabricstyle|goldsparkling|goldglitter3d|gradientneonlight|golden3d|giraffetext3d|glowingneonlight|goldenancient|greenglitter|goldglitter|glowingmetal3d|greenjewelry|greenneon|greensparkling|greenglass|goldfoilballoon|greenfoilballoon|glossybluemetal|glossycarbon|gluerealistic3d|gradient3d|glossymetal3d|gradient3d|greenhorror|horrorgift|holographic3d|happynewyear|hallowenfire|hallowenskeleton|horrorblood|honeystyle|hotmetal|hexagolden|impressiveglitch|icecold|koifish|luxurygold3d|logojoker|lavastyle|luxurymetallic3d|lightglowsliced|leddisplayscreen|metalrainbow|marblestyle|marbleslabs|matrixstyle|minion3d|metalpurpledual|metaldarkgold|magmahot|multicolorpapercut|metalliceffect|neonstyle|neonlight3d|neondevilwings|neonlightgalaxy|neonlight|neonstyle2|naturalleaves|neonlightblackpink|neonlightglitch|neonlightbrickwall|orangejuice3d|orangeglass|orangejewelry|pottery3d|pinkcandy|pinkglitter|purpleglitter|purplejewelry|purplegem|plasticbagdrug|purpleshiny|pinksparkling|purpleglass|purplesparkling|purpleglass2|peridotstone|purplefoilballoon|pinkfoilballoon|rustedmetal|realisticgolden|rustymetal|redsparkling|redjewelry|roadwarning|rockstyle|redfoilballoon|rainbowcallighraphy|redglass|robotr2d2|rainbowequalizer|summerwpalm|sparklingdiamonds|summerneonlight|stone3d|styleglass3d|erodedmetal|silverglitter|silverjewelry|shinymetal|scifistyle|steelstyle|sandsummer|sandengraved|sandwriting|summerysand|skeleteton|sketcheffect|spaceeffect|sciencefiction|sparkleschristmas|scifieffect|snowwinter|stonecracked|strawberry|thunder|thunderstyle|toxiceffect|transformer|uderwater|ultragloss|wonderfulgraffiti|woodstyle|watercolor|waterpipe|wickerstyle|xmascards3d|yellowglass|yellowjewelry)$/i
handler.limit = true
//Creator : M.Jamil
module.exports = handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
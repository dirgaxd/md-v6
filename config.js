let fs = require('fs')

let flaaa = JSON.parse(fs.readFileSync('./api/fla.json'))
let waifu = JSON.parse(fs.readFileSync('./api/waifu.json'))
let data = JSON.parse(fs.readFileSync('./data.json'))


global.owner = JSON.parse(fs.readFileSync('./settings/owner.json')) // Put your number to folder /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./settings/moderator.json')) // Want some help?

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz',
  males: 'https://malest.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'apikeylu',
  'https://melcanz.com': 'apikeylu',
  'https://api.lolhuman.xyz': 'apikeylu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apikeylu',
  'https://pencarikode.xyz': 'apikeylu',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'apikeylu',
  'https://api.adiofficial.xyz': 'apikey lu'
}

global.wait = '*Sedang Di proses*'
global.eror = '*Maaf fitur sedang error,cobalah lain kali!*'

//========Url Template Buttons=========//
global.dtu = 'ʀᴇsᴛ ᴀᴘɪ'
global.urlnya = "https://api-kimimaru.herokuapp.com/"

//============= callButtons =============//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+6283821123163'

//============= Games ================//
global.benar = '*Benar✅*'
global.salah = '*Salah❌*'
global.dikit = "*dikit lagi, semangat ya :')*"

global.multiplier = 100 // The higher, The harder levelup

// Sticker WM
global.packname = '\t\t「 ScrLxrd-MD 」\n\t\t「 IG: dirgasa.xd 」\n\t\t\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = 'wabot\n6281282778090'

//=========== Requirements ==========//  
global.colong1 = 'Nyolong ah'
global.colong2 = 'XLaw'
global.img = pickRandom(waifu)
global.fla = pickRandom(flaaa)

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
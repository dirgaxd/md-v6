let fetch = require('node-fetch')
let handler = async (m, { text }) => {
    if (!text) throw 'Cari apa?'
    let res = await fetch(global.API('https://api.github.com', '/search/repositories', {
        q: text
    }))
    let json = await res.json()
    if (res.status !== 200) throw json
    let str = json.items.map((repo, index) => {
        return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
• ${repo.html_url}
• Dibuat: *${formatDate(repo.created_at)}*
• Terakhir update: *${formatDate(repo.updated_at)}*
• Di lihat: ${repo.watchers}
• Fork: ${repo.forks} 
• Bintang: ${repo.stargazers_count}
• Issue: ${repo.open_issues}
${repo.description ? `• Deskripsi:\n${repo.description}` : ''}
• Clone: \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
    }).join('\n\n')
   m.reply(str)
}
handler.help = ['githubsearch']
handler.tags = ['downloader']
handler.limit = true
handler.command = /^g(ithub|h)search$/i
handler.exp = 3
module.exports = handler

function formatDate(n, locale = 'id') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
  }
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const githubData = {
  "login": "Tim-arp",
  "id": 134371135,
  "node_id": "U_kgDOCAJXPw",
  "avatar_url": "https://avatars.githubusercontent.com/u/134371135?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Tim-arp",
  "html_url": "https://github.com/Tim-arp",
  "followers_url": "https://api.github.com/users/Tim-arp/followers",
  "following_url": "https://api.github.com/users/Tim-arp/following{/other_user}",
  "gists_url": "https://api.github.com/users/Tim-arp/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Tim-arp/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Tim-arp/subscriptions",
  "organizations_url": "https://api.github.com/users/Tim-arp/orgs",
  "repos_url": "https://api.github.com/users/Tim-arp/repos",
  "events_url": "https://api.github.com/users/Tim-arp/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Tim-arp/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Pramit Regmi",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 2,
  "following": 2,
  "created_at": "2023-05-23T07:45:45Z",
  "updated_at": "2026-04-03T03:40:27Z"
}

app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) =>{
    res.send('Please login')
})

app.get('/intro', (req,res)=>{
    res.send('<h1>Hello its me again</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

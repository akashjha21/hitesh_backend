require('dotenv').config()
const express = require('express')

const app = express()
// const port = 4000

const gitHubData = {
"login": "akashjha21",
"id": 103611908,
"node_id": "U_kgDOBiz-BA",
"avatar_url": "https://avatars.githubusercontent.com/u/103611908?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/akashjha21",
"html_url": "https://github.com/akashjha21",
"followers_url": "https://api.github.com/users/akashjha21/followers",
"following_url": "https://api.github.com/users/akashjha21/following{/other_user}",
"gists_url": "https://api.github.com/users/akashjha21/gists{/gist_id}",
"starred_url": "https://api.github.com/users/akashjha21/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/akashjha21/subscriptions",
"organizations_url": "https://api.github.com/users/akashjha21/orgs",
"repos_url": "https://api.github.com/users/akashjha21/repos",
"events_url": "https://api.github.com/users/akashjha21/events{/privacy}",
"received_events_url": "https://api.github.com/users/akashjha21/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": "Akash Jha",
"company": null,
"blog": "",
"location": "Haldia, West Bengal",
"email": null,
"hireable": null,
"bio": "I am a 3rd-year Electronics and Communication Engineering student.",
"twitter_username": "jakash_25",
"public_repos": 35,
"public_gists": 0,
"followers": 2,
"following": 1,
"created_at": "2022-04-13T23:32:32Z",
"updated_at": "2025-06-18T05:18:09Z"
}

app.get('/', (req, res) => {
    res.send("hello World")
})


app.get('/akash', (req, res) => {
    res.send("akashjha21")
})

app.get('/login', (req, res) => {
    res.send("<h1>This is a login Page</h1>")
})

app.get('/github', (req, res) => {
    res.json(gitHubData);
} )
app.listen(process.env.PORT, () => {
    console.log(`Example of using Express to learn backend in port: ${process.env.PORT}`)
})
const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json')
// console.log(redditData); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit]
    // console.log(data)
    if(data) {
        res.render('subreddit', { ...data })
    } else {
        res.render('notfound', { subreddit })
    }
})

app.get('*', (req, res) => {
    res.send("<h1>I don't know that path</h1>")
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})
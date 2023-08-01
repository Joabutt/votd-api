const express = require("express")
const cheerio = require("cheerio")
const axios = require("axios")
const app = express()

app.listen("3000", () => {
    console.log("Jesus loves you")
})


app.get("/", (req, res) => {
    axios.get('https://www.bible.com/verse-of-the-day')
    .then(async response => {
      const $ = cheerio.load(response.data);
      const imageUrl = $('meta[property="og:image"]').attr('content');
      const votd = $('meta[property="og:description"]').attr('content')
      res.send({
        votd: votd,
        imageUrl: imageUrl
      })
    })
    .catch(error => {
      console.log(error);
    });
})

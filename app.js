if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const fetch = require("node-fetch")
const port = process.env.PORT
app.use(express.static('public'))

app.get("/dinoname", async (req, res) => {

  const fetchAPI = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": process.env.RAPID_API_KEY,
      "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
    }
  })

  const fetchImage = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": process.env.RAPID_API_KEY,
      "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
    }
  })

  const dinoImages = await fetchImage.json()
  const index = Math.floor(Math.random() * 20)

  const dinoImage = dinoImages.value[index].contentUrl

  const dinoname = await fetchAPI.json()

  const returnJson = {
    image: dinoImage,
    name: dinoname
  }
  res.status(200).json(returnJson)
})

app.listen(port, () => {
  console.log("listening")
})


const express = require('express')
const app = express()
const port = 3000

app.get('/testaja', (req, res) => {
  res.send('Test aja kok pake method get')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
  })

app.listen(port, () => {
  console.log(`App dijalankan di port ${port}`)
})
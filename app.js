const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/loaderio-1afbc15d8a2736e3bb43142adbc5f75a', (req, res) => {
  res.send('loaderio-1afbc15d8a2736e3bb43142adbc5f75a')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
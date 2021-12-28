const express = require('express')
const app = express()
const port = 3000
let a = 'cuoi'

app.get('/', (req, res) => {
  res.send('Hello World!')
})
console.log('con ga be be')
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
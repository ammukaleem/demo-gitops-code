const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.send('Congrats kaleem12 CICD Success!!!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

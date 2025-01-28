const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Hi kaleem welcome to GitOps.!!!')
=======
  res.send('Congrats HAFSA CICD Success!!!')
>>>>>>> df40dd62b139f96883782cdafaa7c828e1dfce7f
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

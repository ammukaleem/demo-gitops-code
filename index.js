const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
<<<<<<< HEAD
res.send('Hi Sowdager  welcome to GitOps Argocd!!!')
=======
  res.send('Congrats kaleem CICD Success!!!')
>>>>>>> de0f2cf (kaleem)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

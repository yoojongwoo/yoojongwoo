const express = require('express')
const app = express()
const PORT = 8001
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.get('/resume/', (req, res) => {
    res.render('resume')
  })

app.get('/', (req, res) => {
  res.render('index')
})


app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})
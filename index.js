const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

console.log('Starting Canvas server');

app.use(cors())

app.use(express.json())

const PORT = process.env.PORT || 5001


app.use('/api/grid', require('./routes/api/grid'))

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true })
  .then(()=>console.log('Mongo connected'))
  .catch(err=>console.log(err))

var server = app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express()
const http = require('http').Server(app);
var port = process.env.PORT
const PORT = port || 5000
const MongoUrl = "mongodb+srv://istomshop:eozJZF8GHommA202@istomshop.vjpsnll.mongodb.net/?retryWrites=true&w=majority"



app.use(cors());
app.use(express.json({ extended: true }))


// Localhost
// app.use('/api', require('../server/routes/cardRouter'))

// DEPLOY //
app.use('/', require('../server/routes/cardRouter'))

async function start() {
  try {
    await mongoose.connect(MongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    http.listen(PORT, () => console.log(`app started, ${PORT}`))

  } catch (e) {
    console.log('error', e.message);
    process.exit(1)
  }
}

start()
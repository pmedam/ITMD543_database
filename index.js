const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require('path');
const hrdetails = require('./models/hrdetails')


require('dotenv').config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lqwl0ml.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`

const app = express()
app.use(express.json())
app.use(cors())
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3001

app.get('/', async (req, res) => {
  const hr = await hrdetails.find({})
  res.json(hr);
});

app.post('/', async (req, res) => {
  const hr = await hrdetails.create(req.body)
  res.json(hr);
})

mongoose.connect(uri)
.then(() => {
  app.listen(process.env.PORT || PORT, () => {
    console.log("Server started")
    console.log(`Server located at http://localhost:${PORT}`)
  })
})
.catch(e => console.log(e))
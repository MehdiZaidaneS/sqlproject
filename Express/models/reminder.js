require("dotenv").config()
const mongoose = require('mongoose')

const url = process.env.DATABASE_URL

mongoose.connect(url)

const reminderSchema = new mongoose.Schema({
    name: String,
    timestamp: String,
  })
  
const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder
require("dotenv").config()
const mongoose = require('mongoose')

// Replace with the URL of your own database. Do not store the password on GitLab!
const url = process.env.DATABASE_URL

mongoose.connect(url)

/* const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
}) */

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean
  })
  
const Note = mongoose.model('Note', noteSchema);

const note = new Note({
  content: 'HTML on helppoa',
  date: new Date(),
  important: true
})

 note
  .save()
  .then(response => {
    // console.log('note saved!')
    mongoose.connection.close()
  }) 

  Note
  .find({})
  .then(result => {
    result.forEach(note => {
      // console.log(note)
    })
    mongoose.connection.close()
  })


const test = process.argv
const reminderName = test[2]
const timestamp = test[3]

const note2 = new Note({
  content: reminderName,
  date: timestamp,
  important: true
})
console.log(`adding person Reminder ${reminderName} at ${timestamp} to the reminder database`)

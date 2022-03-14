const mongoose = require('mongoose')

// Replace with the URL of your own database. Do not store the password on GitLab!
const url = "mongodb+srv://fullstack:mehdizaidane1@reactmongo.hpdvp.mongodb.net/fullstack-reminders?retryWrites=true&w=majority"

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

/* note
  .save()
  .then(response => {
    console.log('note saved!')
    mongoose.connection.close()
  }) */

  Note
  .find({})
  .then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })

require("dotenv").config()
const mongoose = require('mongoose')

// Replace with the URL of your own database. Do not store the password on GitLab!
const url = process.env.DATABASE_URL

mongoose.connect(url)

const reminderSchema = new mongoose.Schema({
    name: String,
    timestamp: String,
  })
  
const Reminder = mongoose.model('Reminder', reminderSchema);

const test = process.argv
const reminderName = test[2]
const timestamp = test[3]

const reminder = new Reminder({
  name: reminderName,
  timestamp: timestamp,
})


if(test.length > 2){
  reminder
  .save()
  .then(response => {
    console.log(`adding person Reminder ${reminderName} at ${timestamp} to the reminder database`)
    mongoose.connection.close()
  }) 
} else {
  Reminder
  .find({})
  .then(result => {
    console.log("Reminders:")
    result.forEach(reminder => {
      console.log(reminder.name +","+reminder.timestamp)
      mongoose.connection.close()
    })
  })
}



 


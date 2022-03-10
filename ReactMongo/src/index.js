import React from 'react'
import ReactDOM from 'react-dom'
import Phonebook from "./Components/Phonebook"
import FeedBackTwo from './Components/FeedbackTwo'
import Reminder from './Components/Reminder'


const App = () => {
  
  const phonebook = {
    name: 'Superadvanced phonebook app',
    contacts: [
      {
        name: 'John Doe',
        phonenumber: '358401234567',
        id: 1
      },
      {
        name: 'Jane Doe',
        phonenumber: '44551234567',
        id: 2
      },
      {
        name: 'Foo bar',
        phonenumber: '000',
        id: 3
      }
    ]
  }


  return (
    <div>
      <Phonebook phonebook={phonebook}/>
      <FeedBackTwo />
      <Reminder />
      
 
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
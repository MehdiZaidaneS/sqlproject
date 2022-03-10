const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const cors = require('cors')

app.use(cors())



let reminders = [
      {
        name: "Buy some eggs",
        timestamp: "2021-11-10T13:00:00.141Z",
        id: 1
      },
      {
        name: "Make an omelette",
        timestamp: "2021-11-11T08:00:00.141Z",
        id: 2
      },
      {
        name: "Wash dishes",
        timestamp: "2021-11-11T09:00:00.000Z",
        id: 3
      },
      {
        name: "Buy more eggs",
        timestamp: "2021-11-11T13:00:00.000Z",
        id: 4
      }
    ]
  
  
    app.get('/', (req, res) => {
      res.send('<h1>Hello World!</h1>')
      
    })
    
    app.get('/api/reminders', (req, res) => {
      res.json(reminders)
    })
    
    app.get('/api/reminders/:id', (request, response) => {
      const id = Number(request.params.id)
      const reminder = reminders.find(reminder => reminder.id === id )
      if ( reminder ) {
        response.json(reminder)
      } else {
        response.status(404).end()
      }
    })

    app.delete('/api/reminders/:id', (request, response) => {
      const id = Number(request.params.id)
      reminders = reminders.filter(reminder => reminder.id !== id)
    
      response.status(204).end()
    })
    

    
    const generateId = () => {
      const maxId = reminders.length > 0 ? Math.random() * ((reminders.length+1) - reminders.length) + reminders.length : 1
      return Math.round(maxId * 1000000)
    }
    
    app.post('/api/reminders', (request, response) => {
      const body = request.body
    
      if (body.name === undefined) {
        return response.status(400).json({error: 'content missing'})
      }else if (body.timestamp === undefined) {
        return response.status(400).json({error: 'content missing'})
      }

      reminders.forEach(reminder => {
        if(reminder.name === body.name){
          return response.status(400).json({ error: 'name must be unique' })
        }
      })
    
      const reminder = {
        name: body.name,
        timestamp: body.timestamp,
        id: generateId()
      }
    
      reminders = reminders.concat(reminder)
      
      response.json(reminder)
    })
    


    const PORT = 3001
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
    

    
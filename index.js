const express = require('express')

const app = express()

const port = 5432

function onListen () {
  console.log(`Server listening on ${port}`)
}

const path = '/test/:person/greet/:greeting'
const handler = (request, response) => {
  console
    .log('request.params! test:', request.params)

  const message = `${request.params.greeting} ${request.params.person}`

  response.send(message)
}

app.get(
  path,
  handler
)

app.listen(port, onListen)

// app.listen(
  // port,
  // () => console.log(`Listening on ${port}`)
// )
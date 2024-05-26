const { default: axios } = require('axios')
const express = require('express')
const qs = require('qs')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.post('/generate-id-token', async (request, response) => {
  const { code } = request.body

  const idTokenGenerationRequestBody = {
    code,
    client_id:
      '464346326970-77pg1290d3dbsrt050jkmb627crckh2e.apps.googleusercontent.com',
    client_secret: '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',
    redirect_uri: 'http://localhost:3000',
    grant_type: 'authorization_code',
  }

  const idTokenGenerationResponse = await axios.post(
    'https://oauth2.googleapis.com/token',
    qs.stringify(idTokenGenerationRequestBody),
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  )

  response.send(idTokenGenerationResponse.data)
})

function ensureRequestAuthorized(request, response, next) {
  
  next();
}

app.listen(5000, () => {
  console.log('listening on port 5000...')
})

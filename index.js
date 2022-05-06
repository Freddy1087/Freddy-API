const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()

app.use(bodyParser.json())

app.post('/', async function (req, res) {
    
    let message
    const params = req.body

    if (params.email == 'freddy@gmail.com') {

        const response = await axios.get('https://catfact.ninja/fact')
        message = response.data.fact

    } else if (params.email == 'elias@gmail.com') {
        message = 'What up nerd?'
    } else {
        message = 'WHO TF'
    }

    const response = {
        message 
    }

    res.json(response)
})

function logStart () {
    console.log('The server is now online and ready!')
}

app.listen(3000, logStart)

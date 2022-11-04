const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

function delay(duration){
    const startTime = Date.now()

    while(Date.now() - startTime < duration){}
}

app.get('/', (req, res) => {
    res.send(`Performance example: ${process.pid}`)
})

app.get('/timer', (req, res) => {
    delay(2000)
    res.send(`Updated: ${process.pid}`)
})

console.log('Worker has been started')
app.listen(PORT, () => console.log('Listening on port', PORT))


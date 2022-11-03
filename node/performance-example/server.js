const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

function delay(duration){
    const startTime = Date.now()

    while(Date.now() - startTime < duration){}
}

app.get('/', (req, res) => {
    res.send('Performance example')
})

app.get('/timer', (req, res) => {
    delay(9000)
    res.send('hi')
})

app.listen(PORT, () => console.log('Listening on port', PORT))
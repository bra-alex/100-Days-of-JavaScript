const http = require('http')
const { habitablePlanets } = require('./planets')

const PORT = 3000
const posts = [
    {
        title: 'Watch Me',
        body: 'Waaaatch me! Waaaaatch me! I got it! I got it!'
    }
]
const server = http.createServer((req, res) => {
    //Static
    /*
    if(req.url === '/planets/json'){
        res.writeHead(200, {
            'Content-Type': 'application/json' 
        })
    
        res.end(JSON.stringify(habitablePlanets))

    } else if (req.url === '/planets/names'){
        res.setHeader('Content-Type', 'text/plain')
        res.write(`${habitablePlanets.map(planet => planet['kepler_name']).join('\n')}`)
        res.end()
    } else {
        res.statusCode = 404
        res.end()
    }
    */
    
    //Dynamic (not recommended)
    const items = req.url.split('/')
    if(req.method === 'POST' && items[1] === 'posts'){
        req.on('data', (data) => {
            const post = data.toString()
            console.log('Posted:', post)
            posts.push(JSON.parse(post)) 
        })
        req.pipe(res)
    }else if(req.method === 'GET'){
        if(items[1] === 'posts'){
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(posts))
            res.end()
        }

        if(items[1] === 'planets'){
            if(items[2] === 'json'){
                res.writeHead(200, {
                    'Content-Type': 'application/json' 
                })
    
                if(items.length === 4){
                    let index = +items[3]
                    res.end(JSON.stringify(habitablePlanets[index]))
                } else {
                    res.end(JSON.stringify(habitablePlanets))
                }
            }
            
            if(items[2] === 'names'){
                res.setHeader('Content-Type', 'text/plain')
                res.write(`${habitablePlanets.map(planet => planet['kepler_name']).join('\n')}`)
                res.end()
            } 
        } 
    } else {
        res.statusCode = 404
        res.end()
    }
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
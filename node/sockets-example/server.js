const http = require('http')
const io = require('socket.io')

const apiServer = require('./api')
const sockets = require('./sockets')

const PORT = 3000

const httpServer = http.createServer(apiServer)
const socketServer = io(httpServer)

httpServer.listen(PORT, () => console.log('listening on port', PORT))
sockets.connectSocket(socketServer)
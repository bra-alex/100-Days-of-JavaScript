let io;

module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer, {
            cors: 'localhost:3000'
        })
        return io
    },
    getIO: () => {
        if (!io) {
            throw new Error('Socket not initialised')
        }

        return io
    }
}
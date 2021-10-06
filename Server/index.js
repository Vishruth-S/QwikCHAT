const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')

const { addUser, removeUser, getUser, getUsers } = require('./users')

const PORT = process.env.PORT || 5000

const router = require('./router')

const app = express()
const server = http.createServer(app)
const io = socketio(server, { wsEngine: 'ws' })

io.on('connection', (socket) => {

    socket.on('join', ({ name, room }, callback) => {
        const user = addUser({ id: socket.id, name: name, room: room });
        if (user.error) return callback(user.error)
        socket.join(user.room)

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room` })
        socket.broadcast.to(room).emit('message', { user: 'admin', text: `${user.name} has joined  ` })

        const users = getUsers()
        const usersInRoom = getUsersInRoom(users, user.room)

        io.to(user.room).emit('roomData', { room: user.room, users: usersInRoom })
        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        let user = getUser(socket.id)

        io.to(user.room).emit('message', { user: user.name, text: message })

        callback();
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} left` })
        }
    })
})

app.use(router)
app.use(cors())

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

function getUsersInRoom(users, room) {
    return users.filter(user => user.room === room)
}
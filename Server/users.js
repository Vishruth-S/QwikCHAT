const users = [];

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase()

    const existingUser = users.find((user) => {
        return user.room === room && user.name === name
    })
    // console.log(users)
    if (existingUser) {
        // console.log("err")
        return { error: 'Username is taken' }
    }

    let user = { id, name, room }
    users.push(user)
    return user;
}

const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1)
        return users.splice(index, 1)[0]
}

const getUser = (id) => users.find(user => user.id === id)

const getUsers = () => { return [...users] }


module.exports = { addUser, removeUser, getUser, getUsers }
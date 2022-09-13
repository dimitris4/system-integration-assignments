let users = [
    { id: 1, name: 'Alpha', room: 'SW2022', registered: undefined, socketId: undefined },
    { id: 2, name: 'Beta', room: 'SW2022', registered: undefined, socketId: undefined },
    { id: 3, name: 'Gamma', room: 'SW2022', registered: undefined, socketId: undefined },
    { id: 4, name: 'Delta', room: 'SW2022', registered: undefined, socketId: undefined },
];

export const addUser = (name, room, socketId) => {
    const user = users.find((user) => {
        return user.room == room && user.name == name
    });

    if (!user) {
        return { error: 'This name does not exist in the database :(' };
    }

    if (!user.registered) {
        user.registered = 1;
    }

    user.socketId = socketId;

    return { user };
}

export const removeUser = (socketId) => {
    return users.find(user => {
        return user.socketId === socketId
      })
}

export const markUserAsDisconnected = (socketId) => {
    users.map((user) => {
        if (user.socketId === socketId) {
            user.socketId = undefined;
        }
    })
}
// export const getUser = (id) => users
//     .find((user) => user.id === id);

export const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room);
}


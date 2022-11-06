const express = require ('express')

const {httpGetAllFriends, httpGetFriend, httpAddFriend} = require ('../routes/friends.controller')

const friendsRouter = express.Router()

friendsRouter.get('/', httpGetAllFriends)
friendsRouter.get('/:id', httpGetFriend)
friendsRouter.post('/', httpAddFriend)

module.exports = friendsRouter

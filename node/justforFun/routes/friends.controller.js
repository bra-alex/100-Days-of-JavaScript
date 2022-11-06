const { getAllFriends } = require('../model/friends.model')

function httpGetAllFriends(req, res){
    return res.status(200).json(getAllFriends())
}

function httpGetFriend(req, res){
    const id = +req.params.id
    const friendDetails = getAllFriends()
    const friend = friendDetails[id]

    if(!friend){
        return res.status(400).json({
            error: "Could not find member"
        })
    }

    return res.status(200).json(friend)
}

function httpAddFriend(req, res){
    if(!req.body.name || !req.body.age || !req.body.title){
        return res.status(400).json({
            error: "Missing data"
        })
    }

    getAllFriends().push(req.body)

    return res.status(201).json(req.body)

}

module.exports = {
    httpGetAllFriends,
    httpGetFriend,
    httpAddFriend
}
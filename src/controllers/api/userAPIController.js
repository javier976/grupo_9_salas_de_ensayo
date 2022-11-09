const db = require("../../database/models")
let Users = db.Usuario;

const userApiController = {
    all: (req, res) => {
        Users.findAll()
            .then(users => {
                res.json({
                    meta: {
                        status: 200,
                        total: users.length,
                        url: req.url
                    },
                    data: users
                });
            })
    },
}

module.exports = userApiController;
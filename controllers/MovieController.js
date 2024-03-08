const Movie = require("../models/Movie")

module.exports = {
    async create(req, res) {
        // const filepath = `public/images/${req.file.filename}`
        // req.body.profile = filepath;
        let data = await Movie.create(req.body)


        res.send(data)

    },
    async list(req, res) {
        let data = await Movie.find()
        res.send(data)
        console.log(data);
    },
    async view(req, res) {
        let data = await Movie.findOne({ _id: req.params.id })
        res.send(data)
        console.log(data);
    },
    async delete(req, res) {
        let data = await Movie.deleteOne(
            {
                _id: req.params.id
            },
            req.body
        )
        res.send(data)
    },
    async update(req, res) {
        let data = await Movie.updateOne(
            {
                _id: req.params.id
            },
            req.body
        )
        res.send(data)
    }

}
const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        director: {
            type: String
        },
        producer: {
            type: String
        },
        releaseDate: {
            type: String
        },
        profile: {
            type: String
        }
    }
)

const Movie = mongoose.model("Movie", MovieSchema)
module.exports = Movie

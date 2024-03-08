const MovieController = require("../controllers/MovieController")
const express = require("express")
const { upload } = require("../middlewares/multer")
const route = express.Router();



route.get("/list", MovieController.list)
route.get("/view/:id", MovieController.view)

route.post("/create", upload.single("profile"), MovieController.create)
route.delete("/delete/:id", MovieController.delete)
route.put("/update/:id", MovieController.update)

module.exports = route
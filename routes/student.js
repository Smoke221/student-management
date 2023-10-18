const express = require("express");
const studentRouter = express.Router();
const { createStudent, retrive, update } = require("../controllers/student");


studentRouter.post("/new", createStudent);
studentRouter.get("/all", retrive);
studentRouter.patch("/update",update)

module.exports = { studentRouter };

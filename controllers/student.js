const { stuModel } = require("../models/studentModel");

async function createStudent(req,res){
    try{
        const { name, clas, marks } = req.body;
        const newStu = await new stuModel({name,clas,marks})
        newStu.save()
        res.status(201).json({messsage:"New student created", student:newStu})

    }
    catch(err){
        res.status(500).json({message:"Internal server error"})
    }
}

async function retrive(req,res){
    try{
        const students = await stuModel.find()
        res.status(200).json(students)
    }catch(err){
        res.status(500).json({message:"Internal server error"})
    }
}

async function update(req,res){
    try{
        const {details} = req.body
        const isExisting = await stuModel.findByIdAndUpdate(details)
    }
    catch(err){
        res.status(500).json({message:"Internal server error"})
    }
}

module.exports = {createStudent, retrive, update}
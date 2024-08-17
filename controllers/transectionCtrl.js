const transectionModel = require("../models/transectionModel")

const getAllTransection=async(res,req)=>{
    try {
      const transections= await transectionModel.find({
        userid: req.body.userid
      });
       res.send(200).json(transections);
    } catch (error) {
        res.send(500).json(error);
        
    }
};
const addTransection=async(req,res)=>{
    try {
        // const newTransection = new transectionModel(req.body);
        const newTransection = new transectionModel(req.body);
        await newTransection.save();
        res.status(201).send("Transection Created");
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
}


module.exports= {getAllTransection,addTransection};
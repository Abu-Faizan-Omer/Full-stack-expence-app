

const Expence = require("../models/expence-table")
const path = require('path');

// exports.getHome = (req, res, next) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'html', 'index.html'));
// };


exports.getExpence = async (req, res, next) => {
    try {
        const users = await Expence.findAll(); // Assuming you're using Sequelize
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.postExpence= async(req,res,next) => {
    try{
        const Amount=req.body.Amount
        const Description=req.body.Description
        const Categories=req.body.Categories

        const UserData= await Expence.create({
            Amount:Amount,
            Description:Description,
            Categories:Categories
    })
        console.log("before-- " ,UserData)
        res.status(201).json({UserData})
        console.log("After--  ",UserData)
    }
    catch(err){
        res.status(500).json({ error: err.message }); // Sending error message
    }
    
}

exports.deleteExpence = async (req, res) => {
    try {
      if (!req.params.id) {
        return res.status(400).json({ err: "ID is missing" });
      }
  
      const expenceId = req.params.id;
    
        await Expence.destroy({ where: { id: expenceId } });
        res.status(200)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
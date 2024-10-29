const Sequelize=require("sequelize")
const sequelize=new Sequelize("expence-tracker","root","F1@mysql",{
    dialect:"mysql",
    host:"localhost"
})
module.exports=sequelize
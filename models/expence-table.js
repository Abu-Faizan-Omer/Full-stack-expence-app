const Sequelize=require("sequelize")

const sequelize=require("../util/database")

const Expence=sequelize.define("expence-table",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Amount:  {
        type: Sequelize.DOUBLE,
        allowNull:false, 
    },
    Description:  {
        type: Sequelize.STRING,
        allowNull:false
    },
    Categories: {
        type:Sequelize.STRING,
        allowNull:false,

    }
})
module.exports=Expence
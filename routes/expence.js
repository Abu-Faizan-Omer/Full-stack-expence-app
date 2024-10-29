const express=require("express")
const router=express.Router()

const expencecontroller=require("../controllers/expence")

//router.get('/', expencecontroller.getHome);

router.get("/add-expence",expencecontroller.getExpence)

router.post("/add-expence",expencecontroller.postExpence)

router.delete("/delete-expence/:id",expencecontroller.deleteExpence)

module.exports=router
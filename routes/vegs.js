const express=require("express");
const Veg = require("../models/veg");
const router = express.Router();


router.post('/veg', async (req,res) => {
//     const {image,foodName,price} = req.body
// console.log("new veg",image,foodName,price)
// const newItem = new Veg({image,foodName,price})
//     try{
//         const savedVeg =await newItem.save()
//         res.status(200).json(savedVeg)

//     }catch(err){
//         res.status(400).json(err)
//     }
const newVeg =req.body
console.log("new vegdata",req.body)
try{
    // const  savedVeg = await newVeg.save()
    const savedVeg=  await Veg.insert(newVeg)
    console.log(savedVeg)
    res.status(200).json(savedVeg)

}catch(err){
    res.status(400).json(err)
}
})

// UPDATE

router.put("/veg/:id", async(req,res)=>{

    try{
        const updateVeg= await Veg.findByIdAndUpdate(req.params.id,{ $set : req.body},{new:true})
        res.status(200).json(updateVeg);
    }catch (err){
        res.status(500).json(err);
    }
});

//DELETE

router.delete("/:id", async (req , res)=>{
    try{
        const {id} = req.params.id
        await Veg.findByIdAndDelete(id);
        res.status(200).json("Deleted");
        }catch (err) {
            res.status(400).json(err);
        }
    });





//GET ALL
router.get('/veg',async (req,res)=>{
    try{
        const veg = await Veg.find();
        res.status(200).json(veg);
    }catch(err){
        res.status(400).json(err);
    }
});

// GET

// router.get("veg/:id", async (req , res)=>{
//         try{
//           const veg =  await Veg.findById{
//                 req.params.id
//             };
//             res.status(200).json(veg);
//             }catch (err) {
//                 res.status(400).json(err);
//             }
//         });


module.exports = router;
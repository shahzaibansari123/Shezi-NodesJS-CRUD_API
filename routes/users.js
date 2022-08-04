import express  from "express"

const router=express.Router()


// sb users se hi start horhe
router.get('/', (req, res) => {
    res.send("Hello")
})


export  default router
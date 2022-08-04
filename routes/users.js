import express  from "express"

const router=express.Router()
const users=[
    {
        firstname: "Shahzaib",
        lastname: "Ansari",
        age: 21
    
    },
    {
        firstname: "rushal",
        lastname: "Ansari",
        age: 20
    
    }
]


// sb users se hi start horhe
router.get('/', (req, res) => {
    console.log(users)
    res.send(users)
})


export  default router
import express  from "express"

const router=express.Router()
const users=[
    {
        firstName: "Shahzaib",
        lastName: "Ansari",
        age: 21
    
    },
    {
        firstName: "rushal",
        lastName: "Ansari",
        age: 20
    
    }
]


// sb users se hi start horhe
router.get('/', (req, res) => {
    console.log(users)
    res.send(users)
})

router.post('/', (req, res) => {

    const user= req.body
    users.push(user)
   
    res.send(`user with name ${user.firstName} added to the database`)

})


export  default router
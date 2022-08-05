import express  from "express"
import { v4 as uuidv4 } from 'uuid';


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

const userId=    uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    users.push(user)
   
    res.send(`user with name ${user.firstName} added to the database`)

})


export  default router
const express=require('express')
const app=express()
const PORT=3000

app.use(express.json())

let data=[
    {id:1,email:"sahith@gmail.com",password:"abc123"}
];

app.get('/get',(req,res)=>{
    if(!data){
        return res.status(404).json({message:"data not found"})
    }
    return res.status(200).json({message:"fetched successfully",data})
})

app.post('/post',(req,res)=>{
    const{email,password} = req.body

    if(!email){
        return res.status(400).json({message:"Email cannot be empty"})
    }
    if(!password){
        return res.status(400).json({message:"Password cannot be empty"})
    }
    const newUser={
        id:data.length+1,
        ...req.body
    };

    data.push(newUser);
    return res.status(200).json({message:"User created successfully",newUser})


})


app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`)
})
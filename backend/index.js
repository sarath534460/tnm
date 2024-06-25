let express=require('express')
let cors=require('cors')
const bodyParser = require('body-parser')
let app=express()
app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }))

app.get('/tes/:ig',(req,res)=>{
 console.log(req.params)
  res.json("hellooo ")
  console.log("hjj")
})


app.get('/',(req,res)=>{
 // console.log(req.params)
   res.send("hello vercel")
  // console.log("hjj")
 })

 app.get('/click',(req,res)=>{
  // console.log(req.params)
    res.send("hello vercel")
   // console.log("hjj")
  })
 
app.listen(480,()=>{
    console.log("listening on server 480")
})
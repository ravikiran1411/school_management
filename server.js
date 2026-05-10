
import express from 'express'
import dotenv from 'dotenv'
import db from './config/mysql.js'
import schoolRouter from './routes/schoolRoutes.js'

dotenv.config()

//config
const app = express()

app.use(express.json())

app.use('/api/school',schoolRouter)


app.get('/',(req,res)=>{
    res.send("api running");
})

const port = process.env.PORT || 4000

app.listen(port,()=>{
    console.log("api connected");   
})


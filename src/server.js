const express=require('express');
const mysql=require('mysql')
const bodyParser=require('body-parser')
const cors=require('cors');





const app=express();
app.use(cors());
app.use(bodyParser.json());

const port=3000

const db=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'db12'
}
);

db.connect((err)=>{
    if(err)
    {
        console.error("Error in connecting to database",err);
    }
    else{
        console.log("Successfully connected to db")
    }
})

app.listen(port,()=>{
    console.log("server started on port 3000")
})


//Insert a client
app.post('/InsertClient',(req,res)=>{
    const {name,email,address,password}=req.body;
    sql="INSERT INTO client (name, email, address, password) VALUES (?,?,?,?) ";
    db.query(sql,[name,email,address,password],(err,result)=>{
        if (err)
        {
            console.error("Error in inserting data",err);
            res.status(500).json({message:"Error in inserting data onto client table"+err})
        }
        else
        {
            console.log("insert successful for client "+name)
            res.status(200).json({message:"Insert succesful for client :"+name})
        }
    })
})


//get client

app.get('/getClients',(req,res)=>{
    sql="Select * from client"
    db.query(sql,(err,result)=>{
        if(err){
            console.error("Error in fetching client data",err);
            res.status(500).json({message:"Error in fetching data from client table"+err})
        }
        else{
            console.log("fetch successful from client");
            res.status(200).json(result);
        }
    })
})

//getauth


app.get('/getAuth',(req,res)=>{
    sql="Select * from client"
    db.query(sql,(err,result)=>{
        if(err){
            console.error("Error in fetching client data",err);
            res.status(500).json({message:"Error in fetching data from client table"+err})
        }
        else{
            console.log("fetch successful from client");
            res.status(200).json(result);
        }
    })
})


//get meetings

app.get('/getMeetings',(req,res)=>{
    sql="Select * from meeting"
    db.query(sql,(err,result)=>{
        if(err){
            console.error("Error in fetching meeting data",err);
            res.status(500).json({message:"Error in fetching data from meeting table"+err})
        }
        else{
            console.log("fetch successful from meeting");
            res.status(200).json(result);
        }
    })
})

//getMetingForClient
app.get('/getMeetingsForClient/:client_id',(req,res)=>{
    const client_id=req.params.client_id;
    sql="Select * from meeting where client_id=?"
    db.query(sql,[client_id],(err,result)=>{
        if(err){
            console.error("Error in fetching meeting data",err);
            res.status(500).json({message:"Error in fetching data from meeting table"+err})
        }
        else{
            console.log("fetch successful from meeting for client"+client_id);
            res.status(200).json(result);
                    }
    })
})

//Schedule a meeting for Client

app.post('/scheduleMeeting',(req,res)=>{
    const {client_id,topic,number_of_people,start_time,end_time}=req.body;
    sql="INSERT INTO meeting (client_id, topic, number_of_people, start_time, end_time) VALUES (?,?,?,?,?)"
    db.query(sql,[client_id,topic,number_of_people,start_time,end_time],(err,result)=>{
        if(err){
            console.error("Error in inserting meeting ",err);
            console.log("Error in scheduling meeting for client "+client_id);
            res.status(500).json({message:"Error in scheduling meeting for client "+client_id})
        }
        else{
            console.log("scheduling meeting for client "+client_id +" successful!!");
            res.status(200).json({message:"Meeting scheduled for client"+client_id +"from "+start_time+" to "+end_time});

        }
    })
})
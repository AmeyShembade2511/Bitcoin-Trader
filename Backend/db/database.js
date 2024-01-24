const {Client}=require('pg');

const client= new Client({
    host:"localhost",
    user:"postgres",
    post:5432,
    password:"ameypsql123",
    database:"currency"
});

client.connect()
.then(()=>{
    console.log("Connection successful");
})
.catch((err)=>{
    console.log("Unable to connect",err);
})  

module.exports =  {client};
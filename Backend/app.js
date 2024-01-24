const express = require('express');
const app = express();
const port = 5000;
app.use(express.json());
const { client } = require('./db/database');

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(express.json())
app.get('/', async (req, res) => {
    res.send("sjsjjsjsjsjs");
});

app.post('/fetch-and-insert', async (req, res) => {
    try {
        console.log("hiiiiiiiiiiiiiiiii");
        const {selectedOption1,selectedOption2}=req.body;
        console.log(req.body);
        baseunit=selectedOption2;
        quoteunit=selectedOption1;
        const response = await fetch("https://api.wazirx.com/api/v2/tickers");
        const data = await response.json();
        let name=req.params.data;
        for (const currency in data) {
            if (data.hasOwnProperty(currency)) {
                const obj = data[currency];
                
                const a = await client.query(
                    'INSERT INTO trade (baseunit,quoteunit,last, buy, sell, volume,at) VALUES ($1, $2, $3, $4, $5, $6, $7)',
                    [obj.base_unit,obj.quote_unit ,obj.last, obj.buy, obj.sell, obj.volume, obj.at]
                );
                
            }
        }
        let query="select * from trade where baseunit=$1 AND quoteunit=$2 order by last desc limit 10;";
        let arr=[baseunit,quoteunit];
        const b=await client.query(query,arr);
        // Print the data for testing
        // console.log(data);
        // res.send(data);
        //console.log(body.rows);
        // query="delete from trade;";
        // const c=await client.query(query);
        const r=b.rows;
        const col=['id','baseunit','quoteunit','last','buy','sell','volume','at'];
        const ans={col,r};
        res.send(ans);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
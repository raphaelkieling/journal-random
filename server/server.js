const crawlerController = require('./crawler')();
var cors = require('cors');
const Express = require('express');
const app = Express();

app.use(cors());
app.get('/noticias/:categoria',async (req,res)=>{
    console.log(req.params);
    crawlerController.ultimasNoticias(res,req.params['categoria']);
});



app.listen(3022,()=>{
    console.log('Listening in ')
})
const db = require('../db/index');

//
exports.getNews = (req,res) =>{
    const userinfo = req.body;
    console.log(userinfo);
    const sql = 'select * from news';
    db.query(sql,userinfo.username,(err,results) =>{
        if(err) {
            return res.send(err);
        }
        res.send({
            data:results
        })

    })
}
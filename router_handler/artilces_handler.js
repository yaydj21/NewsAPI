const db = require('../db/index');

exports.getArticles = (req,res) =>{
    const articlesinfo = req.params;
    const sql = 'select * from articles where art_id = ?';
    db.query(sql,articlesinfo.art_id,(err,results) =>{
        if(err){
            return res.send(err);
        }
        res.send({
            message:'ok',
            data:results,
        })
    })
}
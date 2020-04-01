module.exports=((my_data,getting)=>{
    getting.get('/get_data',(req,res)=>{
        my_data.find()
        .then((data)=>{
            res.send(data)
            console.log(data);
        })
        .catch((err)=>{
            res.send(err.message)
            console.log(err.message);
        })
    })
    getting.get('/get_data/:name',(req,res)=>{
        var name=req.params.name
        my_data.find({'name':name})
        .then((data)=>{
            res.send(data)
            console.log(data);
        })
        .catch((err)=>{
            res.send(err.message)
            console.log(err.message);
        })
    })
    getting.get('/get_data/id/:id',(req,res)=>{
        var _id=req.params.id
        my_data.find({'_id':_id})
        .then((data)=>{
            res.send(data)
            console.log(data);
        })
        .catch((err)=>{
            res.send(err.message)
            console.log(err.message);
        })
    })
    
    getting.get('/orderby_ascending',(req,res)=>{
        my_data.find().sort({'age':1})
        .then(data=>{
            res.send(data)  
        })
        .catch(err=>{
            res.send(err.message)
        })
    })

    getting.get('/orderBy_Dscending',(req,res)=>{
        my_data.find().sort({'age':-1})
        .then(data=>{
            res.send(data)  
        })
        .catch(err=>{
            res.send(err.message)
        })
    })
})
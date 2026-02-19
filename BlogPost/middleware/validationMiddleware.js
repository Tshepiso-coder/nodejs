module.exports = (req,res,next)=>{   
console.log("Title: " + req.body.title);  
if(req.files == null || !req.body.title){         
return res.redirect('/posts/new') 
}     
next() 
}
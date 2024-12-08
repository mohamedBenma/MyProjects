const newError=require('http-errors');
const url=require('url')

const notFound=(req,res,next)=>{
    next(newError(404));
};
const handleError=
(err,req,res,next)=>{
    res.locals.message=err.message;
    res.locals.error=req.app.get('env')==='development' ? err : {};

    res.status(err.status || 500);
    //fixe le statut de la réponse
    res.render('error',{error : err,url : req.url})
};
module.exports.notFound=notFound;
module.exports.handleError=handleError;
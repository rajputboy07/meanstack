var express=require('express');
var path=require('path');
var fs=require('fs');

var app=express();

app.use(express.static(path.join(__dirname,'public')));
app.get('/',function(request,response){
    response.sendFile(path.join(__dirname+'/index.html'));
});

var onListen=function(){
    console.log("Web eWeb is listening on port 9999");
};
app.listen(9999,onListen);
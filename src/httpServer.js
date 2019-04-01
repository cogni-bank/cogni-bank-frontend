var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendfile("index.html");
});
app.post('/user',function(req,res){

  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  console.log(req.path);
  res.end("yes");
});

app.post('/emailOrPassword',function(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    console.log(req.path);
    res.end("yes");
  });

  app.post('/challenge',function(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    console.log(req.path);
    res.end("yes");
  });
app.listen(8081,function(){
  console.log("Started on PORT 8081");
})
var restify = require('restify');
var swig  = require('swig');
var assert = require('assert');
var movies ={};
for(var k=0;k<20;k++){
   movies[k]={mid:k};
   movies[k].songs=[];
   for(var j=0;j<5;j++)
   movies[k].songs[j]={sid:j};
}
var client = restify.createJsonClient({
    url: "http://i63.in:8090",
    version:"*"
});
movies = swig.renderFile('./templates/movies.html', {
           movies: movies
});
console.log(movies);
movies = JSON.parse("["+movies+"]");
setTimeout(function(){
client.post('/movies',movies,function(err,req,res,obj){
    assert.ifError(err);
    console.log(obj);
});
},1000);

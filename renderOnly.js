var swig  = require('swig');
var movies ={};
for(var k=0;k<20;k++){
   movies[k]={mid:k};
   movies[k].songs=[];
   for(var j=0;j<5;j++)
   movies[k].songs[j]={sid:j};
}
console.log(movies);
setTimeout(function(){
	console.log(swig.renderFile('./templates/movies.html', {
    	   movies: movies
	}));
},1000);

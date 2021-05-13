var http = require('http');
var fs = require('fs');



var handleFormGet = function(request,response){
    response.writeHead(200 , {"Content-Type": "text/html"});

    fs.readFile("htmlFiles/welcomePage.html" , 'utf8' , function(err,data){
        if(err) {throw err;}
        response.write(data);
        response.end();
    });
}



var server = http.createServer();


server.on("request", function (request, response) {
    if("GET" === request.method){
        handleFormGet(request, response);
    }else{
        response.writeHead(404);
        response.end();
    }
});


server.listen(5500, function(){
    console.log('listening to port 5500...');
});
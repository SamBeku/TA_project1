const http = require("http");

const pageHead = '<!DOCTYPE html><html lang="et"><head><meta charset="utf8"><title>Samuel</title></head><body>';
const pageBody = '<h1>Samuel</h1><p>see leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee/">Tallinna Ülikoolis</a> ja ei sisalda tõsiseltvõetavat sisu</p><hr><img src="corvette.jpg" alt="corvette c5"><p>see on kõige lahedam veebisait maailmas</p><hr></hr>';
const pageFoot = '</body></html>'
http.createServer(function(req, res){
    res.writeHead(200, {"Content-type": "text/html"});
    //res.write("Ongi nii");
    res.write(pageHead);
    res.write(pageBody);
    res.write("<p>Täna on " + ".</p>")
    res.write(pageFoot);
    return res.end();
}).listen(5123);


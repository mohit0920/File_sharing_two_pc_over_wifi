const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + "/public"))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));
const { exec } = require('child_process');

app.get("/", (req,res) => {
	exec(' ifconfig | grep 192 | cut  -d" " -f2 ', (error, ip, stderr) => {
  		if (error) {
    		console.error(`exec error: ${error}`);
    		return;
 	 }
//  	console.log(`stdout: ${ip}`);
//  	console.error(`stderr: ${stderr}`);
	res.send("Connected YOOO!! Hurray "+ip)
	});

})
app.get("/:pagename", (req,res) => {
	res.sendFile(path.join(__dirname +"/"+ req.params.pagename));
})
app.listen(45678, () =>{
	console.log("listening on 45678")
})

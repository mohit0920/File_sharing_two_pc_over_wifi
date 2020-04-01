const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const fs = require('fs')
const directoryPath = path.join(__dirname, 'Share');
var multer  = require('multer')
//var upload = multer({ dest: 'uploads/' })


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })




app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + "/public"))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));
const { exec } = require('child_process');




app.post('/upload', upload.single('uf'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
	//var file = req.file
	res.send("File uploaded. Please reload page to upload another.");
})




app.get("/", (req,res) => {
//	exec(' ifconfig | grep 192 | cut  -d" " -f2 ', (error, ip, stderr) => {
  //		if (error) {
    //		console.error(`exec error: ${error}`);
    	//	return;
 	// }

//  	console.log(`stdout: ${ip}`)
  	// console.error(`stderr: ${stderr}`)
	
	var files_to_share=[]
	fs.readdir(directoryPath, function (err, files) {
   		 //handling error
    		if (err) {
        		return console.log('Unable to scan directory: ' + err);
    		} 
    	//listing all files using forEach
//    	files.forEach(function (file) {
        	// Do whatever you want to do with the file
//        	console.log(file); 
		files_to_share=files
//    		});
			
	//	var data = {ip: ip.substring(0, ip.length-1), files: files_to_share}
		var data = {ip: "ip", files: files_to_share}
	res.render('index', {data: JSON.stringify(data)})
	//res.send("Connected YOOO!! Hurray "+ip+JSON.stringify(files_to_share))
	});
//	})

})
app.get("/:pagename", (req,res) => {
	res.sendFile(path.join(__dirname +"/Share/"+ req.params.pagename));
})
app.listen(45678, () =>{
	console.log("listening on 45678. Open http://localhost:45678 for instructions.")
})

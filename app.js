const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + "/public"))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", (req,res) => {
	res.send("Connected YOOO!! Hurray ")
})
app.get("/:pagename", (req,res) => {
	res.sendFile(path.join(__dirname +"/"+ req.params.pagename));
})
app.listen(45678, () =>{
	console.log("listening on 45678")
})

const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
// Handle production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + "/public"));
    app.get(/.*/);
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on post ${port}`))